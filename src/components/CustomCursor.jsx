import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

/**
 * Subtle custom cursor for mouse users.
 * Add data-cursor="VIEW" (or OPEN / EXPLORE…) to any element to show a label.
 * Automatically disabled on touch devices and for reduced-motion users.
 */
export default function CustomCursor() {
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
  const reduce = useReducedMotion();
  const enabled = finePointer && !reduce;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const [state, setState] = useState({ hover: false, label: '', visible: false, down: false });

  useEffect(() => {
    if (!enabled) return undefined;
    document.documentElement.classList.add('has-custom-cursor');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setState((s) => (s.visible ? s : { ...s, visible: true }));
    };
    const over = (e) => {
      const target = e.target.closest?.('[data-cursor], a, button, [role="button"], input, textarea, select, label');
      const label = target?.getAttribute?.('data-cursor') || '';
      const isField = target && /INPUT|TEXTAREA|SELECT/.test(target.tagName);
      setState((s) => ({ ...s, hover: !!target && !isField, label: isField ? '' : label }));
    };
    const leave = () => setState((s) => ({ ...s, visible: false }));
    const down = () => setState((s) => ({ ...s, down: true }));
    const up = () => setState((s) => ({ ...s, down: false }));

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', over, { passive: true });
    document.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      document.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = state.label ? 72 : state.hover ? 44 : 14;

  return (
    <>
      {/* precise dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-lime"
        style={{ x, y, translateX: '-50%', translateY: '-50%', opacity: state.visible && !state.label ? 1 : 0 }}
      />
      {/* trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] grid place-items-center rounded-full border font-mono text-[10px] font-bold tracking-[0.15em]"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: size,
          height: size,
          opacity: state.visible ? 1 : 0,
          scale: state.down ? 0.85 : 1,
          backgroundColor: state.label ? 'rgba(198,255,61,0.95)' : state.hover ? 'rgba(198,255,61,0.08)' : 'rgba(255,255,255,0)',
          borderColor: state.label ? 'rgba(198,255,61,1)' : state.hover ? 'rgba(198,255,61,0.6)' : 'rgba(255,255,255,0.45)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      >
        <span className="text-ink" style={{ opacity: state.label ? 1 : 0 }}>
          {state.label}
        </span>
      </motion.div>
    </>
  );
}
