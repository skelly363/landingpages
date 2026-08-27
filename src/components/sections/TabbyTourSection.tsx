"use client";

import { useCallback, useEffect, useRef } from "react";
import { TextLink } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import {
  CarouselTrack,
  Grid,
  GridCol,
  PageSection,
} from "@/components/layout/Grid";
import { SPACING } from "@/lib/spacing";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";

const tourDates = [
  { date: "09 September", city: "Boston" },
  { date: "17 September", city: "New York City" },
  { date: "29 September", city: "San Francisco" },
];

const tourImages = [
  { src: "/images/tabby-tour.jpg", alt: "The Tabby Tour campaign" },
  { src: "/images/tour-bus.jpg", alt: "Inside the Coach x Spotify tour bus" },
  { src: "/images/playlist-1.jpg", alt: "Tabby Tour live styling" },
  { src: "/images/tour-crowd.jpg", alt: "Tabby Tour crowd" },
];

function tourCardWidth(track: HTMLDivElement) {
  const card = track.querySelector("article");
  if (!card) return 0;
  return card.clientWidth;
}

function tourGap(track: HTMLDivElement) {
  const gap = Number.parseFloat(getComputedStyle(track).gap);
  if (Number.isNaN(gap)) return 12;
  return gap;
}

function nextTourOffset(track: HTMLDivElement) {
  const next = track.scrollLeft + tourCardWidth(track) + tourGap(track);
  const max = track.scrollWidth - track.clientWidth - 8;
  if (next >= max) return 0;
  return next;
}

function TourDateList() {
  return (
    <Reveal
      as="ul"
      stagger
      className="flex flex-col"
      style={{ marginTop: SPACING.tourCopyToDates }}
    >
      {tourDates.map((stop) => (
        <li
          key={stop.city}
          className="border-b border-[#B4B4B4] py-6 last:border-b-0"
        >
          <Grid className="text-coach-body">
            <GridCol span={2}>
              <span className="font-coach-extended-bold">{stop.date}</span>
            </GridCol>
            <GridCol span={2} className="text-right">
              <span>{stop.city}</span>
            </GridCol>
          </Grid>
        </li>
      ))}
    </Reveal>
  );
}

export function TabbyTourSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const userPaused = useRef(false);
  const pauseTimer = useRef(0);

  const handleScroll = useCallback(() => {
    userPaused.current = true;
    window.clearTimeout(pauseTimer.current);
    pauseTimer.current = window.setTimeout(() => {
      userPaused.current = false;
    }, 8000);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || userPaused.current) return;
      track.scrollTo({ left: nextTourOffset(track), behavior: "smooth" });
    }, 4000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="w-full pb-8 pt-8">
      <Reveal media>
        <CarouselTrack ref={trackRef} onScroll={handleScroll}>
          {tourImages.map((image) => (
            <article
              key={image.src}
              className="w-carousel-style shrink-0 snap-start"
            >
              <MediaFrame
                src={image.src}
                alt={image.alt}
                ratio={SECTION_RATIOS.tabbyTourBanner}
                fullWidth
                sizes="calc(100vw - 35px)"
              />
            </article>
          ))}
        </CarouselTrack>
      </Reveal>

      <PageSection className="pt-[30px]">
        <h2 className="text-coach-body font-coach-extended-bold leading-[1.4]">
          The Tabby Tour: Live Your Story
        </h2>
        <Reveal className="mt-4">
          <p className="text-coach-body leading-[1.4]">
            Experience the campaign in person as Coach and Spotify take the
            season around the world with live music, styling, personalization.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-4">
          <TextLink href="#">Follow the Tour</TextLink>
        </Reveal>

        <TourDateList />
      </PageSection>
    </section>
  );
}
