/**
 * Illustrated mockups used as project thumbnails when no `image` is set
 * in portfolio.config.js. Pure HTML/CSS — no image files required.
 */
import { getAccent } from '../utils/accent';

const Bar = ({ w = '60%', h = 6, c = 'bg-white/70', className = '' }) => (
  <span className={`block rounded-full ${c} ${className}`} style={{ width: w, height: h }} />
);

const Phone = ({ children, className = '', tilt = 0 }) => (
  <div
    className={`relative aspect-[9/19] rounded-[1.4rem] border border-white/15 bg-[#0c0b16] p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] ${className}`}
    style={{ transform: `rotate(${tilt}deg)` }}
  >
    <div className="relative h-full w-full overflow-hidden rounded-[1.1rem] bg-[#11101c]">
      <span className="absolute left-1/2 top-1.5 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black" />
      {children}
    </div>
  </div>
);

const Landscape = ({ children, className = '' }) => (
  <div className={`relative aspect-[19/9] rounded-[1.2rem] border border-white/15 bg-[#0c0b16] p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] ${className}`}>
    <div className="relative h-full w-full overflow-hidden rounded-[0.9rem]">{children}</div>
  </div>
);

const Browser = ({ children, className = '' }) => (
  <div className={`relative overflow-hidden rounded-xl border border-white/15 bg-[#0c0b16] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] ${className}`}>
    <div className="flex items-center gap-1 border-b border-white/10 px-2.5 py-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/25" />
      ))}
      <span className="ml-2 h-2 w-1/3 rounded-full bg-white/10" />
    </div>
    <div className="relative">{children}</div>
  </div>
);

/* ---------------- variants ---------------- */

function Wallpaper() {
  return (
    <div className="flex h-full items-center justify-center gap-4">
      <Phone className="w-[26%]" tilt={-6}>
        <div className="absolute inset-0 bg-[conic-gradient(from_200deg,#8b6bff,#4c7dff,#c6ff3d,#8b6bff)] opacity-90" />
        <div className="absolute inset-1 rounded-[0.9rem] bg-[radial-gradient(circle_at_30%_20%,#2a1466,#0c0b16_70%)]" />
        <div className="absolute inset-x-3 bottom-4 space-y-1.5">
          <Bar w="70%" />
          <Bar w="45%" c="bg-white/40" h={4} />
          <span className="mt-2 block h-4 rounded-full bg-lime" />
        </div>
      </Phone>
      <Phone className="w-[26%]" tilt={4}>
        <div className="grid h-full grid-cols-2 gap-1 p-2 pt-5">
          {['from-violet to-navy', 'from-lime/80 to-violet-deep', 'from-azure to-ink', 'from-violet-deep to-azure', 'from-ink to-violet', 'from-azure/70 to-lime/50'].map(
            (g) => (
              <span key={g} className={`rounded-md bg-gradient-to-br ${g}`} />
            ),
          )}
        </div>
      </Phone>
    </div>
  );
}

function Remote() {
  return (
    <div className="flex h-full items-center justify-center gap-5">
      <Phone className="w-[27%]">
        <div className="flex h-full flex-col items-center gap-3 p-3 pt-6">
          <div className="flex w-full justify-between">
            <span className="h-5 w-5 rounded-full bg-sev-critical/70" />
            <Bar w="40%" c="bg-white/40" h={5} className="self-center" />
          </div>
          <div className="relative mt-2 grid aspect-square w-[80%] place-items-center rounded-full border border-white/15 bg-white/5">
            <span className="h-[38%] w-[38%] rounded-full bg-azure" />
            {['top-1', 'bottom-1', 'left-1', 'right-1'].map((p) => (
              <span key={p} className={`absolute ${p} h-1.5 w-1.5 rounded-full bg-white/50`} />
            ))}
          </div>
          <div className="grid w-full grid-cols-3 gap-1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className={`h-4 rounded-md ${i === 1 ? 'bg-lime/80' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
      </Phone>
      <Phone className="w-[27%]" tilt={5}>
        <div className="flex h-full flex-col items-center justify-center gap-3 p-3">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-violet/30 ring-8 ring-violet/10">
            <span className="h-6 w-3 rounded-full bg-white" />
          </span>
          <Bar w="60%" c="bg-white/60" h={5} />
          <div className="flex items-end gap-0.5">
            {[6, 12, 8, 16, 10, 14, 6].map((h, i) => (
              <span key={i} className="w-1 rounded-full bg-lime" style={{ height: h }} />
            ))}
          </div>
        </div>
      </Phone>
    </div>
  );
}

