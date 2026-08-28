"use client";

import { useEffect, useRef, useState } from "react";
import { FullBleed, PageSection } from "@/components/layout/Grid";
import { FilmPlayer } from "@/components/ui/FilmPlayer";
import { Reveal } from "@/components/ui/Reveal";
import { SPACING } from "@/lib/spacing";
import { ASPECT_RATIOS, SECTION_RATIOS } from "@/lib/aspect-ratios";

const FILM_SCALE_START = 0.86;
const FILM_SCALE_END = 1;

function filmScrollProgress(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const start = vh;
  const end = vh * 0.28;
  return Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
}

function FilmMedia() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(FILM_SCALE_START);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setScale(FILM_SCALE_END);
      return;
    }

    const update = () => {
      const progress = filmScrollProgress(el);
      setScale(
        FILM_SCALE_START + (FILM_SCALE_END - FILM_SCALE_START) * progress,
      );
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
    <div ref={ref} className="w-full">
      <div className="mx-auto" style={{ width: `${scale * 100}%` }}>
        <FilmPlayer
          src="/videos/video-hero.mp4"
          poster="/images/video-hero.jpg"
          ratioClass={ASPECT_RATIOS[SECTION_RATIOS.videoHero]}
          ariaLabel="Coach presents Live Your Story campaign film"
        />
      </div>
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
          Starring Elle Fanning and a cast of characters, follow their
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
        <FullBleed>
          <FilmMedia />
        </FullBleed>
        <FilmCaption />
      </div>
    </section>
  );
}
