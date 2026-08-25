import { sprayingAdvantages } from "@/content/shared";
import { routes } from "@/lib/routes";
import type { ContentBlock, ImageRef, SeoFields, Stat } from "@/types/content";

export interface ProductEntry extends SeoFields {
  slug: string;
  href: string;
  name: string;
  category: string;
  eyebrow: string;
  summary: string;
  hero: ImageRef;
  thumbnail: ImageRef;
  badges: string[];
  /** Product photography shown above the specification sheet, as a row of
   *  equal squares. */
  gallery?: ImageRef[];
  /** Downloadable sales brochure. Size and page count are shown to the user so
   *  they know what they are committing to before the download starts. */
  brochure?: {
    href: string;
    cover: ImageRef;
    fileSize: string;
    pages: number;
  };
  stats: Stat[];
  /** Flat key/value list — also emitted as Product structured data. */
  specifications: { label: string; value: string }[];
  blocks: ContentBlock[];
}

/**
 * Himalaya specification sheet, transcribed from the client's DGCA type
 * certification table. Order matches the source document.
 */
const himalayaSpecifications = [
  { label: "Category of UAV", value: "Rotorcraft (Hexacopter structure)" },
  { label: "Class", value: "Medium" },
  { label: "Application", value: "Agrochemical spraying for agriculture purposes" },
  {
    label: "Spraying capacity",
    value:
      "One acre in about 7 minutes · about 6 acres in an hour · about 25 to 30 acres in a day with multiple battery sets",
  },
  { label: "Maximum all-up weight (including payload)", value: "28.5 kg" },
  { label: "Overall dimensions (l × b × h)", value: "1860 × 2030 × 655 mm" },
  {
    label: "Payload details",
    value:
      "Sprayer with tank having maximum 10 L liquid filling capacity, with 4 flat-jet nozzles",
  },
  { label: "Battery capacity", value: "25,200 mAh" },
  {
    label: "Propeller details",
    value: "Diameter 24 inch · pitch range 8 inch · max 5,442 RPM · 6 propellers",
  },
  { label: "Geo-fencing capability", value: "Yes" },
  { label: "Detect & avoid", value: "Yes" },
  {
    label: "Return to home (failsafe)",
    value: "Battery failsafe, GCS failsafe, communication failsafe, geofence breach",
  },
  { label: "Ground control station", value: "AeroGCS ground control software" },
  { label: "Maximum speed", value: "10 m/s" },
  { label: "Maximum range", value: "1 km" },
  {
    label: "Endurance",
    value:
      "13 min 19 sec with full payload without dispensing · 27 min 13 sec with empty payload tank",
  },
  { label: "Frequency band", value: "2.42 to 2.48 GHz" },
];

