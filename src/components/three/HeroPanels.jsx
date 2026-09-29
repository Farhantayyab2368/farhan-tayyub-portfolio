import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Floating UI panels layered over the 3D canvas. They are regular DOM
 * (crisp text, cheap to render) and move with depth-based parallax.
 */
const panelBase =
  'select-none rounded-2xl border border-white/10 bg-[#12111c]/80 p-3 text-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.95)] backdrop-blur-md';

function DesignPanel() {
  return (
    <div className={`${panelBase} w-40 xl:w-44`}>
      <div className="mb-2 flex items-center justify-between font-mono text-[9px] tracking-wider text-muted">
        <span>DESIGN</span>
        <span className="text-violet">Frame 12</span>
      </div>
      <div className="mb-2 flex gap-1.5">
        {['#8b6bff', '#c6ff3d', '#4c7dff', '#ffffff', '#1a1830'].map((c) => (
          <span key={c} className="h-4 w-4 rounded-md ring-1 ring-white/15" style={{ background: c }} />
        ))}
      </div>
      {['Auto layout', 'Spacing 16', 'Radius 12'].map((t, i) => (
        <div key={t} className="flex items-center justify-between border-t border-white/5 py-1 text-[10px] text-white/80">
          <span>{t}</span>
          <span className="h-1.5 rounded-full bg-white/20" style={{ width: 18 + i * 8 }} />
        </div>
      ))}
    </div>
  );
}

function ChecklistPanel() {
  const rows = [
    ['Login flow', 'PASS'],
    ['Form validation', 'PASS'],
    ['Pause / resume', 'FAIL'],
    ['HUD update', 'PASS'],
  ];
  return (
    <div className={`${panelBase} w-44 xl:w-48`}>
      <div className="mb-2 flex items-center justify-between font-mono text-[9px] tracking-wider text-muted">
        <span>TEST RUN</span>
        <span className="text-lime">3/4</span>
      </div>
      {rows.map(([t, s]) => (
        <div key={t} className="flex items-center justify-between gap-2 py-1 text-[10px]">
          <span className="flex items-center gap-1.5 text-white/85">
            <span
              className={`grid h-3.5 w-3.5 place-items-center rounded text-[8px] font-bold ${
                s === 'PASS' ? 'bg-lime text-ink' : 'border border-sev-critical/60 text-sev-critical'
              }`}
            >
              {s === 'PASS' ? '✓' : '×'}
            </span>
            {t}
          </span>
          <span className={`font-mono text-[8px] ${s === 'PASS' ? 'text-lime' : 'text-sev-critical'}`}>{s}</span>
        </div>
      ))}
    </div>
  );
}

function BugPanel() {
  return (
    <div className={`${panelBase} w-48 xl:w-52`}>
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sev-high opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-sev-high" />
        </span>
        <span className="font-mono text-[9px] tracking-wider text-muted">BUG-001 · HIGH</span>
      </div>
      <p className="mt-1.5 text-[11px] leading-snug font-medium">Login button does not respond</p>
      <p className="mt-1 font-mono text-[9px] text-soft">Android / Chrome · Open</p>
    </div>
  );
}

function UsabilityPanel() {
  return (
    <div className={`${panelBase} w-32`}>
      <div className="font-mono text-[9px] tracking-wider text-muted">UX SCORE</div>
      <div className="mt-1 flex items-end gap-1">
        {[40, 62, 55, 78, 92].map((h, i) => (
          <span key={h} className="w-3.5 rounded-sm" style={{ height: h * 0.3, background: i === 4 ? '#c6ff3d' : 'rgba(139,107,255,0.55)' }} />
        ))}
      </div>
      <p className="mt-1 text-[10px] text-white/70">Task success ↑</p>
    </div>
  );
}

function Layer({ px, py, depth, className, children, delay = 0, float = 6 }) {
  const reduce = useReducedMotion();
  const x = useTransform(px, (v) => v * 14 * depth);
  const y = useTransform(py, (v) => v * 10 * depth);
  const rotateY = useTransform(px, (v) => v * 8);
  const rotateX = useTransform(py, (v) => v * -6);
  return (
    <motion.div className={`absolute ${className}`} style={{ x, y, rotateX, rotateY, transformPerspective: 800 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={reduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, -float, 0] }}
        transition={{
          opacity: { delay: 0.6 + delay, duration: 0.6 },
          scale: { delay: 0.6 + delay, duration: 0.6 },
          y: { duration: 5 + depth, repeat: Infinity, ease: 'easeInOut', delay },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function HeroPanels({ tier }) {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const px = useSpring(rawX, { stiffness: 60, damping: 18 });
  const py = useSpring(rawY, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (reduce) return undefined;
    const onMove = (e) => {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, rawX, rawY]);

  if (tier === 'mobile') return null;

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Layer px={px} py={py} depth={1.4} className="left-[2%] top-[26%]" delay={0}>
        <DesignPanel />
      </Layer>
      <Layer px={px} py={py} depth={1.8} className="right-[2%] top-[14%]" delay={0.15}>
        <ChecklistPanel />
      </Layer>
      <Layer px={px} py={py} depth={2.4} className="bottom-[22%] right-[4%]" delay={0.3}>
        <BugPanel />
      </Layer>
      {tier === 'desktop' && (
        <Layer px={px} py={py} depth={1} className="bottom-[6%] left-[16%]" delay={0.45}>
          <UsabilityPanel />
        </Layer>
      )}
    </div>
  );
}
