import Image from "next/image";

export function CoachHeader() {
  return (
    <header className="sticky top-0 z-30 w-full shrink-0 bg-white">
      <nav
        aria-label="Coach"
        className="flex items-end justify-between pt-2 pl-[10px] pr-4"
        style={{ minHeight: "var(--coach-header-height)" }}
      >
        <div className="flex items-end">
          <div className="flex h-10 w-[102px] items-end pb-2 pl-[14px]">
            <Image
              src="/images/nav-coach-logo.svg"
              alt="Coach"
              width={74}
              height={8}
              className="h-2 w-[74px] object-contain"
              priority
            />
          </div>
          <Image
            src="/images/nav-coach-outlet-logo.svg"
            alt="Coach Outlet"
            width={124}
            height={8}
            className="mb-2 h-2 w-[124px] object-contain"
            priority
          />
        </div>

        <div className="flex h-10 items-center gap-3">
          <button
            type="button"
            aria-label="Shopping bag"
            className="flex size-6 items-center justify-center"
          >
            <Image
              src="/images/nav-bag.svg"
              alt=""
              width={24}
              height={24}
              className="size-6 object-contain"
            />
          </button>
          <button
            type="button"
            aria-label="Search and menu"
            className="flex h-6 w-6 items-center justify-center"
          >
            <Image
              src="/images/nav-search-menu.svg"
              alt=""
              width={24}
              height={18}
              className="h-[18px] w-6 object-contain"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
