import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SPACING } from "@/lib/spacing";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";

const gridImages = [
  { src: "/images/immerse-1.jpg", alt: "Campaign still 1" },
  { src: "/images/immerse-2.jpg", alt: "Campaign still 2" },
  { src: "/images/immerse-3.jpg", alt: "Campaign still 3" },
  { src: "/images/immerse-4.jpg", alt: "Campaign still 4" },
  { src: "/images/immerse-5.jpg", alt: "Campaign still 5" },
  { src: "/images/immerse-6.jpg", alt: "Campaign still 6" },
];

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
            Immerse yourself in the world of Live Your Story.
          </h2>
          <p className="text-coach-body-sm">
            Watch the films and meet our cast of characters, discover IRL events,
            and find the pieces that help you express yourself.
          </p>
        </Reveal>
      </div>

      <Reveal
        media
        stagger
        className="grid w-full grid-cols-2 gap-[2px] bg-white"
        style={{ marginTop: SPACING.copyToGrid }}
      >
        {gridImages.map((image) => (
          <MediaFrame
            key={image.src}
            src={image.src}
            alt={image.alt}
            ratio={ratio}
            fullWidth
            sizes="50vw"
          />
        ))}
      </Reveal>
    </section>
  );
}
