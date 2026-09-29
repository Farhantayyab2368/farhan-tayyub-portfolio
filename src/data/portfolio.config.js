/**
 * ============================================================
 *  PORTFOLIO CONFIGURATION — edit this file to update the site
 * ============================================================
 *  Everything a visitor reads (name, links, projects, test cases,
 *  bug reports, experience, services, statistics…) lives here.
 *  You should not need to touch any React component to change content.
 *
 *  Icons: use any icon name from https://lucide.dev/icons written in
 *  PascalCase (e.g. "Smartphone", "Gamepad2", "Bug") — see src/utils/icons.js
 *  for the list that is already registered.
 */

/* ------------------------------------------------------------------ */
/*  PROFILE                                                           */
/* ------------------------------------------------------------------ */
export const profile = {
  name: 'Farhan Tayyab',
  firstName: 'Farhan',
  initials: 'FT',
  roles: ['UI/UX Designer', 'Gameplay Tester', 'App Tester'],
  heroLabel: 'UI/UX DESIGNER • GAMEPLAY TESTER • APP TESTER',
  heroStatement:
    'I design intuitive digital experiences and test games and applications to help create better, smoother and more user-friendly products.',
  heroSecondary: 'UI/UX Design | Gameplay Testing | App Testing',
  about:
    'I am a Computer Science graduate with a strong interest in UI/UX design, software testing, gameplay testing and digital product experiences. I enjoy designing clean and user-friendly interfaces while also analyzing applications and games to identify usability issues, functional problems and opportunities for improvement.',
  // Optional profile photo, e.g. '/images/profile.jpg' (put the file in /public/images).
  // Leave empty to show the animated initials avatar.
  photo: '',
  location: 'Pakistan',
  availability: 'Open to Opportunities',
};

/* ------------------------------------------------------------------ */
/*  LINKS — leave a value empty ('') to hide that link everywhere      */
/* ------------------------------------------------------------------ */
export const socials = {
  email: 'farhantayyub123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/farhantayyab1209',
  github: 'https://github.com/Farhantayyab2368',
  behance: '', // e.g. 'https://www.behance.net/your-handle'
};

/* ------------------------------------------------------------------ */
/*  CV / RESUME                                                       */
/*  Put your PDF in /public/cv/ and keep the path below in sync.      */
/* ------------------------------------------------------------------ */
export const cv = {
  path: '/cv/Farhan-Tayyab-CV.pdf',
  fileName: 'Farhan-Tayyab-CV.pdf',
  heading: 'View My Resume',
  description: "Explore my professional experience, skills, UI/UX work and testing knowledge.",
};

/* ------------------------------------------------------------------ */
/*  CONTACT FORM                                                      */
/*  If formEndpoint is empty the form opens the visitor's email app   */
/*  with the message pre-filled (works with zero setup).              */
/*  To receive messages directly, create a free form at e.g.          */
/*  https://formspree.io and paste its endpoint URL here.             */
/* ------------------------------------------------------------------ */
export const contact = {
  heading: "Let's Work Together",
  text: 'Have a design project, testing requirement, or opportunity? Let\'s connect.',
  formEndpoint: '',
};

/* ------------------------------------------------------------------ */
/*  NAVIGATION                                                        */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testing', href: '#testing' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

/* ------------------------------------------------------------------ */
/*  QUICK INTRO CARDS (under the hero)                                */
/* ------------------------------------------------------------------ */
export const focusAreas = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    text: 'Designing intuitive interfaces, user flows, wireframes and prototypes.',
    icon: 'PenTool',
    accent: 'violet',
    href: '#projects',
  },
  {
    id: 'gameplay',
    title: 'Gameplay Testing',
    text: 'Testing gameplay mechanics, controls, UI, usability and player experience.',
    icon: 'Gamepad2',
    accent: 'lime',
    href: '#testing',
  },
  {
    id: 'apps',
    title: 'App Testing',
    text: 'Testing mobile/web applications for functionality, usability, UI issues and bugs.',
    icon: 'Smartphone',
    accent: 'blue',
    href: '#testing',
  },
];

/* ------------------------------------------------------------------ */
/*  ABOUT — info cards                                                */
/* ------------------------------------------------------------------ */
export const aboutCards = [
  { label: 'Role', value: 'UI/UX Designer | Gameplay Tester | App Tester', icon: 'Briefcase' },
  { label: 'Education', value: 'Computer Science', icon: 'GraduationCap' },
  { label: 'Tools', value: 'Figma • Canva • Unity • Jira/Test Management Tools', icon: 'Wrench' },
  { label: 'Focus', value: 'User Experience • Quality • Usability', icon: 'Target' },
  { label: 'Availability', value: 'Open to Opportunities', icon: 'BadgeCheck', highlight: true },
];

