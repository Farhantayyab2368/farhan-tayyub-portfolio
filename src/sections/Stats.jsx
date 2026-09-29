import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { stats } from '../data/portfolio.config';
import Reveal from '../components/Reveal';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return undefined;
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / 1400);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {n}
      <span className="text-lime">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Statistics" className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <dl className="glass grid grid-cols-2 overflow-hidden rounded-3xl md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative flex flex-col-reverse gap-2 p-7 sm:p-9 ${i % 2 === 0 ? 'border-r border-white/[0.06]' : ''} ${
                i < 2 ? 'border-b border-white/[0.06] md:border-b-0' : ''
              } ${i === 1 ? 'md:border-r' : ''}`}
            >
              <dt className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">{s.label}</dt>
              <dd className="font-display text-4xl font-bold text-white sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