export const himalaya: ProductEntry = {
  slug: "himalaya-agriculture-spraying-drone",
  href: routes.himalaya,
  name: "HIMALAYA",
  category: "Agrochemical spraying drone",
  eyebrow: "DGCA Type-certified UAV",
  summary:
    "Schnell Drone Technologies' indigenous hexacopter HIMALAYA for agrochemical spraying — a 10 litre tank, four flat-jet nozzles and a full failsafe suite, Type-certified by the DGCA and built for Indian field conditions.",

  metaTitle: "Himalaya Agriculture Spraying Drone | DGCA Type Certified",
  metaDescription:
    "Himalaya is Schnell's DGCA type certified agricultural spraying drone: hexacopter, 10 L tank, 4 flat-jet nozzles, 28.5 kg max all-up weight, covering about 6 acres an hour. See full specifications and enquire.",
  keywords: [
    "Himalaya spraying drone",
    "DGCA type certified agriculture drone",
    "agricultural spraying drone India",
    "10 litre agriculture drone",
    "hexacopter spraying drone",
    "Nano Urea spraying drone",
    "crop spraying drone price India",
  ],

  hero: {
    src: "/images/stock/hero-02-himalaya.jpg",
    alt: "Himalaya agricultural spraying drone hovering over a pomegranate orchard with an operator standing nearby",
  },
  thumbnail: {
    src: "/images/doc/himalaya-spraying-field.jpeg",
    alt: "Himalaya agricultural spraying drone in flight over a farm field",
  },

  badges: ["DGCA Type-certified", "Made in India", "Hexacopter", "10 L tank"],

  stats: [
    { value: 7, suffix: " min", label: "Per acre", hint: "Typical spraying time" },
    // Hint no longer repeats the per-acre time — it now has its own figure above.
    { value: 6, suffix: " acres", label: "Covered per hour", hint: "Sustained coverage rate" },
    { value: 30, suffix: " acres", label: "Per day", hint: "With multiple battery sets" },
    { value: 10, suffix: " L", label: "Tank capacity", hint: "Four flat-jet nozzles" },
    { value: 28.5, suffix: " kg", label: "Max all-up weight", hint: "Including full payload" },
  ],

  gallery: [
    {
      src: "/images/himalaya/himalaya-angled-rotors.webp",
      alt: "HIMALAYA drone from a three-quarter angle showing the rotor arms, spray booms and nozzles",
    },
    {
      src: "/images/himalaya/himalaya-front-nameplate.webp",
      alt: "Front view of the HIMALAYA drone with its tank and undercarriage visible",
    },
    {
      src: "/images/himalaya/himalaya-display-wide.webp",
      alt: "HIMALAYA drone on display with its full 2030 mm rotor span extended",
    },
    {
      src: "/images/agri/schnell-field-operator.webp",
      alt: "Schnell field operator with branded service panniers beside a standing crop",
    },
  ],

  brochure: {
    href: "/documents/products/himalaya-brochure.pdf",
    cover: {
      src: "/images/himalaya/himalaya-brochure-cover.webp",
      alt: "Cover of the HIMALAYA brochure showing the drone and its headline figures",
    },
    fileSize: "1.2 MB",
    pages: 4,
  },

  specifications: himalayaSpecifications,

  blocks: [
    {
      id: "overview",
      type: "split",
      eyebrow: "Overview",
      heading: "An indigenous spraying platform, certified for Indian agriculture",
      imageSide: "right",
      paragraphs: [
        "Himalaya is a medium-class rotorcraft built around a hexacopter airframe and designed for a single job: putting agrochemicals precisely where a crop needs them. Its 10 litre tank feeds four flat-jet nozzles, and a 25,200 mAh battery pack keeps it flying long enough to make each sortie count.",
        "With DGCA type certification secured, Himalaya can be deployed across India — and it is the platform behind Schnell's rapid expansion into the agricultural drone spraying sector in the central and northern states.",
      ],
      bullets: [
        "Geo-fencing and detect-and-avoid built in as standard",
        "Four independent return-to-home failsafes",
        "Flown from the AeroGCS ground control station",
        "Automated flight paths for uniform, repeatable coverage",
      ],
      image: {
        src: "/images/himalaya/himalaya-front-nameplate.webp",
        alt: "HIMALAYA hexacopter head-on, showing the 10 litre tank and undercarriage",
      },
    },

    {
      id: "performance",
      type: "stats",
      tone: "muted",
      eyebrow: "Performance",
      heading: "What a day in the field looks like",
      intro:
        "Spraying rates below are from the type certification data sheet, measured with a full payload.",
      stats: [
        { value: 7, suffix: " min", label: "Per acre", hint: "Typical spraying time" },
        { value: 6, suffix: " acres", label: "Per hour", hint: "Sustained coverage rate" },
        {
          value: 30,
          suffix: " acres",
          label: "Per day",
          hint: "With multiple battery sets on rotation",
        },
        {
          value: 27,
          suffix: " min",
          label: "Max endurance",
          hint: "13 min 19 sec loaded · 27 min 13 sec empty",
        },
      ],
    },

    // The nine advantages are shared with the agriculture DaaS page.
    sprayingAdvantages,

    {
      id: "gallery",
      type: "gallery",
      eyebrow: "In the field",
      heading: "Himalaya at work",
      intro:
        "Field photography of the Himalaya platform. Product photographs marked below are placeholders pending final imagery from Schnell.",
      // The field photograph already leads the page as the hero, so it is not
      // repeated here — showing the same shot twice weakens the gallery and
      // confuses LCP detection between the two copies.
      columns: 3,
      images: [
        {
          src: "/images/himalaya/himalaya-in-field.webp",
          alt: "HIMALAYA drone on a field track, rotors folded out and ready to fly",
        },
        {
          src: "/images/agri/schnell-field-operator.webp",
          alt: "Schnell field operator with branded service panniers beside a standing crop",
        },
        {
          src: "/images/team/team-field-crew.webp",
          alt: "Schnell field crew gathered before a day of flying operations",
        },
      ],
    },

    {
      id: "faq",
      type: "faq",
      tone: "muted",
      eyebrow: "Questions",
      heading: "Himalaya, answered",
      faqs: [
        {
          question: "Is the Himalaya drone DGCA type certified?",
          answer:
            "Yes. Himalaya is a DGCA type certified UAV, classified as a medium-class rotorcraft with a hexacopter structure, approved for agrochemical spraying in agriculture.",
        },
        {
          question: "How much area can the Himalaya spray in a day?",
          answer:
            "About one acre every 7 minutes, roughly 6 acres per hour, and about 25 to 30 acres in a day when multiple battery sets are rotated.",
        },
        {
          question: "What payload does the Himalaya carry?",
          answer:
            "A sprayer with a tank of up to 10 litres liquid filling capacity, fitted with four flat-jet nozzles. Maximum all-up weight including payload is 28.5 kg.",
        },
        {
          question: "What safety features are built into the drone?",
          answer:
            "Geo-fencing, detect and avoid, and four return-to-home failsafes covering low battery, loss of ground control station link, communication failure and geofence breach.",
        },
        {
          question: "Can I become a Himalaya distributor?",
          answer:
            "Yes. Schnell is expanding across central and northern India and works with regional distribution partners. Contact the sales team on +91 95118 46050 or write to Himalaya@SchnellDroneTech.com.",
        },
      ],
    },
  ],
};

export const products: ProductEntry[] = [himalaya];
