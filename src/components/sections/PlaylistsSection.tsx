"use client";

import Image from "next/image";
import { CarouselTrack, PageSection } from "@/components/layout/Grid";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SPACING } from "@/lib/spacing";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";

type Playlist = {
  image: string;
  name: string;
  borderColor: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

/** Player cards from Figma node 1646:2021 */
const playlists: Playlist[] = [
  {
    image: "/images/playlist-1.jpg",
    name: "Repeat Offender",
    borderColor: "#9fd1c6",
    icon: "/images/playlist/persona-repeat-offender.png",
    iconWidth: 40,
    iconHeight: 40,
  },
  {
    image: "/images/playlist-2.jpg",
    name: "Wild Card",
    borderColor: "#f98767",
    icon: "/images/playlist/persona-wild-card.png",
    iconWidth: 45,
    iconHeight: 48,
  },
  {
    image: "/images/playlist-3.jpg",
    name: "Scene Shifter",
    borderColor: "#eeb982",
    icon: "/images/playlist/persona-scene-shifter.png",
    iconWidth: 41,
    iconHeight: 57,
  },
  {
    image: "/images/playlist-4.jpg",
    name: "Unhinged Optimist",
    borderColor: "#fc9d97",
    icon: "/images/playlist/persona-unhinged-optimist.png",
    iconWidth: 44,
    iconHeight: 44,
  },
  {
    image: "/images/playlist-5.jpg",
    name: "Silent Threat",
    borderColor: "#8489df",
    icon: "/images/playlist/persona-silent-threat.png",
    iconWidth: 44,
    iconHeight: 44,
  },
];

function SpotifyCard({ playlist }: { playlist: Playlist }) {
  const { image, name, borderColor, icon, iconWidth, iconHeight } = playlist;

  return (
    <article className="w-carousel-playlist shrink-0 snap-start">
      <MediaFrame
        src={image}
        alt=""
        ratio={SECTION_RATIOS.playlistCard}
        fullWidth
        sizes="calc(100vw - 62px)"
      >
        <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center px-margin">
          <button
            type="button"
            className="flex h-[60px] w-full max-w-[273px] items-center gap-2 rounded-lg border border-solid bg-black py-1 pl-[13px] pr-1.5"
            style={{ borderColor }}
          >
            <Image
              src={icon}
              alt=""
              width={iconWidth}
              height={iconHeight}
              className="shrink-0 object-contain"
              style={{ width: iconWidth, height: iconHeight }}
            />
            <span className="min-w-0 flex-1 text-center text-[13.65px] leading-[15.5px] text-white">
              {name}
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
          <h2 className="text-coach-heading leading-snug">Coach x Spotify</h2>
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
          {playlists.map((playlist) => (
            <SpotifyCard key={playlist.name} playlist={playlist} />
          ))}
        </CarouselTrack>
      </Reveal>
    </section>
  );
}
