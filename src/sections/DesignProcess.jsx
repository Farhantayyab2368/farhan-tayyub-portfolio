import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { designProcess } from '../data/portfolio.config';
import { getIcon } from '../utils/icons';
import { scrollToHash } from '../utils/scroll';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function DesignProcess() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="design-process-title" className="section !pt-8 !pb-6">
      <SectionHeading
        eyebrow="How I design"
        title="Design Process"
        id="design-process-title"
        text="Every design goes through a testing step — the point where my UI/UX work and my QA work meet."
      />

      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {designProcess.map((s, i) => {
          const Icon = getIcon(s.icon);
          return (
            <Reveal as="li" key={s.title} delay={i * 0.07} className="relative">
              <div
                className={`group relative h-full rounded-3xl border p-5 transition-colors ${
                  s.bridge ? 'border-lime/40 bg-lime/[0.05]' : 'glass hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6 ${
                      s.bridge ? 'bg-lime text-ink' : 'bg-violet/15 text-violet'
                    }`}
                  >
                    <Icon size={18} aria-hidden />
                  </span>
                  <span className="font-mono text-[10px] text-soft">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{s.text}</p>
                {s.bridge && (
                  <a
                    href="#testing"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash('#testing');
                    }}
                    className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] tracking-wider text-lime"
                  >
                    LINKS TO QA <ArrowRight size={12} aria-hidden />
                  </a>
                )}
              </div>
              {i < designProcess.length - 1 && (
                <motion.span
                  aria-hidden
                  className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink text-lime lg:grid"
                  animate={reduce ? undefined : { x: [0, 3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
                >
                  <ArrowRight size={12} />
                </motion.span>
              )}
            </Reveal>
          );
        })}
      </ol>

      <Reveal delay={0.2}>
        <div className="mt-6 flex items-center justify-center gap-3 rounded-full border border-dashed border-white/15 px-5 py-3 font-mono text-[11px] tracking-[0.2em] text-muted">
          <RotateCcw size={14} className="text-lime" aria-hidden />
          IMPROVE LOOPS BACK TO RESEARCH — DESIGN → TEST → IMPROVE
        </div>
      </Reveal>
    </section>
  );
}
