import { CastTabbySection } from "@/components/sections/CastTabbySection";
import { HeroIntro } from "@/components/sections/HeroIntro";
import { ImmerseSection } from "@/components/sections/ImmerseSection";
import { PlaylistsSection } from "@/components/sections/PlaylistsSection";
import { StoreCTASection } from "@/components/sections/StoreCTASection";
import { StyleCarousel } from "@/components/sections/StyleCarousel";
import { TabbyTourSection } from "@/components/sections/TabbyTourSection";
import { VideoHero } from "@/components/sections/VideoHero";
import { MobilePage } from "@/components/layout/Grid";

export function LandingPage() {
  return (
    <MobilePage>
      <HeroIntro />
      <StyleCarousel />
      <VideoHero />
      <ImmerseSection />
      <TabbyTourSection />
      <PlaylistsSection />
      <CastTabbySection />
      <StoreCTASection />
    </MobilePage>
  );
}
