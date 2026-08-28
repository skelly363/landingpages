"use client";

import { useEffect } from "react";
import Image from "next/image";
import { MediaFrame } from "@/components/ui/MediaFrame";

const bags = [
  {
    src: "/images/drawer-lilas.jpg",
    name: "Lilas",
    alt: "Lilas Ikuta Tabby bag",
  },
  {
    src: "/images/drawer-elle.jpg",
    name: "Elle Fanning",
    alt: "Elle Fanning Tabby bag",
  },
  {
    src: "/images/drawer-soyoon.jpg",
    name: "Soyoon",
    alt: "Soyoon Tabby bag",
  },
  {
    src: "/images/drawer-shan.jpg",
    name: "Shan Yichun",
    alt: "Shan Yichun Tabby bag",
  },
];

function useDrawerLock(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
}

function DrawerCloseButton({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <button
      type="button"
      aria-label="Close"
      onClick={onClose}
      tabIndex={open ? 0 : -1}
      aria-hidden={!open}
      className={`absolute left-1/2 z-30 size-12 -translate-x-1/2 transition-opacity duration-500 ${
        open
          ? "top-[119px] opacity-100"
          : "pointer-events-none top-[119px] opacity-0"
      }`}
    >
      <Image
        src="/images/drawer-close.svg"
        alt=""
        width={48}
        height={48}
        className="size-12"
      />
    </button>
  );
}

function DrawerBagList() {
  return (
    <ul className="mx-auto mt-8 flex w-[220px] flex-col gap-4">
      {bags.map((bag) => (
        <li key={bag.name} className="flex flex-col gap-4">
          <MediaFrame
            src={bag.src}
            alt={bag.alt}
            ratio="3:4"
            width={220}
            sizes="220px"
          />
          <p className="text-coach-body">{bag.name}</p>
        </li>
      ))}
    </ul>
  );
}

function DrawerSheet({ open }: { open: boolean }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="collection-drawer-title"
      aria-hidden={!open}
      inert={!open}
      className={`collection-drawer absolute inset-x-0 bottom-0 top-[199px] flex flex-col overflow-hidden bg-white ${
        open ? "is-open" : ""
      }`}
    >
      <div className="flex-1 overflow-y-auto overscroll-contain pb-12 pt-6">
        <div className="flex flex-col items-center gap-4 px-margin text-center">
          <p className="text-coach-eyebrow">The Artist Tabby Collection</p>
          <h2
            id="collection-drawer-title"
            className="max-w-[322px] font-coach-extended text-lg leading-normal"
          >
            Special-edition bags inspired by the personal style and stories of
            the stars of our campaign.
          </h2>
        </div>
        <DrawerBagList />
      </div>
    </div>
  );
}

type CollectionDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function CollectionDrawer({ open, onClose }: CollectionDrawerProps) {
  useDrawerLock(open, onClose);

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <button
        type="button"
        aria-label="Close collection"
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <DrawerCloseButton open={open} onClose={onClose} />
      <DrawerSheet open={open} />
    </div>
  );
}
