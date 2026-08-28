/** Section spacing derived from updated Figma frame (UXR A Mobile) */
export const SPACING = {
  /** Hero top padding — 30px below the 48px nav matches Figma y=78 */
  heroTop: 30,
  /** Gap between hero copy and style carousel */
  heroBottom: 32,
  /** Standard gap between headline and body copy */
  headingToBody: 16,
  /** Gap between copy block and image grid (immerse) */
  copyToGrid: 24,
  /** Immerse copy line length — wraps just inside the page margins */
  immerseCopyWidth: 300,
  /** Hairline between the two full-bleed CTAs at the bottom of the page */
  fullBleedCtaGap: 2,
} as const;
