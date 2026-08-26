"use client";

import Image from "next/image";
import { CarouselTrack, PageSection } from "@/components/layout/Grid";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SPACING } from "@/lib/spacing";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";

const playlists = [
  { image: "/images/playlist-1.jpg", label: "Tktkt", persona: "Persona" },
  { image: "/images/playlist-2.jpg", label: "Tktkt", persona: "Persona" },
  { image: "/images/playlist-3.jpg", label: "Tktkt", persona: "Persona" },
  { image: "/images/playlist-4.jpg", label: "Tktkt", persona: "Persona" },
];

function SpotifyCard({
  image,
  label,
  persona,
}: {
  image: string;
  label: string;
  persona: string;
}) {
  return (
    <article className="w-carousel-playlist shrink-0 snap-start">
      <MediaFrame
        src={image}
        alt=""
        ratio={SECTION_RATIOS.playlistCard}
        fullWidth
        sizes="calc(100vw - 62px)"
      >
        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center px-margin">
          <button
            type="button"
            className="flex h-12 w-full items-center gap-2.5 rounded-lg border border-coach-spotify bg-black py-1 pl-1.5 pr-1.5"
          >
            <Image
              src="/images/cloud.png"
              alt=""
              width={37}
              height={26}
              className="h-[26px] w-[37px] shrink-0 object-contain mix-blend-screen"
            />
            <span className="flex min-w-0 flex-1 items-center gap-1.5 text-coach-body-sm text-white">
              <span>{label}</span>
              <span className="size-0.5 shrink-0 rounded-full bg-white" />
              <span>{persona}</span>
            </span>
            <Image
              src="/images/spotify-play.svg"
              alt=""
              width={28}
              height={28}
              className="size-7 shrink-0"
            />
          </button>
        </div>
      </MediaFrame>
    </article>
  );
}

export function PlaylistsSection() {
  return (
    <section className="pb-12 pt-8">
      <PageSection>
        <Reveal
          stagger
          className="flex flex-col"
          style={{ gap: SPACING.headingToBody }}
        >
          <h2 className="text-coach-heading capitalize leading-snug">
            Coach X Spotify Bring You Playlists
          </h2>
          <p className="text-coach-body">
            Style and music help us express ourselves with confidence and
            connect with one another. This season, Coach partners with Spotify to
            bring you customized playlists inspired by your listening style.
          </p>
        </Reveal>

        <div className="my-6 h-px bg-neutral-300" />
      </PageSection>

      <Reveal media>
      <CarouselTrack className="pt-0">
        {playlists.map((playlist, index) => (
          <SpotifyCard key={`${playlist.image}-${index}`} {...playlist} />
        ))}
      </CarouselTrack>
      </Reveal>
    </section>
  );
}
