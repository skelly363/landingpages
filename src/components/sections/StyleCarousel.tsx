"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CarouselTrack, PageSection } from "@/components/layout/Grid";
import { HeroIntro } from "@/components/sections/HeroIntro";
import { useCarouselProgress } from "@/hooks/useCarouselProgress";
import { useForcedScrollProgress } from "@/hooks/useForcedScrollProgress";
import { Button } from "@/components/ui/Button";
import { CarouselIndicator } from "@/components/ui/CarouselIndicator";
import {
  HotspotDetailCard,
  type HotspotDetailContent,
} from "@/components/ui/HotspotDetailCard";
import { Icon } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";

type StyleSlide = {
  id: string;
  image: string;
  alt: string;
  variant: "intro" | "film" | "cta" | "play";
  title?: string;
  description?: string;
  filmTitle?: string;
  ctaLabel?: string;
  detailCard?: HotspotDetailContent;
};

const collectionDetailCard: HotspotDetailContent = {
  title: "The Artist Tabby Collection",
  description:
    "Special-edition bags inspired by the personal style and stories of the stars of our campaign.",
  linkLabel: "Shop The Collection",
};

const slides: StyleSlide[] = [
  {
    id: "style-story",
    image: "/images/hero-style-story.jpg",
    alt: "Style Your Story campaign",
    variant: "intro",
    title: "Style Your Story",
    description:
      "New Tabbys and more for every mood, sound and side of you.",
  },
  {
    id: "tabby-cream",
    image: "/images/hero-product.jpg",
    alt: "Cream Tabby bag",
    variant: "cta",
    ctaLabel: "Tabbys, Inspired by the Cast",
    detailCard: collectionDetailCard,
  },
  {
    id: "film-still",
    image: "/images/hero-jp.jpg",
    alt: "Campaign film still",
    variant: "intro",
  },
  {
    id: "coach-tags",
    image: "/images/hero-video.jpg",
    alt: "Coach bag charms and tags",
    variant: "play",
  },
  {
    id: "tabby-navy",
    image: "/images/hero-product-c.jpg",
    alt: "Navy studded Tabby bag",
    variant: "cta",
    ctaLabel: "Tabbys, Inspired by the Cast",
    detailCard: collectionDetailCard,
  },
];

const SLIDE_COUNT = slides.length;

function CarouselSlide({
  slide,
  fillViewport,
}: {
  slide: StyleSlide;
  fillViewport?: boolean;
}) {
  const [cardOpen, setCardOpen] = useState(false);
  const detailCardId = useId();

  return (
    <article
      className={
        fillViewport
          ? "h-full w-[calc(100cqw-var(--spacing-margin)-var(--carousel-peek-style))] shrink-0"
          : "w-carousel-style shrink-0 snap-start"
      }
    >
      <MediaFrame
        src={slide.image}
        alt={slide.alt}
        ratio={fillViewport ? undefined : SECTION_RATIOS.styleCarousel}
        fullWidth
        priority={slide.id === "style-story"}
        sizes="calc(100vw - 35px)"
        className={fillViewport ? "h-full w-full" : undefined}
      >
        {slide.variant === "cta" && slide.detailCard && (
          <>
            <HotspotDetailCard
              id={detailCardId}
              open={cardOpen}
              origin="bottom"
              onClose={() => setCardOpen(false)}
              {...slide.detailCard}
            />
            <div className="absolute inset-x-0 bottom-3 z-10 flex justify-end px-3">
              <Button
                size="compact"
                onClick={() => setCardOpen((open) => !open)}
                aria-expanded={cardOpen}
                aria-controls={detailCardId}
              >
                {slide.ctaLabel}
              </Button>
            </div>
          </>
        )}

        {slide.variant === "intro" && slide.title && (
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/50 to-transparent px-4 pb-6 pt-16 text-white">
            <Reveal stagger delay={200}>
              <h2 className="font-coach-extended-bold text-base">{slide.title}</h2>
              <p className="mt-2 text-coach-body-sm">{slide.description}</p>
            </Reveal>
          </div>
        )}

        {slide.variant === "film" && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
            <p className="text-coach-body-sm uppercase tracking-wide opacity-90">
              Coach presents
            </p>
            <p className="mt-1 font-coach-extended-bold text-2xl uppercase leading-tight">
              {slide.filmTitle}
            </p>
            <button
              type="button"
              aria-label="Play film"
              className="mt-6 flex size-[42px] items-center justify-center rounded-full bg-white/90 text-coach-black"
            >
              <Icon name="play_circle" size={42} />
            </button>
          </div>
        )}

        {slide.variant === "play" && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <button
              type="button"
              aria-label="Play film"
              className="flex size-[42px] items-center justify-center rounded-full bg-white/90 text-coach-black"
            >
              <Icon name="play_circle" size={42} />
            </button>
          </div>
        )}
      </MediaFrame>
    </article>
  );
}

function NativeStyleCarousel() {
  const { progress, handleScroll } = useCarouselProgress();

  return (
    <>
      <HeroIntro />
      <PageSection bleed aria-label="Style carousel" className="overflow-hidden">
        <CarouselTrack onScroll={handleScroll}>
          {slides.map((slide) => (
            <CarouselSlide key={slide.id} slide={slide} />
          ))}
        </CarouselTrack>
        <CarouselIndicator total={SLIDE_COUNT} progress={progress} />
      </PageSection>
    </>
  );
}

function ForcedStyleCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  useForcedScrollProgress(sectionRef, trackRef, thumbRef, SLIDE_COUNT);

  return (
    <section
      ref={sectionRef}
      aria-label="Style carousel"
      className="relative"
      style={{ height: `calc(${SLIDE_COUNT} * 100dvh)` }}
    >
      <div
        className="sticky z-20 flex flex-col overflow-hidden bg-white"
        style={{
          top: "var(--coach-header-height)",
          height: "calc(100dvh - var(--coach-header-height))",
        }}
      >
        <HeroIntro compact />
        <div className="min-h-0 flex-1 overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full touch-pan-y gap-gutter px-margin will-change-transform"
          >
            {slides.map((slide) => (
              <CarouselSlide key={slide.id} slide={slide} fillViewport />
            ))}
          </div>
        </div>
        <CarouselIndicator total={SLIDE_COUNT} progress={0} thumbRef={thumbRef} />
      </div>
    </section>
  );
}

export function StyleCarousel() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  if (reducedMotion) return <NativeStyleCarousel />;
  return <ForcedStyleCarousel />;
}
