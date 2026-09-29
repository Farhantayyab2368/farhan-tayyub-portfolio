import { motion, useReducedMotion } from 'framer-motion';
import { aboutCards, profile } from '../data/portfolio.config';
import { getIcon } from '../utils/icons';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';
import Reveal from '../components/Reveal';

function ProfileVisual() {
  const reduce = useReducedMotion();
  const tags = [
    { t: 'UI/UX', c: 'text-violet border-violet/40', pos: 'left-[-6%] top-[12%]' },
    { t: 'QA', c: 'text-lime border-lime/40', pos: 'right-[-5%] top-[24%]' },
    { t: 'Gameplay', c: 'text-azure border-azure/40', pos: 'left-[-7%] top-[56%]' },
    { t: 'Usability', c: 'text-white border-white/30', pos: 'right-[-6%] top-[64%]' },
  ];
  return (
    <TiltCard max={10} className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem]" data-cursor="HELLO">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-deep via-coal to-navy" aria-hidden />
      <div className="bg-grid absolute inset-0 rounded-[2rem] opacity-70" aria-hidden />
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full place-items-center">
            <div className="relative grid h-44 w-44 place-items-center">
              {!reduce && (
                <motion.span
                  className="absolute inset-0 rounded-full border border-dashed border-lime/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  aria-hidden
                />
              )}
              <span className="absolute inset-4 rounded-full bg-gradient-to-br from-violet/60 to-azure/40 blur-xl" aria-hidden />
              <span className="relative font-display text-7xl font-bold text-white" role="img" aria-label={`${profile.name} monogram`}>
                {profile.initials}
                <span className="text-lime">.</span>
              </span>
            </div>
          </div>
        )}
        {/* scan line = testing mindset */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="animate-scan h-1/3 w-full bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
        </div>
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 backdrop-blur-md">
          <div>
            <p className="font-display text-sm font-semibold text-white">{profile.name}</p>
            <p className="font-mono text-[10px] text-muted">{profile.roles.join(' · ')}</p>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" /> AVAILABLE
          </span>
        </div>
      </div>
      {tags.map((tag, i) => (
        <motion.span
          key={tag.t}
          aria-hidden
          className={`absolute ${tag.pos} rounded-full border bg-ink/80 px-3 py-1 font-mono text-[11px] backdrop-blur-md ${tag.c}`}
          style={{ transform: 'translateZ(40px)' }}
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        >
          {tag.t}
        </motion.span>
      ))}
    </TiltCard>
  );
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ProfileVisual />
        </Reveal>
        <div>
          <SectionHeading index="01" eyebrow="Who I am" title="About Me" id="about-title" />
          <Reveal delay={0.05}>
            <p className="-mt-6 text-lg leading-relaxed text-white/80">{profile.about}</p>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {aboutCards.map((c, i) => {
              const Icon = getIcon(c.icon);
              return (
                <Reveal as="li" key={c.label} delay={0.05 * i} className={c.label === 'Tools' ? 'sm:col-span-2' : ''}>
                  <div
                    className={`glass flex h-full items-start gap-4 rounded-2xl p-4 transition hover:border-white/20 ${
                      c.highlight ? 'border-lime/25' : ''
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                        c.highlight ? 'bg-lime/15 text-lime' : 'bg-white/5 text-violet'
                      }`}
                    >
                      <Icon size={18} aria-hidden />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.2em] text-soft uppercase">{c.label}</p>
                      <p className={`mt-1 text-sm font-medium ${c.highlight ? 'text-lime' : 'text-white'}`}>{c.value}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
