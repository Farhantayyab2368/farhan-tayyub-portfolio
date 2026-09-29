import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Short branded intro. Calls onDone after ~1.5s (instantly for reduced motion). */
export default function LoadingScreen({ onDone }) {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const total = reduce ? 200 : 1500;
    const start = performance.now();
    let raf;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      setProgress(100);
      onDone();
    };
    const tick = (t) => {
      const p = Math.min(1, (t - start) / total);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(finish, reduce ? 0 : 220);
    };
    raf = requestAnimationFrame(tick);
    // safety net: never keep visitors waiting if animation frames are throttled
    const fallback = setTimeout(finish, total + 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, [onDone, reduce]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] grid place-items-center bg-ink"
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/25 blur-[100px]"
        aria-hidden
      />
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 60 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-7xl font-bold tracking-tight text-white sm:text-8xl"
        >
          FT<span className="text-lime">.</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 font-mono text-xs tracking-[0.3em] text-muted uppercase"
        >
          Loading Portfolio<span className="animate-blink">...</span>
        </motion.p>
        <div className="mt-5 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full bg-lime transition-[width] duration-100" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-3 font-mono text-[10px] text-soft" aria-hidden>
          {String(progress).padStart(3, '0')}%
        </p>
      </div>
    </motion.div>
  );
}