function GameHud() {
  return (
    <div className="flex h-full items-center justify-center px-6">
      <Landscape className="w-[88%]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1b2a4a_0%,#3a3f2a_55%,#1a1c12_100%)]" />
        <div className="absolute left-1/2 top-1/2 h-[70%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black/70 shadow-[0_0_0_999px_rgba(0,0,0,0.55)]">
          <span className="absolute left-1/2 top-0 h-full w-px bg-lime/70" />
          <span className="absolute left-0 top-1/2 h-px w-full bg-lime/70" />
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sev-critical" />
        </div>
        <div className="absolute left-3 top-3 space-y-1">
          <Bar w={70} h={5} c="bg-lime" />
          <Bar w={50} h={4} c="bg-white/40" />
        </div>
        <div className="absolute right-3 top-3 h-10 w-10 rounded-md border border-white/20 bg-black/40" />
        <div className="absolute bottom-3 right-3 flex items-end gap-1">
          <span className="font-mono text-[10px] font-bold text-white">12</span>
          <span className="font-mono text-[8px] text-white/60">/ 30</span>
        </div>
        <div className="absolute bottom-3 left-3 flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`h-5 w-5 rounded-md border border-white/20 ${i === 0 ? 'bg-lime/30' : 'bg-black/40'}`} />
          ))}
        </div>
      </Landscape>
    </div>
  );
}

function BusSim() {
  return (
    <div className="flex h-full items-center justify-center px-6">
      <Landscape className="w-[88%]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#4c7dff_0%,#8fb3ff_45%,#2b2d3a_46%,#1c1d26_100%)]" />
        <div className="absolute bottom-0 left-1/2 h-[54%] w-[60%] -translate-x-1/2 bg-[#2a2b36] [clip-path:polygon(42%_0,58%_0,100%_100%,0_100%)]" />
        <div className="absolute bottom-0 left-1/2 h-[54%] w-1 -translate-x-1/2 bg-[repeating-linear-gradient(180deg,#f2c26b_0_8px,transparent_8px_16px)] [clip-path:polygon(40%_0,60%_0,100%_100%,0_100%)]" />
        <div className="absolute left-3 top-3 rounded-lg bg-ink/70 px-2 py-1 font-display text-[9px] font-bold tracking-wide text-white">
          RAPID<span className="text-lime">TRANSIT</span>
        </div>
        <div className="absolute right-3 top-3 w-24 space-y-1 rounded-lg bg-ink/70 p-1.5">
          <Bar w="100%" h={3} c="bg-white/20" />
          <Bar w="65%" h={3} c="bg-lime" className="-mt-1" />
        </div>
        <div className="absolute bottom-3 right-3 grid h-12 w-12 place-items-center rounded-full border-2 border-azure bg-ink/80">
          <span className="font-mono text-[10px] font-bold text-white">48</span>
        </div>
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          <span className="h-6 w-10 rounded-md bg-sev-critical/70" />
          <span className="h-6 w-10 rounded-md bg-lime/80" />
        </div>
      </Landscape>
    </div>
  );
}

function Auth() {
  const Form = ({ title, fields, cta }) => (
    <div className="flex h-full flex-col justify-center gap-2 p-3">
      <span className="mx-auto mb-1 h-6 w-6 rounded-lg bg-violet" />
      <Bar w="55%" h={6} className="mx-auto" />
      <Bar w="40%" h={3} c="bg-white/30" className="mx-auto mb-2" />
      {Array.from({ length: fields }).map((_, i) => (
        <span key={i} className={`h-5 rounded-md border ${i === 1 && title === 'signup' ? 'border-sev-critical/60' : 'border-white/15'} bg-white/[0.04]`} />
      ))}
      <span className="mt-1 h-5 rounded-md bg-lime" />
      <Bar w="50%" h={3} c="bg-white/25" className="mx-auto mt-1" />
      <span className="sr-only">{cta}</span>
    </div>
  );
  return (
    <div className="flex h-full items-center justify-center gap-4">
      <Phone className="w-[26%]" tilt={-4}>
        <Form title="login" fields={2} cta="Login" />
      </Phone>
      <Phone className="w-[26%]" tilt={4}>
        <Form title="signup" fields={4} cta="Sign up" />
      </Phone>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute h-[70%] aspect-square rounded-full border border-dashed border-white/15" />
      <div className="absolute h-[46%] aspect-square rounded-full border border-white/10" />
      <div className="absolute h-px w-[70%] bg-white/10" />
      <div className="absolute h-[70%] w-px bg-white/10" />
      <div className="relative grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-violet to-azure shadow-[0_20px_60px_-10px_rgba(139,107,255,0.7)]">
        <span className="h-10 w-10 rotate-45 rounded-xl border-[6px] border-white" />
        <span className="absolute right-4 top-4 h-3 w-3 rounded-full bg-lime" />
      </div>
      <div className="absolute bottom-[12%] flex gap-2">
        {['bg-violet', 'bg-azure', 'bg-lime', 'bg-white'].map((c) => (
          <span key={c} className={`h-3 w-3 rounded-full ${c}`} />
        ))}
      </div>
    </div>
  );
}

