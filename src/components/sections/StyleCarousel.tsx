"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
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
  variant: "intro" | "film" | "cta";
  title?: string;
  description?: string;
  filmTitle?: string;
  ctaLabel?: string;
  detailCard?: HotspotDetailContent;
};

const slides: StyleSlide[] = [
  {
    id: "style-story",
    image: "/images/hero-style-story.jpg",
    alt: "Style Your Story campaign",
    variant: "intro",
    title: "Style Your Story",
    description:
      "New Tabbys and picks for every mood, sound and side of you.",
  },
  {
    id: "tabby-cream",
    image: "/images/hero-product.jpg",
    alt: "Cream Tabby bag",
    variant: "cta",
    ctaLabel: "Tabbys, Inspired by the Cast",
    detailCard: {
      title: "Tabbys, Inspired by the Cast",
      description:
        "Special-edition Tabby bags that take their cues from the personal style and stories of the stars of our campaign.",
      linkLabel: "Shop Pink Pantheress's Tabby",
    },
  },
  {
    id: "lilas-film",
    image: "/images/hero-jp.jpg",
    alt: "Coach presents Lilas Ikuta",
    variant: "film",
    filmTitle: "Lilas Ikuta",
  },
  {
    id: "coach-tags",
    image: "/images/hero-video.jpg",
    alt: "Coach bag charms and tags",
    variant: "intro",
  },
  {
    id: "tabby-navy",
    image: "/images/hero-product-c.jpg",
    alt: "Navy studded Tabby bag",
    variant: "cta",
    ctaLabel: "Tabbys, Inspired by the Cast",
    detailCard: {
      title: "Tabbys, Inspired by the Cast",
      description:
        "Special-edition Tabby bags that take their cues from the personal style and stories of the stars of our campaign.",
      linkLabel: "Shop The Collection",
    },
  },
];

/** Extra viewport-heights of vertical scroll per slide after the first */
const SLIDE_SCROLL_VH = 0.7;

function CarouselSlide({ slide }: { slide: StyleSlide }) {
  const [cardOpen, setCardOpen] = useState(false);
  const detailCardId = useId();
  const ratio = SECTION_RATIOS.styleCarousel;

  return (
    <article className="w-carousel-style shrink-0 snap-start">
      <MediaFrame
        src={slide.image}
        alt={slide.alt}
        ratio={ratio}
        fullWidth
        priority={slide.id === "style-story"}
        sizes="calc(100vw - 35px)"
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
      </MediaFrame>
    </article>
  );
}

function SlideList() {
  return slides.map((slide) => <CarouselSlide key={slide.id} slide={slide} />);
}

function NativeStyleCarousel() {
  const { progress, handleScroll } = useCarouselProgress();

  return (
    <>
      <HeroIntro />
      <PageSection bleed aria-label="Style carousel" className="overflow-hidden">
        <CarouselTrack onScroll={handleScroll}>
          <SlideList />
        </CarouselTrack>
        <CarouselIndicator total={slides.length} progress={progress} />
      </PageSection>
    </>
  );
}

function ForcedStyleCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const progress = useForcedScrollProgress(sectionRef);
  const [maxOffset, setMaxOffset] = useState(0);
  const [sectionHeight, setSectionHeight] = useState("auto");

  useLayoutEffect(() => {
    const panel = panelRef.current;
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!panel || !track || !viewport) return;

    const measure = () => {
      setMaxOffset(Math.max(0, track.scrollWidth - viewport.clientWidth));
      const extra = (slides.length - 1) * window.innerHeight * SLIDE_SCROLL_VH;
      setSectionHeight(`${panel.offsetHeight + extra}px`);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Style carousel"
      className="relative"
      style={{ height: sectionHeight }}
    >
      <div ref={panelRef} className="sticky top-0 z-20 bg-white">
        <HeroIntro />
        <div ref={viewportRef} className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max touch-pan-y gap-gutter px-margin"
            style={{
              transform: `translate3d(-${progress * maxOffset}px, 0, 0)`,
            }}
          >
            <SlideList />
          </div>
        </div>
        <CarouselIndicator total={slides.length} progress={progress} />
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
