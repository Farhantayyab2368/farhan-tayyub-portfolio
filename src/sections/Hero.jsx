import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { profile } from '../data/portfolio.config';
import { useDeviceTier } from '../hooks/useMediaQuery';
import { scrollToHash } from '../utils/scroll';
import { downloadCV } from '../utils/cv';
import { useToast } from '../hooks/useToast';
import HeroPanels from '../components/three/HeroPanels';

const ThreeDScene = lazy(() => import('../components/three/ThreeDScene'));

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ ready }) {
  const reduce = useReducedMotion();
  const tier = useDeviceTier();
  const toast = useToast();

  const item = (i) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.8, delay: 0.1 + i * 0.09, ease },
  });

  const onCV = async () => {
    const ok = await downloadCV();
    if (!ok) toast({ type: 'info', message: 'My CV will be available here soon — please reach out by email and I’ll send it directly.' });
  };

  const [first, ...rest] = profile.name.split(' ');

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:min-h-[100svh] lg:pt-0">
      {/* ambient background */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-violet-deep/60 blur-[140px]" />
        <div className="absolute right-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-navy/80 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-40 w-[60rem] -translate-x-1/2 rounded-full bg-lime/[0.06] blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 sm:px-8 lg:min-h-[100svh] lg:grid-cols-[1.05fr_1fr] lg:gap-4">
        {/* copy */}
        <div className="relative z-10 lg:py-28">
          <motion.p {...item(0)} className="eyebrow">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            {profile.heroLabel}
          </motion.p>

          <motion.h1
            {...item(1)}
            id="hero-title"
            className="mt-6 text-5xl leading-[1.02] font-bold text-white sm:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">{first}</span>
            <br />
            {rest.join(' ')}
            <span className="text-lime">.</span>
          </motion.h1>

          <motion.p {...item(2)} className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {profile.heroStatement}
          </motion.p>

          <motion.p {...item(3)} className="mt-5 font-mono text-xs tracking-wider text-muted sm:text-sm">
            {profile.heroSecondary.split('|').map((part, i, arr) => (
              <span key={part}>
                {part.trim()}
                {i < arr.length - 1 && <span className="mx-2 text-lime">/</span>}
              </span>
            ))}
          </motion.p>

          <motion.div {...item(4)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash('#projects');
              }}
              className="btn btn-primary"
              data-cursor="VIEW"
            >
              View My Work <ArrowRight size={16} aria-hidden />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash('#contact');
              }}
              className="btn btn-ghost"
            >
              <Mail size={16} aria-hidden /> Contact Me
            </a>
            <button type="button" onClick={onCV} className="btn text-muted hover:text-white" data-cursor="CV">
              <Download size={16} aria-hidden /> Download CV
            </button>
          </motion.div>

          <motion.dl {...item(5)} className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              ['Design', 'Figma · UX'],
              ['Test', 'Games · Apps'],
              ['Improve', 'Iterate'],
            ].map(([k, v], i) => (
              <div key={k}>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-soft uppercase">0{i + 1}</dt>
                <dd className="mt-1 font-display text-base font-semibold text-white">{k}</dd>
                <dd className="text-xs text-muted">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* 3D workspace */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={ready ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 1.1, delay: 0.25, ease }}
          className="relative h-[380px] sm:h-[480px] lg:h-[640px]"
        >
          <div className="absolute inset-[12%] rounded-full bg-violet/20 blur-[80px]" aria-hidden />
          {ready && (
            <Suspense fallback={null}>
              <ThreeDScene tier={tier} reduce={!!reduce} />
            </Suspense>
          )}
          {ready && <HeroPanels tier={tier} />}
          <p className="sr-only">
            Illustration: an interactive 3D workspace with a smartphone app design, a game controller, a test checklist
            and a bug report notification.
          </p>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex" aria-hidden>
        <span className="font-mono text-[10px] tracking-[0.3em] text-soft">SCROLL</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="animate-scan absolute inset-x-0 h-1/2 bg-lime" />
        </span>
      </div>
    </section>
  );
}
