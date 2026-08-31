import { sprayingAdvantages } from "@/content/shared";
import { routes } from "@/lib/routes";
import type { ServiceEntry } from "@/types/content";

/**
 * The five Drone-as-a-Service verticals, transcribed from the client document.
 *
 * Figures the client left blank (flight counts, hours flown, cases identified)
 * are declared with no `value`, which renders a visible "—" placeholder rather
 * than an invented number.
 */

const coastalSurveillance: ServiceEntry = {
  slug: "coastal-security-surveillance",
  href: routes.daasCoastalSurveillance,
  navLabel: "Coastal Security & Surveillance",
  title: "Coastal Security & Surveillance",
  eyebrow: "Drone-as-a-Service",
  summary:
    "India's only drone operator flying daily surveillance in coastal waters up to 12 nautical miles — supporting Fisheries departments, Coastal Police, the Coast Guard, the Navy and Customs with day and night-thermal evidence.",

  metaTitle: "Coastal Security & Surveillance Drone Services in India",
  metaDescription:
    "Schnell is India's only drone company operating up to 12 NM into coastal waters — daily IUU fishing surveillance, coastal policing support, customs patrolling and sea search & rescue with day and night-thermal payloads.",
  keywords: [
    "coastal surveillance drone India",
    "IUU fishing drone surveillance",
    "maritime drone surveillance",
    "coastal security drone services",
    "drone search and rescue sea",
    "fisheries department drone monitoring",
  ],

  hero: {
    src: "/images/stock/hero-03-coastal.jpg",
    alt: "Maritime patrol vessel under way at speed across open coastal water",
  },
  thumbnail: {
    src: "/images/stock/coastal-aerial-fishing.jpg",
    alt: "Aerial view of fishing vessels along a coastline",
  },

  highlights: [
    "Only Indian drone company operating up to 12 NM offshore",
    "Fleet of 9 fixed-wing SWITCH UAVs plus multirotors",
    "Day-light and night-thermal payloads",
    "Live feed shared with Coast Guard, Coastal Police and Navy",
  ],

  blocks: [
    {
      id: "impact",
      type: "stats",
      eyebrow: "Operational record",
      heading: "The most experienced player in coastal surveillance",
      intro:
        "Operational figures from daily coastal deployments across the Maharashtra coast.",
      stats: [
        {
          value: 10000,
          suffix: "+",
          label: "Flights completed",
          hint: "Daily sorties along the coast",
        },
        {
          value: 815,
          suffix: " km",
          label: "Coastline surveyed",
          hint: "The first daily coastal surveillance programme in India",
        },
        {
          value: 34000,
          suffix: "+",
          label: "Flying hours",
          hint: "Logged across day-light and night-thermal missions",
        },
        {
          value: 23,
          suffix: " km",
          label: "Inside the sea",
          hint: "Flights up to 23 km offshore, within territorial waters",
        },
      ],
    },

    {
      id: "overview",
      type: "split",
      tone: "muted",
      // Numbered as the parent of the 1.1 - 1.4 sections that follow it.
      eyebrow: "1. Overview",
      heading: "India's most experienced coastal drone operator",
      // Heading joins the copy beside the photograph; full width above it left
      // the title stranded over a half-width column.
      headingPlacement: "inline",
      imageSide: "right",
      // Square rather than the source's portrait: it halves the height beside
      // two short paragraphs, and a centred crop still holds all three crew
      // and the full wingspan.
      imageAspect: "1/1",
      image: {
        src: "/images/coastal/coastal-crew-launch-prep.webp",
        alt: "Schnell crew preparing a fixed-wing VTOL drone for launch on the coast",
      },
      paragraphs: [
        "Schnell Drone Technologies Ltd. is India's most prominent Drone-as-a-Service company, offering its services across multiple domains. It is currently the only drone company operating in the coastal waters of India, up to 12 nautical miles.",
        "With flights reaching up to 23 km inside the sea, Schnell Drone Technologies is the most experienced player in coastal security and surveillance. The company is currently equipped with a fleet of 9 fixed-wing SWITCH UAVs from ideaForge Technology, plus multiple quadcopters carrying day-time and night-thermal surveillance payloads.",
      ],
    },

    {
      id: "iuu-fishing",
      type: "split",
      eyebrow: "1.1 Fisheries departments",
      heading: "Identifying and curtailing IUU fishing",
      // Same arrangement as the overview above — heading with its own copy
      // beside a square frame. Mirrored, so the two sections alternate rather
      // than stacking two identical left-text blocks.
      headingPlacement: "inline",
      imageSide: "left",
      imageAspect: "1/1",
      image: {
        src: "/images/coastal/coastal-purse-seine-net.7923c1ea.webp",
        alt: "Aerial view of a fishing boat drawing a purse-seine net in a wide circle on open water",
      },
      paragraphs: [
        "IUU fishing stands for Illegal, Unreported and Unregulated fishing. It encompasses activities like violating closed seasons, catching protected species, misreporting catch volumes, or using banned gear.",
        "IUU fishing accounts for up to 30% of total catches in some of the world's most vital fisheries. It undermines marine conservation efforts, destabilizes coastal economies, and threatens the food security of millions.",
        "Schnell Drone Technologies Ltd. secured a contract from the Department of Fisheries, Government of Maharashtra to carry out daily surveillance along the 720 km long coast of Maharashtra — identifying illegal fishing vessels within 12 nautical miles from the coast and creating audio-visual evidence using day-light and night-thermal payloads.",
      ],
    },

    {
      id: "banned-practices",
      type: "cards",
      tone: "muted",
      heading: "The illegal practices we detect",
      columns: 3,
      items: [
        {
          title: "LED fishing",
          description:
            "LED fishing uses high-intensity light systems or small submerged lamps to attract fish. It is banned across the world to protect marine ecosystems, because it lures and depletes juvenile fish and damages biodiversity.",
        },
        {
          title: "Purse-seine fishing",
          description:
            "A purse seine is a long wall of netting framed with a floatline and leadline, with purse rings on the lower edge through which a purse line runs to close the net. Purse seine fishing is banned in many coastal areas.",
        },
        {
          title: "Bull trawling / pair trawling",
          description:
            "Two large boats pull one giant net between them to catch whole groups of fish. It harms sea life by catching baby fish and damaging the ocean floor, and governments have banned it in many coastal areas.",
        },
      ],
    },

    {
      id: "agencies",
      type: "table",
      eyebrow: "1.2 Coastal Police, Coast Guard & Navy",
      heading: "Drone surveillance across every maritime jurisdiction",
      intro:
        "Drones can be deployed for effective day and night surveillance in the coastal region and deep inside the sea, monitoring the movement of authorised and unauthorised vessels across each agency's area of responsibility.",
      data: {
        caption: "Maritime jurisdictions and roles",
        head: ["Agency", "Jurisdiction", "Role"],
        rows: [
          [
            "State Marine / Coastal Police",
            "Shallow coastal areas and territorial waters up to 12 nautical miles from the baseline",
            "Enforces domestic law and order, local policing, and patrols very close to the shore.",
          ],
          [
            "Indian Coast Guard",
            "Territorial waters (0–12 NM), the contiguous zone (12–24 NM), and the entire Exclusive Economic Zone up to 200 NM",
            "Primary maritime law enforcement and search-and-rescue agency. Handles anti-smuggling, anti-poaching, marine environmental protection and coastal security coordination.",
          ],
          [
            "Indian Navy",
            "The entire national maritime zone (0–200 NM) and out to the High Seas / International Maritime Boundary Line",
            "Holds overall responsibility for national maritime security, defence of sovereignty and wartime operations. Coordinates joint operations as a net security provider.",
          ],
        ],
      },
    },

    {
      id: "customs",
      type: "bullets",
      eyebrow: "1.3 Customs department",
      heading: "Supporting maritime preventive operations",
      intro:
        "The maritime preventive division of Customs handles anti-smuggling operations, coastal patrolling and vessel inspections at sea using specialised marine wings.",
      columns: 3,
      groups: [
        {
          title: "Sea patrolling",
          items: [
            "Category-I, II and III customs vessels monitor coastal waters and landing points",
            "Drone deployment is highly effective during the day as well as in night hours",
            "Wide-area coverage without committing additional vessels",
          ],
        },
        {
          title: "Rummaging & intelligence",
          items: [
            "Boarding and searching suspect ships",
            "Checking cargo manifests",
            "Watching crew movement before and during an interception",
          ],
        },
        {
          title: "Joint inter-agency operations",
          items: [
            "Collaboration with the Indian Navy and Coast Guard",
            "Coordination with state police for joint maritime security",
            "Shared live feed to multiple control rooms",
          ],
        },
      ],
    },

    {
      id: "search-and-rescue",
      type: "cards",
      tone: "brand",
      eyebrow: "1.4 Search & rescue",
      heading: "Drones in sea search and rescue operations",
      intro:
        "Drones improve response time, expand search coverage and reduce risk to rescue personnel. Schnell has assisted the Maharashtra Coastal Police in multiple search and rescue operations in the coastal waters of Sindhudurg, Ratnagiri and Raigad districts.",
      columns: 3,
      items: [
        {
          title: "Rapid search of large areas",
          description:
            "Cover vast stretches of sea far faster than boats, quickly locating missing swimmers, fishermen or vessels.",
        },
        {
          title: "Real-time aerial surveillance",
          description:
            "Transmit live high-definition video to rescue teams so commanders can assess the situation and coordinate the response.",
        },
        {
          title: "Detection of people in distress",
          description:
            "Optical and thermal cameras identify people in the water even in low light, and pick out life jackets, lifeboats and floating debris.",
        },
        {
          title: "Delivery of emergency supplies",
          description:
            "Drop life jackets, inflatable buoys, flotation devices, first-aid kits or communication equipment to people awaiting rescue.",
        },
        {
          title: "Navigation support",
          description:
            "Guide rescue boats and helicopters directly to a victim using GPS coordinates, and mark the exact location of survivors.",
        },
        {
          title: "Operation in hazardous conditions",
          description:
            "Survey areas affected by rough seas, storms, oil spills or dangerous currents without exposing rescuers to unnecessary risk.",
        },
        {
          title: "Night-time search operations",
          description:
            "Thermal imaging and infrared sensors allow searches to continue after dark or in poor visibility.",
        },
        {
          title: "Monitoring & situation assessment",
          description:
            "Assess sea state, wave conditions and obstacles before rescue teams enter the area, then monitor the operation as it unfolds.",
        },
        {
          title: "Communication relay",
          description:
            "Serve as a temporary communication relay when normal communication is disrupted or rescuers operate beyond standard equipment range.",
        },
      ],
    },

    {
      id: "gallery",
      type: "gallery",
      heading: "Coastal operations",
      intro:
        "Frames from Schnell's own coastal missions off the Maharashtra coast, and the crew preparing a fixed-wing aircraft before launch.",
      columns: 4,
      images: [
        {
          src: "/images/coastal/coastal-led-fishing-detection.webp",
          alt: "Drone downlink frame showing a fishing boat rigged with LED lights, captured during a coastal surveillance sortie",
        },
        {
          src: "/images/coastal/coastal-trawler-surveillance.webp",
          alt: "Drone downlink frame of a trawler with its net deployed alongside a smaller boat, with flight telemetry overlaid",
        },
        {
          src: "/images/coastal/coastal-crew-fixed-wing.webp",
          alt: "Three Schnell crew members with a fixed-wing VTOL drone on a launch mat beside the coast",
        },
        {
          src: "/images/coastal/coastal-crew-launch-prep.webp",
          alt: "Schnell crew member preparing a fixed-wing VTOL drone for launch on a coastal airstrip",
        },
      ],
    },
  ],
};

