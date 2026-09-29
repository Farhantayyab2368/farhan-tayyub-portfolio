import { ArrowUpRight, MapPin } from 'lucide-react';
import { contact, profile } from '../data/portfolio.config';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import { getSocialLinks } from '../components/SocialLinks';

export default function Contact() {
  const links = getSocialLinks();
  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="absolute bottom-0 left-1/2 -z-10 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-violet-deep/50 blur-[150px]" aria-hidden />
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading index="07" eyebrow="Contact" title={contact.heading} id="contact-title" text={contact.text} />
          <Reveal>
            <ul className="-mt-4 space-y-3">
              {links.map(({ key, label, value, href, Icon }) => (
                <li key={key}>
                  <a
                    href={href}
                    target={key === 'email' ? undefined : '_blank'}
                    rel={key === 'email' ? undefined : 'noopener noreferrer'}
                    data-cursor="OPEN"
                    className="glass group flex items-center justify-between gap-4 rounded-2xl p-4 transition hover:border-lime/30"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-lime">
                        <Icon size={18} aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[10px] tracking-[0.2em] text-soft uppercase">{label}</span>
                        <span className="block truncate text-sm text-white">{value}</span>
                      </span>
                    </span>
                    <ArrowUpRight size={18} className="shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <MapPin size={15} className="text-violet" aria-hidden /> {profile.location} · Available for remote work
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
