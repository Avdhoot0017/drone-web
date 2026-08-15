import type { Metadata } from "next";

import { routes } from "@/lib/routes";
import { formattedAddress, siteConfig } from "@/lib/site-config";

/**
 * Central SEO helpers.
 *
 * Every page builds its metadata through `buildMetadata` so that canonical
 * URLs, Open Graph tags, Twitter cards and robots directives are produced
 * identically and can never be forgotten on a new page.
 */

interface BuildMetadataOptions {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/drone-services". Used for the canonical URL. */
  path: string;
  /** Site-relative or absolute image used for OG/Twitter previews. */
  image?: string;
  keywords?: string[];
  /** Set true for thin or duplicate pages that should stay out of the index. */
  noIndex?: boolean;
  type?: "website" | "article";
}

export const DEFAULT_OG_IMAGE = "/opengraph-image";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return new URL(path, siteConfig.url).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords,
  noIndex = false,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      // A self-referencing canonical on every page is the cheapest, most
      // reliable defence against duplicate-content dilution.
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.legalName,
      locale: siteConfig.locale,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
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
  };
}

/* -------------------------------------------------------------------------- */
/*                            JSON-LD structured data                          */
/* -------------------------------------------------------------------------- */

/**
 * JSON.stringify does not escape `<`, which allows script-tag breakout if any
 * value ever contains user input. Escaping it is cheap insurance.
 */
export function jsonLdScript(data: object): { __html: string } {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

/** Organization + local business identity. Rendered once, in the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/brand/logo-schnell.jpg"),
    },
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.general.phone,
        email: siteConfig.contact.general.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "mr"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.sales.phone,
        email: siteConfig.contact.sales.email,
        contactType: "sales",
        areaServed: "IN",
      },
    ],
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

/** Website entity — enables the sitelinks search box and name disambiguation. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.legalName,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: siteConfig.languageTag,
  };
}

/** Breadcrumb trail. Google renders this in place of the raw URL in results. */
export function breadcrumbJsonLd(trail: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", href: routes.home }, ...trail].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.href),
      })
    ),
  };
}

/** Service pages — describes a DaaS offering and who provides it. */
export function serviceJsonLd({
  name,
  description,
  path,
  image,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? name,
    url: absoluteUrl(path),
    ...(image ? { image: absoluteUrl(image) } : {}),
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(routes.contact),
      servicePhone: siteConfig.contact.general.phone,
    },
  };
}

/** Product pages — the Himalaya drone. */
export function productJsonLd({
  name,
  description,
  path,
  image,
  properties,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
  properties?: { name: string; value: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    brand: { "@type": "Brand", name: siteConfig.name },
    manufacturer: { "@id": `${siteConfig.url}/#organization` },
    category: "Agricultural Spraying Drone",
    ...(properties?.length
      ? {
          additionalProperty: properties.map((property) => ({
            "@type": "PropertyValue",
            name: property.name,
            value: property.value,
          })),
        }
      : {}),
  };
}

/** FAQ blocks — eligible for the expandable FAQ rich result. */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Careers page — a generic hiring organization signal. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.legalName,
    image: absoluteUrl("/images/brand/logo-schnell.jpg"),
    url: siteConfig.url,
    telephone: siteConfig.contact.general.phone,
    email: siteConfig.contact.general.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    description: formattedAddress,
    areaServed: { "@type": "Country", name: "India" },
  };
}
