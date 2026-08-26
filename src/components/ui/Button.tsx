import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "light" | "dark";
  className?: string;
};

export function Button({
  children,
  href = "#",
  variant = "light",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-coach-body capitalize transition-opacity hover:opacity-90";
  const variants = {
    light: "bg-white text-coach-black",
    dark: "bg-coach-black text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <Icon name="add" size={18} />
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
      className={`inline-block w-fit text-coach-body leading-none no-underline border-b border-current pb-2 ${className}`}
    >
      {children}
    </Link>
  );
}