/* ------------------------------------------------------------------ */
/*  STATISTICS — keep these honest; update as you grow                */
/* ------------------------------------------------------------------ */
export const stats = [
  { value: 10, suffix: '+', label: 'UI/UX Screens' },
  { value: 5, suffix: '+', label: 'Design Projects' },
  { value: 20, suffix: '+', label: 'Test Cases' },
  { value: 10, suffix: '+', label: 'Testing Scenarios' },
];

/* ------------------------------------------------------------------ */
/*  SKILLS                                                            */
/* ------------------------------------------------------------------ */
export const skillGroups = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    icon: 'PenTool',
    accent: 'violet',
    summary: 'From user flows to polished, responsive interfaces.',
    skills: [
      'Figma', 'Wireframing', 'Prototyping', 'User Flows', 'UI Design', 'UX Design',
      'Responsive Design', 'Design Systems', 'Mobile App Design', 'Web Design', 'Usability',
    ],
  },
  {
    id: 'gameplay',
    title: 'Gameplay Testing',
    icon: 'Gamepad2',
    accent: 'lime',
    summary: 'Breaking games so players never have to.',
    skills: [
      'Gameplay Testing', 'Functional Testing', 'UI Testing', 'Usability Testing',
      'Game Controls Testing', 'Level Testing', 'Bug Identification', 'Regression Testing',
      'Player Experience Testing',
    ],
  },
  {
    id: 'apps',
    title: 'App Testing',
    icon: 'Smartphone',
    accent: 'blue',
    summary: 'Mobile and web apps checked for function, feel and consistency.',
    skills: [
      'Mobile App Testing', 'Web App Testing', 'Functional Testing', 'UI Testing',
      'Usability Testing', 'Compatibility Testing', 'Regression Testing',
      'Exploratory Testing', 'Bug Reporting',
    ],
  },
  {
    id: 'general',
    title: 'General',
    icon: 'ListChecks',
    accent: 'white',
    summary: 'The habits that make design and QA work reliable.',
    skills: [
      'Test Case Writing', 'Bug Reporting', 'Problem Solving', 'Attention to Detail',
      'Team Collaboration', 'Communication', 'Documentation',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  PROJECT FILTERS                                                   */
/*  Each project lists one or more of these ids in `filters`.         */
/* ------------------------------------------------------------------ */
export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'uiux', label: 'UI/UX Design' },
  { id: 'gameui', label: 'Game UI' },
  { id: 'gameplay-testing', label: 'Gameplay Testing' },
  { id: 'app-testing', label: 'App Testing' },
  { id: 'qa', label: 'QA' },
];

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                          */
/*  kind: 'design' | 'testing'                                        */
/*  visual: built-in illustrated mockup used when `image` is empty.   */
/*    phone-wallpaper | phone-remote | game-hud | bus-sim | auth |    */
/*    logo | web-hero | web-landing | food-wireframe |                */
/*    qa-mobile | qa-game | qa-web                                    */
/*  image: optional real screenshot, e.g. '/images/projects/x.png'    */
/*  links: optional [{ label, url }] — shown as buttons in the modal  */
/* ------------------------------------------------------------------ */
export const projects = [
  {
    id: 'edge-aura',
    kind: 'design',
    title: 'Edge Aura',
    category: 'UI/UX Design',
    filters: ['uiux'],
    visual: 'phone-wallpaper',
    image: '',
    accent: 'violet',
    description:
      'Designed a modern mobile application experience focused on wallpapers and screen-edge customization, including onboarding, authentication and subscription interfaces.',
    screens: ['Onboarding', 'Login', 'Signup', 'Home', 'Subscription', 'Wallpaper screens'],
    objective:
      'Create a visually rich but easy-to-use app where people can browse wallpapers and customize animated screen-edge lighting without getting lost in settings.',
    role: 'UI/UX Designer — user flows, wireframes, visual design and prototype.',
    tools: ['Figma'],
    process: [
      'Mapped the core flow: onboarding → sign in → browse → customize → subscribe.',
      'Wireframed each screen to settle hierarchy before adding visual style.',
      'Built a dark, high-contrast visual language so wallpapers stay the hero.',
      'Connected screens into a clickable prototype to walk through the flow.',
    ],
    design:
      'Dark UI with vivid accent glows, large preview cards and a clear bottom navigation. Subscription benefits are shown as simple, scannable rows.',
    testing:
      'Walked through the prototype as a first-time user to check that every screen has a clear next step and that the paywall never blocks basic browsing.',
    issues: [
      'Early onboarding had too many steps before users could see any wallpapers.',
      'Edge-lighting controls were hard to discover from the home screen.',
    ],
    improvements: [
      'Shortened onboarding and let users preview content before signing up.',
      'Added a dedicated customize entry point with live preview.',
    ],
    result:
      'A complete, consistent mobile app design covering onboarding, authentication, home, wallpaper and subscription screens.',
    links: [],
  },
  {
    id: 'tv-remote',
    kind: 'design',
    title: 'TV Remote App',
    category: 'UI/UX Design',
    filters: ['uiux'],
    visual: 'phone-remote',
    image: '',
    accent: 'blue',
    description:
      'Designed a smart TV remote application experience featuring screen casting, touchpad controls, voice input and support for multiple TV brands.',
    screens: ['Onboarding', 'Remote interface', 'Touchpad', 'Voice control', 'Screen casting'],
    objective:
      'Replace a physical remote with an app that feels just as quick: big targets, predictable layout and easy switching between control modes.',
    role: 'UI/UX Designer — interaction design, control layout and visual design.',
    tools: ['Figma'],
    process: [
      'Listed the actions people use most on a physical remote and prioritised them.',
      'Designed separate modes (buttons, touchpad, voice, casting) with one consistent header.',
      'Sized controls for one-handed thumb use.',
      'Prototyped the device-connection flow for multiple TV brands.',
    ],
    design:
      'Large circular D-pad, clear power/volume groupings and a mode switcher at the bottom. Voice and casting screens use strong visual feedback states.',
    testing:
      'Checked reachability of key controls on small screens and verified every mode could be reached in one tap.',
    issues: [
      'Volume and channel controls looked too similar at a glance.',
      'Connection errors had no clear recovery action.',
    ],
    improvements: [
      'Differentiated control groups with shape and spacing.',
      'Added a friendly reconnect state with step-by-step guidance.',
    ],
    result: 'A clean multi-mode remote experience covering onboarding, remote, touchpad, voice and casting.',
    links: [],
  },
  {
    id: 'sniper-game-ui',
    kind: 'design',
    title: 'Sniper Shooting Game UI',
    category: 'Game UI/UX',
    filters: ['gameui'],
    visual: 'game-hud',
    image: '',
    accent: 'lime',
    description:
      'Designed a complete game interface including home screen, weapon selection, gameplay HUD, missions, mission results and settings.',
    screens: ['Home screen', 'Weapon selection', 'Gameplay HUD', 'Missions', 'Mission results', 'Settings'],
    objective:
      'Give players a fast path into missions and a HUD that shows critical information without covering the scope view.',
    role: 'Game UI/UX Designer — menu flow, HUD layout and visual identity.',
    tools: ['Figma', 'Canva'],
    process: [
      'Defined the player loop: home → mission select → loadout → play → results.',
      'Designed the HUD around the scope, pushing secondary info to the edges.',
      'Created weapon cards with comparable stat bars.',
      'Designed results and settings screens to match the same visual language.',
    ],
    design:
      'Tactical dark palette with a sharp accent colour, angled panels and readable stat bars. HUD elements are grouped into corners for quick glances.',
    testing:
      'Reviewed HUD readability against bright and dark game scenes and checked that key buttons stay within thumb reach in landscape.',
    issues: [
      'Ammo and objective indicators competed for attention in the same corner.',
      'Weapon stats were hard to compare between cards.',
    ],
    improvements: [
      'Separated ammo (bottom right) from objectives (top left).',
      'Unified stat bars so weapons can be compared side by side.',
    ],
    result: 'A full game UI kit covering menus, loadout, HUD, missions, results and settings.',
    links: [],
  },
  {
    id: 'rapid-transit',
    kind: 'design',
    title: 'Rapid Transit: Terminal Master',
    category: 'Game UI/UX',
    filters: ['gameui'],
    visual: 'bus-sim',
    image: '',
    accent: 'blue',
    description:
      'Designed a modern bus simulator interface and visual identity focused on clear navigation and engaging player interaction.',
    screens: ['Main menu', 'Bus garage', 'Route selection', 'Driving HUD', 'Level complete'],
    objective:
      'Make a simulation game approachable: clear menus, readable driving HUD and a visual identity players remember.',
    role: 'Game UI/UX Designer — visual identity, menu navigation and HUD.',
    tools: ['Figma', 'Canva'],
    process: [
      'Explored a visual identity and logo direction for the game.',
      'Structured navigation so the player is never more than two taps from driving.',
      'Designed a driving HUD with speed, route progress and passenger info.',
      'Kept a consistent component style across every menu.',
    ],
    design:
      'Bold, friendly identity with rounded panels, strong route colours and large touch targets suitable for playing while steering.',
    testing:
      'Reviewed each menu for navigation dead-ends and checked HUD legibility at small screen sizes.',
    issues: ['Route selection showed too much text for a quick decision.'],
    improvements: ['Replaced text-heavy route cards with icons, distance and reward at a glance.'],
    result: 'A cohesive visual identity and interface for a modern bus simulator.',
    links: [],
  },
  {
    id: 'food-delivery',
    kind: 'design',
    title: 'Food Delivery App',
    category: 'UI/UX Design',
    filters: ['uiux'],
    visual: 'food-wireframe',
    image: '',
    accent: 'lime',
    description:
      'Wireframed a food delivery app focusing on structure and flow — search, promotions, categories, featured restaurants and restaurant listings with sort and filter.',
    screens: ['Home', 'Search', 'Categories', 'Featured restaurants', 'Restaurant list', 'Sort & filter'],
    objective:
      'Plan a clear information architecture so hungry users can find a restaurant in as few steps as possible.',
    role: 'UI/UX Designer — information architecture and low-fidelity wireframes.',
    tools: ['Figma'],
    process: [
      'Defined the home screen hierarchy: header, search, promo banner, categories, featured list.',
      'Designed a restaurant listing with sort and rating filters.',
      'Annotated every block so the structure is easy to hand over for visual design.',
    ],
    design:
      'Low-fidelity, annotated wireframes that focus on layout, hierarchy and content priority before colour and style.',
    testing:
      'Checked that search and categories are reachable without scrolling and that each restaurant card shows the information needed to decide.',
    issues: ['Filtering options risked crowding the listing header.'],
    improvements: ['Grouped sort and rating into compact chips under the title bar.'],
    result: 'A structured wireframe set ready to move into high-fidelity UI design.',
    links: [
      {
        label: 'Open in Figma',
        url: 'https://www.figma.com/design/vkzTlpwGQDxoEFmTDaQwss/Food-Delivery-App?t=oM5ajFD4xpqUKI9w-0',
      },
    ],
  },
  {
    id: 'login-signup',
    kind: 'design',
    title: 'Login & Signup Pages',
    category: 'UI/UX Design',
    filters: ['uiux'],
    visual: 'auth',
    image: '',
    accent: 'violet',
    description:
      'Designed login and signup screens with clear form hierarchy, helpful validation states and a straightforward path to create an account.',
    screens: ['Login', 'Signup', 'Validation states'],
    objective:
      'Reduce friction at the very first touchpoint of a product: authentication.',
    role: 'UI/UX Designer — form design and visual design.',
    tools: ['Figma'],
    process: [
      'Kept only the fields that are truly required.',
      'Designed focus, error and success states for every input.',
      'Made switching between login and signup obvious.',
    ],
    design: 'Clean forms with generous spacing, clear labels and a single primary action per screen.',
    testing:
      'Used these screens as the basis for authentication test cases (valid/invalid credentials, empty fields, email format).',
    issues: ['Error messages need to explain how to fix the problem, not just that it happened.'],
    improvements: ['Wrote specific, inline error messages next to the relevant field.'],
    result: 'Ready-to-build authentication screens that also double as a test-case reference.',
    links: [
      {
        label: 'Open in Figma',
        url: 'https://www.figma.com/design/Hu0Ylykz6gcGmrDSZp6ZG2/Login-page-and-Signup-Page?node-id=0-1&p=f&t=oM5ajFD4xpqUKI9w-0',
      },
    ],
  },
  {
    id: 'website-redesign',
    kind: 'design',
    title: 'Website Homepage Redesign',
    category: 'UI/UX Design',
    filters: ['uiux'],
    visual: 'web-landing',
    image: '',
    accent: 'blue',
    description:
      'Redesigned a website homepage to improve visual hierarchy, section flow and readability across a long-scroll landing page.',
    screens: ['Hero', 'Content sections', 'Gallery', 'Footer'],
    objective: 'Make the homepage easier to scan and guide visitors towards the main call to action.',
    role: 'UI/UX Designer — layout, hierarchy and visual design.',
    tools: ['Figma'],
    process: [
      'Reviewed the original page and noted hierarchy and readability problems.',
      'Re-ordered sections into a clear story from hero to footer.',
      'Applied consistent spacing, type scale and imagery.',
    ],
    design: 'A long-scroll layout with a strong hero, alternating content blocks and a clear footer.',
    testing: 'Reviewed the redesign for consistent spacing, alignment and responsive behaviour.',
    issues: ['The original layout lacked a clear primary call to action.'],
    improvements: ['Introduced a single, repeated primary CTA and stronger section headings.'],
    result: 'A cleaner, more scannable homepage design.',
    links: [
      {
        label: 'Open in Figma',
        url: 'https://www.figma.com/design/UqBc7cqcaT8DvuwHZ6LUTh/Resdesign-website-Homepage?t=oM5ajFD4xpqUKI9w-0',
      },
    ],
  },
  {
    id: 'test-task',
    kind: 'design',
    title: 'Design Test Task — Web & Mobile',
    category: 'UI/UX Design',
    filters: ['uiux'],
    visual: 'web-hero',
    image: '',
    accent: 'violet',
    description:
      'A design assignment including a set of web hero banners and a large set of mobile app screens, built around consistent branding and layout.',
    screens: ['Web hero banners', 'Mobile app screens', 'Flows'],
    objective: 'Deliver consistent web and mobile screens under a time-boxed design task.',
    role: 'UI/UX Designer — layout, visual consistency and screen flows.',
    tools: ['Figma'],
    process: [
      'Designed a hero banner system with variations sharing one layout.',
      'Built mobile screens using repeated components for consistency.',
      'Organised screens into flows so reviewers can follow the journey.',
    ],
    design: 'Deep blue brand palette with a bright accent CTA, bold headlines and consistent component spacing.',
    testing: 'Checked alignment, spacing and component consistency across all screens before submission.',
    issues: ['Keeping many screens consistent by hand is error-prone.'],
    improvements: ['Relied on shared components so changes propagate everywhere.'],
    result: 'A complete, consistent set of web banners and mobile screens.',
    links: [
      {
        label: 'Open in Figma',
        url: 'https://www.figma.com/design/lPRo4GxKg2giyyh9jH5bQ6/Test_Task?node-id=0-1&p=f&t=oM5ajFD4xpqUKI9w-0',
      },
    ],
  },
  {
    id: 'logo-design',
    kind: 'design',
    title: 'Logo Design',
    category: 'UI/UX Design',
    filters: ['uiux'],
    visual: 'logo',
    image: '',
    accent: 'lime',
    description:
      'Logo and visual identity exploration — sketching concepts, refining shapes and testing how the mark works at different sizes.',
    screens: ['Concepts', 'Refinement', 'Final mark'],
    objective: 'Create a simple, memorable mark that stays legible from app icon to banner size.',
    role: 'Designer — concept, iteration and final artwork.',
    tools: ['Figma'],
    process: [
      'Explored several concept directions.',
      'Refined the strongest shapes for balance and simplicity.',
      'Checked the mark at small sizes and on dark and light backgrounds.',
    ],
    design: 'Simple geometric forms with strong contrast.',
    testing: 'Tested legibility at icon sizes and on different backgrounds.',
    issues: ['Fine details disappeared at small sizes.'],
    improvements: ['Simplified the mark and increased stroke weight.'],
    result: 'A clean logo that scales well across uses.',
    links: [
      {
        label: 'Open in Figma',
        url: 'https://www.figma.com/design/13Wwftqg40RE62250uTXLB/Logo?t=oM5ajFD4xpqUKI9w-0',
      },
    ],
  },

  /* ---------------- TESTING / QA PROJECTS ----------------------- */
  /* These are QA case studies. Update the numbers and notes with   */
  /* your real results whenever you complete new testing work.      */
  {
    id: 'qa-mobile-app',
    kind: 'testing',
    title: 'Mobile Application Testing',
    category: 'App Testing',
    filters: ['app-testing', 'qa'],
    visual: 'qa-mobile',
    image: '',
    accent: 'blue',
    context: 'QA case study',
    application: 'Android mobile app — authentication & core navigation',
    testingType: 'Functional • UI • Usability • Validation',
    testCases: 12,
    bugsFound: 5,
    severity: { high: 1, medium: 2, low: 2 },
    toolsUsed: ['Jira / test management', 'Google Sheets', 'Android device'],
    areas: [
      'Login', 'Signup', 'Navigation', 'Buttons', 'Forms', 'UI consistency',
      'Validation', 'Responsiveness', 'Error messages',
    ],
    summary:
      'Tested login, signup and navigation flows end to end. Focused on form validation, error messages, button states and UI consistency across screen sizes.',
    description:
      'Structured functional and usability testing of a mobile app’s authentication and navigation, documented as test cases and bug reports.',
    objective: 'Verify that a new user can sign up, log in and navigate the app without errors or confusion.',
    role: 'App Tester — test planning, test case writing, execution and bug reporting.',
    tools: ['Jira / test management', 'Google Sheets', 'Android device'],
    process: [
      'Reviewed requirements and listed expected behaviour for each screen.',
      'Wrote positive and negative test cases for every form field.',
      'Executed tests on different screen sizes.',
      'Logged issues with steps, expected vs actual and severity.',
      'Retested fixes and ran a short regression pass.',
    ],
    design: 'Reviewed layout consistency, spacing and button states against the design.',
    testing: 'Functional, UI, usability, validation and responsiveness testing.',
    issues: [
      'Login button did not respond on first tap in one scenario.',
      'Validation message for invalid email was generic.',
      'Inconsistent button styles between login and signup.',
    ],
    improvements: [
      'Recommended field-specific validation messages.',
      'Recommended a shared button component for consistency.',
    ],
    result: 'A clear set of reproducible reports that made authentication more reliable and consistent.',
    links: [],
  },
  {
    id: 'qa-gameplay',
    kind: 'testing',
    title: 'Gameplay Testing',
    category: 'Gameplay Testing',
    filters: ['gameplay-testing', 'qa'],
    visual: 'qa-game',
    image: '',
    accent: 'lime',
    context: 'QA case study',
    application: 'Mobile action game — core loop, HUD and game states',
    testingType: 'Gameplay • Functional • UI/HUD • Performance',
    testCases: 14,
    bugsFound: 6,
    severity: { high: 2, medium: 2, low: 2 },
    toolsUsed: ['Unity (build testing)', 'Jira / test management', 'Screen recording'],
    areas: [
      'Player controls', 'Gameplay mechanics', 'Level progression', 'UI/HUD', 'Collision',
      'Game states', 'Pause/resume', 'Win/lose conditions', 'Performance', 'Player experience',
    ],
    summary:
      'Played through levels to check controls, collisions, HUD updates, pause/resume behaviour and win/lose conditions, and noted where the player experience felt unclear.',
    description:
      'Gameplay testing covering mechanics, controls, game states and player experience, with bugs documented for developers.',
    objective: 'Find gameplay, UI and state bugs before players do, and flag friction in the player experience.',
    role: 'Gameplay Tester — exploratory play, structured test cases and bug reports.',
    tools: ['Unity (build testing)', 'Jira / test management', 'Screen recording'],
    process: [
      'Learned the intended mechanics and win/lose rules.',
      'Wrote test cases for controls, states and level progression.',
      'Ran exploratory sessions to find edge cases.',
      'Recorded videos for hard-to-reproduce issues.',
      'Retested fixed builds and checked for regressions.',
    ],
    design: 'Evaluated HUD readability and menu flow from a player’s point of view.',
    testing: 'Gameplay, functional, UI/HUD, collision, state and basic performance testing.',
    issues: [
      'Game timer continued running while paused.',
      'Player could clip through a wall at a specific angle.',
      'HUD score did not update after resuming.',
    ],
    improvements: [
      'Suggested freezing all timers in the pause state.',
      'Suggested clearer feedback when a mission objective completes.',
    ],
    result: 'Documented reproducible gameplay bugs and player-experience improvements.',
    links: [],
  },
  {
    id: 'qa-web-app',
    kind: 'testing',
    title: 'Web App & Responsive UI Testing',
    category: 'App Testing',
    filters: ['app-testing', 'qa'],
    visual: 'qa-web',
    image: '',
    accent: 'violet',
    context: 'QA case study',
    application: 'Web application — forms, navigation and responsive layouts',
    testingType: 'Compatibility • Exploratory • UI • Regression',
    testCases: 8,
    bugsFound: 4,
    severity: { high: 0, medium: 2, low: 2 },
    toolsUsed: ['Chrome DevTools', 'Multiple browsers', 'Google Sheets'],
    areas: [
      'Navigation', 'Forms', 'Links', 'Responsive layouts', 'Cross-browser',
      'UI consistency', 'Accessibility basics',
    ],
    summary:
      'Checked a web app across browsers and screen widths, looking for broken layouts, overlapping elements, form issues and inconsistent UI.',
    description: 'Compatibility and exploratory testing of a web app on multiple browsers and viewport sizes.',
    objective: 'Make sure the web app looks and works the same across devices and browsers.',
    role: 'App Tester — compatibility testing, exploratory testing and reporting.',
    tools: ['Chrome DevTools', 'Multiple browsers', 'Google Sheets'],
    process: [
      'Defined target browsers and breakpoints.',
      'Ran each key page through every breakpoint.',
      'Explored forms with unusual input.',
      'Logged layout and functional issues with screenshots.',
    ],
    design: 'Compared implemented layouts to the intended design at each breakpoint.',
    testing: 'Compatibility, responsive, exploratory, UI and regression testing.',
    issues: [
      'Navigation menu overlapped content at tablet width.',
      'Submit button hidden below the fold on small phones.',
    ],
    improvements: ['Recommended a collapsible menu for tablet widths.', 'Recommended a sticky form action.'],
    result: 'A cross-browser issue list that helped make the layout consistent on every screen.',
    links: [],
  },
];