const agricultureSpraying: ServiceEntry = {
  slug: "agriculture-fertilizer-spraying",
  href: routes.daasAgricultureSpraying,
  navLabel: "Agriculture Fertilizer Spraying",
  title: "Agriculture Fertilizer Spraying",
  eyebrow: "Drone-as-a-Service",
  summary:
    "Nano Urea and Nano DAP sprayed at scale across Maharashtra, Telangana and Karnataka under consecutive Memorandums of Agreement with IFFCO — where Schnell emerged as a top sprayer among multiple partners.",

  metaTitle: "Agriculture Fertilizer Spraying Drone Services | Nano Urea & Nano DAP",
  metaDescription:
    "Schnell provides Drone-as-a-Service for agrochemical spraying including Nano Urea and Nano DAP across Indian states, under consecutive MoAs with IFFCO. Faster, safer, more precise than traditional spraying.",
  keywords: [
    "Nano Urea drone spraying",
    "Nano DAP drone spraying",
    "IFFCO drone spraying partner",
    "agriculture drone service India",
    "drone spraying service Maharashtra",
    "fertilizer spraying drone",
  ],

  hero: {
    src: "/images/stock/hero-06-agri-service.jpg",
    alt: "Aerial view of terraced crop fields following the contours of the land",
  },
  thumbnail: {
    src: "/images/stock/agri-spray-aerial.jpg",
    alt: "Aerial view of a spraying drone treating a lush green field",
  },

  highlights: [
    "MoAs with IFFCO for FY 2024-25 and FY 2025-26",
    "Top sprayer among multiple IFFCO partners",
    "Operating across Maharashtra, Telangana and Karnataka",
    "Backed by the DGCA type certified Himalaya drone",
  ],

  blocks: [
    {
      id: "overview",
      type: "split",
      eyebrow: "The IFFCO partnership",
      heading: "Spraying Nano Urea and Nano DAP at national scale",
      imageSide: "right",
      paragraphs: [
        "Schnell Drone Technologies offers Drone-as-a-Service for agrochemical spraying including Nano Urea and Nano DAP across multiple states in India.",
        "Schnell signed Memorandums of Agreement with IFFCO in FY 2024-25 and FY 2025-26 and emerged as a top sprayer among multiple partners. IFFCO — the Indian Farmers Fertiliser Cooperative Limited — is a massive multi-state cooperative society headquartered in New Delhi, supporting over 35,000 member cooperatives and reaching 50 million farmers.",
        "Under this MoA, Schnell carried out extensive spraying of Nano Urea and Nano DAP in agricultural fields across Maharashtra, Telangana and Karnataka. With DGCA type certification of the Himalaya drone, Schnell can now expand its footprint across the central and northern parts of India.",
      ],
      bullets: [
        "35,000+ member cooperatives in the IFFCO network",
        "50 million farmers reached through that network",
        "Three states covered in the first two seasons",
      ],
      // Square frame: the source is portrait, and the default 4/3 crop cut
      // straight through the operator's head.
      imageAspect: "1/1",
      image: {
        src: "/images/agri/schnell-field-operator.webp",
        alt: "Schnell field operator with branded service panniers on a motorcycle beside a standing crop, ready for a Nano Urea spraying run",
      },
    },
    {
      id: "iffco-agreements",
      type: "collage",
      tone: "muted",
      eyebrow: "On the record",
      heading: "Two seasons, two agreements signed with IFFCO",
      intro:
        "Memorandums of Agreement covering the Kharif and Rabi seasons, and the renewal that doubled the scope of spraying.",
      images: [
        {
          src: "/images/iffco/iffco-renewed-agreement.webp",
          alt: "IFFCO announcement that the agreement with Schnell Drone Technologies has been renewed with doubled scope",
          caption:
            "IFFCO renews the agreement and doubles the scope of agrochemical spraying.",
        },
        {
          src: "/images/iffco/iffco-moa-kharif.webp",
          alt: "Schnell and IFFCO representatives exchanging the signed Memorandum of Agreement for the Kharif season",
          caption: "Memorandum of Agreement signed for the Kharif season.",
        },
        {
          src: "/images/iffco/iffco-moa-rabi.webp",
          alt: "Schnell and IFFCO representatives with the signed Memorandum of Agreement for the Rabi season",
          caption: "Memorandum of Agreement signed for the Rabi season.",
        },
        {
          src: "/images/iffco/iffco-team-meeting.webp",
          alt: "Schnell Drone Technologies team members at an IFFCO office ahead of the spraying season",
          caption: "The Schnell team at IFFCO ahead of the season.",
        },
      ],
    },

    // Shared with the Himalaya product page — one definition, two pages.
    sprayingAdvantages,

    {
      id: "gallery",
      type: "gallery",
      heading: "The platform behind the spraying",
      intro:
        "Nano Urea and Nano DAP are applied with Schnell's own DGCA type certified HIMALAYA hexacopter.",
      columns: 3,
      images: [
        {
          src: "/images/himalaya/himalaya-in-field.webp",
          alt: "HIMALAYA spraying drone standing ready on a field track before a sortie",
        },
        {
          src: "/images/himalaya/himalaya-angled-rotors.webp",
          alt: "HIMALAYA drone from a three-quarter angle showing spray booms and nozzles",
        },
        {
          src: "/images/himalaya/himalaya-display-wide.webp",
          alt: "HIMALAYA drone with its full rotor span extended",
        },
      ],
    },
  ],
};

