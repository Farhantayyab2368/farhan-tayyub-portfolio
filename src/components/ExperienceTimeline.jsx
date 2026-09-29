import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { getIcon } from '../utils/icons';
import Reveal from './Reveal';

export default function ExperienceTimeline({ items }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} className="relative">
      {/* rail */}
      <div className="absolute bottom-0 left-5 top-0 w-px bg-white/10 md:left-1/2" aria-hidden>
        <motion.div
          className="h-full w-full origin-top bg-gradient-to-b from-lime via-violet to-azure"
          style={{ scaleY: reduce ? 1 : scaleY }}
        />
      </div>

      <ol className="space-y-12">
        {items.map((item, i) => {
          const Icon = getIcon(item.icon);
          const right = i % 2 === 1;
          return (
            <li key={item.company} className="relative grid md:grid-cols-2 md:gap-16">
              <span
                className="absolute left-5 top-6 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-2xl border border-lime/40 bg-ink text-lime shadow-[0_0_24px_-6px_rgba(198,255,61,0.6)] md:left-1/2"
                aria-hidden
              >
                <Icon size={17} />
              </span>
              <Reveal className={`pl-14 md:pl-0 ${right ? 'md:col-start-2' : 'md:text-right'}`} y={20}>
                <article className="glass group rounded-3xl p-6 transition-colors hover:border-white/20 sm:p-7">
                  <div className={`flex flex-wrap items-center gap-2 ${right ? '' : 'md:justify-end'}`}>
                    <span className="rounded-full bg-lime/10 px-3 py-1 font-mono text-[10px] tracking-wider text-lime">
                      {item.type.toUpperCase()}
                    </span>
                    {item.period && <span className="font-mono text-[11px] text-soft">{item.period}</span>}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-violet">{item.company}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
                  <ul className={`mt-5 flex flex-wrap gap-1.5 ${right ? '' : 'md:justify-end'}`}>
                    {item.tags.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
