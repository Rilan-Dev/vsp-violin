"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal hook using IntersectionObserver.
 * Respects prefers-reduced-motion (the observer still fires, but the CSS
 * `.reveal` transition is collapsed to ~0ms under reduced motion, so there
 * is no visible animation — the element simply appears).
 *
 * Usage:
 *   const { ref, visible } = useReveal<HTMLDivElement>();
 *   <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>…
 *
 * The setState calls happen only inside the observer callback (async), never
 * synchronously in the effect body, so this complies with the React 19
 * set-state-in-effect rule.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string; once?: boolean }
) {
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px", once = true } =
    options ?? {};
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}
