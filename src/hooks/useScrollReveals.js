import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../lib/motion';

/**
 * Scans the returned scope for [data-reveal-group] containers (staggers direct
 * children) and standalone [data-reveal] elements (fades in individually) as
 * they enter the viewport. No-ops entirely under prefers-reduced-motion.
 */
export function useScrollReveals(deps = []) {
  const scopeRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !scopeRef.current) return;

      const groups = scopeRef.current.querySelectorAll('[data-reveal-group]');
      groups.forEach((group) => {
        gsap.from(group.children, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: group,
            start: 'top 88%',
          },
        });
      });

      const singles = scopeRef.current.querySelectorAll(
        '[data-reveal]:not([data-reveal-group] > [data-reveal])'
      );
      singles.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 16,
          duration: 0.4,
          ease: 'power1.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        });
      });
    },
    { scope: scopeRef, dependencies: deps }
  );

  return scopeRef;
}
