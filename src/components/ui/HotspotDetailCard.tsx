import { TextLink } from "@/components/ui/Button";

export type HotspotDetailContent = {
  title: string;
  description: string;
  linkLabel: string;
  linkHref?: string;
};

type HotspotDetailCardProps = HotspotDetailContent & {
  open: boolean;
  id: string;
  /** Grows the card from the plus — left or right side of the image */
  origin?: "left" | "right";
};

/** White info card revealed when a carousel hotspot is activated */
export function HotspotDetailCard({
  open,
  id,
  title,
  description,
  linkLabel,
  linkHref = "#",
  origin = "right",
}: HotspotDetailCardProps) {
  return (
    <div
      id={id}
      role="dialog"
      aria-labelledby={`${id}-title`}
      aria-hidden={!open}
      inert={!open}
      data-open={open ? "true" : "false"}
      data-origin={origin}
      className="hotspot-card absolute left-[calc(50%+32px)] top-[calc(50%+105.5px)] z-20 w-[260px] rounded bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
    >
      <div className="hotspot-card-body flex flex-col gap-4">
        <h3
          id={`${id}-title`}
          className="font-coach-extended-bold text-base leading-[1.2] tracking-[-0.01em] text-coach-black"
        >
          {title}
        </h3>

        <div className="flex flex-col gap-4">
          <p className="text-coach-body-sm text-[#474747]">{description}</p>
          <TextLink
            href={linkHref}
            className="text-coach-body-sm text-coach-black"
          >
            {linkLabel}
          </TextLink>
        </div>
      </div>
    </div>
  );
}
