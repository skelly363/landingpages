"use client";

import { useId } from "react";
import Image from "next/image";
import { CarouselTrack, PageSection } from "@/components/layout/Grid";
import { useCarouselProgress } from "@/hooks/useCarouselProgress";
import { CarouselIndicator } from "@/components/ui/CarouselIndicator";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";

type Playlist = {
  id: string;
  image: string;
  alt: string;
  name: string;
  persona: string;
  accent: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  iconClassName?: string;
  imageStyle?: { objectPosition: string };
};

const playlists: Playlist[] = [
  {
    id: "repeat-offender",
    image: "/images/playlist-1.jpg",
    alt: "Campaign still for the Repeat Offender playlist",
    name: "Playlist Name",
    persona: "Repeat Offender",
    accent: "#9fd1c6",
    icon: "/images/playlist/persona-repeat-offender.png",
    iconWidth: 40,
    iconHeight: 40,
    imageStyle: { objectPosition: "28% center" },
  },
  {
    id: "silent-threat",
    image: "/images/playlist-silent-threat.jpg",
    alt: "Campaign still for the Silent Threat playlist",
    name: "Playlist Name",
    persona: "Silent Threat",
    accent: "#8489df",
    icon: "/images/playlist/persona-silent-threat.png",
    iconWidth: 40,
    iconHeight: 40,
    iconClassName: "origin-center rotate-[33.67deg]",
    imageStyle: { objectPosition: "center" },
  },
  {
    id: "scene-shifter",
    image: "/images/playlist-3.jpg",
    alt: "Campaign still for the Scene Shifter playlist",
    name: "Playlist Name",
    persona: "Scene Shifter",
    accent: "#eeb982",
    icon: "/images/playlist/persona-scene-shifter.png",
    iconWidth: 41,
    iconHeight: 57,
    imageStyle: { objectPosition: "22% center" },
  },
  {
    id: "unhinged-optimist",
    image: "/images/playlist-4.jpg",
    alt: "Campaign still for the Unhinged Optimist playlist",
    name: "Playlist Name",
    persona: "Unhinged Optimist",
    accent: "#fc9d97",
    icon: "/images/playlist/persona-unhinged-optimist.png",
    iconWidth: 42,
    iconHeight: 46,
    imageStyle: { objectPosition: "30% center" },
  },
  {
    id: "wild-card",
    image: "/images/playlist-2.jpg",
    alt: "Campaign still for the Wild Card playlist",
    name: "Playlist Name",
    persona: "Wild Card",
    accent: "#f98767",
    icon: "/images/playlist/persona-wild-card.png",
    iconWidth: 45,
    iconHeight: 49,
    imageStyle: { objectPosition: "35% center" },
  },
];

function SpotifyCard({
  image,
  alt,
  name,
  persona,
  accent,
  icon,
  iconWidth,
  iconHeight,
  iconClassName = "",
  imageStyle,
}: Playlist) {
  return (
    <article className="w-carousel-playlist shrink-0 snap-start">
      <MediaFrame
        src={image}
        alt={alt}
        ratio={SECTION_RATIOS.playlistCard}
        fullWidth
        sizes="calc(100vw - 62px)"
        imageStyle={imageStyle}
      >
        <p className="absolute inset-x-0 top-6 z-10 text-center font-coach-extended-bold text-[10px] uppercase tracking-[1.4px] text-white">
          {name}
        </p>
        <button
          type="button"
          aria-label={`Play ${persona} playlist`}
          className="absolute bottom-4 left-1/2 z-10 h-[60px] w-[calc(100%-40px)] max-w-[273px] -translate-x-1/2 overflow-hidden rounded-lg border border-solid bg-black"
          style={{ borderColor: accent }}
        >
          <Image
            src={icon}
            alt=""
            width={iconWidth}
            height={iconHeight}
            className={`absolute left-[13px] top-1/2 max-h-[56px] -translate-y-1/2 object-contain ${iconClassName}`}
            style={{ width: iconWidth, height: iconHeight }}
          />
          <span className="absolute left-[84px] top-[19px] h-[26px] w-[135px] text-left font-coach-extended text-[13.65px] leading-[26px] text-white">
            {persona}
          </span>
          <Image
            src="/images/spotify-play.svg"
            alt=""
            width={28}
            height={28}
            className="absolute top-[16px] right-[12px] size-7"
          />
        </button>
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
      className="overflow-hidden pb-8 pt-2"
    >
      <h2 id={labelId} className="sr-only">
        Coach x Spotify playlists
      </h2>
      <Reveal media>
        <CarouselTrack className="!gap-4" onScroll={handleScroll}>
          {playlists.map((playlist) => (
            <SpotifyCard key={playlist.id} {...playlist} />
          ))}
        </CarouselTrack>
        <CarouselIndicator total={playlists.length} progress={progress} />
      </Reveal>
    </PageSection>
  );
}
