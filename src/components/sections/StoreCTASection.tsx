import { TextLink } from "@/components/ui/Button";
import { FullBleed } from "@/components/layout/Grid";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";
import { SPACING } from "@/lib/spacing";

export function StoreCTASection() {
  return (
    <section
      className="relative w-full"
      style={{ marginTop: SPACING.fullBleedCtaGap }}
    >
      <Reveal media>
      <FullBleed>
        <MediaFrame
          src="/images/store-cta.jpg"
          alt="Head to the stores and see the campaign live"
          ratio={SECTION_RATIOS.fullBleedCta}
          fullWidth
          sizes="100vw"
          className="w-full max-w-none"
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-x-0 top-[44%] z-10 px-margin text-center text-white">
            <Reveal stagger>
            <p className="mx-auto max-w-[241px] font-coach-extended text-lg leading-normal text-white">
              Head to the stores and see the campaign live.
            </p>
            <div className="mt-8">
              <TextLink href="#" className="text-white">
                Explore The Spotify Campaign
              </TextLink>
            </div>
            </Reveal>
          </div>
        </MediaFrame>
      </FullBleed>
      </Reveal>
    </section>
  );
}
