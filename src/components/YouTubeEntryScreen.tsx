"use client";

import Image from "next/image";

type YouTubeEntryScreenProps = {
  onVisitSite: () => void;
};

const ENTRY_WIDTH = 603;
const ENTRY_HEIGHT = 1311;
const VISIT_SITE_LEFT = 451 / ENTRY_WIDTH;
const VISIT_SITE_TOP = 992 / ENTRY_HEIGHT;
const VISIT_SITE_WIDTH = 120 / ENTRY_WIDTH;
const VISIT_SITE_HEIGHT = 50 / ENTRY_HEIGHT;

export function YouTubeEntryScreen({ onVisitSite }: YouTubeEntryScreenProps) {
  return (
    <main className="min-h-screen w-full bg-white">
      <div
        className="relative w-full"
        style={{ aspectRatio: `${ENTRY_WIDTH} / ${ENTRY_HEIGHT}` }}
      >
        <Image
          src="/images/youtube-entry.png"
          alt="Coach YouTube channel"
          width={ENTRY_WIDTH}
          height={ENTRY_HEIGHT}
          className="absolute inset-0 h-full w-full object-cover object-top"
          priority
        />
        <button
          type="button"
          onClick={onVisitSite}
          className="absolute flex items-center justify-center rounded-[1px] bg-black/45 text-[16px] font-normal capitalize leading-[16px] text-white"
          style={{
            left: `${VISIT_SITE_LEFT * 100}%`,
            top: `${VISIT_SITE_TOP * 100}%`,
            width: `${VISIT_SITE_WIDTH * 100}%`,
            height: `${VISIT_SITE_HEIGHT * 100}%`,
          }}
          aria-label="Visit Site"
        >
          Visit Site
        </button>
      </div>
    </main>
  );
}
