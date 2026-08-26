import Image from "next/image";
import { TextLink } from "@/components/ui/Button";
import { PageSection } from "@/components/layout/Grid";
import { Reveal } from "@/components/ui/Reveal";
import { SPACING } from "@/lib/spacing";

export function CoachSpotifySection() {
  return (
    <PageSection className="pt-12 pb-10">
      <Reveal
        stagger
        className="mx-auto flex max-w-content flex-col items-center text-center"
        style={{ gap: SPACING.headingToBody }}
      >
        <Image
          src="/images/spotify-wordmark.png"
          alt="Spotify"
          width={116}
          height={46}
          className="h-[46px] w-[116px] object-contain"
        />
        <h2 className="font-coach-extended text-lg uppercase leading-normal">
          Coach X Spotify
        </h2>
        <p className="text-coach-body max-w-[333px]">
          Style and music help us express ourselves with confidence and connect
          with one another. This season, Coach partners with Spotify to bring
          you customized playlists inspired by your listening style.
        </p>
        <TextLink href="#" className="text-coach-body-sm">
          Discover More
        </TextLink>
      </Reveal>
    </PageSection>
  );
}
