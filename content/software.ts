import { routes } from "@/lib/routes";
import type { SoftwareEntry } from "@/types/content";

/**
 * GIS, photogrammetry and engineering software distributed by Schnell.
 *
 * The client document specifies these pages should follow the structure of the
 * existing website. Feature copy below is drawn from that site and from each
 * vendor's published capability list, and is flagged for client sign-off.
 */

const globalMapper: SoftwareEntry = {
  slug: "global-mapper",
  href: routes.softwareGlobalMapper,
  name: "Global Mapper",
  vendor: "Blue Marble Geographics, USA",
  summary:
    "An all-in-one GIS package that handles more than 300 spatial data formats, with terrain analysis, lidar processing and drone imagery workflows in a single application.",

  metaTitle: "Global Mapper & Global Mapper Pro | Authorised India Partner",
  metaDescription:
    "Schnell Drone Technologies is the exclusive India partner of Blue Marble Geographics for Global Mapper and Global Mapper Pro — GIS software supporting 300+ formats, terrain analysis, lidar and Pixels to Points drone processing.",
  keywords: [
    "Global Mapper India",
    "Global Mapper Pro price India",
    "Blue Marble Geographics India partner",
    "GIS software India",
    "Pixels to Points drone processing",
    "lidar processing software",
  ],

  thumbnail: {
    src: "/images/stock/mapping-aerial-farmland.jpg",
    alt: "Aerial survey imagery of farmland used for GIS analysis in Global Mapper",
  },
  hero: {
    src: "/images/software/global-mapper-banner.5799ef92.webp",
    alt: "Global Mapper running on a laptop, showing a coloured elevation raster and attribute tables",
  },

  highlights: [
    "Exclusive India partner of Blue Marble Geographics",
    "More than 1,000 clients served",
    "300+ supported data formats",
    "Pixels to Points drone imagery processing in Pro",
  ],

  blocks: [
    {
      id: "overview",
      type: "split",
      heading: "One application for the whole geospatial workflow",
      imageSide: "right",
      paragraphs: [
        "Schnell Drone Technologies Ltd. is the exclusive India partner of Blue Marble Geographics, USA, and has served more than 1,000 clients with Global Mapper licensing, training and support.",
        "Global Mapper is a cutting-edge GIS application providing a comprehensive array of spatial data processing tools, with access to an unrivalled variety of data formats. It is designed to serve both the GIS professional and the engineer who needs geospatial capability without a specialist toolchain.",
      ],
      bullets: [
        "Licensed, trained and supported in India by Schnell's own survey engineers",
        "Handles drone imagery, lidar, terrain and vector data in one workspace",
        "Scales from a single desktop seat to a department-wide deployment",
      ],
      image: {
        src: "/images/stock/mapping-aerial-farmland.jpg",
        alt: "Aerial geospatial imagery of agricultural land parcels, of the kind analysed in Global Mapper",
      },
    },
    {
      id: "features",
      type: "bullets",
      tone: "muted",
      heading: "Major features",
      columns: 3,
      groups: [
        {
          title: "Data handling",
          items: [
            "Import and export across 300+ spatial data formats",
            "Online data access including WMS sources, NED and SRTM databases",
            "Raster data processing and analysis",
            "Image rectification and georeferencing",
          ],
        },
        {
          title: "Analysis",
          items: [
            "Terrain analysis, viewsheds and watershed delineation",
            "Vector operations and digitising tools",
            "Lidar display, filtering and classification",
            "Geocoding and GPS tracking",
          ],
        },
        {
          title: "Output",
          items: [
            "3D data support and visualisation",
            "Map layout and printing",
            "Web publishing of map data",
            "Scripting for repeatable batch workflows",
          ],
        },
      ],
    },
    {
      id: "editions",
      type: "table",
      heading: "Standard vs Pro",
      intro:
        "Global Mapper Pro adds the advanced point cloud and drone processing capability required for photogrammetric survey work.",
      data: {
        head: ["Capability", "Global Mapper", "Global Mapper Pro"],
        rows: [
          ["Vector operations and editing", "Included", "Included"],
          ["Terrain and elevation analysis", "Included", "Included"],
          ["Lidar display and basic tools", "Included", "Advanced point cloud processing"],
          ["3D visualisation", "Included", "Included"],
          ["Scripting", "Global Mapper script", "Global Mapper script + Python"],
          ["Pixels to Points® drone/UAV imagery processing", "—", "Included"],
          ["RTK device support", "—", "Included"],
        ],
      },
    },
  ],
};

