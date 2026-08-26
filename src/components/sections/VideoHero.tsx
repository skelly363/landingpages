"use client";

import { useEffect, useRef, useState } from "react";
import { FullBleed, PageSection } from "@/components/layout/Grid";
import { FilmPlayer } from "@/components/ui/FilmPlayer";
import { Reveal } from "@/components/ui/Reveal";
import { SPACING } from "@/lib/spacing";
import { ASPECT_RATIOS, SECTION_RATIOS } from "@/lib/aspect-ratios";

function FilmMedia() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setScale(1);
      return;
    }

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh;
      const end = vh * 0.35;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScale(1 + 0.25 * progress);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref}>
      <FilmPlayer
        src="/videos/video-hero.mp4"
        poster="/images/video-hero.jpg"
        ratioClass={ASPECT_RATIOS[SECTION_RATIOS.videoHero]}
        ariaLabel="Coach presents Live Your Story campaign film"
        videoClassName="origin-center will-change-transform"
        videoStyle={{ transform: `scale(${scale})` }}
      />
    </div>
  );
}

function FilmHeading() {
  return (
    <PageSection>
      <Reveal
        stagger
        className="flex flex-col items-center text-center"
        style={{ gap: SPACING.filmStack }}
      >
        <p className="text-coach-eyebrow font-coach-extended-bold">
          Watch the Film
        </p>
        <h2 className="max-w-[310px] font-coach-extended text-lg leading-normal">
          What happens when different stories cross paths?
        </h2>
      </Reveal>
    </PageSection>
  );
}

function FilmCaption() {
  return (
    <PageSection>
      <Reveal className="mx-auto max-w-[322px] text-center">
        <p className="text-coach-body">
          Starring Elle Fanning and a cast of Coach characters, follow a
          journey aboard the Coach tour bus and discover the magic of
          connecting IRL.
        </p>
      </Reveal>
    </PageSection>
  );
}

export function VideoHero() {
  return (
    <section className="w-full pb-4 pt-8">
      <div
        className="flex flex-col items-center"
        style={{ gap: SPACING.filmStack }}
      >
        <FilmHeading />
        <Reveal media className="w-full">
          <FullBleed>
            <FilmMedia />
          </FullBleed>
        </Reveal>
        <FilmCaption />
      </div>
    </section>
  );
}
