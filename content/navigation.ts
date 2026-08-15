import { routes } from "@/lib/routes";
import type { NavItem, NavLink } from "@/types/navigation";

/**
 * The main navigation model.
 *
 * Items with a `panel` render a full-width mega menu; items without one are
 * plain links. Keeping this as data (rather than JSX) means the desktop mega
 * menu, the mobile drawer and the footer can all be generated from one source.
 */
export const mainNav: NavItem[] = [
  {
    label: "Products",
    href: routes.products,
    panel: {
      featured: {
        heading: "Products",
        cards: [
          {
            label: "Himalaya",
            href: routes.himalaya,
            image: "/images/doc/himalaya-spraying-field.jpeg",
            imageAlt:
              "Himalaya agricultural spraying drone in flight over a pomegranate orchard",
            caption: "Agriculture spraying drone",
            badge: "DGCA Type Certified",
          },
          {
            label: "Fleet & Payloads",
            href: routes.daasCoastalSurveillance,
            image: "/images/stock/coastal-patrol-boat.jpg",
            imageAlt: "Coastal patrol vessel monitored by fixed-wing surveillance drones",
            caption: "Fixed-wing & multirotor UAVs",
          },
        ],
      },
      columns: [
        {
          heading: "Why the Himalaya",
          links: [
            {
              label: "Key Features & Parameters",
              href: `${routes.himalaya}#specifications`,
              description:
                "Hexacopter, 28.5 kg max all-up weight, 10 L tank with four flat-jet nozzles and a full failsafe suite.",
            },
            {
              label: "Spraying Performance",
              href: `${routes.himalaya}#performance`,
              description:
                "One acre in about 7 minutes, roughly 6 acres an hour and 25–30 acres a day with multiple battery sets.",
            },
          ],
        },
        {
          heading: "Get started",
          links: [
            {
              label: "Advantages Over Traditional Spraying",
              href: `${routes.himalaya}#advantages`,
              description:
                "Higher efficiency, precision application, lower chemical use and far safer operators.",
            },
            {
              label: "Become a Distributor",
              href: routes.distributor,
              description:
                "Partner with Schnell to bring type-certified spraying drones to your state.",
            },
          ],
        },
      ],
      footerLink: { label: "View all products", href: routes.products },
    },
  },

  {
    label: "Drone Services",
    href: routes.daas,
    panel: {
      featured: {
        heading: "Drone-as-a-Service",
        cards: [
          {
            label: "Coastal Security & Surveillance",
            href: routes.daasCoastalSurveillance,
            image: "/images/stock/coastal-aerial-fishing.jpg",
            imageAlt: "Aerial view of fishing vessels along a coastline under drone surveillance",
            caption: "India's only operator up to 12 NM",
            badge: "Flagship",
          },
        ],
      },
      columns: [
        {
          heading: "Services",
          links: [
            {
              label: "Coastal Security & Surveillance",
              href: routes.daasCoastalSurveillance,
              description:
                "Daily coastal patrols for Fisheries, Coastal Police, Coast Guard, Navy and Customs, plus sea search & rescue.",
            },
            {
              label: "Agriculture Fertilizer Spraying",
              href: routes.daasAgricultureSpraying,
              description:
                "Nano Urea and Nano DAP spraying at scale under consecutive MoAs with IFFCO.",
            },
            {
              label: "Traffic Monitoring & Challan Generation",
              href: routes.daasTrafficMonitoring,
              description:
                "AI violation detection and e-challan integration on a subscription — no capex for the department.",
            },
          ],
        },
        {
          heading: "Geospatial",
          links: [
            {
              label: "Land Mapping & Survey",
              href: routes.daasLandMapping,
              description:
                "ORI, 3D point cloud, DEM, DTM, DSM and contours — including SVAMITVA village mapping.",
            },
            {
              label: "Multispectral Mapping",
              href: routes.daasMultispectral,
              description:
                "NDVI, NDRE, NDWI and GNDVI analytics for crop health, irrigation and yield decisions.",
            },
            {
              label: "Drone Repair & Maintenance",
              href: routes.repairMaintenance,
              description:
                "Preventive, corrective and predictive servicing for multirotor and fixed-wing fleets.",
            },
          ],
        },
      ],
      footerLink: { label: "Explore all drone services", href: routes.daas },
    },
  },

  {
    label: "Software",
    href: routes.software,
    panel: {
      featured: {
        heading: "Featured",
        cards: [
          {
            label: "Global Mapper",
            href: routes.softwareGlobalMapper,
            image: "/images/stock/mapping-aerial-farmland.jpg",
            imageAlt: "Aerial survey imagery of agricultural land used for GIS analysis",
            caption: "Exclusive India partner, Blue Marble Geographics",
            badge: "1000+ clients",
          },
        ],
      },
      columns: [
        {
          heading: "GIS & Photogrammetry",
          links: [
            {
              label: "Global Mapper",
              href: routes.softwareGlobalMapper,
              description:
                "All-in-one GIS with 300+ supported formats, terrain analysis and Pixels to Points drone processing.",
            },
            {
              label: "Agisoft Metashape",
              href: routes.softwareAgisoftMetashape,
              description:
                "Photogrammetric processing of drone imagery into ORI, dense point clouds and 3D models.",
            },
          ],
        },
        {
          heading: "Analysis & Engineering",
          links: [
            {
              label: "Surfer",
              href: routes.softwareSurfer,
              description: "Contouring, gridding and 3D surface mapping for terrain and subsurface data.",
            },
            {
              label: "Grapher",
              href: routes.softwareGrapher,
              description: "Technical graphing and statistical plotting for scientific and survey datasets.",
            },
            {
              label: "GEO5 Geotechnical Software",
              href: routes.softwareGeo5,
              description: "Geotechnical engineering suite for foundations, slopes, retaining walls and tunnels.",
            },
          ],
        },
      ],
      footerLink: { label: "See all software", href: routes.software },
    },
  },

  {
    label: "Investors",
    href: routes.investors,
    panel: {
      columns: [
        {
          heading: "Financials",
          links: [
            {
              label: "Financial Information",
              href: routes.investorsFinancials,
              description: "Annual reports, directors' reports and statutory audit reports.",
            },
            {
              label: "Investor Information",
              href: `${routes.investors}#investor-information`,
              description: "Disclosures, updates and announcements for shareholders.",
            },
          ],
        },
        {
          heading: "Governance",
          links: [
            {
              label: "Board of Directors",
              href: `${routes.investorsGovernance}#board-of-directors`,
              description: "Composition of the Board and directors' profiles.",
            },
            {
              label: "Committees of the Board",
              href: `${routes.investorsGovernance}#committees`,
              description: "Audit, Nomination & Remuneration and Stakeholder Relationship committees.",
            },
            {
              label: "Corporate Documents",
              href: routes.investorsDocuments,
              description: "Memorandum of Association, Articles of Association and Key Managerial Personnel.",
            },
          ],
        },
      ],
      footerLink: { label: "Go to Investor Relations", href: routes.investors },
    },
  },

  {
    label: "Company",
    href: routes.about,
    panel: {
      featured: {
        heading: "About Schnell",
        cards: [
          {
            label: "Fourteen years of geospatial depth",
            href: routes.about,
            image: "/images/stock/about-drone-mountains.jpg",
            imageAlt: "Survey drone flying over farmland with a mountain range behind",
            caption: "From GIS and photogrammetry in 2010 to nationwide DaaS",
          },
        ],
      },
      columns: [
        {
          heading: "Who we are",
          links: [
            {
              label: "About Us",
              href: routes.about,
              description:
                "Our story, operational footprint and the milestones behind India's leading DaaS company.",
            },
            {
              label: "Vision",
              href: `${routes.about}#vision`,
              description:
                "Advancing agriculture, industry, infrastructure and defence through indigenous drone technology.",
            },
            {
              label: "Management",
              href: routes.management,
              description: "The promoters, whole-time directors and independent directors leading Schnell.",
            },
          ],
        },
        {
          heading: "Work with us",
          links: [
            {
              label: "Careers",
              href: routes.careers,
              description: "Join the engineering, pilot and operations teams flying India's toughest missions.",
            },
            {
              label: "Contact Us",
              href: routes.contact,
              description: "Business enquiries for drones, drone services, software — and grievances.",
            },
          ],
        },
      ],
      footerLink: { label: "More about Schnell", href: routes.about },
    },
  },

  { label: "Careers", href: routes.careers },
];

