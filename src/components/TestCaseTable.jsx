import { Fragment, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { statusStyles } from '../utils/accent';

function Status({ value }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider ${statusStyles[value]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {value}
    </span>
  );
}

function Detail({ tc }) {
  return (
    <div className="grid gap-4 rounded-2xl border border-white/10 bg-ink/50 p-5 md:grid-cols-3">
      <div className="md:col-span-1">
        <p className="font-mono text-[10px] tracking-[0.2em] text-soft uppercase">Module</p>
        <p className="mt-1 text-sm text-white">{tc.module}</p>
        <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-soft uppercase">Preconditions</p>
        <p className="mt-1 text-sm text-white/80">{tc.preconditions}</p>
        <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-soft uppercase">Test data</p>
        <p className="mt-1 font-mono text-xs text-white/80">{tc.testData}</p>
        <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-soft uppercase">Priority</p>
        <p className="mt-1 text-sm text-white/80">{tc.priority}</p>
      </div>
      <div>
        <p className="font-mono text-[10px] tracking-[0.2em] text-soft uppercase">Steps</p>
        <ol className="mt-2 space-y-2">
          {tc.steps.map((s, i) => (
            <li key={s} className="flex gap-3 text-sm text-white/85">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-white/5 font-mono text-[10px] text-lime">{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
      </div>
      <div className="space-y-3">
        <div className="rounded-xl border border-lime/20 bg-lime/[0.04] p-3">
          <p className="font-mono text-[10px] tracking-[0.2em] text-lime uppercase">Expected</p>
          <p className="mt-1 text-sm text-white/85">{tc.expected}</p>
        </div>
        <div className={`rounded-xl border p-3 ${tc.status === 'PASS' ? 'border-white/10 bg-white/[0.03]' : 'border-sev-critical/25 bg-sev-critical/[0.05]'}`}>
          <p className={`font-mono text-[10px] tracking-[0.2em] uppercase ${tc.status === 'PASS' ? 'text-muted' : 'text-sev-critical'}`}>Actual</p>
          <p className="mt-1 text-sm text-white/85">{tc.actual}</p>
        </div>
      </div>
    </div>
  );
}

const expandAnim = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
};

export default function TestCaseTable({ cases }) {
  const [open, setOpen] = useState(cases[0]?.id);
  const [filter, setFilter] = useState('ALL');
  const toggle = (id) => setOpen((o) => (o === id ? null : id));

  const shown = useMemo(() => (filter === 'ALL' ? cases : cases.filter((c) => c.status === filter)), [cases, filter]);
  const pass = cases.filter((c) => c.status === 'PASS').length;
  const rate = Math.round((pass / cases.length) * 100);

  return (
    <div className="glass overflow-hidden rounded-3xl">
      {/* toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] p-5">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12" role="img" aria-label={`${rate}% of test cases passed`}>
            <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--color-lime)" strokeWidth="3" strokeDasharray={`${rate} 100`} strokeLinecap="round" />
            </svg>
            <span className="absolute inset-0 grid place-items-center font-mono text-[10px] font-bold">{rate}%</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Test run — sample suite</p>
            <p className="font-mono text-[11px] text-muted">
              {cases.length} cases · {pass} pass · {cases.length - pass} fail
            </p>
          </div>
        </div>
        <div role="group" aria-label="Filter by status" className="flex gap-1 rounded-full border border-white/10 p-1">
          {['ALL', 'PASS', 'FAIL'].map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={filter === s}
              onClick={() => setFilter(s)}
              className={`min-h-9 rounded-full px-4 font-mono text-[11px] font-bold tracking-wider transition ${
                filter === s ? 'bg-white text-ink' : 'text-muted hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* desktop table */}
      <div className="hidden md:block">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Test case examples. Select a row to expand full details.</caption>
          <thead>
            <tr className="font-mono text-[10px] tracking-[0.18em] text-soft uppercase">
              <th scope="col" className="px-5 py-3 font-medium">Test Case ID</th>
              <th scope="col" className="px-5 py-3 font-medium">Test Scenario</th>
              <th scope="col" className="px-5 py-3 font-medium">Steps</th>
              <th scope="col" className="px-5 py-3 font-medium">Expected Result</th>
              <th scope="col" className="px-5 py-3 font-medium">Actual Result</th>
              <th scope="col" className="px-5 py-3 font-medium">Status</th>
              <th scope="col" className="px-3 py-3"><span className="sr-only">Details</span></th>
            </tr>
          </thead>
          <tbody>
            {shown.map((tc) => {
              const isOpen = open === tc.id;
              return (
                <Fragment key={tc.id}>
                  <tr
                    className={`cursor-pointer border-t border-white/[0.06] align-top transition-colors hover:bg-white/[0.03] ${isOpen ? 'bg-white/[0.03]' : ''}`}
                    onClick={() => toggle(tc.id)}
                    data-cursor={isOpen ? 'CLOSE' : 'OPEN'}
                  >
                    <td className="px-5 py-4 font-mono text-xs font-bold text-lime">{tc.id}</td>
                    <td className="px-5 py-4 font-medium text-white">{tc.scenario}</td>
                    <td className="px-5 py-4 text-muted">{tc.steps.length} steps</td>
                    <td className="max-w-[16rem] px-5 py-4 text-white/75">{tc.expected}</td>
                    <td className="max-w-[16rem] px-5 py-4 text-white/75">{tc.actual}</td>
                    <td className="px-5 py-4">
                      <Status value={tc.status} />
                    </td>
                    <td className="px-3 py-3">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`tc-${tc.id}`}
                        aria-label={`${isOpen ? 'Hide' : 'Show'} details for ${tc.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggle(tc.id);
                        }}
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted hover:text-white"
                      >
                        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </td>
                  </tr>
                  <tr id={`tc-${tc.id}`}>
                    <td colSpan={7} className="p-0">
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div {...expandAnim} className="overflow-hidden">
                            <div className="px-5 pb-5">
                              <Detail tc={tc} />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* mobile cards */}
      <ul className="divide-y divide-white/[0.06] md:hidden">
        {shown.map((tc) => {
          const isOpen = open === tc.id;
          return (
            <li key={tc.id}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`tcm-${tc.id}`}
                onClick={() => toggle(tc.id)}
                className="flex w-full items-start justify-between gap-3 p-5 text-left"
              >
                <span>
                  <span className="font-mono text-xs font-bold text-lime">{tc.id}</span>
                  <span className="mt-1 block text-sm font-medium text-white">{tc.scenario}</span>
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  <Status value={tc.status} />
                  <ChevronDown size={16} className={`text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div id={`tcm-${tc.id}`} {...expandAnim} className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <Detail tc={tc} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
