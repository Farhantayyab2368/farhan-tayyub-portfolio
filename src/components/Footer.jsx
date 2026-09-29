import { ArrowUp } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio.config';
import { scrollToHash } from '../utils/scroll';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault();
    scrollToHash(href);
  };
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a href="#home" onClick={(e) => go(e, '#home')} className="font-display text-3xl font-bold text-white">
            {profile.initials}
            <span className="text-lime">.</span>
          </a>
          <p className="mt-3 text-sm leading-relaxed text-muted">{profile.roles.join(' · ')}</p>
          <p className="mt-4 font-mono text-xs tracking-[0.25em] text-soft">DESIGN → TEST → IMPROVE</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => go(e, l.href)} className="text-muted transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-t border-white/[0.06] px-5 py-6 text-xs text-soft sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a
          href="#home"
          onClick={(e) => go(e, '#home')}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-muted transition hover:text-white"
        >
          Back to top <ArrowUp size={14} aria-hidden />
        </a>
      </div>
    </footer>
  );
}
