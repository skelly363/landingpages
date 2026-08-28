import { Button } from "@/components/ui/Button";
import { FullBleed } from "@/components/layout/Grid";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";

export function CastTabbySection({
  onOpenCollection,
}: {
  onOpenCollection: () => void;
}) {
  return (
    <section className="relative w-full">
      <Reveal media>
        <FullBleed>
          <MediaFrame
            src="/images/cast-tabby.jpg"
            alt="Tabbys inspired by the cast"
            ratio={SECTION_RATIOS.fullBleedCta}
            fullWidth
            sizes="100vw"
            className="w-full max-w-none"
          >
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-margin text-center text-white">
              <Reveal stagger>
                <p className="text-coach-eyebrow">The Artist Tabby Collection</p>
                <p className="mx-auto mt-4 max-w-[250px] font-coach-extended text-lg leading-normal text-white">
                  Special-edition Tabby bags that take their cues from the
                  personal style and stories of the stars of our campaign.
                </p>
              </Reveal>
            </div>

            <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center px-margin">
              <Reveal delay={180} className="w-fit">
                <Button onClick={onOpenCollection}>Shop The Collection</Button>
              </Reveal>
            </div>
          </MediaFrame>
        </FullBleed>
      </Reveal>
    </section>
  );
}
