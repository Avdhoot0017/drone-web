/**
 * Content model for the site.
 *
 * Page bodies are expressed as an array of typed `ContentBlock`s rather than
 * JSX. A single renderer (`<BlockSection />`) draws them, which means:
 *  - every service, product and software page is laid out consistently,
 *  - new sections are added by editing data, not components,
 *  - the whole content layer can later be moved to a CMS without touching UI.
 */

export interface ImageRef {
  src: string;
  alt: string;
  /** Marks assets the client still has to supply. */
  placeholder?: boolean;
}

export interface Stat {
  /** Omit while the client has not yet supplied the figure. */
  value?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  hint?: string;
}

export interface BulletGroup {
  title?: string;
  items: string[];
}

export interface CardItem {
  title: string;
  description: string;
}

export interface TableBlockData {
  head: string[];
  rows: string[][];
  caption?: string;
}

/* -------------------------------------------------------------------------- */
/*                                Content blocks                              */
/* -------------------------------------------------------------------------- */

interface BaseBlock {
  /** Anchor id — also used as the React key and for in-page navigation. */
  id: string;
  heading?: string;
  eyebrow?: string;
  /** Lead paragraph rendered directly under the heading. */
  intro?: string;
  /** Alternate background so long pages read as distinct bands. */
  tone?: "default" | "muted" | "brand";
}

/** Plain paragraphs. */
export interface ProseBlock extends BaseBlock {
  type: "prose";
  paragraphs: string[];
}

/** One or more titled bullet lists, laid out in responsive columns. */
export interface BulletsBlock extends BaseBlock {
  type: "bullets";
  groups: BulletGroup[];
  columns?: 1 | 2 | 3;
}

/** A grid of titled cards — used for applications and capabilities. */
export interface CardsBlock extends BaseBlock {
  type: "cards";
  items: CardItem[];
  columns?: 2 | 3 | 4;
  /** Numbers the cards, e.g. the nine spraying advantages. */
  numbered?: boolean;
}

/** A comparison or specification table. */
export interface TableBlock extends BaseBlock {
  type: "table";
  data: TableBlockData;
}

/** Text on one side, image on the other. */
export interface SplitBlock extends BaseBlock {
  type: "split";
  paragraphs: string[];
  image: ImageRef;
  /** Which side the image sits on at desktop widths. */
  imageSide?: "left" | "right";
  /** Frame ratio for the image. Defaults to 4/3 — set it when the source is
   *  portrait, which the default would crop through the subject. */
  imageAspect?: "16/10" | "4/3" | "3/2" | "1/1" | "16/9" | "3/4";
  /**
   * Where the block's heading sits. "above" (the default) spans the full
   * width; "inline" moves it into the text column, so the copy reads as one
   * unit beside the image instead of a wide title stranded over a half-width
   * paragraph.
   */
  headingPlacement?: "above" | "inline";
  /**
   * How the two columns line up. "center" (the default) suits short copy; use
   * "start" when the column heights are close, so both begin on the same line
   * instead of one floating against the other.
   */
  verticalAlign?: "center" | "start";
  bullets?: string[];
}

/** A row of headline figures. */
export interface StatsBlock extends BaseBlock {
  type: "stats";
  stats: Stat[];
}

/** A photo gallery. */
export interface GalleryBlock extends BaseBlock {
  type: "gallery";
  images: ImageRef[];
  columns?: 2 | 3 | 4;
}

/**
 * A sequential process, drawn as a connected pipeline.
 * Use where the *order* is the point — a workflow, not a feature list.
 */
export interface StepsBlock extends BaseBlock {
  type: "steps";
  /** Optional lead paragraphs rendered above the pipeline. */
  paragraphs?: string[];
  steps: {
    title: string;
    description: string;
    /** Short label for what this stage produces, e.g. "Dense point cloud". */
    output?: string;
  }[];
}

/**
 * Photographs laid out as a masonry collage with captions.
 *
 * Distinct from `gallery`, which forces every image into an identical box.
 * Here the source ratios vary, so a multi-column flow that lets each photo
 * keep its own shape reads cleaner than a grid of mismatched crops.
 */
export interface CollageBlock extends BaseBlock {
  type: "collage";
  images: (ImageRef & { caption?: string })[];
}

/** Accordion of questions — also emitted as FAQPage structured data. */
export interface FaqBlock extends BaseBlock {
  type: "faq";
  faqs: { question: string; answer: string }[];
}

export type ContentBlock =
  | ProseBlock
  | BulletsBlock
  | CardsBlock
  | TableBlock
  | SplitBlock
  | StatsBlock
  | GalleryBlock
  | CollageBlock
  | StepsBlock
  | FaqBlock;

/* -------------------------------------------------------------------------- */
/*                                 Page shapes                                */
/* -------------------------------------------------------------------------- */

export interface SeoFields {
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
}

/** A Drone-as-a-Service vertical. */
export interface ServiceEntry extends SeoFields {
  slug: string;
  href: string;
  /** Short label used in cards and navigation. */
  navLabel: string;
  title: string;
  eyebrow: string;
  summary: string;
  hero: ImageRef;
  /** Card thumbnail on the services hub. */
  thumbnail: ImageRef;
  highlights: string[];
  blocks: ContentBlock[];
}

/** A software product resold by Schnell. */
export interface SoftwareEntry extends SeoFields {
  slug: string;
  href: string;
  name: string;
  vendor: string;
  summary: string;
  thumbnail: ImageRef;
  hero: ImageRef;
  highlights: string[];
  blocks: ContentBlock[];
}

/** A board member or key managerial person. */
export interface PersonEntry {
  name: string;
  designation: string;
  age?: number;
  /** Empty array marks a profile the client has not yet supplied. */
  bio: string[];
  image?: ImageRef;
  qualifications?: string[];
}

/** A downloadable investor document. */
export interface DocumentEntry {
  title: string;
  /** Empty string means the PDF has not been supplied yet. */
  href: string;
  financialYear?: string;
  category: string;
  /** Shown beside the link, e.g. "PDF · 12.6 MB" — several of these are large
   *  scanned reports, so the weight is worth stating before someone taps. */
  fileSize?: string;
}
