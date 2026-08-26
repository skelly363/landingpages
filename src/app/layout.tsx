import type { Metadata, Viewport } from "next";
import { PAGE_VERSION } from "@/lib/version";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live Your Story | Coach x Spotify",
  description:
    "Your style. Your soundtrack. Your story. Discover what happens when they come together for Fall 2026.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-page-version={PAGE_VERSION}>
      <head>
        <link
          rel="preload"
          href="/fonts/neue-helvetica-53-extended.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/neue-helvetica-73-bold-extended.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
