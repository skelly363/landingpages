import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "light" | "dark";
  size?: "default" | "compact";
  className?: string;
  onClick?: () => void;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
};

export function Button({
  children,
  href,
  variant = "light",
  size = "default",
  className = "",
  onClick,
  "aria-expanded": ariaExpanded,
  "aria-controls": ariaControls,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full capitalize transition-opacity hover:opacity-90";
  const variants = {
    light: "bg-white text-coach-black",
    dark: "bg-coach-black text-white",
  };
  const sizes = {
    default: "gap-3 px-6 py-4 text-coach-body",
    compact:
      "h-10 shrink-0 gap-2.5 whitespace-nowrap px-4 text-[12px] leading-none font-coach-extended-bold",
  };
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      <span className="translate-y-[2px]">
        {children}
      </span>
      <Icon name="add" size={size === "compact" ? 16 : 18} />
    </>
  );

  if (!href) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={classes}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes}>
      {inner}
    </Link>
  );
}

export function TextLink({
  children,
  href = "#",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-block w-fit text-coach-body leading-none no-underline border-b border-current pb-1.5 ${className}`}
    >
      {children}
    </Link>
  );
}
