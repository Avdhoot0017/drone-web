/**
 * Careers content — current openings and the hiring process.
 *
 * Transcribed from the client's careers brief. Every field here is taken from
 * that document; where the brief does not state something (experience for some
 * roles, employment type for most), the field is simply absent rather than
 * inferred, so nothing on the page claims more than the client has said.
 */

export interface JobOpening {
  /** Stable anchor id, e.g. "service-engineer-uav-systems". */
  id: string;
  title: string;
  /** Discipline chip shown on the card. */
  department: string;
  location: string;
  /** Absent where the brief gives no experience band. */
  experience?: string;
  /** One-line description of the work, where the brief provides one. */
  summary?: string;
  qualification: string;
  keySkills: string[];
  /** schema.org employmentType — only set where the brief states it. */
  employmentType?: string;
  /**
   * Date this opening was published on the site, for JobPosting structured
   * data. Update when a role is re-advertised.
   */
  postedOn: string;
}

const POSTED_ON = "2026-08-25";

export const jobOpenings: JobOpening[] = [
  {
    id: "service-engineer-uav-systems",
    title: "Service Engineer — UAV Systems",
    department: "Engineering",
    location: "Multiple locations across India",
    qualification:
      "Diploma or Degree in Electronics, Mechanical, Aeronautical, Aircraft Maintenance, Computer Science or a related field.",
    keySkills: [
      "Drone assembly and repair",
      "UAV systems",
      "GPS and sensors",
      "Electrical and mechanical troubleshooting",
    ],
    postedOn: POSTED_ON,
  },
  {
    id: "junior-product-executive-gis-photogrammetry",
    title: "Junior Product Executive — GIS & Photogrammetry",
    department: "GIS & Photogrammetry",
    location: "Pune, Maharashtra",
    experience: "6 months – 2 years. Freshers with relevant skills may apply.",
    qualification:
      "GIS, Geoinformatics, Geomatics, Remote Sensing, Geography, Geology, or a related field.",
    keySkills: [
      "GIS",
      "Photogrammetry",
      "Agisoft Metashape",
      "Ortho mosaic",
      "DEM / DSM / DTM",
      "NDVI",
      "GPS",
      "MS Excel",
    ],
    postedOn: POSTED_ON,
  },
  {
    id: "business-development-executive-agri-tech",
    title: "Business Development Executive — Agri Tech",
    department: "Business Development",
    location: "Maharashtra",
    experience: "1 – 3 years",
    qualification:
      "B.Sc. Agriculture, Agricultural Engineering, Agribusiness, MBA Marketing, or a related field.",
    keySkills: [
      "Farmer and FPO networks",
      "Dealer and distributor relationships",
      "Agri Tech and drone sales",
      "Field demonstrations",
      "Rural sales",
      "Business development",
    ],
    postedOn: POSTED_ON,
  },
  {
    id: "rd-advanced-engineering-uav-systems",
    title: "R&D & Advanced Engineering — UAV Systems",
    department: "R&D",
    location: "Pune, Maharashtra",
    qualification:
      "Diploma or Degree in Electronics, Electrical, Mechanical, Aeronautical, Aerospace, Robotics or a related field.",
    keySkills: [
      "UAV design and development",
      "Prototyping",
      "Flight testing",
      "GPS and sensor integration",
      "Embedded systems",
      "Troubleshooting",
      "Advanced UAV R&D",
    ],
    postedOn: POSTED_ON,
  },
  {
    id: "hr-intern",
    title: "HR Intern",
    department: "HR & Operations",
    location: "Pune, Maharashtra",
    summary:
      "Support recruitment, onboarding, documentation, employee coordination and daily HR activities.",
    qualification: "Graduate or MBA in HR or a related field.",
    keySkills: [
      "Communication",
      "Coordination",
      "MS Office",
      "Willingness to learn",
    ],
    employmentType: "INTERN",
    postedOn: POSTED_ON,
  },
  {
    id: "uav-pilot-training-trials-demonstrations",
    title: "UAV Pilot — Training, Trials & Demonstrations",
    department: "UAV Operations",
    location: "Project-based",
    summary:
      "Conduct UAV flights for training, field trials, product demonstrations, testing and operations.",
    qualification: "Valid or recognised UAV Pilot certification as applicable.",
    keySkills: [
      "UAV handling",
      "Flight planning",
      "Safety",
      "Field operations",
      "Basic troubleshooting",
    ],
    postedOn: POSTED_ON,
  },
];

/** The six stages between applying and starting. */
export const hiringSteps = [
  { title: "Apply & shortlist", description: "Profile screening by HR." },
  { title: "HR interview", description: "Candidate and role alignment." },
  {
    title: "Technical interview & assessment",
    description: "Skills and practical assessment.",
  },
  {
    title: "Document verification",
    description: "Secure pre-joining verification.",
  },
  {
    title: "Onboarding & project training",
    description: "Role and project-specific learning.",
  },
  {
    title: "Join & make an impact",
    description: "Start your journey with us.",
  },
];
