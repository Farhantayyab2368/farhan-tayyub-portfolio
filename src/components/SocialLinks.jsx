import { Mail } from 'lucide-react';
import { socials } from '../data/portfolio.config';
import { BehanceIcon, GitHubIcon, LinkedInIcon } from './BrandIcons';

/** Builds the list of configured social links (empty values are skipped). */
export function getSocialLinks() {
  return [
    socials.email && { key: 'email', label: 'Email', value: socials.email, href: `mailto:${socials.email}`, Icon: Mail },
    socials.linkedin && { key: 'linkedin', label: 'LinkedIn', value: 'LinkedIn', href: socials.linkedin, Icon: LinkedInIcon },
    socials.github && { key: 'github', label: 'GitHub', value: 'GitHub', href: socials.github, Icon: GitHubIcon },
    socials.behance && { key: 'behance', label: 'Behance', value: 'Behance', href: socials.behance, Icon: BehanceIcon },
  ].filter(Boolean);
}

export default function SocialLinks({ className = '' }) {
  const links = getSocialLinks();
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(({ key, label, href, Icon }) => (
        <li key={key}>
          <a
            href={href}
            target={key === 'email' ? undefined : '_blank'}
            rel={key === 'email' ? undefined : 'noopener noreferrer'}
            aria-label={label}
            data-cursor="OPEN"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-muted transition hover:-translate-y-0.5 hover:border-lime/40 hover:text-lime"
          >
            <Icon size={18} aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
