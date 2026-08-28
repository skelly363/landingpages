import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SPACING } from "@/lib/spacing";
import { ASPECT_RATIOS, SECTION_RATIOS } from "@/lib/aspect-ratios";

type GridItem = {
  id: string;
  alt: string;
  poster: string;
  /** When provided, replaces the poster with an autoplaying loop (no controls). */
  videoSrc?: string;
};

/** Grid from Figma node 1234:15808 — video slots marked for later asset swap */
const gridItems: GridItem[] = [
  {
    id: "metal-detector",
    alt: "Guests entering through a metal detector at the campaign event",
    poster: "/images/immerse-1.jpg",
    videoSrc: "/videos/immerse-1.mp4",
  },
  {
    id: "live-your-story-poster",
    alt: "Coach Live Your Story Fall 2026 campaign poster",
    poster: "/images/immerse-2.jpg",
  },
  {
    id: "cast-portrait",
    alt: "Campaign cast member in layered street style",
    poster: "/images/immerse-3.jpg",
  },
  {
    id: "coaching-the-shot",
    alt: "Behind the scenes — Coach-ing the shot",
    poster: "/images/immerse-4.jpg",
  },
  {
    id: "subway-charms",
    alt: "Coach Tabby bag with charms on the subway",
    poster: "/images/immerse-5.png",
  },
  {
    id: "bus-cast",
    alt: "Cast member smiling on the Coach tour bus",
    poster: "/images/immerse-6.jpg",
  },
];

function GridCell({
  item,
  ratio,
}: {
  item: GridItem;
  ratio: typeof SECTION_RATIOS.immerseGrid;
}) {
  if (item.videoSrc) {
    return (
      <div className={`relative w-full overflow-hidden bg-neutral-200 ${ASPECT_RATIOS[ratio]}`}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={item.videoSrc}
          poster={item.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={item.alt}
        />
      </div>
    );
  }

  return (
    <MediaFrame
      src={item.poster}
      alt={item.alt}
      ratio={ratio}
      fullWidth
      sizes="50vw"
    />
  );
}

export function ImmerseSection() {
  const ratio = SECTION_RATIOS.immerseGrid;

  return (
    <section className="pb-[2px] pt-[33px]">
      <div className="px-margin text-center">
        <Reveal
          stagger
          className="mx-auto flex flex-col"
          style={{ gap: SPACING.headingToBody, maxWidth: SPACING.immerseCopyWidth }}
        >
          <h2 className="font-coach-extended text-lg leading-snug">
            Where will the story take you?
          </h2>
          <p className="text-coach-body-sm">
            Immerse yourself in the world of Live Your Story. Watch the films and
            meet the cast of artists—and our community of music lovers.
          </p>
        </Reveal>
      </div>

      <Reveal
        media
        stagger
        className="grid w-full grid-cols-2 gap-[2px] bg-white"
        style={{ marginTop: SPACING.copyToGrid }}
      >
        {gridItems.map((item) => (
          <GridCell key={item.id} item={item} ratio={ratio} />
        ))}
      </Reveal>
    </section>
  );
}
