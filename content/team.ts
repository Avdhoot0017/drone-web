import type { ImageRef } from "@/types/content";

/**
 * Team photography from the Maharashtra fisheries surveillance deployment.
 *
 * The lead image carries the section; the three supporting shots sit beneath
 * it. All are the client's own photographs — no placeholders here.
 */
export const teamLead: ImageRef = {
  src: "/images/team/team-group.webp",
  alt: "The Schnell Drone Technologies team assembled outside the project base during the Maharashtra coastal surveillance deployment",
};

export const teamSupporting: ImageRef[] = [
  {
    src: "/images/team/team-felicitation.webp",
    alt: "Schnell drone pilots and engineers receiving certificates at a project felicitation ceremony",
  },
  {
    src: "/images/team/team-field-crew.webp",
    alt: "Schnell field crew gathered before a day of coastal survey flights",
  },
  {
    src: "/images/team/team-award.webp",
    alt: "Schnell leadership being felicitated by officials at a fisheries department event",
  },
];

export const teamCopy = {
  eyebrow: "Our team",
  title: "The crew behind every sortie",
  intro:
    "Schnell Drone Technologies is led by engineers and flown by DGCA certified pilots — the people who put drones over coastlines, farmland and glaciers, day after day.",
};
