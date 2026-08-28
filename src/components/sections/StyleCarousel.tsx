"use client";

import { useCallback, useRef, useState } from "react";
import type { UIEvent } from "react";
import { CarouselTrack, PageSection } from "@/components/layout/Grid";
import { CarouselIndicator } from "@/components/ui/CarouselIndicator";
import type { HotspotDetailContent } from "@/components/ui/HotspotDetailCard";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";

type DetailCardLayout = "center" | "right";

type StyleSlide = {
  id: string;
  image: string;
  alt: string;
  variant: "intro" | "detail" | "photo";
  title?: string;
  description?: string;
  detailCard?: HotspotDetailContent;
  detailLayout?: DetailCardLayout;
};

/** Carousel frames from Figma node 1374:12717 */
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
    id: "artist-tabby",
    image: "/images/hero-product.jpg",
    alt: "The Artist Tabby Collection",
    variant: "detail",
    detailLayout: "center",
    detailCard: {
      title: "The Artist Tabby Collection",
      description:
        "Special-edition bags inspired by the personal style and stories of the stars of our campaign.",
      linkLabel: "Shop The Tabby, Inspired by Pink Pantheress",
    },
  },
  {
    id: "cast-portrait",
    image: "/images/hero-jp.jpg",
    alt: "Campaign cast portrait",
    variant: "photo",
  },
  {
    id: "charms",
    image: "/images/hero-charms.jpg",
    alt: "Coach concert ticket charms",
    variant: "detail",
    detailLayout: "right",
    detailCard: {
      title: "Your Ticket to Personalization",
      description:
        "Be a part of the moment with concert ticket charms that make any bag feel unique to you.",
      linkLabel: "Shop Charms",
    },
  },
  {
    id: "elle-crates",
    image: "/images/hero-elle-crates.jpg",
    alt: "Elle Fanning on tour crates",
    variant: "photo",
  },
];

function DetailOverlayCard({
  content,
  layout,
}: {
  content: HotspotDetailContent;
  layout: DetailCardLayout;
}) {
  const positionClass =
    layout === "center"
      ? "left-1/2 top-[calc(50%+105px)] w-[312px] -translate-x-1/2 -translate-y-1/2"
      : "left-[calc(50%+32px)] top-[calc(50%+105.5px)] w-[260px] -translate-x-1/2 -translate-y-1/2";

  return (
    <div
      className={`absolute z-10 rounded bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] ${positionClass}`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-coach-extended-bold text-base leading-[1.2] tracking-[-0.01em] text-coach-black">
          {content.title}
        </h3>
        <div className="flex flex-col gap-4">
          <p className="text-coach-body-sm text-[#474747]">{content.description}</p>
          <TextLink
            href={content.linkHref ?? "#"}
            className="text-coach-body-sm text-coach-black"
          >
            {content.linkLabel}
          </TextLink>
        </div>
      </div>
    </div>
  );
}

function CarouselSlide({ slide }: { slide: StyleSlide }) {
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
        {slide.variant === "detail" && slide.detailCard && (
          <DetailOverlayCard
            content={slide.detailCard}
            layout={slide.detailLayout ?? "right"}
          />
        )}

        {slide.variant === "intro" && (
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/50 to-transparent px-4 pb-6 pt-16 text-white">
            <Reveal stagger delay={200}>
              <h2 className="font-coach-extended-bold text-base">{slide.title}</h2>
              <p className="mt-2 text-coach-body-sm">{slide.description}</p>
            </Reveal>
          </div>
        )}
      </MediaFrame>
    </article>
  );
}

export function StyleCarousel() {
  const [progress, setProgress] = useState(0);
  const frame = useRef(0);

  const handleScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
    const track = event.currentTarget;
    const max = track.scrollWidth - track.clientWidth;
    const next = max > 0 ? Math.min(1, Math.max(0, track.scrollLeft / max)) : 0;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setProgress(next));
  }, []);

  return (
    <PageSection bleed aria-label="Style carousel" className="overflow-hidden">
      <Reveal media delay={80}>
        <CarouselTrack onScroll={handleScroll}>
          {slides.map((slide) => (
            <CarouselSlide key={slide.id} slide={slide} />
          ))}
        </CarouselTrack>

        <CarouselIndicator total={slides.length} progress={progress} />
      </Reveal>
    </PageSection>
  );
}
