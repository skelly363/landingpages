import { SPACING } from "@/lib/spacing";
import { PageSection } from "@/components/layout/Grid";
import { Reveal } from "@/components/ui/Reveal";

export function HeroIntro({ compact = false }: { compact?: boolean }) {
  return (
    <PageSection
      style={{
        paddingTop: compact ? 20 : SPACING.heroTop,
        paddingBottom: compact ? 16 : SPACING.heroBottom,
      }}
    >
      <Reveal
        stagger
        delay={120}
        className="flex flex-col"
        style={{ gap: SPACING.headingToBody }}
      >
        <h1 className="text-coach-display">Live Your Story</h1>
        <p className="text-coach-body">
          Your style. Your soundtrack. Your story. Discover what happens when
          they come together for Fall 2026.
        </p>
      </Reveal>
    </PageSection>
  );
}
