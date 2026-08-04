import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../lib/motion';

/**
 * Plays a sequential entrance on mount for direct children marked
 * [data-hero-step] inside the returned scope. Skipped under
 * prefers-reduced-motion (content stays visible via CSS default state).
 */
export function useHeroIntro() {
  const scopeRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !scopeRef.current) return;

      const steps = scopeRef.current.querySelectorAll('[data-hero-step]');
      if (!steps.length) return;

      gsap.from(steps, {
        opacity: 0,
        y: 18,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.1,
        clearProps: 'transform',
      });
    },
    { scope: scopeRef }
  );

  return scopeRef;
}
