import type { CardsBlock } from "@/types/content";

/**
 * Content fragments that appear on more than one page.
 *
 * The client document repeats the nine spraying advantages verbatim under both
 * the Himalaya product and the agriculture DaaS service. Declaring it once
 * keeps the two pages in sync and avoids duplicate-content drift.
 */

/** The nine advantages of drone spraying over traditional methods. */
export const sprayingAdvantages: CardsBlock = {
  id: "advantages",
  type: "cards",
  // Faint red rather than grey: it follows a grey stats band on both pages
  // that use it, and two adjacent grey bands read as one over-long section.
  tone: "brand",
  numbered: true,
  columns: 3,
  eyebrow: "Why spray with drones",
  heading: "Advantages over traditional spraying",
  intro:
    "Drone spraying changes the economics and the safety profile of crop protection — covering more ground, with less chemical, and without putting an operator inside the spray cloud.",
  items: [
    {
      title: "Higher efficiency",
      description:
        "Cover large areas in less time — about 6 acres an hour — spraying uniformly along automated flight paths while cutting labour requirements.",
    },
    {
      title: "Precision spraying",
      description:
        "GPS and automated navigation apply the right dose to the right place, targeting specific areas and eliminating overlap and missed spots.",
    },
    {
      title: "Reduced chemical usage",
      description:
        "Controlled spraying minimises waste, lowering overall pesticide and fertilizer consumption and reducing environmental contamination.",
    },
    {
      title: "Improved operator safety",
      description:
        "Operators stay away from direct chemical exposure, never walk through freshly sprayed fields, and avoid the risks of difficult terrain.",
    },
    {
      title: "Access to difficult areas",
      description:
        "Hilly, muddy, flooded or uneven fields are sprayed easily, including areas that tractors and other ground equipment simply cannot reach.",
    },
    {
      title: "Less crop damage",
      description:
        "No foot traffic in the field means no trampled crop and none of the soil compaction that machinery leaves behind.",
    },
    {
      title: "Time savings",
      description:
        "Fast deployment and rapid spraying make it practical to treat a crop inside the narrow window of a critical growth stage.",
    },
    {
      title: "Water conservation",
      description:
        "Low-volume spraying techniques require significantly less water than conventional methods — decisive in water-stressed districts.",
    },
    {
      title: "Cost savings over time",
      description:
        "Lower labour costs, reduced fuel consumption versus tractor-based spraying, and savings from less chemical and better crop protection.",
    },
  ],
};

/**
 * A marker for copy the client still has to supply.
 * Rendered inline so unfinished sections are obvious in review, never shipped
 * silently as empty space.
 */
export const CONTENT_PENDING =
  "Content to be supplied by Schnell Drone Technologies.";
