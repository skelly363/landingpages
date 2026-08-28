import Image from "next/image";
import { TextLink } from "@/components/ui/Button";
import { PageSection } from "@/components/layout/Grid";
import { Reveal } from "@/components/ui/Reveal";

export function CoachSpotifySection() {
  return (
    <PageSection className="pb-2 pt-12">
      <Reveal
        stagger
        className="mx-auto flex max-w-content flex-col items-center gap-4 text-center"
      >
        <Image
          src="/images/coach-spotify-lockup.svg"
          alt="Coach X Spotify"
          width={274}
          height={32}
          className="h-8 w-[274px] object-contain"
        />
        <p className="max-w-[333px] text-coach-body-sm tracking-[-0.24px]">
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
