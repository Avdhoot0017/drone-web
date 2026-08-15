import type { PersonEntry, Stat } from "@/types/content";

/** Long-form "About us" copy, taken from the client document. */
export const aboutParagraphs = [
  "Schnell Drone Technologies Ltd. is one of India's leading Drone-as-a-Service (DaaS) companies, with operations spanning multiple states. Established in 2010 as an entrepreneurial venture specializing in GIS and Photogrammetry, the company has built its drone operations on a strong foundation of geospatial expertise.",
  "Over the years, Schnell has developed extensive experience in operating a wide range of drone platforms across diverse and challenging terrains, including valleys, forests, coastal regions, and glaciers. Its technical capabilities and operational excellence have enabled the company to successfully execute complex drone missions for government agencies, industries, and the agriculture sector.",
  "Schnell Drone Technologies achieved a significant milestone by becoming the first company in India to conduct daily coastal surveillance across an 815 km coastline, supporting authorities in identifying illegal fishing activities and strengthening coastal security.",
  "The company has also partnered with IFFCO through consecutive Memorandums of Agreement (MoAs) for the aerial spraying of Nano Urea and Nano DAP across multiple states, with Telangana and Maharashtra being key areas of operation. This collaboration highlights Schnell's growing contribution to precision agriculture and sustainable farming practices.",
  "With the type certification of its indigenous “Himalaya” Agrochemical Spraying Drone, Schnell is rapidly expanding its presence across India and is committed to becoming a leader in the agricultural drone spraying sector.",
  "The company is led by a highly skilled team of engineers and experienced professionals with expertise in product development, drone operations, sales and marketing, finance, and business strategy. Their combined knowledge and innovation continue to drive Schnell's growth and technological advancement.",
];

export const visionStatement =
  "Schnell Drone Technologies Ltd. aims to become India's most trusted and innovative drone technology company by developing advanced drone solutions that serve the agriculture, industrial, infrastructure, and defense sectors while contributing to the nation's technological self-reliance and sustainable development.";

/** Headline proof points used on the homepage and About page. */
export const companyStats: Stat[] = [
  {
    value: 815,
    suffix: " km",
    label: "Coastline under daily watch",
    hint: "First in India to fly daily coastal surveillance at this scale",
  },
  {
    value: 12,
    suffix: " NM",
    label: "Into territorial waters",
    hint: "The only Indian drone company operating this far offshore",
  },
  {
    value: 9,
    label: "Fixed-wing SWITCH UAVs",
    hint: "Plus multirotors with day and night-thermal payloads",
  },
  {
    value: 50000,
    suffix: "+ acres",
    label: "Mapped under SVAMITVA",
    hint: "Across more than 500 villages in Uttar Pradesh and Gujarat",
  },
];

/** Milestones timeline shown on the About page. */
export const milestones: { year: string; title: string; description: string }[] = [
  {
    year: "2010",
    title: "Founded as a GIS & photogrammetry venture",
    description:
      "Schnell begins as an entrepreneurial venture specialising in geographic information systems and photogrammetry — the geospatial foundation everything since has been built on.",
  },
  {
    year: "2013",
    title: "Drone operations and R&D take shape",
    description:
      "In-house drone research, manufacturing, repair and maintenance capability is established alongside the surveying business.",
  },
  {
    year: "2024",
    title: "India's first daily coastal surveillance programme",
    description:
      "Schnell begins daily surveillance along the Maharashtra coast for the Department of Fisheries, identifying illegal fishing vessels within 12 nautical miles and creating audio-visual evidence.",
  },
  {
    year: "2024–25",
    title: "IFFCO partnership for Nano Urea & Nano DAP",
    description:
      "Consecutive Memorandums of Agreement with IFFCO see Schnell emerge as a top sprayer among multiple partners across Maharashtra, Telangana and Karnataka.",
  },
  {
    year: "2025",
    title: "Himalaya receives DGCA type certification",
    description:
      "The indigenous Himalaya agrochemical spraying drone is type certified by the DGCA, clearing the way for expansion across central and northern India.",
  },
];

/**
 * Board and management profiles.
 *
 * NOTE: the client document leaves CA Parag Rathi's profile blank and supplies
 * no photographs. Those fields are intentionally empty and render as a
 * "profile pending" state rather than being invented.
 */
export const managementTeam: PersonEntry[] = [
  {
    name: "Bhushan Sharad Khomane",
    designation: "Chairman & Managing Director",
    age: 48,
    qualifications: [
      "B.E. Mechanical Engineering, University of Pune",
      "PGDBM, Marketing & International Business",
    ],
    bio: [
      "Bhushan Sharad Khomane is the Chairman and Managing Director of Schnell Drone Technologies Ltd. He holds a bachelor's degree in Mechanical Engineering from the University of Pune and also pursued a PGDBM in Marketing & International Business.",
      "In the past, he was associated with Tata Consultancy Services as a Systems Engineer and with Rolta India Limited as Assistant Manager in the sales and marketing division. He has been associated with Schnell since incorporation and oversees the marketing division as well as strategic planning, with more than a decade of experience marketing and selling software products and drones.",
    ],
  },
  {
    name: "Satyawan Balwant Jadhav",
    designation: "Whole-time Director & Chief Technical Officer",
    age: 47,
    qualifications: ["B.E. Production Engineering, University of Pune"],
    bio: [
      "Satyawan Balwant Jadhav is one of the Promoters of Schnell Drone Technologies Ltd. and serves as Whole-time Director and Chief Technical Officer. He holds a bachelor's degree in Production Engineering from the University of Pune.",
      "In the past, he was associated with Rolta India Limited as a Senior Executive and with Trinity Comnet Private Limited as Manager (Sales). He has been associated with Schnell since 2013 and oversees drone research and development, drone manufacturing, and drone repair and maintenance, with over a decade of experience in drone services, training and development.",
    ],
  },
  {
    name: "Sharmin Sahil Inamdar",
    designation: "Whole-time Director",
    age: 51,
    qualifications: [
      "B.Sc., University of Pune",
      "M.A. Marketing Management, Pondicherry University",
    ],
    bio: [
      "Sharmin Sahil Inamdar is one of the Promoters of Schnell Drone Technologies Ltd. and serves as a Whole-time Director. She holds a bachelor's degree in Science from the University of Pune and a Master's in Marketing Management from Pondicherry University.",
      "She has been associated with Schnell since 2010 and earlier worked as Business Development Head for the North India region.",
    ],
  },
  {
    name: "CA Parag Rathi",
    designation: "Director",
    // TODO: profile not supplied in the client document — awaiting copy.
    bio: [],
  },
  {
    name: "Anjani Kumar Agarwal",
    designation: "Independent Director",
    age: 49,
    qualifications: ["Management Graduate"],
    bio: [
      "Anjani Kumar Agarwal is an Independent Director of Schnell Drone Technologies Ltd. He is a Management Graduate and is presently Managing Director & CEO of DRS Dilip Roadlines Limited.",
      "An adept marketer to the core, he pioneered an international standard school in Hyderabad — a vision he cherished from his youth. After initial hurdles he successfully established a true international model school with many firsts to its credit. He is known for contemporary ideas blending superbly with conventional wisdom.",
    ],
  },
];
