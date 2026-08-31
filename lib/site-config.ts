/**
 * Single source of truth for company-wide facts: identity, contact details,
 * addresses and social profiles.
 *
 * Everything user-facing (header, footer, contact page, JSON-LD structured
 * data, sitemap, metadata) reads from here, so a detail such as a phone number
 * only ever needs to be changed in one place.
 */

export const siteConfig = {
  name: "Schnell Drone Technologies",
  legalName: "Schnell Drone Technologies Ltd.",
  shortName: "Schnell",
  tagline: "Drone-as-a-Service, engineered for India",
  description:
    "Schnell Drone Technologies Ltd. is one of India's leading Drone-as-a-Service (DaaS) companies — delivering coastal surveillance, agricultural spraying with the DGCA type-certified Himalaya drone, land mapping, multispectral analytics and GIS software across India.",

  /**
   * Canonical production origin. Drives `metadataBase`, canonical URLs,
   * sitemap.xml, robots.txt and Open Graph URLs.
   * Override per-environment with NEXT_PUBLIC_SITE_URL.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.schnelldronetech.com",

  founded: "2010",
  locale: "en_IN",
  languageTag: "en-IN",

  contact: {
    general: {
      phone: "+91 20 4721 6736",
      phoneHref: "tel:+912047216736",
      email: "info@schnelldronetech.com",
    },
    /** Himalaya product sales & distributor enquiries */
    sales: {
      phone: "+91 95118 46050",
      phoneHref: "tel:+919511846050",
      email: "Himalaya@SchnellDroneTech.com",
    },
  },

  address: {
    street:
      "531-B, Gera\u2019s Imperium Rise, Plot No 1B, Rajiv Gandhi Infotech Park, Hinjawadi Phase-2, Zone A",
    locality: "Mulshi, Pune",
    region: "Maharashtra",
    postalCode: "411057",
    country: "India",
    countryCode: "IN",
    /**
     * TODO: replace with the exact surveyed coordinates of the office. These
     * are approximate for Hinjawadi Phase 2 — good enough to place the map in
     * the right locality, not to pin the building.
     */
    geo: { latitude: 18.5913, longitude: 73.7389 },
  },

  /** TODO: confirm live social profile URLs with the client */
  social: {
    linkedin: "https://www.linkedin.com/company/schnell-drone-technologies/",
    youtube: "",
    twitter: "",
  },

  /** Search Console / analytics verification tokens (set via env in production) */
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Full postal address on one line — used in the footer and JSON-LD. */
export const formattedAddress = [
  siteConfig.address.street,
  `${siteConfig.address.locality} – ${siteConfig.address.postalCode}`,
  siteConfig.address.region,
  siteConfig.address.country,
].join(", ");
