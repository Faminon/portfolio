import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../lib/motion';

/**
 * Grows a [data-timeline-line] element's height from 0 to 100% as the user
 * scrolls through the returned scope, tied directly to scroll position.
 */
export function useTimelineDraw() {
  const scopeRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !scopeRef.current) return;

      const line = scopeRef.current.querySelector('[data-timeline-line]');
      if (!line) return;

      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: scopeRef.current,
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        }
      );
    },
    { scope: scopeRef }
  );

  return scopeRef;
}
