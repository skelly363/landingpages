"use client";

import { useId } from "react";
import { CarouselTrack, PageSection } from "@/components/layout/Grid";
import { useCarouselProgress } from "@/hooks/useCarouselProgress";
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
            <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center px-3">
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

export function StyleCarousel() {
  const { progress, handleScroll } = useCarouselProgress();

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
