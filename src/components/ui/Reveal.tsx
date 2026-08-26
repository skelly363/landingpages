"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Extra wait after the block enters view */
  delay?: number;
  /** Fade direct children in sequence */
  stagger?: boolean;
  /** Photography: opacity only, no rise or blur */
  media?: boolean;
  as?: ElementType;
};

export function Reveal({
  children,
  className = "",
  style,
  delay = 0,
  stagger = false,
  media = false,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => setVisible(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    const fallback = window.setTimeout(show, 2800);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        window.clearTimeout(fallback);
        show();
        observer.disconnect();
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  const classes = [
    "reveal",
    stagger ? "reveal-stagger" : "",
    media ? "reveal-media" : "",
    visible ? "is-in" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{
        ...style,
        ["--reveal-delay" as string]: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
