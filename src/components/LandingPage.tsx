"use client";

import { useState } from "react";
import { CastTabbySection } from "@/components/sections/CastTabbySection";
import { HeroIntro } from "@/components/sections/HeroIntro";
import { ImmerseSection } from "@/components/sections/ImmerseSection";
import { PlaylistsSection } from "@/components/sections/PlaylistsSection";
import { StoreCTASection } from "@/components/sections/StoreCTASection";
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
      <VideoHero />
      <ImmerseSection />
      <TabbyTourSection />
      <PlaylistsSection />
      <CastTabbySection onOpenCollection={() => setCollectionOpen(true)} />
      <StoreCTASection />
      <CollectionDrawer
        open={collectionOpen}
        onClose={() => setCollectionOpen(false)}
      />
    </MobilePage>
  );
}
