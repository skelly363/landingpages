# Coach — Live Your Story Landing Page

Mobile-first landing page for the Coach x Spotify Fall 2026 campaign, built from the [Figma wireframe](https://www.figma.com/design/nFVuu92jT0cxlXbgG0WfU7/Fall-Wireframes---Campaign?node-id=1223-14557).

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **next/image** for optimized images

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a mobile viewport (375px).

## Project structure

```
src/
  app/              # Next.js app router
  components/
    sections/       # Page sections (Hero, Carousel, Tour, etc.)
    ui/             # Shared UI primitives
public/
  images/           # Exported Figma assets
```

## Design tokens

### Mobile grid
- **375px** page width
- **12px** side margins · **12px** gutters · **4 columns**

### Media aspect ratios
All images use the Figma media asset spec via `MediaFrame`:

| Section | Ratio |
|---------|-------|
| Style carousel cards | 4:5 |
| Video hero | 9:16 |
| Immerse image grid | 3:4 |
| Tabby Tour banner | 5:4 |
| Playlist cards | 4:5 |
| Full-bleed CTAs | 9:16 |

Ratios are defined in `src/lib/aspect-ratios.ts`.

### Typography
Coach brand fonts are loaded from the official Tapestry CDN (`assets.coach.com`):

| Figma name | CSS family | Use |
|------------|------------|-----|
| Helvetica Neue LT Pro **73 Bold Extended** | `HelveticaNeue73ExtendedBold` | Headlines |
| Helvetica Neue LT Pro **53 Extended** | `HelveticaNeue53ExtendedNormal` | Body copy |

`@font-face` rules live in `src/styles/fonts.css` (sourced from [Tapestry design tokens](https://assets.tapestry.com/ux/design-tokens/coach/themes/europe/font-face.css)).

Utility classes: `text-coach-display` (24px bold), `text-coach-heading` (18px bold), `text-coach-body` (14px), `text-coach-body-sm` (12px).

### Icon system
[Google Material Symbols Outlined](https://fonts.google.com/icons) loaded via Google Fonts CSS:
- **Weight:** 300
- **Fill:** off (0)
- **Grade:** 0
- **Optical size:** 24px (scales with render size)

Use the shared `<Icon name="arrow_forward" />` component from `src/components/ui/Icon.tsx`.


1. Hero intro — "Live Your Story"
2. Style carousel — horizontal product/film slider
3. Video hero — Coach presents campaign film
4. Immerse — 2×3 image grid
5. Tabby Tour — Coach x Spotify tour dates
6. Playlists — Spotify persona carousel
7. Cast Tabby — Shop the collection CTA
8. Store CTA — Explore the campaign
