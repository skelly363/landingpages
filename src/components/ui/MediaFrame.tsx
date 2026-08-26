import Image, { type ImageProps } from "next/image";
import {
  ASPECT_RATIOS,
  type AspectRatio,
} from "@/lib/aspect-ratios";

type MediaFrameProps = {
  src: string;
  alt: string;
  ratio: AspectRatio;
  /** Fixed width in px — height is derived from ratio */
  width?: number;
  /** Fill parent width instead of fixed width */
  fullWidth?: boolean;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
};

export function MediaFrame({
  src,
  alt,
  ratio,
  width,
  fullWidth = false,
  className = "",
  imageClassName = "object-cover",
  priority,
  sizes,
  children,
}: MediaFrameProps) {
  const ratioClass = ASPECT_RATIOS[ratio];

  return (
    <div
      className={`relative overflow-hidden bg-neutral-200 ${ratioClass} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      style={width ? { width: `${width}px` } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={imageClassName}
        sizes={sizes ?? (fullWidth ? "100vw" : `${width ?? 351}px`)}
        priority={priority}
      />
      {children}
    </div>
  );
}

type MediaImageProps = Omit<ImageProps, "fill"> & {
  ratio: AspectRatio;
  wrapperClassName?: string;
};

/** For cases where width/height are known from the asset */
export function MediaImage({
  ratio,
  wrapperClassName = "",
  className = "",
  alt,
  ...props
}: MediaImageProps) {
  return (
    <div
      className={`relative overflow-hidden ${ASPECT_RATIOS[ratio]} ${wrapperClassName}`}
    >
      <Image
        alt={alt}
        fill
        className={`object-cover ${className}`}
        {...props}
      />
    </div>
  );
}
