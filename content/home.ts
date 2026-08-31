import { routes } from "@/lib/routes";
import type { ImageRef } from "@/types/content";

/** One slide of the homepage hero carousel. */
export interface HeroSlide {
  /** Stable key, also used for the slide's accessible label. */
  id: string;
  eyebrow: string;
  title: string;
  /** Portion of the title rendered in brand red. Must appear inside `title`. */
  highlight?: string;
  description: string;
  image: ImageRef;
  /**
   * CSS `object-position` for this slide's image. The hero is far wider than
   * most source photos, so `object-cover` crops top and bottom heavily —
   * a subject near the top of the frame needs the crop shifted upward.
   * Defaults to `center`.
   */
  objectPosition?: string;
  /**
   * Weight of the legibility scrim. Bright photographs — open sky, sunlit
   * grass — need more than dark ones for the headline to hold its own.
   */
  scrim?: "default" | "strong";
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Short proof points shown as chips beneath the copy. */
  facts?: string[];
}

/**
 * Homepage hero slides.
 *
 * The Himalaya product leads at slide two — it is the flagship, and the
 * Himalayan ridge motif in the hero exists to reinforce that name.
 */
export const heroSlides: HeroSlide[] = [
  {
    id: "company",
    eyebrow: "DGCA Type-certified product · Operating since 2010",
    title:
      "India's Leading Drone Technology Company. Your Most Trusted Drone-as-a-Service Partner.",
    highlight: "Drone-as-a-Service",
    description:
      "From safeguarding 815 km of coastline every day to precision agrochemical spraying with type-certified drones, Schnell executes complex drone missions across industries and terrains.",
    image: {
      src: "/images/stock/hero-01-company.jpg",
      alt: "Agricultural spraying drone in flight above scrubland, spray boom extended",
    },
    objectPosition: "center 30%",
    primary: { label: "Explore drone services", href: routes.daas },
    secondary: { label: "Meet the Himalaya drone", href: routes.himalaya },
    facts: ["815 km coastline", "Operating since 2010", "Multi-state operations"],
  },
  {
    id: "himalaya",
    eyebrow: "Flagship product",
    title: "HIMALAYA — our DGCA Type-certified Agrochemical spraying drone",
    highlight: "HIMALAYA",
    description:
      "An indigenous hexacopter built for Indian fields: a 10 litre tank, four flat-jet nozzles and a full failsafe suite, covering about six acres an hour.",
    image: {
      src: "/images/hero/hero-02-himalaya-spraying.27f0e6aa.webp",
      alt:
        "White hexacopter spraying drone hovering low over grassland beside open water",
    },
    // Brightest of the five — sky and sunlit grass sit right behind the
    // headline, so this slide carries a heavier scrim than its neighbours.
    scrim: "strong",
    primary: { label: "View full specifications", href: routes.himalaya },
    secondary: { label: "Become a distributor", href: routes.distributor },
    facts: [
      "10 L tank",
      "1 acre in 7 min",
      "6 acres in 1 hour",
      "About 30 acres in 1 day",
    ],
  },
  {
    id: "coastal",
    eyebrow: "Coastal security & surveillance",
    title: "India's Only Drone Operator Flying 12 NM Offshore to Detect IUU Fishing",
    highlight: "12 NM Offshore",
    description:
      "Daily drone patrols for Fisheries departments with day-light and night-thermal payloads to identify IUU (Illegal, Unreported, Unregulated) fishing, live feeds to Coastal Police, working in close coordination with the Coast Guard, Navy and Customs, creating court-admissible evidence.",
    image: {
      src: "/images/stock/hero-03-coastal.jpg",
      alt: "Maritime patrol vessel under way at speed through coastal waters",
    },
    primary: { label: "Coastal surveillance", href: routes.daasCoastalSurveillance },
    secondary: { label: "All drone services", href: routes.daas },
    facts: ["9 fixed-wing SWITCH UAVs", "Up to 23 km inside the sea", "Day & night-thermal"],
  },
  {
    id: "mapping",
    eyebrow: "Land mapping & survey using drones",
    title: "Advanced Drone Surveying, Mapping & Geospatial Intelligence",
    highlight: "Geospatial Intelligence",
    description:
      "Ortho-rectified imagery, 3D dense point clouds, DEM, DTM, DSM and contours — including active work on the national SVAMITVA village mapping programme.",
    image: {
      src: "/images/stock/hero-04-mapping.jpg",
      alt: "Aerial view of patchwork farmland parcels divided by tracks and field boundaries",
    },
    primary: { label: "Land mapping & survey", href: routes.daasLandMapping },
    secondary: { label: "Talk to our team", href: routes.contact },
    facts: ["50,000+ acres mapped", "500+ villages", "GPS/RTK & LiDAR accuracy"],
  },
  {
    id: "agriculture",
    eyebrow: "Agriculture fertilizer spraying",
    title: "Spraying of Agrochemicals including Nano Urea & Nano DAP across multiple states",
    highlight: "Nano Urea & Nano DAP",
    description:
      "Agrochemical and fertilizer spraying over different crops, in all seasons. Memorandums of Agreement with IFFCO for two consecutive years to spray Nano Urea and Nano DAP across Maharashtra, Telangana and Karnataka — where Schnell emerged as a top sprayer at national scale.",
    image: {
      src: "/images/hero/hero-05-agriculture-sunrise.51a4671b.webp",
      alt:
        "Drone operator flying a spraying drone over farmland at sunrise, controller in hand",
    },
    // Natively widescreen, so almost nothing is cropped. Anchored right so the
    // operator stays whole at narrower widths, where the sides are trimmed.
    objectPosition: "right center",
    primary: { label: "Agriculture spraying", href: routes.daasAgricultureSpraying },
    secondary: { label: "Meet the Himalaya drone", href: routes.himalaya },
    facts: ["IFFCO MoA partner", "3 states covered", "25–30 acres per day"],
  },
];
