/**
 * Press coverage of the Maharashtra fisheries drone surveillance project.
 *
 * These are newspaper clippings, so they are never cropped — the layout keeps
 * every image at its native aspect ratio, otherwise the headlines become
 * unreadable. Dimensions are stored so the browser can reserve the right space
 * and the masonry does not reflow as images load.
 */
export interface PressClipping {
  src: string;
  width: number;
  height: number;
  /** Masthead, shown as the caption. */
  publication: string;
  /** Gist of the report — also carries the alt text. */
  headline: string;
  language: "English" | "Marathi" | "Hindi";
}

export const pressClippings: PressClipping[] = [
  {
    src: "/images/media/the-hindu-coastal-drone-surveillance.webp",
    width: 552, height: 712,
    publication: "The Hindu",
    headline: "Maharashtra to start drone surveillance of coasts to prevent illegal fishing",
    language: "English",
  },
  {
    src: "/images/media/times-of-india-drone-monitoring.webp",
    width: 924, height: 712,
    publication: "The Times of India",
    headline: "State launches drone monitoring of fishing boats along the Maharashtra coast",
    language: "English",
  },
  {
    src: "/images/media/dainik-bhaskar-fisheries-inauguration.webp",
    width: 1080, height: 722,
    publication: "Dainik Bhaskar",
    headline: "Drones to keep watch over Maharashtra's marine waters — project inauguration",
    language: "Hindi",
  },
  {
    src: "/images/media/saamana-konkan-drone-watch.webp",
    width: 1400, height: 710,
    publication: "Saamana",
    headline: "Drone watch over the Konkan coastline",
    language: "Marathi",
  },
  {
    src: "/images/media/navarashtra-mulgaon-jetty-launch.webp",
    width: 966, height: 859,
    publication: "Navarashtra",
    headline: "Drone system takes flight at Mulgaon jetty",
    language: "Marathi",
  },
  {
    src: "/images/media/marathi-state-waters-drone-control.webp",
    width: 934, height: 1020,
    publication: "Regional press",
    headline: "Drones now deployed to monitor the state's marine waters across seven coastal districts",
    language: "Marathi",
  },
  {
    src: "/images/media/marathi-coastal-security-drones-ready.webp",
    width: 1400, height: 550,
    publication: "Regional press",
    headline: "Drones ready to keep watch over coastal security",
    language: "Marathi",
  },
  {
    src: "/images/media/marathi-drone-cameras-coastal-security.webp",
    width: 1400, height: 482,
    publication: "Regional press",
    headline: "Drone cameras will prove valuable for coastal security",
    language: "Marathi",
  },
  {
    src: "/images/media/marathi-district-coastal-drone-flights.webp",
    width: 835, height: 1600,
    publication: "Regional press",
    headline: "Drone flights begin over the district's marine zone to curb illegal fishing",
    language: "Marathi",
  },
];

export const mediaCopy = {
  eyebrow: "In the news",
  title: "Media coverage",
  intro:
    "National and regional press coverage of India's first daily drone surveillance programme in state territorial waters, run by Schnell Drone Technologies for the Department of Fisheries, Government of Maharashtra.",
};
