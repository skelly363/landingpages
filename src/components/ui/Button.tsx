import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "light" | "dark";
  className?: string;
  onClick?: () => void;
  "aria-expanded"?: boolean;
};

export function Button({
  children,
  href,
  variant = "light",
  className = "",
  onClick,
  "aria-expanded": ariaExpanded,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-coach-body capitalize transition-opacity hover:opacity-90";
  const variants = {
    light: "bg-white text-coach-black",
    dark: "bg-coach-black text-white",
  };
  const classes = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span className="translate-y-[2px]">{children}</span>
      <Icon name="add" size={18} />
    </>
  );

  if (!href) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={classes}
        aria-expanded={ariaExpanded}
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
