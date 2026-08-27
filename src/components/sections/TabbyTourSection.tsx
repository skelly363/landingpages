import Image from "next/image";
import { TextLink } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Grid, GridCol, PageSection, FullBleed } from "@/components/layout/Grid";
import { SPACING } from "@/lib/spacing";
import { SECTION_RATIOS } from "@/lib/aspect-ratios";

const tourDates = [
  { date: "09 September", city: "Boston" },
  { date: "17 September", city: "New York City" },
  { date: "29 September", city: "San Francisco" },
];

export function TabbyTourSection() {
  return (
    <section className="w-full pb-16">
      <Reveal media>
      <FullBleed>
        <MediaFrame
          src="/images/tabby-tour.jpg"
          alt="Coach x Spotify Tabby Tour"
          ratio={SECTION_RATIOS.tabbyTourBanner}
          fullWidth
          sizes="100vw"
          className="w-full max-w-none"
        >
          <div className="absolute inset-x-0 bottom-0 flex justify-center px-margin pb-4">
            <Image
              src="/images/coach-logo.svg"
              alt="Coach x Spotify Tabby Tour"
              width={280}
              height={80}
              className="w-[min(85%,280px)] brightness-0 invert"
            />
          </div>
        </MediaFrame>
      </FullBleed>
      </Reveal>

      <PageSection className="pt-[30px]">
        <h2 className="text-coach-body font-coach-extended-bold leading-[1.4]">
          The Tabby Tour: Live Your Story
        </h2>
        <Reveal className="mt-4">
          <p className="text-coach-body leading-[1.4]">
            Experience the campaign in person as Coach and Spotify take the
            season around the world with live music, styling, personalization
            and more human moments in between.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-4 flex gap-6 text-coach-body">
          <TextLink href="#">Follow the Tour</TextLink>
          <TextLink href="#">Discover More</TextLink>
        </Reveal>

        <Reveal as="ul" stagger className="mt-10">
          {tourDates.map((stop) => (
            <li key={stop.city} className="border-b border-neutral-300 py-6 last:border-b-0">
              <Grid className="text-coach-body">
                <GridCol span={2}>
                  <span className="font-coach-extended-bold">{stop.date}</span>
                </GridCol>
                <GridCol span={2} className="text-right">
                  <span>{stop.city}</span>
                </GridCol>
              </Grid>
            </li>
          ))}
        </Reveal>
      </PageSection>
    </section>
  );
}
