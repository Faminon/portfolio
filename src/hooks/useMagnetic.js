import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../lib/motion';

/**
 * Pulls the returned element toward the cursor on hover, with a clamped
 * strength so it never leaves its own hit box. Reserve for one focal
 * element per screen.
 */
export function useMagnetic(strength = 0.3) {
  const elRef = useRef(null);

  useGSAP(() => {
    const el = elRef.current;
    if (prefersReducedMotion() || !el) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'elastic.out(1, 0.4)' });

    const handleMove = (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * strength);
      yTo((e.clientY - r.top - r.height / 2) * strength);
    };
    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);

  return elRef;
}
