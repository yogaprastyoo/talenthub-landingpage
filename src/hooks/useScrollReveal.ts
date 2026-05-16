import { useEffect, type RefObject } from "react";

export interface UseScrollRevealOptions {
  threshold?: number;
  staggerSelector?: string;
  staggerDelayMs?: number;
}

export function useScrollReveal<TElement extends HTMLElement>(
  ref: RefObject<TElement | null>,
  options: UseScrollRevealOptions = {},
) {
  const { threshold = 0.08, staggerSelector, staggerDelayMs = 60 } = options;

  useEffect(() => {
    const root = ref.current;

    if (!root) {
      return undefined;
    }

    const targets = Array.from(root.querySelectorAll<HTMLElement>(".scroll-reveal"));

    if (root.classList.contains("scroll-reveal")) {
      targets.unshift(root);
    }

    if (staggerSelector) {
      const staggered = Array.from(root.querySelectorAll<HTMLElement>(staggerSelector));
      staggered.forEach((element, index) => {
        element.style.transitionDelay = `${index * staggerDelayMs}ms`;
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [ref, staggerDelayMs, staggerSelector, threshold]);
}
