import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

if (typeof document !== 'undefined' && document.fonts) {
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger };

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export const ease = {
  out: 'power2.out',
  softOut: 'power1.out',
  inOut: 'power2.inOut',
};
