import { ArrowUpRight, Bug, ClipboardList } from 'lucide-react';
import { getAccent } from '../utils/accent';
import TiltCard from './TiltCard';
import Icon3D from './Icon3D';

const iconFor = (p) => (p.filters.includes('gameplay-testing') ? 'Gamepad2' : p.visual === 'qa-web' ? 'Globe' : 'Smartphone');

function SeverityBar({ severity }) {
  const parts = [
    ['High', severity.high || 0, 'bg-sev-high'],
    ['Medium', severity.medium || 0, 'bg-sev-medium'],
    ['Low', severity.low || 0, 'bg-sev-low'],
  ];
  const total = parts.reduce((s, [, n]) => s + n, 0) || 1;
  return (
    <div>
      <div className="flex h-1.5 overflow-hidden rounded-full bg-white/5" role="img" aria-label={parts.map(([l, n]) => `${n} ${l}`).join(', ')}>
        {parts.map(([l, n, c]) => (n ? <span key={l} className={c} style={{ width: `${(n / total) * 100}%` }} /> : null))}
      </div>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted">
        {parts.map(([l, n, c]) => (
          <li key={l} className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${c}`} aria-hidden />
            {l} <span className="font-mono text-white/80">{n}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TestingCard({ project, onOpen }) {
  const a = getAccent(project.accent);
  const rows = [
    ['Application / Game', project.application],
    ['Testing Type', project.testingType],
    ['Tools', project.toolsUsed.join(' • ')],
  ];
  return (
    <TiltCard max={4} className="glass flex h-full flex-col overflow-hidden rounded-3xl">
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-25 blur-3xl" style={{ background: a.glow }} aria-hidden />
      <div className="relative flex items-start justify-between gap-4 p-6 pb-0">
        <div className="flex items-center gap-4">
          <Icon3D icon={iconFor(project)} accent={project.accent} size="sm" />
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-soft uppercase">{project.context}</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-2 gap-3 p-6">
        <div className="rounded-2xl border border-white/10 bg-ink/40 p-4">
          <ClipboardList size={16} className="text-lime" aria-hidden />
          <p className="mt-2 font-display text-3xl font-bold text-white">{project.testCases}</p>
          <p className="text-xs text-muted">Test cases</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink/40 p-4">
          <Bug size={16} className="text-sev-high" aria-hidden />
          <p className="mt-2 font-display text-3xl font-bold text-white">{project.bugsFound}</p>
          <p className="text-xs text-muted">Bugs found</p>
        </div>
      </div>

      <dl className="relative space-y-4 px-6">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt className="font-mono text-[10px] tracking-[0.2em] text-soft uppercase">{k}</dt>
            <dd className="mt-1 text-sm text-white/85">{v}</dd>
          </div>
        ))}
        <div>
          <dt className="mb-2 font-mono text-[10px] tracking-[0.2em] text-soft uppercase">Severity</dt>
          <dd>
            <SeverityBar severity={project.severity} />
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] tracking-[0.2em] text-soft uppercase">Testing Summary</dt>
          <dd className="mt-1 text-sm leading-relaxed text-muted">{project.summary}</dd>
        </div>
      </dl>

      <div className="relative px-6 pt-5">
        <p className="font-mono text-[10px] tracking-[0.2em] text-soft uppercase">Testing areas</p>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {project.areas.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-auto p-6">
        <button
          type="button"
          onClick={() => onOpen(project.id)}
          data-cursor="OPEN"
          className="btn btn-ghost w-full"
          aria-label={`Open testing report: ${project.title}`}
        >
          Open testing report <ArrowUpRight size={16} aria-hidden />
        </button>
      </div>
    </TiltCard>
  );
}
