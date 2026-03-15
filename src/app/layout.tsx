import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader, Public_Sans } from "next/font/google";

import { SkipLink } from "@/components/portfolio/skip-link";
import { ThemeProvider, themeScript } from "@/components/portfolio/theme-provider";
import { brandPalette } from "@/content/brand";
import { siteContent } from "@/content/site-content";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

import "./globals.css";

const displayFont = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: brandPalette.canvas },
    { media: "(prefers-color-scheme: dark)", color: brandPalette.night },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Grigorii Portfolio",
  title: {
    default: "Grigorii | Premium Support Systems Portfolio",
    template: "%s | Grigorii",
  },
  description: siteContent.description,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteContent.meta.name }],
  creator: siteContent.meta.name,
  publisher: siteContent.meta.name,
  keywords: [
    "technical support",
    "support operations",
    "workflow automation",
    "incident handling",
    "escalation management",
    "support systems",
    "customer feedback",
    "case studies",
    "AI operations",
  ],
  openGraph: {
    title: "Grigorii | Premium Support Systems Portfolio",
    description: siteContent.description,
    url: absoluteUrl("/"),
    siteName: siteContent.meta.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grigorii | Premium Support Systems Portfolio",
    description: siteContent.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      >
        <SkipLink />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
