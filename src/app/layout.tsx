import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader, Public_Sans } from "next/font/google";

import { SkipLink } from "@/components/portfolio/skip-link";
import { ThemeProvider, themeScript } from "@/components/portfolio/theme-provider";
import { brandIdentity } from "@/content/brand";
import { siteContent } from "@/content/site-content";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#181c20" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: `${siteContent.meta.name} | ${brandIdentity.concept}`,
  title: {
    default: "Grigorii | AI-Enabled Support Systems Operator",
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
    "escalation management",
    "incident handling",
    "ai automation",
    "customer success",
    "product-facing operations",
    "support systems",
    "customer feedback",
    "case studies",
  ],
  openGraph: {
    title: "Grigorii | AI-Enabled Support Systems Operator",
    description: siteContent.description,
    url: absoluteUrl("/"),
    siteName: siteContent.meta.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grigorii | AI-Enabled Support Systems Operator",
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
      <body className={`${newsreader.variable} ${publicSans.variable} ${plexMono.variable}`}>
        <SkipLink />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
