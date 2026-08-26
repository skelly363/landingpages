"use client";

import { useId } from "react";
import Image from "next/image";
import { CarouselTrack, PageSection } from "@/components/layout/Grid";
import { useCarouselProgress } from "@/hooks/useCarouselProgress";
import { CarouselIndicator } from "@/components/ui/CarouselIndicator";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";

const playlists = [
  { image: "/images/playlist-1.jpg", name: "Playlist Name", label: "Tktkt", persona: "Persona" },
  { image: "/images/playlist-2.jpg", name: "Playlist Name", label: "Tktkt", persona: "Persona" },
  { image: "/images/playlist-3.jpg", name: "Playlist Name", label: "Tktkt", persona: "Persona" },
  { image: "/images/playlist-4.jpg", name: "Playlist Name", label: "Tktkt", persona: "Persona" },
];

function SpotifyCard({
  image,
  name,
  label,
  persona,
}: {
  image: string;
  name: string;
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
        <p className="absolute inset-x-0 top-6 z-10 text-center font-coach-extended-bold text-[10px] uppercase tracking-[0.14em] text-white">
          {name}
        </p>
        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center px-margin">
          <button
            type="button"
            className="flex h-12 w-full max-w-[249px] items-center gap-2.5 rounded-lg border border-coach-spotify bg-black py-1 pl-1.5 pr-1.5"
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
  const labelId = useId();
  const { progress, handleScroll } = useCarouselProgress();

  return (
    <PageSection
      bleed
      aria-labelledby={labelId}
      className="overflow-hidden pb-8"
    >
      <h2 id={labelId} className="sr-only">
        Coach x Spotify playlists
      </h2>
      <Reveal media>
        <CarouselTrack onScroll={handleScroll}>
          {playlists.map((playlist, index) => (
            <SpotifyCard key={`${playlist.image}-${index}`} {...playlist} />
          ))}
        </CarouselTrack>
        <CarouselIndicator total={playlists.length} progress={progress} />
      </Reveal>
    </PageSection>
  );
}
