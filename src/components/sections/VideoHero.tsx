import { FullBleed } from "@/components/layout/Grid";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";

export function VideoHero() {
  return (
    <section className="w-full">
      <Reveal media>
      <FullBleed>
        <MediaFrame
          src="/images/video-hero.jpg"
          alt="Coach presents Live Your Story campaign film"
          ratio={SECTION_RATIOS.videoHero}
          fullWidth
          priority
          sizes="100vw"
          className="w-full max-w-none"
        />
      </FullBleed>
      </Reveal>
    </section>
  );
}
