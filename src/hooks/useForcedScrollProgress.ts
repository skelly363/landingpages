"use client";

import { useLayoutEffect, type RefObject } from "react";

/** Pins a sticky chapter and maps vertical scroll to a 0–1 progress value. */
export function useForcedScrollProgress(
  sectionRef: RefObject<HTMLElement | null>,
  trackRef: RefObject<HTMLElement | null>,
  thumbRef: RefObject<HTMLElement | null>,
  slideCount: number,
) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const update = () => {
      const range = section.offsetHeight - window.innerHeight;
      const top = section.getBoundingClientRect().top;
      const progress = range <= 0 ? 0 : Math.min(1, Math.max(0, -top / range));
      const viewport = track.parentElement;
      const travel = Math.max(
        0,
        track.scrollWidth - (viewport?.clientWidth ?? 0),
      );
      track.style.transform = `translate3d(${-progress * travel}px, 0, 0)`;

      const thumb = thumbRef.current;
      if (thumb) {
        const segment = 100 / slideCount;
        thumb.style.left = `${(100 - segment) * progress}%`;
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionRef, trackRef, thumbRef, slideCount]);
}