const trafficMonitoring: ServiceEntry = {
  slug: "traffic-monitoring-management",
  href: routes.daasTrafficMonitoring,
  navLabel: "Traffic Monitoring & Challan Generation",
  title: "Traffic Monitoring, Management & Challan Generation",
  eyebrow: "Drone-as-a-Service",
  summary:
    "Drones, trained pilots, AI analytics, maintenance and cloud infrastructure supplied on an annual subscription — so departments can enforce traffic law without buying a single drone or hiring a single pilot.",

  metaTitle: "Drone Traffic Monitoring & Automated Challan Generation",
  metaDescription:
    "Drone-as-a-Service for intelligent traffic monitoring, management and automated e-challan generation. AI violation detection, court-admissible evidence and live feeds — on a monthly subscription with no capex.",
  keywords: [
    "drone traffic monitoring India",
    "automated challan generation drone",
    "e-challan drone integration",
    "AI traffic violation detection",
    "smart city traffic drone",
    "traffic management drone service",
  ],

  hero: {
    src: "/images/stock/traffic-interchange.jpg",
    alt: "Aerial view of a multi-lane highway interchange with flowing traffic",
  },
  thumbnail: {
    src: "/images/stock/traffic-aerial-junction.jpg",
    alt: "Aerial view of a busy highway junction",
  },

  highlights: [
    "No capital expenditure for the department",
    "AI-powered violation detection",
    "Court-admissible digital evidence",
    "Direct integration with e-challan platforms",
  ],

  blocks: [
    {
      id: "overview",
      type: "prose",
      heading: "Enforcement capability on subscription, not on your balance sheet",
      paragraphs: [
        "Drone-as-a-Service offers a scalable and cost-effective solution for intelligent traffic monitoring, management and automated challan generation. By combining drones with AI and e-challan systems, authorities can improve traffic law enforcement, reduce manual effort, enhance road safety, and respond more effectively to congestion and incidents.",
        "As one of India's most prominent Drone-as-a-Service companies, Schnell supplies the drones, trained pilots, AI-based analytics, maintenance and cloud infrastructure on an annual subscription basis. Government departments need not invest in drones or hire trained pilots — they pay monthly service charges and opt into the service.",
        "Challenges such as privacy, weather and regulatory compliance remain live considerations, but DaaS has strong potential to become an integral component of future smart transportation systems.",
      ],
    },

    {
      id: "capabilities",
      type: "cards",
      tone: "muted",
      heading: "What the service covers",
      columns: 3,
      items: [
        {
          title: "Traffic surveillance",
          description:
            "Drones with high-resolution day-time and night-thermal payloads fly over roads, highways and intersections, streaming real-time aerial footage to a control room or to decision makers anywhere in the country.",
        },
        {
          title: "Violation detection",
          description:
            "AI-powered video analytics identify speeding, signal jumping, wrong-way driving, illegal parking, lane violations, riding without a helmet and — where visible — seat belt violations.",
        },
        {
          title: "Evidence collection",
          description:
            "Images, video clips, GPS coordinates, date and time are securely stored as digital evidence that can be produced in court as and when required.",
        },
        {
          title: "Automatic challan generation",
          description:
            "The system integrates with the e-challan platform. A digital challan is generated automatically and sent to the registered vehicle owner by SMS or email.",
        },
        {
          title: "Traffic management",
          description:
            "Live drone feeds help authorities detect congestion, accidents and road blockages, so traffic personnel can be deployed efficiently on real-time information.",
        },
        {
          title: "Crowd & event monitoring",
          description:
            "Deployment is highly effective for managing processions, marches and political rallies, where ground-level visibility is limited.",
        },
      ],
    },

    {
      id: "violations",
      type: "bullets",
      heading: "Violations the analytics detect",
      columns: 2,
      groups: [
        {
          title: "Movement violations",
          items: [
            "Speeding",
            "Signal jumping",
            "Wrong-way driving",
            "Lane violations",
          ],
        },
        {
          title: "Parking & safety violations",
          items: [
            "Illegal parking",
            "Riding without a helmet",
            "Seat belt violations, where visible",
          ],
        },
      ],
    },
  ],
};