function WebHero() {
  return (
    <div className="flex h-full items-center justify-center gap-4 px-6">
      <Browser className="w-[62%]">
        <div className="aspect-[16/10] bg-[linear-gradient(120deg,#0b1340,#2340a0_70%,#8fb3ff)] p-3">
          <div className="flex items-center justify-between">
            <Bar w={30} h={4} c="bg-white/80" />
            <span className="h-2.5 w-8 rounded-sm bg-[#f5e663]" />
          </div>
          <div className="mt-[12%] space-y-1.5">
            <Bar w="30%" h={3} c="bg-white/50" />
            <Bar w="62%" h={8} c="bg-white" />
            <Bar w="48%" h={8} c="bg-white" />
            <span className="mt-2 block h-3 w-12 rounded-sm bg-[#f5e663]" />
          </div>
        </div>
      </Browser>
      <div className="grid w-[26%] grid-cols-2 gap-1.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <Phone key={i} className="w-full !rounded-xl !p-0.5">
            <div className="space-y-1 p-1.5 pt-3">
              <span className="block h-3 rounded bg-azure/70" />
              <Bar w="80%" h={3} c="bg-white/40" />
              <Bar w="60%" h={3} c="bg-white/20" />
            </div>
          </Phone>
        ))}
      </div>
    </div>
  );
}

function WebLanding() {
  return (
    <div className="flex h-full items-center justify-center px-8">
      <Browser className="w-[70%]">
        <div className="space-y-2 bg-[#f4f4f6] p-3">
          <div className="flex items-center justify-between">
            <Bar w={26} h={4} c="bg-ink" />
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <Bar key={i} w={14} h={3} c="bg-ink/40" />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2 rounded-md bg-white p-2">
            <div className="space-y-1">
              <Bar w="90%" h={6} c="bg-ink" />
              <Bar w="70%" h={6} c="bg-ink" />
              <span className="mt-1 block h-2.5 w-10 rounded-full bg-violet" />
            </div>
            <span className="h-12 rounded-md bg-gradient-to-br from-violet/60 to-azure/60" />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-8 rounded-md bg-white" />
            ))}
          </div>
          <span className="block h-5 rounded-md bg-ink" />
        </div>
      </Browser>
    </div>
  );
}

function FoodWireframe() {
  const Box = ({ h = 14, label }) => (
    <div className="rounded-md border border-dashed border-black/25 bg-black/[0.04] px-1.5 py-1" style={{ minHeight: h }}>
      {label && <span className="font-mono text-[6px] text-black/50">{label}</span>}
    </div>
  );
  return (
    <div className="flex h-full items-center justify-center gap-4">
      <Phone className="w-[26%]" tilt={-3}>
        <div className="h-full space-y-1.5 bg-[#f1f1f3] p-2 pt-5">
          <Box label="Header · Logo · Bell" />
          <Box label="Search restaurant or food" />
          <Box h={30} label="Promotional banner" />
          <div className="flex gap-1">
            {['Pizza', 'Sushi', 'Burger'].map((c) => (
              <span key={c} className="rounded-full bg-black/10 px-1.5 font-mono text-[6px] text-black/60">
                {c}
              </span>
            ))}
          </div>
          <Box h={24} label="Featured restaurants" />
        </div>
      </Phone>
      <Phone className="w-[26%]" tilt={3}>
        <div className="h-full space-y-1.5 bg-[#f1f1f3] p-2 pt-5">
          <Box label="Back · Title · Filter" />
          <div className="flex gap-1">
            <span className="rounded-full bg-black/10 px-2 font-mono text-[6px] text-black/60">Sort</span>
            <span className="rounded-full bg-black/10 px-2 font-mono text-[6px] text-black/60">Rating</span>
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex gap-1">
              <span className="h-6 w-6 rounded bg-black/10" />
              <div className="flex-1 space-y-0.5 pt-0.5">
                <Bar w="80%" h={3} c="bg-black/20" />
                <Bar w="50%" h={3} c="bg-black/10" />
              </div>
            </div>
          ))}
        </div>
      </Phone>
    </div>
  );
}

const Marker = ({ n, className }) => (
  <span className={`absolute grid h-4 w-4 place-items-center rounded-full bg-sev-high font-mono text-[8px] font-bold text-ink shadow-[0_0_0_4px_rgba(242,194,107,0.2)] ${className}`}>
    {n}
  </span>
);

