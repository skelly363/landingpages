"use client";

import { useState } from "react";
import { CastTabbySection } from "@/components/sections/CastTabbySection";
import { CoachSpotifySection } from "@/components/sections/CoachSpotifySection";
import { HeroIntro } from "@/components/sections/HeroIntro";
import { PlaylistsSection } from "@/components/sections/PlaylistsSection";
import { SpotifyAppSection } from "@/components/sections/SpotifyAppSection";
import { StyleCarousel } from "@/components/sections/StyleCarousel";
import { TabbyTourSection } from "@/components/sections/TabbyTourSection";
import { VideoHero } from "@/components/sections/VideoHero";
import { CollectionDrawer } from "@/components/ui/CollectionDrawer";
import { MobilePage } from "@/components/layout/Grid";

export function LandingPage() {
  const [collectionOpen, setCollectionOpen] = useState(false);

  return (
    <MobilePage>
      <HeroIntro />
      <StyleCarousel />
      <CoachSpotifySection />
      <PlaylistsSection />
      <VideoHero />
      <CastTabbySection onOpenCollection={() => setCollectionOpen(true)} />
      <TabbyTourSection />
      <SpotifyAppSection />
      <CollectionDrawer
        open={collectionOpen}
        onClose={() => setCollectionOpen(false)}
      />
    </MobilePage>
  );
}