const landMapping: ServiceEntry = {
  slug: "land-mapping-survey",
  href: routes.daasLandMapping,
  navLabel: "Land Mapping & Survey",
  title: "Land Mapping & Survey",
  eyebrow: "Drone-as-a-Service",
  summary:
    "Survey-grade aerial data acquisition and processing — ORI, 3D dense point clouds, DEM, DTM, DSM and contours — delivered without any investment in drone infrastructure. Including active work on the national SVAMITVA programme.",

  metaTitle: "Drone Land Mapping & Survey Services | ORI, DEM, DTM, DSM",
  metaDescription:
    "Drone surveying and mapping across India: ortho-rectified imagery, 3D dense point clouds, DEM, DTM, DSM and contour generation with GPS/RTK and LiDAR accuracy. SVAMITVA experience across 500+ villages.",
  keywords: [
    "drone survey and mapping India",
    "ortho rectified imagery drone",
    "DEM DTM DSM drone survey",
    "3D point cloud drone",
    "SVAMITVA drone survey",
    "contour mapping drone",
    "volumetric survey drone mining",
  ],

  hero: {
    src: "/images/stock/mapping-surveyor-mountain.jpg",
    alt: "Surveyor operating a theodolite on a ridge overlooking a valley",
  },
  thumbnail: {
    src: "/images/stock/mapping-aerial-farmland.jpg",
    alt: "Aerial survey imagery of agricultural land parcels",
  },

  highlights: [
    "50,000+ acres acquired across 500+ villages",
    "Active on the SVAMITVA national programme",
    "GPS/RTK and LiDAR accuracy",
    "Full in-house photogrammetric processing",
  ],

  blocks: [
    {
      id: "overview",
      type: "prose",
      heading: "Geospatial data without the capital cost",
      paragraphs: [
        "Drone-as-a-Service provides an efficient, scalable and economical solution for mapping and surveying. By combining advanced drone platforms, high-precision sensors, cloud-based processing, AI and GIS technologies, DaaS delivers accurate geospatial data for a wide range of applications. It reduces survey time, improves safety, and removes the need for organisations to invest in expensive drone infrastructure.",
        "Schnell Drone Technologies has executed multiple projects of land data acquisition and land data processing across India. Data is acquired using drones with high-precision sensors, then processed to generate ORI (ortho-rectified imagery), DEM (digital elevation model) and DSM (digital surface model) for further analysis.",
      ],
    },

    {
      id: "outputs",
      type: "cards",
      tone: "muted",
      eyebrow: "Data products",
      heading: "What drone data processing produces",
      intro:
        "While surveying with drones, images of the ground are taken from multiple vantage points and processed with photogrammetry software to generate a full stack of geospatial outputs.",
      columns: 2,
      items: [
        {
          title: "Ortho-rectified imagery (ORI)",
          description:
            "Drone images are processed using photogrammetry software such as Agisoft Metashape to create high-resolution ORI. It supports digitisation of point, line and polygon features, is used in legal proceedings and court cases, and enables inspection of encroachments, flooded regions and deforested areas.",
        },
        {
          title: "3D dense point cloud",
          description:
            "Point clouds are used to generate 3D textured models of cities, buildings or individual objects, to generate contours, and to classify points by feature type.",
        },
        {
          title: "DSM, DEM & DTM",
          description:
            "3D point cloud data is processed into digital surface, elevation and terrain models. This 3D data has extensive applications across mining volumetrics, infrastructure path profiles, defence terrain assessment, telecom tower planning and utility transmission line routing.",
        },
        {
          title: "Contour maps",
          description:
            "Useful for site selection, finding general slopes, determining the catchment area of a drainage basin, and establishing intervisibility between stations — used heavily by civil engineers on roads, highways, railway lines and water pipelines.",
        },
      ],
    },

    {
      id: "svamitva",
      type: "split",
      eyebrow: "National programme",
      heading: "SVAMITVA: property rights for rural India",
      imageSide: "left",
      paragraphs: [
        "Schnell's team is actively involved in the SVAMITVA project, which intends to cover about 6,60,000 villages across all the states in India using drones. SVAMITVA — Survey of Villages Abadi and Mapping with Improvised Technology in Village Areas — is a Central Government flagship scheme initiated by the Ministry of Panchayati Raj, providing an integrated property validation solution for rural India and empowering residents with records of right to their residential properties.",
        "The Schnell team has acquired data for more than 50,000 acres across 500 villages in Uttar Pradesh and Gujarat. It has also carried out extensive acquisition for the Maharashtra state government in Latur district, where the data was used to map property tax payers in GIS.",
      ],
      image: {
        src: "/images/stock/mapping-aerial-farm-uk.jpg",
        alt: "Aerial view of village land parcels and field boundaries from a survey drone",
      },
    },

    {
      id: "applications",
      type: "bullets",
      heading: "Major applications",
      columns: 2,
      groups: [
        {
          title: "Land, construction & extraction",
          items: [
            "Land surveying — land parcel mapping, boundary mapping and land records",
            "Construction — site planning, progress monitoring and volume estimation",
            "Mining — stockpile measurement and pit mapping",
            "Power and utility inspection — mapping transmission lines and pipelines",
          ],
        },
        {
          title: "Environment, planning & response",
          items: [
            "Agriculture — crop health monitoring and field mapping",
            "Urban planning — smart city planning and infrastructure development",
            "Disaster management — flood mapping, landslide assessment and damage surveys",
            "Forestry — forest inventory and environmental monitoring",
          ],
        },
      ],
    },

    {
      id: "advantages",
      type: "cards",
      tone: "brand",
      heading: "Advantages of drone survey",
      columns: 4,
      items: [
        { title: "Faster", description: "Substantially quicker than traditional surveying methods." },
        { title: "Accurate", description: "High accuracy using GPS/RTK positioning and LiDAR." },
        { title: "Lower cost", description: "Reduces labour and operational costs across a project." },
        { title: "Safer", description: "Survey hazardous or inaccessible areas without putting a crew there." },
        { title: "2D and 3D", description: "Generates detailed 2D maps and full 3D terrain models." },
        { title: "Cloud delivery", description: "Cloud-based data storage and easy sharing with stakeholders." },
        { title: "No capex", description: "No need to purchase or maintain expensive drone equipment." },
        { title: "Scalable", description: "Works for projects of any size, from a single site to 500 villages." },
      ],
    },

    {
      id: "gallery",
      type: "gallery",
      heading: "Survey operations",
      intro: "Project photography pending from Schnell; images below are placeholders.",
      columns: 4,
      images: [
        {
          src: "/images/stock/mapping-total-station.jpg",
          alt: "High-precision total station equipment set up at a survey site",
          placeholder: true,
        },
        {
          src: "/images/stock/mapping-gps-survey.jpg",
          alt: "Surveyor taking GPS measurements during a land survey",
          placeholder: true,
        },
        {
          src: "/images/stock/mapping-site-survey.jpg",
          alt: "Survey crew working on an active construction site",
          placeholder: true,
        },
        {
          src: "/images/stock/mapping-theodolite.jpg",
          alt: "Theodolite mounted on a tripod for civil engineering survey work",
          placeholder: true,
        },
      ],
    },
  ],
};

