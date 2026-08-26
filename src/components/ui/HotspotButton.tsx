import { Icon } from "@/components/ui/Icon";

type HotspotButtonProps = {
  top: string;
  left: string;
  label?: string;
  isOpen?: boolean;
  controlsId?: string;
  onClick?: () => void;
};

/** White circle with + icon — toggles product detail card */
export function HotspotButton({
  top,
  left,
  label = "View product details",
  isOpen = false,
  controlsId,
  onClick,
}: HotspotButtonProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close details" : label}
      aria-expanded={controlsId ? isOpen : undefined}
      aria-controls={controlsId}
      onClick={onClick}
      className={`hotspot-plus absolute z-30 flex size-[42px] items-center justify-center rounded-full bg-white text-coach-black ${isOpen ? "is-open" : ""}`}
      style={{ top, left }}
    >
      <span className="hotspot-plus-icon flex items-center justify-center">
        <Icon name="add" size={20} />
      </span>
    </button>
  );
}