/* ------------------------------------------------------------------ */
/*  TEST CASES — shown in the "Test Case Examples" table              */
/*  status: 'PASS' | 'FAIL' | 'BLOCKED'                                */
/* ------------------------------------------------------------------ */
export const testCases = [
  {
    id: 'TC-001',
    module: 'Authentication',
    scenario: 'Login with valid credentials',
    preconditions: 'User has a registered account.',
    steps: ['Open the application', 'Enter a registered email', 'Enter the correct password', 'Tap Login'],
    testData: 'email: user@example.com / password: valid password',
    expected: 'User should successfully login and land on the dashboard.',
    actual: 'User logged in and dashboard was displayed.',
    status: 'PASS',
    priority: 'High',
  },
  {
    id: 'TC-002',
    module: 'Authentication',
    scenario: 'Login with invalid password',
    preconditions: 'User has a registered account.',
    steps: ['Open the application', 'Enter a registered email', 'Enter an incorrect password', 'Tap Login'],
    testData: 'email: user@example.com / password: wrong password',
    expected: 'Appropriate error message should appear and the user stays on the login screen.',
    actual: '“Incorrect password” message displayed below the password field.',
    status: 'PASS',
    priority: 'High',
  },
  {
    id: 'TC-003',
    module: 'Signup',
    scenario: 'Signup with an invalid email format',
    preconditions: 'User is on the signup screen.',
    steps: ['Enter name', 'Enter “user@mail” as email', 'Enter a valid password', 'Tap Create Account'],
    testData: 'email: user@mail',
    expected: 'Inline validation message: “Enter a valid email address”. Account is not created.',
    actual: 'Generic “Something went wrong” message shown.',
    status: 'FAIL',
    priority: 'Medium',
  },
  {
    id: 'TC-004',
    module: 'Signup',
    scenario: 'Submit signup form with empty required fields',
    preconditions: 'User is on the signup screen.',
    steps: ['Leave all fields empty', 'Tap Create Account'],
    testData: '—',
    expected: 'Each required field is highlighted with a clear message.',
    actual: 'All required fields highlighted with messages.',
    status: 'PASS',
    priority: 'Medium',
  },
  {
    id: 'TC-005',
    module: 'Gameplay',
    scenario: 'Pause and resume during a mission',
    preconditions: 'A mission is in progress.',
    steps: ['Start a mission', 'Tap Pause', 'Wait 10 seconds', 'Tap Resume'],
    testData: '—',
    expected: 'Game, timer and enemies freeze while paused and resume from the same state.',
    actual: 'Mission timer kept counting down while paused.',
    status: 'FAIL',
    priority: 'High',
  },
  {
    id: 'TC-006',
    module: 'Gameplay',
    scenario: 'Mission complete screen shows correct results',
    preconditions: 'Player completes all objectives.',
    steps: ['Complete a mission', 'Observe the results screen'],
    testData: '—',
    expected: 'Results screen shows score, stars and rewards matching the mission performance.',
    actual: 'Score, stars and rewards displayed correctly.',
    status: 'PASS',
    priority: 'Medium',
  },
  {
    id: 'TC-007',
    module: 'Responsive UI',
    scenario: 'Navigation menu on tablet width (768px)',
    preconditions: 'Web app opened in a browser.',
    steps: ['Resize viewport to 768px', 'Open the navigation menu', 'Scroll the page'],
    testData: 'Viewport: 768 × 1024',
    expected: 'Menu is fully visible and does not overlap page content.',
    actual: 'Menu overlapped the page heading.',
    status: 'FAIL',
    priority: 'Low',
  },
];

