import type { CSSProperties } from "react";

/** Material Symbols Outlined — weight 300, fill off, grade 0 per design system */
export const MATERIAL_SYMBOL_SETTINGS = {
  FILL: 0,
  wght: 300,
  GRAD: 0,
  opsz: 24,
} as const;

export type MaterialIconName =
  | "add"
  | "close"
  | "pause"
  | "play_arrow"
  | "play_circle"
  | "volume_off"
  | "volume_up";

type IconProps = {
  name: MaterialIconName;
  /** Render size in px — optical size scales with display size */
  size?: number;
  className?: string;
  style?: CSSProperties;
};

function getOpsz(size: number) {
  if (size <= 20) return 20;
  if (size >= 48) return 48;
  return 24;
}

export function Icon({ name, size = 24, className = "", style }: IconProps) {
  const opsz = getOpsz(size);

  return (
    <span
      className={`material-symbols-outlined leading-none ${className}`}
      style={{
        fontSize: size,
        width: size,
        height: size,
        fontVariationSettings: `'FILL' ${MATERIAL_SYMBOL_SETTINGS.FILL}, 'wght' ${MATERIAL_SYMBOL_SETTINGS.wght}, 'GRAD' ${MATERIAL_SYMBOL_SETTINGS.GRAD}, 'opsz' ${opsz}`,
        ...style,
      }}
      aria-hidden
    >
      {name}
    </span>
  );
}
