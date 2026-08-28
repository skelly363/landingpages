import Image from "next/image";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SPACING } from "@/lib/spacing";

/** Store CTA from Figma node 1564:5875 */
export function StoreCTASection() {
  return (
    <section
      className="relative w-full bg-[#fbb09b]"
      style={{ marginTop: SPACING.fullBleedCtaGap }}
    >
      <div className="flex min-h-[620px] flex-col items-center px-margin pb-16 pt-10">
        <Reveal media className="flex justify-center">
          <Image
            src="/images/store-cta-graphic.png"
            alt="Coach Fall 2026"
            width={258}
            height={382}
            className="h-auto w-[258px] max-w-full"
            sizes="258px"
          />
        </Reveal>

        <Reveal
          stagger
          className="mt-5 flex flex-col items-center gap-8 text-center text-black"
        >
          <p className="max-w-[296px] font-coach-extended-bold text-lg leading-normal">
            Discover more of the story in stores.
          </p>
          <TextLink href="#">Find a Store</TextLink>
        </Reveal>
      </div>
    </section>
  );
}
