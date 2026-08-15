/** Shared types for the site's navigation model. */

/** A plain link, optionally with a one-line description shown in mega menus. */
export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** Renders a small "New" / "Certified" chip beside the label. */
  badge?: string;
}

/** An image-led card used in the featured column of a mega menu. */
export interface NavFeaturedCard {
  label: string;
  href: string;
  image: string;
  imageAlt: string;
  caption?: string;
  badge?: string;
}

/** A titled group of links inside a mega menu panel. */
export interface NavColumn {
  heading: string;
  links: NavLink[];
}

/** The full dropdown panel rendered under a top-level nav item. */
export interface NavPanel {
  /** Optional image-card rail rendered on the left of the panel. */
  featured?: {
    heading: string;
    cards: NavFeaturedCard[];
  };
  /** Link columns rendered to the right of the featured rail. */
  columns: NavColumn[];
  /** Optional "see everything" link pinned to the bottom of the panel. */
  footerLink?: NavLink;
}

/** A top-level entry in the main navigation bar. */
export interface NavItem {
  label: string;
  href: string;
  /** When present the item opens a mega-menu panel instead of navigating. */
  panel?: NavPanel;
}
