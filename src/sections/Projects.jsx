import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectFilters, projects } from '../data/portfolio.config';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';

export default function Projects({ onOpen }) {
  const [filter, setFilter] = useState('all');

  const counts = useMemo(() => {
    const c = { all: projects.length };
    projectFilters.forEach((f) => {
      if (f.id !== 'all') c[f.id] = projects.filter((p) => p.filters.includes(f.id)).length;
    });
    return c;
  }, []);

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.filters.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <div className="absolute left-0 top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-deep/50 blur-[140px]" aria-hidden />
      <SectionHeading
        index="03"
        eyebrow="UI/UX Design Projects & QA Work"
        title="Selected Projects"
        id="projects-title"
        text="Interfaces I have designed and products I have tested. Open any project for the full case study — design files open directly in Figma."
      />

      <Reveal>
        <div
          role="group"
          aria-label="Filter projects"
          className="thin-scroll -mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {projectFilters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                className={`relative isolate flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-5 text-sm transition-colors ${
                  active ? 'border-lime/50 text-ink' : 'border-white/10 text-muted hover:border-white/25 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-lime"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                {f.label}
                <span className={`font-mono text-[10px] ${active ? 'text-ink/70' : 'text-soft'}`}>{counts[f.id]}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} project{visible.length === 1 ? '' : 's'}
      </p>

      <motion.ul layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} index={projects.indexOf(p)} onOpen={onOpen} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
