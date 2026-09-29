import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { getIcon } from '../utils/icons';

/** Horizontal, interactive QA workflow timeline. Auto-advances until the user interacts. */
export default function TestingProcess({ steps }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-30%' });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!auto || !inView || reduce) return undefined;
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 2600);
    return () => clearInterval(id);
  }, [auto, inView, reduce, steps.length]);

  const pick = (i) => {
    setAuto(false);
    setActive(i);
  };

  const onKey = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      pick((active + 1) % steps.length);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      pick((active - 1 + steps.length) % steps.length);
    }
  };

  const step = steps[active];
  const ActiveIcon = getIcon(step.icon);
  const progress = (active / (steps.length - 1)) * 100;

  return (
    <div ref={ref} className="glass rounded-3xl p-5 sm:p-8">
      <div className="thin-scroll -mx-5 overflow-x-auto px-5 pb-3 sm:mx-0 sm:px-0">
        <div className="relative min-w-[720px]">
          {/* rail */}
          <div className="absolute left-[calc(100%/14)] right-[calc(100%/14)] top-6 h-px bg-white/10" aria-hidden>
            <motion.div
              className="h-full bg-gradient-to-r from-violet via-azure to-lime"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div role="tablist" aria-label="Testing process steps" className="relative grid grid-cols-7" onKeyDown={onKey}>
            {steps.map((s, i) => {
              const Icon = getIcon(s.icon);
              const isActive = i === active;
              const done = i < active;
              return (
                <button
                  key={s.step}
                  type="button"
                  role="tab"
                  id={`qa-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls="qa-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => pick(i)}
                  className="group flex flex-col items-center gap-3 px-1 text-center"
                >
                  <span
                    className={`relative grid h-12 w-12 place-items-center rounded-2xl border transition-all duration-500 ${
                      isActive
                        ? 'scale-110 border-lime bg-lime text-ink shadow-[0_0_30px_-4px_rgba(198,255,61,0.6)]'
                        : done
                          ? 'border-violet/50 bg-violet/15 text-violet'
                          : 'border-white/10 bg-coal text-muted group-hover:text-white'
                    }`}
                  >
                    <Icon size={18} aria-hidden />
                  </span>
                  <span className="font-mono text-[10px] text-soft">{s.step}</span>
                  <span className={`text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-muted'}`}>{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div id="qa-panel" role="tabpanel" aria-labelledby={`qa-tab-${active}`} className="mt-6 min-h-28 rounded-2xl border border-white/[0.07] bg-ink/40 p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex items-start gap-5"
          >
            <span className="font-display text-5xl font-bold text-white/10">{step.step}</span>
            <div>
              <p className="flex items-center gap-2 text-xl font-semibold text-white">
                <ActiveIcon size={18} className="text-lime" aria-hidden /> {step.title}
              </p>
              <p className="mt-2 text-muted">{step.text}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
