import { SPACING } from "@/lib/spacing";
import { PageSection } from "@/components/layout/Grid";
import { Reveal } from "@/components/ui/Reveal";

export function HeroIntro() {
  return (
    <PageSection
      style={{ paddingTop: SPACING.heroTop, paddingBottom: SPACING.heroBottom }}
    >
      <Reveal
        stagger
        delay={120}
        className="flex flex-col"
        style={{ gap: SPACING.headingToBody }}
      >
        <h1 className="text-coach-display">Live Your Story</h1>
        <p className="text-coach-body-sm">
          Your style. Your soundtrack. Your story. Discover what happens when
          they come together for Fall 2026.
        </p>
      </Reveal>
    </PageSection>
  );
}
