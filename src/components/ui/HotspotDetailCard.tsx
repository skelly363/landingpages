import { TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export type HotspotDetailContent = {
  title: string;
  description: string;
  linkLabel: string;
  linkHref?: string;
};

type HotspotDetailCardProps = HotspotDetailContent & {
  open: boolean;
  id: string;
  /** Grows the card from the trigger — left, right, or bottom */
  origin?: "left" | "right" | "bottom";
  onClose?: () => void;
};

/** White info card revealed when a carousel CTA is activated */
export function HotspotDetailCard({
  open,
  id,
  title,
  description,
  linkLabel,
  linkHref = "#",
  origin = "bottom",
  onClose,
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
      className="hotspot-card absolute left-1/2 top-[42%] z-20 w-[260px] rounded bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
    >
      {onClose && (
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 flex size-6 items-center justify-center text-coach-black"
        >
          <Icon name="close" size={16} />
        </button>
      )}

      <div className="hotspot-card-body flex flex-col gap-4 pr-5">
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
