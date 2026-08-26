"use client";

import { useCallback, useRef, useState, type UIEvent } from "react";

export function useCarouselProgress() {
  const [progress, setProgress] = useState(0);
  const frame = useRef(0);

  const handleScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
    const track = event.currentTarget;
    const max = track.scrollWidth - track.clientWidth;
    const next = max > 0 ? Math.min(1, Math.max(0, track.scrollLeft / max)) : 0;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setProgress(next));
  }, []);

  return { progress, handleScroll };
}
