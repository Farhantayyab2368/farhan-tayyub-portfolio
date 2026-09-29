import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, profile, socials } from '../data/portfolio.config';
import { useActiveSection } from '../hooks/useActiveSection';
import { scrollToHash } from '../utils/scroll';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ids = useMemo(() => navLinks.map((l) => l.href.slice(1)), []);
  const active = useActiveSection(ids);
  const menuBtn = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock scroll + escape to close + keep focus inside the mobile menu
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuBtn.current?.focus();
      }
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll('a, button');
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    setTimeout(() => panelRef.current?.querySelector('a')?.focus(), 50);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    // wait a frame so the body scroll lock is released first
    requestAnimationFrame(() => scrollToHash(href));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled || open ? 'glass-strong shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]' : 'border border-transparent'
        }`}
      >
        <a
          href="#home"
          onClick={(e) => go(e, '#home')}
          className="font-display text-2xl font-bold tracking-tight text-white"
          aria-label={`${profile.name} — back to top`}
        >
          {profile.initials}
          <span className="text-lime">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative isolate rounded-full px-3.5 py-2 text-sm transition-colors ${
                    isActive ? 'text-white' : 'text-muted hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => go(e, '#contact')}
            className="btn btn-primary hidden !min-h-10 !px-5 sm:inline-flex"
          >
            Let&apos;s Talk <ArrowUpRight size={16} aria-hidden />
          </a>
          <button
            ref={menuBtn}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass-strong mx-auto mt-2 max-w-7xl overflow-y-auto rounded-2xl p-3 lg:hidden"
            style={{ maxHeight: 'calc(100dvh - 96px)' }}
          >
            <ul className="grid gap-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <a
                    href={l.href}
                    onClick={(e) => go(e, l.href)}
                    className={`flex min-h-12 items-center justify-between rounded-xl px-4 text-base ${
                      active === l.href.slice(1) ? 'bg-white/[0.07] text-white' : 'text-muted'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="font-mono text-[10px] text-soft">{String(i + 1).padStart(2, '0')}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
              <a href="#contact" onClick={(e) => go(e, '#contact')} className="btn btn-primary w-full">
                Let&apos;s Talk <ArrowUpRight size={16} aria-hidden />
              </a>
              {socials.email && (
                <a href={`mailto:${socials.email}`} className="py-2 text-center font-mono text-xs text-muted">
                  {socials.email}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