function QaMobile() {
  return (
    <div className="flex h-full items-center justify-center gap-5">
      <Phone className="w-[26%]">
        <div className="flex h-full flex-col justify-center gap-2 p-3">
          <Bar w="55%" h={6} className="mx-auto mb-2" />
          <span className="h-5 rounded-md border border-white/15 bg-white/[0.04]" />
          <span className="h-5 rounded-md border border-sev-critical/60 bg-white/[0.04]" />
          <Bar w="60%" h={3} c="bg-sev-critical/70" />
          <span className="mt-1 h-5 rounded-md bg-lime/80" />
        </div>
        <Marker n={1} className="right-2 top-[44%]" />
        <Marker n={2} className="right-2 bottom-[30%]" />
      </Phone>
      <div className="w-[34%] space-y-2">
        {[
          ['TC-001', 'PASS', 'text-lime'],
          ['TC-002', 'PASS', 'text-lime'],
          ['TC-003', 'FAIL', 'text-sev-critical'],
        ].map(([id, s, c]) => (
          <div key={id} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
            <span className="font-mono text-[10px] text-white/80">{id}</span>
            <span className={`font-mono text-[9px] font-bold ${c}`}>{s}</span>
          </div>
        ))}
        <div className="rounded-lg border border-sev-high/30 bg-sev-high/10 px-2.5 py-2 font-mono text-[9px] text-sev-high">BUG-001 · High</div>
      </div>
    </div>
  );
}

function QaGame() {
  return (
    <div className="relative flex h-full items-center justify-center px-6">
      <Landscape className="w-[80%]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d1640,#2a1466_50%,#0b1340)]" />
        <div className="absolute bottom-[22%] left-[20%] h-6 w-4 rounded-sm bg-lime" />
        <div className="absolute bottom-[18%] left-0 right-0 h-px bg-white/30" />
        <div className="absolute bottom-[22%] left-[46%] h-10 w-3 bg-white/20" />
        <span className="absolute bottom-[26%] left-[44%] h-10 w-10 rounded-md border-2 border-dashed border-sev-high" />
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded bg-black/50 px-1.5 py-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-sev-critical" />
          <span className="font-mono text-[8px] text-white">PAUSED 00:42</span>
        </div>
      </Landscape>
      <div className="glass-strong absolute bottom-[14%] right-[6%] w-[34%] space-y-1 rounded-xl p-2.5">
        {['Controls', 'Collision', 'Pause/resume', 'Win/lose'].map((t, i) => (
          <div key={t} className="flex items-center justify-between font-mono text-[8px]">
            <span className="text-white/80">{t}</span>
            <span className={i === 1 || i === 2 ? 'text-sev-critical' : 'text-lime'}>{i === 1 || i === 2 ? 'FAIL' : 'PASS'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QaWeb() {
  return (
    <div className="relative flex h-full items-end justify-center gap-3 px-6 pb-[12%]">
      <Browser className="w-[52%]">
        <div className="aspect-[16/10] space-y-1.5 p-2.5">
          <Bar w="40%" h={5} />
          <span className="block h-8 rounded bg-violet/40" />
          <div className="grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-6 rounded bg-white/10" />
            ))}
          </div>
        </div>
      </Browser>
      <div className="relative aspect-[3/4] w-[20%] rounded-lg border border-white/15 bg-[#0c0b16] p-1.5">
        <span className="block h-3 rounded bg-white/10" />
        <span className="absolute inset-x-1.5 top-4 h-8 rounded border-2 border-dashed border-sev-high bg-sev-high/10" />
        <Marker n={1} className="-right-2 top-3" />
      </div>
      <Phone className="w-[11%] !rounded-lg !p-0.5">
        <div className="space-y-1 p-1 pt-3">
          <span className="block h-2 rounded bg-white/15" />
          <span className="block h-4 rounded bg-violet/40" />
        </div>
      </Phone>
    </div>
  );
}

const variants = {
  'phone-wallpaper': Wallpaper,
  'phone-remote': Remote,
  'game-hud': GameHud,
  'bus-sim': BusSim,
  auth: Auth,
  logo: Logo,
  'web-hero': WebHero,
  'web-landing': WebLanding,
  'food-wireframe': FoodWireframe,
  'qa-mobile': QaMobile,
  'qa-game': QaGame,
  'qa-web': QaWeb,
};

export default function ProjectVisual({ project, className = '' }) {
  const a = getAccent(project.accent);
  const Variant = variants[project.visual] || Wallpaper;
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-panel via-coal to-ink" aria-hidden />
      <div className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(circle at 70% 20%, ${a.glow}, transparent 60%)` }} aria-hidden />
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} — ${project.category} project preview`}
          loading="lazy"
          className="relative h-full w-full object-cover"
        />
      ) : (
        <div
          className="relative mx-auto aspect-[16/10] h-full max-w-full"
          role="img"
          aria-label={`Illustrated preview of ${project.title}`}
        >
          <Variant />
        </div>
      )}
    </div>
  );
}