/* ------------------------------------------------------------------ */
/*  BUG REPORTS                                                       */
/*  severity / priority: 'Critical' | 'High' | 'Medium' | 'Low'       */
/*  status: 'Open' | 'In Progress' | 'Fixed' | 'Closed'               */
/* ------------------------------------------------------------------ */
export const bugReports = [
  {
    id: 'BUG-001',
    title: 'Login button does not respond',
    severity: 'High',
    priority: 'High',
    environment: 'Android / Chrome',
    module: 'Authentication',
    steps: ['Open application', 'Enter valid credentials', 'Tap Login'],
    expected: 'User should enter the dashboard.',
    actual: 'Nothing happens after tapping Login.',
    status: 'Open',
  },
  {
    id: 'BUG-002',
    title: 'Mission timer keeps running while game is paused',
    severity: 'High',
    priority: 'Medium',
    environment: 'Android 13 / Game build',
    module: 'Gameplay — Game states',
    steps: ['Start any mission', 'Tap Pause', 'Wait 10 seconds', 'Tap Resume'],
    expected: 'Timer freezes during pause and resumes from the same value.',
    actual: 'Timer shows ~10 seconds less after resuming.',
    status: 'Fixed',
  },
  {
    id: 'BUG-003',
    title: 'Generic error shown for invalid email on signup',
    severity: 'Medium',
    priority: 'Medium',
    environment: 'Android / Chrome',
    module: 'Signup — Validation',
    steps: ['Open Signup', 'Enter “user@mail” as email', 'Tap Create Account'],
    expected: 'Inline message: “Enter a valid email address”.',
    actual: '“Something went wrong” toast appears; field is not highlighted.',
    status: 'In Progress',
  },
  {
    id: 'BUG-004',
    title: 'Navigation menu overlaps heading at tablet width',
    severity: 'Low',
    priority: 'Low',
    environment: 'Windows / Chrome & Edge — 768px',
    module: 'Responsive UI',
    steps: ['Open homepage', 'Resize to 768px width', 'Open navigation menu'],
    expected: 'Menu appears above content without overlapping text.',
    actual: 'Menu panel overlaps the page heading.',
    status: 'Open',
  },
];

