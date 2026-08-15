/**
 * Every URL on the site, declared once.
 *
 * Pages, navigation, breadcrumbs and `sitemap.ts` all import from here, so a
 * route can never drift out of sync between the menu, the page and the sitemap.
 */

export const routes = {
  home: "/",

  about: "/about",
  management: "/about/management",

  products: "/products",
  himalaya: "/products/himalaya-agriculture-spraying-drone",

  daas: "/drone-services",
  daasCoastalSurveillance: "/drone-services/coastal-security-surveillance",
  daasAgricultureSpraying: "/drone-services/agriculture-fertilizer-spraying",
  daasTrafficMonitoring: "/drone-services/traffic-monitoring-management",
  daasLandMapping: "/drone-services/land-mapping-survey",
  daasMultispectral: "/drone-services/multispectral-mapping",

  software: "/software",
  softwareGlobalMapper: "/software/global-mapper",
  softwareAgisoftMetashape: "/software/agisoft-metashape",
  softwareSurfer: "/software/surfer",
  softwareGrapher: "/software/grapher",
  softwareGeo5: "/software/geo5-geotechnical-engineering-software",

  repairMaintenance: "/drone-repair-maintenance",

  investors: "/investors",
  investorsFinancials: "/investors#financial-information",
  investorsGovernance: "/investors/corporate-governance",
  investorsDocuments: "/investors#corporate-documents",

  careers: "/careers",
  contact: "/contact",
  distributor: "/contact/become-a-distributor",

  privacy: "/privacy-policy",
  terms: "/terms-of-use",
} as const;

export type Route = (typeof routes)[keyof typeof routes];
