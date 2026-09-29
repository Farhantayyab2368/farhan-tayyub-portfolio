/** Smooth-scrolls to an in-page anchor such as "#projects". */
export function scrollToHash(hash) {
  const el = document.querySelector(hash);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  history.replaceState(null, '', hash);
  // move keyboard focus to the section for screen-reader and keyboard users
  el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}