/* ------------------------------------------------------------------ */
/*  TESTING PROCESS (horizontal timeline)                             */
/* ------------------------------------------------------------------ */
export const testingProcess = [
  { step: '01', title: 'Understand', text: 'Understand requirements and expected behavior.', icon: 'FileSearch' },
  { step: '02', title: 'Plan', text: 'Prepare testing scenarios and test cases.', icon: 'ClipboardList' },
  { step: '03', title: 'Execute', text: 'Run functional, usability and exploratory tests.', icon: 'Zap' },
  { step: '04', title: 'Identify', text: 'Find bugs, UI problems and usability issues.', icon: 'Bug' },
  { step: '05', title: 'Report', text: 'Document issues with clear reproduction steps.', icon: 'FileText' },
  { step: '06', title: 'Retest', text: 'Verify fixes after developers resolve issues.', icon: 'RefreshCw' },
  { step: '07', title: 'Validate', text: 'Perform regression testing and final validation.', icon: 'ShieldCheck' },
];

/* ------------------------------------------------------------------ */
/*  DESIGN PROCESS                                                    */
/* ------------------------------------------------------------------ */
export const designProcess = [
  { title: 'Research', text: 'Understand users and requirements.', icon: 'Search' },
  { title: 'Wireframe', text: 'Create structure and user flow.', icon: 'LayoutGrid' },
  { title: 'Design', text: 'Create visual UI.', icon: 'Palette' },
  { title: 'Prototype', text: 'Create interactive prototype.', icon: 'MousePointerClick' },
  { title: 'Test', text: 'Evaluate usability.', icon: 'ClipboardCheck', bridge: true },
  { title: 'Improve', text: 'Iterate based on findings.', icon: 'Repeat' },
];

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                        */
/*  period is optional — add dates like 'Jan 2025 – Apr 2025'         */
/* ------------------------------------------------------------------ */
export const experience = [
  {
    company: 'The Game Storm Studios Pvt (Ltd.)',
    role: 'UI/UX Designer',
    type: 'Internship — CMIT IP',
    period: 'Jan 2026 – Jun 2026',
    description:
      'Designed and prototyped user-friendly games and mobile interfaces in Figma and Unity. Tested many games, found bugs and glitches, and reported them to developers to improve user experience. Collaborated with developers on responsive layouts and design consistency.',
    tags: ['Figma', 'Unity', 'Game UI/UX', 'Gameplay Testing', 'Bug Reporting'],
    icon: 'Gamepad2',
  },
  {
    company: 'Rhombix Technologies',
    role: 'UI/UX Designer',
    type: 'Remote Internship',
    period: 'Nov 2025 – Jan 2026',
    description:
      'Worked on UI/UX design projects, creating modern interfaces and user-focused digital experiences using design tools such as Figma.',
    tags: ['Figma', 'UI Design', 'UX Design', 'Remote'],
    icon: 'PenTool',
  },
  {
    company: 'Ghani Group of Companies / Ghani Glass Limited',
    role: 'IT Intern',
    type: 'Internship',
    period: 'Aug 2025 – Oct 2025',
    description:
      'Worked with the IT team and gained practical experience with Oracle-based systems, technical tasks, teamwork and organizational workflows.',
    tags: ['Oracle Systems', 'IT Operations', 'Teamwork'],
    icon: 'Monitor',
  },
];

