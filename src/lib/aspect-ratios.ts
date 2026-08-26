export const ASPECT_RATIOS = {
  "1:1": "aspect-square",
  "4:5": "aspect-[4/5]",
  "5:4": "aspect-[5/4]",
  "3:2": "aspect-[3/2]",
  "2:1": "aspect-[2/1]",
  "4:3": "aspect-[4/3]",
  "3:4": "aspect-[3/4]",
  "9:16": "aspect-[9/16]",
  "16:9": "aspect-[16/9]",
} as const;

export type AspectRatio = keyof typeof ASPECT_RATIOS;

/** Section → ratio mapping from Figma media asset spec */
export const SECTION_RATIOS = {
  styleCarousel: "4:5",
  videoHero: "16:9",
  immerseGrid: "3:4",
  tabbyTourBanner: "3:2",
  playlistCard: "4:5",
  fullBleedCta: "9:16",
} as const satisfies Record<string, AspectRatio>;
