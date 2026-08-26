import { forwardRef, type CSSProperties, type HTMLAttributes, type ReactNode, type UIEventHandler } from "react";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Full-bleed sections skip horizontal padding (images, carousels) */
  bleed?: boolean;
} & HTMLAttributes<HTMLElement>;

export function MobilePage({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white [container-type:inline-size]">
      {children}
    </main>
  );
}

export function PageSection({
  children,
  className = "",
  style,
  bleed = false,
  ...rest
}: PageSectionProps) {
  return (
    <section
      className={bleed ? className : `px-margin ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </section>
  );
}

/** Breaks out of any parent padding so media hits the viewport edges */
export function FullBleed({ children }: { children: ReactNode }) {
  return (
    <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
      {children}
    </div>
  );
}

type GridProps = {
  children: ReactNode;
  className?: string;
};

/** 4-column mobile grid — 12px margins, 12px gutters */
export function Grid({ children, className = "" }: GridProps) {
  return (
    <div className={`grid grid-cols-4 gap-gutter ${className}`}>
      {children}
    </div>
  );
}

type ColSpan = 1 | 2 | 3 | 4;

const colSpanClass: Record<ColSpan, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
};

export function GridCol({
  children,
  span = 4,
  className = "",
}: {
  children?: ReactNode;
  span?: ColSpan;
  className?: string;
}) {
  return (
    <div className={`${colSpanClass[span]} ${className}`}>{children}</div>
  );
}

/** Horizontal scroll track — 12px inset on both sides via spacers (reliable across browsers) */
export const CarouselTrack = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    className?: string;
    onScroll?: UIEventHandler<HTMLDivElement>;
  }
>(function CarouselTrack({ children, className = "", onScroll }, ref) {
  return (
    <div
      ref={ref}
      className={`flex w-full gap-gutter overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide scroll-pl-margin scroll-pr-margin ${className}`}
      onScroll={onScroll}
    >
      <div
        className="shrink-0 snap-none"
        style={{ width: "var(--spacing-margin)" }}
        aria-hidden
      />
      {children}
      <div
        className="shrink-0 snap-none"
        style={{ width: "var(--spacing-margin)" }}
        aria-hidden
      />
    </div>
  );
});

CarouselTrack.displayName = "CarouselTrack";
