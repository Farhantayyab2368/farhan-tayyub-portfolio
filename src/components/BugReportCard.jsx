import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bug, ChevronDown, MonitorSmartphone } from 'lucide-react';
import { severityStyles, statusStyles } from '../utils/accent';
import TiltCard from './TiltCard';

/** Four calm signal bars instead of loud red badges. */
function SeverityMeter({ level, color }) {
  return (
    <span className="flex items-end gap-0.5" aria-hidden>
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className={`w-1 rounded-sm ${i <= level ? color : 'bg-white/10'}`} style={{ height: 4 + i * 3 }} />
      ))}
    </span>
  );
}

export default function BugReportCard({ bug }) {
  const [open, setOpen] = useState(false);
  const sev = severityStyles[bug.severity] || severityStyles.Low;
  const pri = severityStyles[bug.priority] || severityStyles.Low;

  return (
    <TiltCard max={3} className={`glass h-full overflow-hidden rounded-3xl border-l-2 ${sev.ring}`}>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 font-mono text-xs font-bold text-white">
            <Bug size={14} className={sev.text} aria-hidden />
            {bug.id}
          </span>
          <span className={`rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider ${statusStyles[bug.status]}`}>
            {bug.status.toUpperCase()}
          </span>
        </div>
        <h4 className="mt-4 font-display text-lg leading-snug font-semibold text-white">{bug.title}</h4>
        <p className="mt-1 text-xs text-muted">{bug.module}</p>

        <dl className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/[0.07] bg-ink/40 p-3">
            <dt className="font-mono text-[10px] tracking-[0.18em] text-soft uppercase">Severity</dt>
            <dd className={`mt-1.5 flex items-center justify-between text-sm font-medium ${sev.text}`}>
              {bug.severity}
              <SeverityMeter level={sev.level} color={sev.dot} />
            </dd>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-ink/40 p-3">
            <dt className="font-mono text-[10px] tracking-[0.18em] text-soft uppercase">Priority</dt>
            <dd className={`mt-1.5 flex items-center justify-between text-sm font-medium ${pri.text}`}>
              {bug.priority}
              <SeverityMeter level={pri.level} color={pri.dot} />
            </dd>
          </div>
          <div className="col-span-2 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-ink/40 p-3 text-sm text-white/85">
            <MonitorSmartphone size={15} className="text-muted" aria-hidden />
            <dt className="sr-only">Environment</dt>
            <dd>{bug.environment}</dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={`bug-${bug.id}`}
          data-cursor={open ? 'CLOSE' : 'OPEN'}
          className="mt-5 flex w-full min-h-11 items-center justify-between rounded-xl border border-white/10 px-4 text-sm text-white/85 transition hover:bg-white/[0.05]"
        >
          {open ? 'Hide reproduction steps' : 'View reproduction steps'}
          <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={`bug-${bug.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pt-5">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-soft uppercase">Steps to reproduce</p>
                  <ol className="mt-2 space-y-1.5">
                    {bug.steps.map((s, i) => (
                      <li key={s} className="flex gap-3 text-sm text-white/85">
                        <span className="font-mono text-xs text-lime">{i + 1}.</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-xl border border-lime/20 bg-lime/[0.04] p-3">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-lime uppercase">Expected</p>
                  <p className="mt-1 text-sm text-white/85">{bug.expected}</p>
                </div>
                <div className="rounded-xl border border-sev-critical/25 bg-sev-critical/[0.05] p-3">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-sev-critical uppercase">Actual</p>
                  <p className="mt-1 text-sm text-white/85">{bug.actual}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TiltCard>
  );
}
