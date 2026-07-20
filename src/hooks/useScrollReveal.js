import { useEffect } from 'react';

/**
 * Custom hook to monitor elements with a specific class and trigger fade-in/slide-up animations
 * once they enter the viewport.
 * 
 * Usage: Add 'reveal-element' and a style modifier (like 'reveal-fade' or 'reveal-slide-up') to elements,
 * and they will transition to fully visible when scrolled into view.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null, // Viewport
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of element is visible
    };

    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Once the animation is triggered, we can stop observing it
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    const elementsToReveal = document.querySelectorAll('.reveal-element');

    elementsToReveal.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