const agisoftMetashape: SoftwareEntry = {
  slug: "agisoft-metashape",
  href: routes.softwareAgisoftMetashape,
  name: "Agisoft Metashape",
  vendor: "Agisoft LLC",
  summary:
    "Photogrammetric processing of drone imagery into ortho-rectified imagery, dense point clouds, digital elevation models and textured 3D models.",

  metaTitle: "Agisoft Metashape | Photogrammetry Software in India",
  metaDescription:
    "Agisoft Metashape photogrammetry software from Schnell Drone Technologies — process drone imagery into ORI, dense point clouds, DEM, DSM and textured 3D models for survey, mining and heritage projects.",
  keywords: [
    "Agisoft Metashape India",
    "photogrammetry software India",
    "drone image processing software",
    "orthomosaic software",
    "Metashape Professional price",
  ],

  thumbnail: {
    src: "/images/stock/mapping-aerial-farm-uk.jpg",
    alt: "Aerial photogrammetric imagery of farmland and field boundaries",
  },
  hero: {
    src: "/images/stock/mapping-aerial-farm-uk.jpg",
    alt: "Aerial photogrammetric survey imagery of rural land",
  },

  highlights: [
    "Industry standard photogrammetric processing",
    "ORI, dense point cloud, DEM, DTM and DSM output",
    "Used across Schnell's own survey projects",
    "Professional and Standard editions available",
  ],

  blocks: [
    {
      id: "overview",
      type: "steps",
      eyebrow: "The pipeline",
      heading: "From overlapping images to survey-grade deliverables",
      paragraphs: [
        "Agisoft Metashape performs photogrammetric processing of digital images and generates 3D spatial data for use in GIS applications, cultural heritage documentation, visual effects production, and indirect measurement of objects at any scale.",
        "It is the software behind much of Schnell's own data processing: drone images taken from multiple vantage points are processed into ortho-rectified imagery, dense point clouds and elevation models that feed downstream analysis.",
      ],
      steps: [
        {
          title: "Capture",
          description:
            "The drone flies a planned grid so every point on the ground appears in several frames from different vantage points.",
          output: "Overlapping imagery",
        },
        {
          title: "Align",
          description:
            "Metashape matches common features across the frames to solve each camera's position and orientation, and builds a sparse tie-point cloud.",
          output: "Camera positions",
        },
        {
          title: "Reconstruct",
          description:
            "Depth is computed across the aligned set to produce a dense 3D point cloud, which can then be classified by feature type.",
          output: "Dense point cloud",
        },
        {
          title: "Deliver",
          description:
            "The cloud is turned into the outputs the project actually needs — ortho-rectified imagery, elevation models and textured meshes.",
          output: "ORI · DEM · DTM · DSM",
        },
      ],
    },
    {
      id: "capabilities",
      type: "cards",
      tone: "muted",
      heading: "Core capabilities",
      columns: 2,
      items: [
        {
          title: "Ortho-rectified imagery",
          description:
            "High-resolution orthomosaics suitable for digitisation of point, line and polygon features, legal proceedings and area inspection.",
        },
        {
          title: "Dense point clouds",
          description:
            "Dense 3D reconstruction with point classification, forming the basis for terrain models and contour generation.",
        },
        {
          title: "Digital elevation models",
          description:
            "DEM, DTM and DSM generation for volumetrics, path profiles, terrain assessment and network planning.",
        },
        {
          title: "3D textured models",
          description:
            "Textured mesh models of cities, buildings and individual objects for visualisation and measurement.",
        },
      ],
    },
  ],
};

const surfer: SoftwareEntry = {
  slug: "surfer",
  href: routes.softwareSurfer,
  name: "Surfer",
  vendor: "Golden Software",
  summary:
    "Contouring, gridding and 3D surface mapping used by geoscientists and engineers to model terrain, groundwater and subsurface data.",

  metaTitle: "Surfer by Golden Software | Contouring & 3D Surface Mapping",
  metaDescription:
    "Surfer contouring, gridding and 3D surface mapping software from Schnell Drone Technologies — model terrain, groundwater and subsurface data with a full suite of gridding methods.",
  keywords: [
    "Surfer Golden Software India",
    "contour mapping software",
    "3D surface mapping software",
    "gridding software geology",
  ],

  thumbnail: {
    src: "/images/stock/mapping-theodolite.jpg",
    alt: "Survey instrument used to collect terrain data for surface modelling",
  },
  hero: {
    src: "/images/stock/mapping-theodolite.jpg",
    alt: "Survey equipment collecting terrain measurements in the field",
  },

  highlights: [
    "Full suite of gridding and interpolation methods",
    "2D contour and 3D surface visualisation",
    "Widely used in geology, hydrology and mining",
    "Automation for repeatable map production",
  ],

  blocks: [
    {
      id: "overview",
      type: "prose",
      heading: "Turning scattered measurements into a surface",
      paragraphs: [
        "Surfer transforms scattered XYZ data into continuous gridded surfaces, then renders them as contour maps, 3D surfaces, wireframes, vector maps and image maps.",
        "It is a mainstay of geological, hydrological, environmental and mining workflows where the question is what the surface between the sample points actually looks like.",
      ],
    },
    {
      id: "uses",
      type: "bullets",
      tone: "muted",
      heading: "Typical uses",
      columns: 2,
      groups: [
        {
          title: "Earth sciences",
          items: [
            "Terrain and topographic surface modelling",
            "Groundwater level and contamination mapping",
            "Geochemical and geophysical surface analysis",
          ],
        },
        {
          title: "Engineering",
          items: [
            "Volume calculation between surfaces",
            "Cut and fill assessment for excavation",
            "Presentation-grade contour map production",
          ],
        },
      ],
    },
  ],
};

