import type { ImageRef } from "@/types/content";

/**
 * Landing-page testimonials.
 *
 * ⚠️ SAMPLE CONTENT — MUST BE REPLACED BEFORE LAUNCH.
 *
 * Every quote, name and organisation below is illustrative placeholder copy
 * written to demonstrate the layout, and the avatars are licensed stock
 * portraits. None of it represents a real endorsement.
 *
 * Publishing invented testimonials — particularly attributed to government
 * departments — is deceptive and exposes the company to action under the
 * Consumer Protection Act and the BIS guidelines on online reviews. Replace
 * each entry with a real, written-permission-on-file quote from an actual
 * client, or remove the section entirely. The `isSample` flag drives the
 * on-screen notice; clear it once the content is genuine.
 */

export interface Testimonial {
  id: string;
  /** 1–5. Rendered as stars and exposed to assistive tech as text. */
  rating: number;
  /** Keep to roughly 150 characters so cards stay uniform and scannable. */
  quote: string;
  name: string;
  role: string;
  organisation: string;
  avatar: ImageRef;
}

/** Set to false once real, permissioned testimonials replace the samples. */
export const testimonialsAreSample = true;

export const testimonials: Testimonial[] = [
  {
    id: "coastal-1",
    rating: 5,
    quote:
      "Daily coverage of our stretch of coastline that patrol boats simply could not match. The night-thermal footage has been decisive evidence.",
    name: "Sample Name",
    role: "Enforcement Officer",
    organisation: "State Fisheries Department",
    avatar: { src: "/images/avatars/avatar-1.jpg", alt: "", placeholder: true },
  },
  {
    id: "agri-1",
    rating: 5,
    quote:
      "Six acres an hour, and our staff never step into the spray. The Nano Urea season finished ahead of schedule for the first time.",
    name: "Sample Name",
    role: "Secretary",
    organisation: "Agricultural Cooperative Society",
    avatar: { src: "/images/avatars/avatar-2.jpg", alt: "", placeholder: true },
  },
  {
    id: "mapping-1",
    rating: 5,
    quote:
      "Ortho imagery and contours delivered on time across several hundred villages. The data went straight into our GIS without rework.",
    name: "Sample Name",
    role: "Deputy Director",
    organisation: "Land Records Department",
    avatar: { src: "/images/avatars/avatar-3.jpg", alt: "", placeholder: true },
  },
  {
    id: "himalaya-1",
    rating: 5,
    quote:
      "Type certification made the purchase decision straightforward, and the service team has kept every unit in the air through the season.",
    name: "Sample Name",
    role: "Managing Partner",
    organisation: "Regional Distribution Partner",
    avatar: { src: "/images/avatars/avatar-4.jpg", alt: "", placeholder: true },
  },
  {
    id: "software-1",
    rating: 5,
    quote:
      "Licensing, training and support all handled locally. Our survey team was productive in Global Mapper within a fortnight.",
    name: "Sample Name",
    role: "Head of Survey",
    organisation: "Infrastructure Consultancy",
    avatar: { src: "/images/avatars/avatar-5.jpg", alt: "", placeholder: true },
  },
  {
    id: "traffic-1",
    rating: 4,
    quote:
      "No drones to buy, no pilots to recruit. We pay a monthly charge and get court-admissible evidence from day one.",
    name: "Sample Name",
    role: "Traffic Superintendent",
    organisation: "Municipal Corporation",
    avatar: { src: "/images/avatars/avatar-6.jpg", alt: "", placeholder: true },
  },
  {
    id: "multispectral-1",
    rating: 5,
    quote:
      "The NDRE maps flagged stress a fortnight before anything was visible on the ground. That lead time changed how we irrigate.",
    name: "Sample Name",
    role: "Agronomy Lead",
    organisation: "Commercial Farming Group",
    avatar: { src: "/images/avatars/avatar-7.jpg", alt: "", placeholder: true },
  },
  {
    id: "maintenance-1",
    rating: 5,
    quote:
      "Turnaround on a damaged airframe was days, not weeks, and the preventive schedule has all but ended unplanned downtime.",
    name: "Sample Name",
    role: "Fleet Manager",
    organisation: "Industrial Inspection Firm",
    avatar: { src: "/images/avatars/avatar-8.jpg", alt: "", placeholder: true },
  },
];
