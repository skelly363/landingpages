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
  video.volume = 1;
}

function toggleVideoPlayback(video: HTMLVideoElement | null) {
  if (!video) return;
  if (video.paused) {
    void video.play();
    return;
  }
  video.pause();
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
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const syncPlayback = useCallback(() => {
    setPlaying(!videoRef.current?.paused);
  }, []);

  useEffect(() => {
    applyMute(videoRef.current, muted);
  }, [muted]);

  return (
    <div className={`relative w-full overflow-hidden bg-black ${ratioClass}`}>
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover ${videoClassName}`}
        style={videoStyle}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={ariaLabel}
        onPlay={syncPlayback}
        onPause={syncPlayback}
      />
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1 rounded-full bg-black/45 px-2 py-1.5 text-white backdrop-blur-[6px]">
        <PlayButton
          playing={playing}
          onClick={() => toggleVideoPlayback(videoRef.current)}
        />
        <MuteButton muted={muted} onClick={() => setMuted((current) => !current)} />
      </div>
    </div>
  );
}
