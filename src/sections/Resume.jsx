import { Download, FileText, Mail } from 'lucide-react';
import { cv, profile } from '../data/portfolio.config';
import { downloadCV } from '../utils/cv';
import { scrollToHash } from '../utils/scroll';
import { useToast } from '../hooks/useToast';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';

export default function Resume() {
  const toast = useToast();
  const onCV = async () => {
    const ok = await downloadCV();
    if (!ok) toast({ type: 'info', message: 'My CV will be available here soon — please reach out by email and I’ll send it directly.' });
  };

  return (
    <section aria-labelledby="resume-title" className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-deep/80 via-coal to-navy p-8 sm:p-12">
          <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lime/10 blur-[90px]" aria-hidden />
          <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow">
                <span className="h-px w-6 bg-lime/60" aria-hidden /> Resume
              </p>
              <h2 id="resume-title" className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                {cv.heading}
              </h2>
              <p className="mt-4 max-w-lg text-lg text-white/75">{cv.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={onCV} className="btn btn-primary" data-cursor="CV">
                  <Download size={16} aria-hidden /> Download CV
                </button>
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
              </div>
            </div>

            {/* paper preview */}
            <TiltCard max={10} glare={false} className="mx-auto w-full max-w-[260px]" aria-hidden>
              <div className="rotate-3 rounded-2xl bg-white p-5 text-ink shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:rotate-0">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink font-display text-xs font-bold whitespace-nowrap text-white">
                    {profile.initials}
                    <span className="text-lime">.</span>
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold">{profile.name}</p>
                    <p className="text-[9px] text-black/50">{profile.roles.join(' · ')}</p>
                  </div>
                </div>
                {['Experience', 'Skills', 'Projects'].map((h, i) => (
                  <div key={h} className="mt-4">
                    <p className="text-[9px] font-bold tracking-widest text-violet uppercase">{h}</p>
                    <div className="mt-1.5 space-y-1">
                      {[92, 76, 84 - i * 10].map((w) => (
                        <span key={w} className="block h-1 rounded-full bg-black/10" style={{ width: `${w}%` }} />
                      ))}
                    </div>
                  </div>
                ))}
                <div className="mt-4 flex items-center gap-1.5 text-[9px] text-black/40">
                  <FileText size={11} /> {cv.fileName}
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