const grapher: SoftwareEntry = {
  slug: "grapher",
  href: routes.softwareGrapher,
  name: "Grapher",
  vendor: "Golden Software",
  summary:
    "Technical graphing and statistical plotting for scientific, survey and engineering datasets, with publication-quality output.",

  metaTitle: "Grapher by Golden Software | Technical Graphing Software",
  metaDescription:
    "Grapher technical graphing and statistical plotting software from Schnell Drone Technologies — over 80 graph types with publication-quality output for scientific and engineering data.",
  keywords: [
    "Grapher Golden Software India",
    "technical graphing software",
    "scientific plotting software",
    "statistical graphing software",
  ],

  thumbnail: {
    src: "/images/stock/people-engineer-plans.jpg",
    alt: "Engineer reviewing technical plans and data in the field",
  },
  hero: {
    src: "/images/stock/people-engineer-plans.jpg",
    alt: "Engineer analysing technical survey documentation",
  },

  highlights: [
    "Over 80 two- and three-dimensional graph types",
    "Built-in statistical and curve-fitting tools",
    "Publication-quality export",
    "Automation for repeat reporting",
  ],

  blocks: [
    {
      id: "overview",
      type: "prose",
      heading: "Graphs that hold up in a technical report",
      paragraphs: [
        "Grapher produces highly customisable 2D and 3D graphs from scientific and engineering data, with the statistical tooling to analyse the data as well as plot it.",
        "It pairs naturally with Surfer in geoscience workflows, handling the plots and statistics while Surfer handles the surfaces.",
      ],
    },
  ],
};

const geo5: SoftwareEntry = {
  slug: "geo5-geotechnical-engineering-software",
  href: routes.softwareGeo5,
  name: "GEO5 Geotechnical Engineering Software",
  vendor: "Fine Ltd.",
  summary:
    "A suite of geotechnical programs covering foundations, retaining structures, slope stability, settlement, tunnelling and digital terrain modelling.",

  metaTitle: "GEO5 Geotechnical Engineering Software in India",
  metaDescription:
    "GEO5 geotechnical engineering software from Schnell Drone Technologies — a modular suite for foundations, retaining walls, slope stability, settlement analysis, tunnelling and digital terrain modelling.",
  keywords: [
    "GEO5 India",
    "geotechnical engineering software",
    "slope stability software",
    "retaining wall design software",
    "foundation design software India",
  ],

  thumbnail: {
    src: "/images/stock/mapping-site-survey.jpg",
    alt: "Geotechnical survey work being carried out on a construction site",
  },
  hero: {
    src: "/images/stock/mapping-site-survey.jpg",
    alt: "Engineering survey on an active earthworks site",
  },

  highlights: [
    "Modular — licence only the programs you need",
    "Analytical and finite element methods",
    "Supports international design standards",
    "Integrates with drone-derived terrain data",
  ],

  blocks: [
    {
      id: "overview",
      type: "prose",
      heading: "Geotechnical analysis, module by module",
      paragraphs: [
        "GEO5 is a suite of programs for geotechnical analysis in which each program solves a specific problem — shallow and deep foundations, retaining structures, slope stability, settlement, ground improvement, tunnelling and digital terrain modelling.",
        "The modular structure means an organisation licences only the programs its work actually requires, and the terrain modelling module accepts survey data captured by drone.",
      ],
    },
    {
      id: "modules",
      type: "bullets",
      tone: "muted",
      heading: "Analysis areas",
      columns: 3,
      groups: [
        {
          title: "Foundations",
          items: ["Spread footing design", "Pile and pile group analysis", "Settlement analysis"],
        },
        {
          title: "Earth retention",
          items: ["Cantilever and gravity walls", "Sheeting design and verification", "Anchored structures"],
        },
        {
          title: "Ground & terrain",
          items: ["Slope stability", "Digital terrain modelling", "Tunnelling and rock stability"],
        },
      ],
    },
  ],
};

export const softwareProducts: SoftwareEntry[] = [
  globalMapper,
  agisoftMetashape,
  surfer,
  grapher,
  geo5,
];

export function getSoftwareBySlug(slug: string): SoftwareEntry | undefined {
  return softwareProducts.find((product) => product.slug === slug);
}
