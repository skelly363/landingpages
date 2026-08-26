import { FullBleed } from "@/components/layout/Grid";
import { FilmPlayer } from "@/components/ui/FilmPlayer";
import { Reveal } from "@/components/ui/Reveal";
import { ASPECT_RATIOS, SECTION_RATIOS } from "@/lib/aspect-ratios";

export function VideoHero() {
  return (
    <section className="w-full">
      <Reveal media>
        <FullBleed>
          <FilmPlayer
            src="/videos/video-hero.mp4"
            poster="/images/video-hero.jpg"
            ratioClass={ASPECT_RATIOS[SECTION_RATIOS.videoHero]}
            ariaLabel="Coach presents Live Your Story campaign film"
          />
        </FullBleed>
      </Reveal>
    </section>
  );
}
