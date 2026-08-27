import type { Ref } from "react";

type CarouselIndicatorProps = {
  /** Total number of slides */
  total: number;
  /** Currently active slide index (0-based), used when progress is omitted */
  active?: number;
  /** 0–1 scroll progress; when set, the thumb tracks the carousel continuously */
  progress?: number;
  thumbRef?: Ref<HTMLDivElement>;
};

export function CarouselIndicator({
  total,
  active = 0,
  progress,
  thumbRef,
}: CarouselIndicatorProps) {
  const segmentPercent = 100 / total;
  const travel = 100 - segmentPercent;
  const leftPercent =
    progress != null ? travel * progress : segmentPercent * active;

  return (
    <div className="mb-5 mt-3 px-margin" aria-hidden>
      <div className="relative h-[3px] w-full rounded-full bg-neutral-300">
        <div
          ref={thumbRef}
          className="absolute top-0 h-full rounded-full bg-coach-black"
          style={{
            width: `${segmentPercent}%`,
            left: `${leftPercent}%`,
          }}
        />
      </div>
    </div>
  );
}
