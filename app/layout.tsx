import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { jsonLdScript, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

/**
 * Body typeface. `display: swap` renders text immediately in the fallback font
 * rather than blocking paint — this protects Largest Contentful Paint.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Display typeface for headings — squarer and more industrial than Inter. */
const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  /**
   * Resolves every relative URL in metadata (canonicals, OG images) against
   * the production origin. Without this, relative metadata URLs fail the build.
   */
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.legalName} | Drone-as-a-Service & Agri Spraying Drones in India`,
    /** Every child page's title is appended to the brand automatically. */
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

  applicationName: siteConfig.legalName,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "Technology",

  keywords: [
    "drone as a service India",
    "DaaS company India",
    "agriculture spraying drone",
    "DGCA type certified drone",
    "Himalaya spraying drone",
    "coastal surveillance drone",
    "drone survey and mapping",
    "multispectral drone mapping",
    "NDVI drone analysis",
    "SVAMITVA drone survey",
    "Nano Urea drone spraying",
    "drone repair and maintenance",
    "Global Mapper India",
    "Agisoft Metashape India",
    "Schnell Drone Technologies",
  ],

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: `${siteConfig.legalName} | Drone-as-a-Service in India`,
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalName} | Drone-as-a-Service in India`,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  ...(siteConfig.verification.google
    ? { verification: { google: siteConfig.verification.google } }
    : {}),

  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#EF1C25",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.languageTag}
      className={`${inter.variable} ${archivo.variable} h-full`}
      suppressHydrationWarning
    >
      {/*
        `suppressHydrationWarning` on <body> as well as <html>: browser
        extensions (Grammarly, ColorZilla, password managers) inject attributes
        such as `cz-shortcut-listen` onto these two elements before React
        hydrates, which React then reports as a mismatch. It only silences the
        warning for attributes on this element itself, not for its children, so
        genuine hydration bugs deeper in the tree are still reported.
      */}
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        {/*
          Site-wide structured data. Declared once here so that Organization
          and WebSite entities are present on every URL Google crawls — page
          level JSON-LD (Product, Service, Breadcrumb) references them by @id.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd())}
        />

        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
