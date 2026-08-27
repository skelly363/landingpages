"use client";

import { useEffect, useState, type RefObject } from "react";

/** Maps a tall sticky section through the viewport to a 0–1 progress value. */
export function useForcedScrollProgress(
  sectionRef: RefObject<HTMLElement | null>,
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const update = () => {
      const range = section.offsetHeight - window.innerHeight;
      const top = section.getBoundingClientRect().top;
      const next = range <= 0 ? 0 : Math.min(1, Math.max(0, -top / range));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setProgress(next));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionRef]);

  return progress;
}
