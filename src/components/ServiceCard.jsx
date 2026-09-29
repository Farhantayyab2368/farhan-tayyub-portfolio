import { getAccent } from '../utils/accent';
import TiltCard from './TiltCard';
import Icon3D from './Icon3D';

export default function ServiceCard({ service, index }) {
  const a = getAccent(service.accent);
  return (
    <TiltCard max={8} className="glass h-full overflow-hidden rounded-3xl p-7 transition-colors hover:border-white/20">
      <div
        className="absolute inset-x-0 -bottom-24 h-40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: a.glow }}
        aria-hidden
      />
      <div className="relative flex items-start justify-between">
        <Icon3D icon={service.icon} accent={service.accent} />
        <span className="font-display text-5xl font-bold text-white/[0.06]">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="relative mt-8 text-xl font-semibold text-white">{service.title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted">{service.text}</p>
      <span className={`relative mt-6 block h-px w-10 transition-all duration-500 group-hover:w-24 ${a.bg}`} aria-hidden />
    </TiltCard>
  );
}