/* ------------------------------------------------------------------ */
/*  SERVICES                                                          */
/* ------------------------------------------------------------------ */
export const services = [
  { title: 'UI/UX Design', text: 'Modern interfaces and user experiences for websites and applications.', icon: 'PenTool', accent: 'violet' },
  { title: 'Gameplay Testing', text: 'Testing gameplay, controls, UI, mechanics and player experience.', icon: 'Gamepad2', accent: 'lime' },
  { title: 'Mobile & Web App Testing', text: 'Testing applications for functionality, usability, UI consistency and bugs.', icon: 'Smartphone', accent: 'blue' },
  { title: 'Test Case Design', text: 'Creating structured test scenarios and test cases.', icon: 'ClipboardList', accent: 'violet' },
  { title: 'Bug Reporting', text: 'Clear and reproducible bug documentation.', icon: 'Bug', accent: 'lime' },
  { title: 'UI Usability Review', text: 'Analyzing interfaces and identifying UX improvements.', icon: 'ScanSearch', accent: 'blue' },
];

/* ------------------------------------------------------------------ */
/*  SEO (index.html holds the static tags; keep them in sync)         */
/* ------------------------------------------------------------------ */
export const seo = {
  title: 'Farhan Tayyab | UI/UX Designer | Gameplay Tester | App Tester',
  description:
    'Portfolio of Farhan Tayyab — UI/UX Designer, Gameplay Tester and App Tester focused on creating user-friendly digital experiences and identifying usability, functional and gameplay issues.',
};
