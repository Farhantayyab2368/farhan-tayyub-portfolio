import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { getAccent } from '../utils/accent';
import ProjectVisual from './ProjectVisual';
import TiltCard from './TiltCard';
import { FigmaIcon } from './BrandIcons';

export default function ProjectCard({ project, onOpen, index }) {
  const a = getAccent(project.accent);
  const hasFigma = project.links?.some((l) => l.url.includes('figma.com'));
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="list-none"
    >
      <TiltCard max={4} className="glass h-full overflow-hidden rounded-3xl transition-colors hover:border-white/20">
        <article className="flex h-full flex-col">
          <div className="relative">
            <ProjectVisual project={project} className="aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute left-4 top-4 flex gap-2">
              <span className={`rounded-full border ${a.border} bg-ink/70 px-3 py-1 font-mono text-[10px] tracking-wider ${a.text} backdrop-blur-md`}>
                {project.category.toUpperCase()}
              </span>
            </div>
            {hasFigma && (
              <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-ink/70 px-2.5 py-1 font-mono text-[10px] text-white/80 backdrop-blur-md">
                <FigmaIcon width={11} height={11} /> Figma
              </span>
            )}
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
              <span className="font-mono text-xs text-soft">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Highlights">
              {(project.screens || project.areas || []).slice(0, 4).map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <button
                type="button"
                onClick={() => onOpen(project.id)}
                data-cursor="OPEN"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${a.text} after:absolute after:inset-0 after:content-['']`}
                aria-label={`Open case study: ${project.title}`}
              >
                View case study
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </button>
            </div>
          </div>
        </article>
      </TiltCard>
    </motion.li>
  );
}
