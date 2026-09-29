import { ArrowUpRight } from 'lucide-react';
import { focusAreas } from '../data/portfolio.config';
import { getAccent } from '../utils/accent';
import { scrollToHash } from '../utils/scroll';
import TiltCard from '../components/TiltCard';
import Icon3D from '../components/Icon3D';
import Reveal from '../components/Reveal';

const marquee = ['DESIGN', 'TEST', 'IMPROVE', 'WIREFRAME', 'PROTOTYPE', 'REPORT', 'RETEST', 'VALIDATE'];

export default function QuickIntro() {
  return (
    <section aria-label="What I do" className="relative">
      {/* marquee strip */}
      <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-4" aria-hidden>
        <div className="animate-marquee flex w-max gap-10 font-display text-sm font-semibold tracking-[0.3em] text-white/25">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              {w}
              <span className="text-lime/60">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-8 md:grid-cols-3">
        {focusAreas.map((f, i) => {
          const a = getAccent(f.accent);
          return (
            <Reveal key={f.id} delay={i * 0.08}>
              <TiltCard
                as="a"
                href={f.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(f.href);
                }}
                data-cursor="EXPLORE"
                className="glass block h-full overflow-hidden rounded-3xl p-7 transition-colors hover:border-white/20"
              >
                <div
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: a.glow }}
                  aria-hidden
                />
                <div className="flex items-start justify-between">
                  <Icon3D icon={f.icon} accent={f.accent} />
                  <span className="font-mono text-xs text-soft">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.text}</p>
                <span className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${a.text}`}>
                  Explore <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
