"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { Icon } from "@/components/ui/Icon";

type FilmPlayerProps = {
  src: string;
  poster?: string;
  ratioClass: string;
  ariaLabel: string;
  videoClassName?: string;
  videoStyle?: CSSProperties;
};

function applyMute(video: HTMLVideoElement | null, muted: boolean) {
  if (!video) return;
  video.muted = muted;
  video.defaultMuted = muted;
  video.volume = 1;
}

function PlayButton({
  playing,
  onClick,
}: {
  playing: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={playing ? "Pause film" : "Play film"}
      onClick={onClick}
      className="flex size-7 items-center justify-center"
    >
      <Icon name={playing ? "pause" : "play_arrow"} size={20} />
    </button>
  );
}

function MuteButton({
  muted,
  onClick,
}: {
  muted: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={muted ? "Unmute film" : "Mute film"}
      onClick={onClick}
      className="flex size-7 items-center justify-center"
    >
      <Icon name={muted ? "volume_off" : "volume_up"} size={20} />
    </button>
  );
}

export function FilmPlayer({
  src,
  poster,
  ratioClass,
  ariaLabel,
  videoClassName = "",
  videoStyle,
}: FilmPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const syncPlayback = useCallback(() => {
    setPlaying(!videoRef.current?.paused);
  }, []);

  const tryPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || userPausedRef.current) return;
    applyMute(video, muted);
    video.playsInline = true;
    void video.play().catch(() => {
      // Browsers may block autoplay until the clip is on screen.
    });
  }, [muted]);

  useEffect(() => {
    applyMute(videoRef.current, muted);
  }, [muted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
      },
      { threshold: 0.2 },
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      observer.disconnect();
    };
  }, [tryPlay]);

  return (
    <div className={`relative w-full overflow-hidden bg-black ${ratioClass}`}>
      <div
        className={`absolute inset-0 ${videoClassName}`}
        style={videoStyle}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted={muted}
          loop
          playsInline
          preload="auto"
          aria-label={ariaLabel}
          onPlay={syncPlayback}
          onPause={syncPlayback}
          onLoadedData={tryPlay}
        />
      </div>
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1 rounded-full bg-black/45 px-2 py-1.5 text-white backdrop-blur-[6px]">
        <PlayButton
          playing={playing}
          onClick={() => {
            const video = videoRef.current;
            if (!video) return;
            if (video.paused) {
              userPausedRef.current = false;
              void video.play();
              return;
            }
            userPausedRef.current = true;
            video.pause();
          }}
        />
        <MuteButton
          muted={muted}
          onClick={() => setMuted((current) => !current)}
        />
      </div>
    </div>
  );
}
