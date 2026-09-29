import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Bug, ChevronLeft, ChevronRight, ClipboardList, X } from 'lucide-react';
import { projects } from '../data/portfolio.config';
import { getAccent } from '../utils/accent';
import ProjectVisual from './ProjectVisual';
import { FigmaIcon } from './BrandIcons';

function Block({ label, children }) {
  return (
    <div className="border-t border-white/[0.07] pt-6">
      <h3 className="font-mono text-[11px] tracking-[0.22em] text-lime uppercase">{label}</h3>
      <div className="mt-3 text-[15px] leading-relaxed text-white/80">{children}</div>
    </div>
  );
}

function List({ items, marker = '—' }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className="mt-0.5 font-mono text-xs text-soft" aria-hidden>
            {marker}
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectModal({ projectId, onClose, onNavigate }) {
  const reduce = useReducedMotion();
  const index = projects.findIndex((p) => p.id === projectId);
  const project = index >= 0 ? projects[index] : null;
  const dialogRef = useRef(null);
  const scrollRef = useRef(null);
  const lastFocus = useRef(null);

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const isOpen = !!project;

  // body scroll lock + focus restore
  useEffect(() => {
    if (!isOpen) return undefined;
    lastFocus.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
      lastFocus.current?.focus?.({ preventScroll: true });
    };
  }, [isOpen]);

  // keyboard: Esc, arrows, focus trap
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(next.id);
      if (e.key === 'ArrowLeft') onNavigate(prev.id);
      if (e.key === 'Tab' && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll('a[href], button:not([disabled])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose, onNavigate, next, prev]);

  // focus + scroll to top when project changes
  useEffect(() => {
    if (!isOpen) return;
    scrollRef.current?.scrollTo({ top: 0 });
    dialogRef.current?.focus({ preventScroll: true });
  }, [projectId, isOpen]);

  const a = project ? getAccent(project.accent) : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-md" onClick={onClose} aria-hidden />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong relative flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl outline-none sm:rounded-3xl"
          >
            {/* top bar */}
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-3">
              <span className="font-mono text-[11px] tracking-wider text-soft">
                {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} ·{' '}
                {project.kind === 'testing' ? 'QA CASE STUDY' : 'DESIGN CASE STUDY'}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="thin-scroll overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: reduce ? 0 : 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduce ? 0 : -24 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectVisual project={project} className="aspect-[16/10] w-full sm:aspect-[2/1]" />

                  <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_280px]">
                    <div className="space-y-8">
                      <header>
                        <p className={`font-mono text-xs tracking-[0.2em] ${a.text}`}>{project.category.toUpperCase()}</p>
                        <h2 id="modal-title" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                          {project.title}
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted">{project.description}</p>
                      </header>

                      <Block label="Objective">{project.objective}</Block>
                      <Block label="My Role">{project.role}</Block>
                      <Block label="Process">
                        <ol className="space-y-2">
                          {project.process.map((s, i) => (
                            <li key={s} className="flex gap-3">
                              <span className="font-mono text-xs text-lime">{String(i + 1).padStart(2, '0')}</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ol>
                      </Block>
                      <Block label="Design">{project.design}</Block>
                      <Block label="Testing">{project.testing}</Block>
                      <Block label="Issues Found">
                        <List items={project.issues} marker="!" />
                      </Block>
                      <Block label="Improvements">
                        <List items={project.improvements} marker="↑" />
                      </Block>
                      <Block label="Final Result">
                        <p className="text-white">{project.result}</p>
                      </Block>
                    </div>

                    <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
                      {project.kind === 'testing' && (
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                            <ClipboardList size={16} className="text-lime" aria-hidden />
                            <p className="mt-2 font-display text-2xl font-bold">{project.testCases}</p>
                            <p className="text-xs text-muted">Test cases</p>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                            <Bug size={16} className="text-sev-high" aria-hidden />
                            <p className="mt-2 font-display text-2xl font-bold">{project.bugsFound}</p>
                            <p className="text-xs text-muted">Bugs found</p>
                          </div>
                        </div>
                      )}
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                        <p className="font-mono text-[11px] tracking-[0.2em] text-soft uppercase">Tools</p>
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {project.tools.map((t) => (
                            <li key={t} className="chip text-white/80">
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                        <p className="font-mono text-[11px] tracking-[0.2em] text-soft uppercase">
                          {project.kind === 'testing' ? 'Testing areas' : 'Screens'}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {(project.screens || project.areas).map((t) => (
                            <li key={t} className="chip">
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {project.links?.length > 0 && (
                        <div className="grid gap-2">
                          {project.links.map((l) => (
                            <a
                              key={l.url}
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="OPEN"
                              className="btn btn-primary w-full"
                            >
                              {l.url.includes('figma.com') && <FigmaIcon width={14} height={14} />}
                              {l.label} <ArrowUpRight size={15} aria-hidden />
                            </a>
                          ))}
                        </div>
                      )}
                    </aside>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* prev / next */}
            <div className="grid grid-cols-2 border-t border-white/[0.07]">
              <button
                type="button"
                onClick={() => onNavigate(prev.id)}
                className="group flex min-h-16 items-center gap-3 px-5 text-left transition hover:bg-white/[0.04]"
              >
                <ChevronLeft size={18} className="shrink-0 text-muted transition group-hover:-translate-x-0.5 group-hover:text-lime" aria-hidden />
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] tracking-wider text-soft">PREVIOUS PROJECT</span>
                  <span className="block truncate text-sm text-white">{prev.title}</span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate(next.id)}
                className="group flex min-h-16 items-center justify-end gap-3 border-l border-white/[0.07] px-5 text-right transition hover:bg-white/[0.04]"
              >
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] tracking-wider text-soft">NEXT PROJECT</span>
                  <span className="block truncate text-sm text-white">{next.title}</span>
                </span>
                <ChevronRight size={18} className="shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-lime" aria-hidden />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
