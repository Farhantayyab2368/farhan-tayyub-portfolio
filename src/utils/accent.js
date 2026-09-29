/** Shared accent palette so every card can be themed from the config. */
export const accents = {
  violet: {
    text: 'text-violet',
    bg: 'bg-violet',
    soft: 'bg-violet/15',
    border: 'border-violet/40',
    hoverBorder: 'hover:border-violet/50',
    glow: 'rgba(139,107,255,0.45)',
    hex: '#8b6bff',
  },
  lime: {
    text: 'text-lime',
    bg: 'bg-lime',
    soft: 'bg-lime/15',
    border: 'border-lime/40',
    hoverBorder: 'hover:border-lime/50',
    glow: 'rgba(198,255,61,0.35)',
    hex: '#c6ff3d',
  },
  blue: {
    text: 'text-azure',
    bg: 'bg-azure',
    soft: 'bg-azure/15',
    border: 'border-azure/40',
    hoverBorder: 'hover:border-azure/50',
    glow: 'rgba(76,125,255,0.45)',
    hex: '#4c7dff',
  },
  white: {
    text: 'text-white',
    bg: 'bg-white',
    soft: 'bg-white/10',
    border: 'border-white/30',
    hoverBorder: 'hover:border-white/40',
    glow: 'rgba(255,255,255,0.25)',
    hex: '#ffffff',
  },
};

export const getAccent = (name) => accents[name] || accents.violet;

export const severityStyles = {
  Critical: { dot: 'bg-sev-critical', text: 'text-sev-critical', ring: 'border-sev-critical/35', level: 4 },
  High: { dot: 'bg-sev-high', text: 'text-sev-high', ring: 'border-sev-high/35', level: 3 },
  Medium: { dot: 'bg-sev-medium', text: 'text-sev-medium', ring: 'border-sev-medium/35', level: 2 },
  Low: { dot: 'bg-sev-low', text: 'text-sev-low', ring: 'border-sev-low/35', level: 1 },
};

export const statusStyles = {
  PASS: 'bg-lime/12 text-lime border-lime/30',
  FAIL: 'bg-sev-critical/12 text-sev-critical border-sev-critical/30',
  BLOCKED: 'bg-sev-high/12 text-sev-high border-sev-high/30',
  Open: 'bg-sev-high/10 text-sev-high border-sev-high/30',
  'In Progress': 'bg-sev-medium/10 text-sev-medium border-sev-medium/30',
  Fixed: 'bg-lime/10 text-lime border-lime/30',
  Closed: 'bg-white/5 text-muted border-white/15',
};
