# Farhan Tayyab — Portfolio

UI/UX Designer · Gameplay Tester · App Tester

Built with React 19, Vite, Tailwind CSS 4, Three.js / React Three Fiber / Drei, Framer Motion and Lucide React.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start the dev server → http://localhost:5173
npm run build      # production build → /dist
npm run preview    # preview the production build locally
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Project structure

```
public/
  cv/                     ← put your CV PDF here
  images/projects/        ← put project screenshots here
  favicon.svg, og-image.svg, robots.txt
src/
  data/portfolio.config.js   ← ALL content lives here (edit this file)
  components/                ← reusable UI (Navbar, ProjectCard, TestingCard, SkillCard,
                               ServiceCard, TestCaseTable, BugReportCard, ExperienceTimeline,
                               ContactForm, ProjectModal, Footer, LoadingScreen, CustomCursor…)
  components/three/          ← ThreeDScene (3D hero) + HeroPanels (floating UI cards)
  sections/                  ← page sections (Hero, About, Skills, Projects, Testing…)
  pages/Home.jsx             ← section order
  hooks/                     ← useMediaQuery, useActiveSection, useToast
  utils/                     ← icons, accent colours, CV download, smooth scroll
  styles/index.css           ← theme tokens (colours, fonts) + global styles
  assets/                    ← optional imported assets
```

## Updating content

Everything is in **`src/data/portfolio.config.js`** — no component edits needed.

### Social links
Edit the `socials` object. Any link left as `''` is hidden automatically.

```js
export const socials = {
  email: 'you@example.com',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  github: 'https://github.com/your-handle',
  behance: 'https://www.behance.net/your-handle',
};
```

### Replacing the CV
1. Copy your PDF to `public/cv/Farhan-Tayyab-CV.pdf`.
2. If you use a different file name, update `cv.path` and `cv.fileName` in the config.

Until the file exists, the "Download CV" buttons show a friendly message instead of a broken download.

### Adding project images
Every project shows an illustrated mockup by default. To use a real screenshot:
1. Save it in `public/images/projects/` (e.g. `edge-aura.png`, ideally 1600×1000).
2. Set `image: '/images/projects/edge-aura.png'` on that project.

### Adding a new project
Copy an existing object in the `projects` array and change the fields:

| Field | Notes |
| --- | --- |
| `id` | unique, URL-safe (used for `#project/<id>` links) |
| `kind` | `'design'` or `'testing'` (testing projects also appear in the Testing section) |
| `filters` | any of `uiux`, `gameui`, `gameplay-testing`, `app-testing`, `qa` |
| `visual` / `image` | built-in mockup name, or a screenshot path |
| `links` | e.g. `[{ label: 'Open in Figma', url: 'https://www.figma.com/…' }]` |
| `objective`, `role`, `tools`, `process`, `design`, `testing`, `issues`, `improvements`, `result` | shown in the project modal |

Testing projects also use `application`, `testingType`, `testCases`, `bugsFound`, `severity`, `toolsUsed`, `areas`, `summary`.

### Adding test cases
Add an object to `testCases`:

```js
{
  id: 'TC-008',
  module: 'Checkout',
  scenario: 'Apply an expired coupon',
  preconditions: 'Cart has at least one item.',
  steps: ['Open cart', 'Enter coupon EXPIRED10', 'Tap Apply'],
  testData: 'coupon: EXPIRED10',
  expected: 'Message “This coupon has expired” is shown.',
  actual: 'Message shown correctly.',
  status: 'PASS',           // PASS | FAIL | BLOCKED
  priority: 'Medium',
}
```

### Adding bug reports
Add an object to `bugReports` (`severity`/`priority`: Critical, High, Medium, Low · `status`: Open, In Progress, Fixed, Closed).

### Statistics
Edit the `stats` array. Keep numbers honest — they animate from 0 on scroll.

### Contact form
By default the form validates input and then opens the visitor's email app with the message pre-filled.
To receive messages directly, create a free form at [Formspree](https://formspree.io) and paste its endpoint into `contact.formEndpoint`.

## Performance & accessibility notes
- The 3D scene is lazy-loaded, pauses when scrolled out of view, and is simplified on tablet and mobile (no particles or floating panels on phones).
- `prefers-reduced-motion` disables floating, tilt, parallax and auto-play animations.
- The custom cursor is enabled only for mouse users.
- Keyboard: skip link, visible focus rings, focus-trapped modal and mobile menu, arrow-key navigation in the project modal and testing timeline.
- `three` is pinned to 0.182.x because newer versions log a deprecation warning from React Three Fiber.
