import { FullBleed } from "@/components/layout/Grid";
import { Reveal } from "@/components/ui/Reveal";
import { ASPECT_RATIOS, SECTION_RATIOS } from "@/lib/aspect-ratios";

export function VideoHero() {
  const ratioClass = ASPECT_RATIOS[SECTION_RATIOS.videoHero];

  return (
    <section className="w-full">
      <Reveal media>
        <FullBleed>
          <div
            className={`relative w-full overflow-hidden bg-black ${ratioClass}`}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/video-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Coach presents Live Your Story campaign film"
            />
          </div>
        </FullBleed>
      </Reveal>
    </section>
  );
}
