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
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Three short proof points shown beneath the copy. */
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
    eyebrow: "DGCA type certified · Operating since 2010",
    title: "India's most experienced Drone-as-a-Service company",
    highlight: "Drone-as-a-Service",
    description:
      "From daily surveillance across an 815 km coastline to Nano Urea spraying with our type certified Himalaya drone — Schnell flies the missions others cannot.",
    image: {
      src: "/images/stock/hero-agri-spray.jpg",
      alt: "Agricultural spraying drone in flight over an Indian crop field",
    },
    primary: { label: "Explore drone services", href: routes.daas },
    secondary: { label: "Meet the Himalaya drone", href: routes.himalaya },
    facts: ["815 km coastline", "Operating since 2010", "Multi-state operations"],
  },
  {
    id: "himalaya",
    eyebrow: "Flagship product",
    title: "Himalaya — our DGCA type certified spraying drone",
    highlight: "Himalaya",
    description:
      "An indigenous hexacopter built for Indian fields: a 10 litre tank, four flat-jet nozzles and a full failsafe suite, covering about six acres an hour.",
    image: {
      src: "/images/doc/himalaya-spraying-field.jpeg",
      alt: "Himalaya agricultural spraying drone hovering over a pomegranate orchard",
    },
    primary: { label: "View full specifications", href: routes.himalaya },
    secondary: { label: "Become a distributor", href: routes.distributor },
    facts: ["10 L tank", "6 acres per hour", "28.5 kg max all-up weight"],
  },
  {
    id: "coastal",
    eyebrow: "Coastal security & surveillance",
    title: "The only Indian drone operator flying 12 NM offshore",
    highlight: "12 NM offshore",
    description:
      "Daily patrols for Fisheries departments, Coastal Police, the Coast Guard, the Navy and Customs — with day-light and night-thermal payloads creating court-admissible evidence.",
    image: {
      src: "/images/stock/coastal-patrol-boat.jpg",
      alt: "Maritime patrol vessel moving at speed through coastal waters",
    },
    primary: { label: "Coastal surveillance", href: routes.daasCoastalSurveillance },
    secondary: { label: "All drone services", href: routes.daas },
    facts: ["9 fixed-wing SWITCH UAVs", "Up to 25 km inside the sea", "Day & night-thermal"],
  },
  {
    id: "mapping",
    eyebrow: "Land mapping & survey",
    title: "Survey-grade geospatial data, without the capital cost",
    highlight: "Survey-grade",
    description:
      "Ortho-rectified imagery, 3D dense point clouds, DEM, DTM, DSM and contours — including active work on the national SVAMITVA village mapping programme.",
    image: {
      src: "/images/stock/mapping-surveyor-mountain.jpg",
      alt: "Surveyor operating a theodolite on a ridge above a valley",
    },
    primary: { label: "Land mapping & survey", href: routes.daasLandMapping },
    secondary: { label: "Talk to our team", href: routes.contact },
    facts: ["50,000+ acres mapped", "500+ villages", "GPS/RTK & LiDAR accuracy"],
  },
  {
    id: "agriculture",
    eyebrow: "Agriculture fertilizer spraying",
    title: "Nano Urea and Nano DAP sprayed at national scale",
    highlight: "national scale",
    description:
      "Consecutive Memorandums of Agreement with IFFCO across Maharashtra, Telangana and Karnataka — where Schnell emerged as a top sprayer among multiple partners.",
    image: {
      src: "/images/stock/agri-spray-aerial.jpg",
      alt: "Aerial view of a drone spraying nano fertilizer across a green field",
    },
    primary: { label: "Agriculture spraying", href: routes.daasAgricultureSpraying },
    secondary: { label: "Meet the Himalaya drone", href: routes.himalaya },
    facts: ["IFFCO MoA partner", "3 states covered", "25–30 acres per day"],
  },
];