/** Link groups rendered in the site footer. */
export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Drone Services",
    links: [
      { label: "Coastal Security & Surveillance", href: routes.daasCoastalSurveillance },
      { label: "Agriculture Fertilizer Spraying", href: routes.daasAgricultureSpraying },
      { label: "Traffic Monitoring & Challan", href: routes.daasTrafficMonitoring },
      { label: "Land Mapping & Survey", href: routes.daasLandMapping },
      { label: "Multispectral Mapping", href: routes.daasMultispectral },
      { label: "Drone Repair & Maintenance", href: routes.repairMaintenance },
    ],
  },
  {
    heading: "Products & Software",
    links: [
      { label: "Himalaya Spraying Drone", href: routes.himalaya },
      { label: "Global Mapper", href: routes.softwareGlobalMapper },
      { label: "Agisoft Metashape", href: routes.softwareAgisoftMetashape },
      { label: "Surfer", href: routes.softwareSurfer },
      { label: "Grapher", href: routes.softwareGrapher },
      { label: "GEO5 Geotechnical Software", href: routes.softwareGeo5 },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: routes.about },
      { label: "Management", href: routes.management },
      { label: "Investor Relations", href: routes.investors },
      { label: "Corporate Governance", href: routes.investorsGovernance },
      { label: "Careers", href: routes.careers },
      { label: "Contact Us", href: routes.contact },
    ],
  },
];