const multispectralMapping: ServiceEntry = {
  slug: "multispectral-mapping",
  href: routes.daasMultispectral,
  navLabel: "Multispectral Mapping",
  title: "Multispectral Mapping of Agricultural Land",
  eyebrow: "Drone-as-a-Service",
  summary:
    "NDVI, NDRE, NDWI and GNDVI analytics from drone-mounted multispectral sensors — catching crop stress in the red edge band before it is visible to the eye, and turning it into an irrigation, nutrient or spray decision.",

  metaTitle: "Multispectral Drone Mapping | NDVI, NDRE, NDWI & GNDVI Analysis",
  metaDescription:
    "Drone multispectral mapping for precision agriculture in India — NDVI, NDRE, NDWI and GNDVI analysis for crop health, irrigation planning, nutrient deficiency mapping, pest detection and yield prediction.",
  keywords: [
    "multispectral drone mapping India",
    "NDVI drone analysis",
    "NDRE index drone",
    "NDWI water stress index",
    "GNDVI analysis",
    "precision agriculture drone",
    "crop health monitoring drone",
  ],

  hero: {
    src: "/images/multispectral/multispectral-ndvi-raster-calculator.1a04ab46.webp",
    alt: "NDVI raster of farmland being classified in GIS software, with the index palette and histogram on screen",
  },
  thumbnail: {
    src: "/images/doc/multispectral-rgb.png",
    alt: "RGB aerial imagery of farm plots captured by a survey drone",
  },

  highlights: [
    "Red edge band catches stress before it is visible",
    "NDVI, NDRE, NDWI and GNDVI indices",
    "Multiple acquisition and processing projects delivered",
    "Actionable for irrigation, nutrients and pest control",
  ],

  blocks: [
    {
      id: "overview",
      type: "split",
      // Red-rule kicker, matching "Index outputs" further down the page.
      eyebrow: "Why multispectral",
      heading: "Seeing what the eye cannot",
      // Heading joins its own copy, and both columns start on the same line —
      // four long paragraphs beside a portrait frame left the text floating
      // when it was centred against the taller image.
      headingPlacement: "inline",
      verticalAlign: "start",
      imageSide: "right",
      // The source is portrait; a landscape frame would crop the equipment and
      // the crew out of a shot whose subject is both.
      imageAspect: "3/4",
      image: {
        src: "/images/multispectral/multispectral-field-processing.316cfdd4.webp",
        alt: "Two Schnell engineers reviewing captured multispectral data on a laptop beside their equipment cases in a field",
      },
      paragraphs: [
        "Drone-as-a-Service for multispectral mapping is a powerful solution for modern precision agriculture. By integrating drones equipped with multispectral sensors, GPS/RTK positioning, AI, GIS and cloud-based analytics, DaaS provides accurate, timely and actionable information about crop health and field conditions — helping farmers optimise irrigation, fertilizer use and pest management while reducing costs and improving yields.",
        "Multispectral imaging using drones is a niche segment in the agriculture domain, and Schnell Drone Technologies has carried out multiple data acquisition and multispectral data processing projects. India, primarily an agrarian economy, can rely on this technology to bring in the next revolution.",
        "A standard visual sensor collects red, green and blue wavelengths of light. Multispectral sensors collect these visible wavelengths as well as wavelengths outside the visible spectrum, including near-infrared radiation (NIR) and short-wave infrared radiation (SWIR).",
        "In the red edge band section of the spectrum, the first signs of stress can be identified — sometimes related to disease. Using analytics generated with the red edge band, farmers can identify, monitor and track disease-related stress, catching disease sooner and acting faster to stop it spreading. Indices such as NDVI, NDRE, NDWI and GNDVI are immensely helpful in early decision making to increase farm yield.",
      ],
    },

    {
      id: "indices",
      type: "gallery",
      tone: "muted",
      eyebrow: "Index outputs",
      heading: "The same field, seen five ways",
      intro:
        "Each index isolates a different signal — chlorophyll density, water content, nitrogen uptake — from the same flight over the same plots.",
      columns: 3,
      images: [
        {
          src: "/images/doc/multispectral-rgb.png",
          alt: "RGB drone imagery of farm plots, combining red, green and blue light at varying intensities",
        },
        {
          src: "/images/doc/multispectral-ndvi.png",
          alt: "NDVI analysis of drone data quantifying vegetation health and density",
        },
        {
          src: "/images/doc/multispectral-ndre.png",
          alt: "NDRE analysis of drone data measuring chlorophyll content in mature plants",
        },
        {
          src: "/images/doc/multispectral-ndwi.png",
          alt: "NDWI analysis of drone data indicating plant water content and water stress",
        },
        {
          src: "/images/doc/multispectral-gndvi.png",
          alt: "GNDVI analysis of drone data estimating photosynthetic activity and nitrogen uptake",
        },
      ],
    },

    {
      id: "index-explainer",
      type: "cards",
      heading: "What each index tells you",
      columns: 2,
      items: [
        {
          title: "RGB — true colour reference",
          description:
            "RGB sensors capture images by combining red, green and blue light at varying intensities, reproducing a wide spectrum of colours. This is the basis for high-resolution, colour-accurate imagery from an aerial perspective.",
        },
        {
          title: "NDVI — Normalized Difference Vegetation Index",
          description:
            "A widely used metric for quantifying the health and density of vegetation, calculated from spectrometric data at two specific bands: red and near-infrared.",
        },
        {
          title: "NDRE — Normalized Difference Red Edge Index",
          description:
            "A method of measuring the amount of chlorophyll in plants. NDRE is best applied mid-to-late in the growing season, when plants are mature and approaching harvest.",
        },
        {
          title: "NDWI — Normalized Difference Water Index",
          description:
            "Strongly related to plant water content, and therefore a very good proxy for plant water stress. Derived from the near-infrared and short-wave infrared channels.",
        },
        {
          title: "GNDVI — Green Normalized Difference Vegetation Index",
          description:
            "A vegetation index for estimating photosynthetic activity, commonly used to determine water and nitrogen uptake into the plant canopy.",
        },
      ],
    },

    {
      id: "applications",
      type: "bullets",
      tone: "brand",
      heading: "Applications",
      columns: 2,
      groups: [
        {
          title: "Crop & soil",
          items: [
            "Crop health monitoring",
            "Precision farming",
            "Soil fertility assessment",
            "Nutrient deficiency mapping",
            "Pest and disease detection",
          ],
        },
        {
          title: "Planning & assessment",
          items: [
            "Irrigation planning",
            "Yield prediction",
            "Variable-rate fertilizer application",
            "Crop insurance assessment",
            "Agricultural research",
          ],
        },
      ],
    },
  ],
};

export const services: ServiceEntry[] = [
  coastalSurveillance,
  agricultureSpraying,
  trafficMonitoring,
  landMapping,
  multispectralMapping,
];

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return services.find((service) => service.slug === slug);
}
