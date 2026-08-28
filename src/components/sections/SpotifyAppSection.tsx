import Image from "next/image";
import { TextLink } from "@/components/ui/Button";
import { PageSection } from "@/components/layout/Grid";
import { Reveal } from "@/components/ui/Reveal";

export function SpotifyAppSection() {
  return (
    <PageSection className="bg-coach-beige pb-16 pt-12">
      <Reveal
        stagger
        className="mx-auto flex max-w-[293px] flex-col items-center gap-6 text-center"
      >
        <h2 className="text-coach-heading capitalize leading-normal">
          Explore more Coach on the Spotify app.
        </h2>
        <Image
          src="/images/spotify-qr.png"
          alt="QR code to open Coach on Spotify"
          width={192}
          height={192}
          className="size-48 bg-white"
        />
        <p className="text-coach-body-sm leading-[1.4]">
          Use the code to visit Spotify, reveal your Courage Sign and get a
          personalized playlist to match.
        </p>
        <TextLink href="#" className="text-coach-body-sm">
          Go to Spotify mobile app
        </TextLink>
      </Reveal>
    </PageSection>
  );
}
