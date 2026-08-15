import { z } from "zod";

/**
 * Validation schemas shared by the client form and the server action.
 *
 * Defining them once means the browser and the server enforce exactly the same
 * rules — the client copy is a convenience, the server copy is the real gate.
 */

/** Accepts Indian mobile and landline formats, with or without +91. */
const phoneSchema = z
  .string()
  .trim()
  .min(10, "Enter a valid phone number")
  .max(20, "Enter a valid phone number")
  .regex(/^[+\d][\d\s\-()]{8,}$/, "Enter a valid phone number");

const nameSchema = z
  .string()
  .trim()
  .min(2, "Please enter your name")
  .max(120, "Name is too long");

/** The kind of business enquiry, mirroring the client's contact requirements. */
export const enquiryTypes = [
  { value: "drones", label: "Requirement of drones" },
  { value: "daas", label: "Requirement of DaaS / drone services" },
  { value: "software", label: "Requirement of software" },
  { value: "distributor", label: "Become a distributor" },
  { value: "grievance", label: "Grievance" },
  { value: "other", label: "Something else" },
] as const;

export const enquiryTypeValues = enquiryTypes.map((type) => type.value) as [
  string,
  ...string[],
];

export const enquirySchema = z.object({
  name: nameSchema,
  email: z.string().trim().email("Enter a valid email address"),
  phone: phoneSchema,
  organisation: z.string().trim().max(160).optional().or(z.literal("")),
  state: z.string().trim().max(80).optional().or(z.literal("")),
  enquiryType: z.enum(enquiryTypeValues),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about your requirement")
    .max(4000, "Message is too long"),
  /**
   * Honeypot: a field hidden from humans via CSS. Bots fill every input, so a
   * non-empty value here is a reliable spam signal that costs no UX.
   */
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const careerSchema = z.object({
  name: nameSchema,
  email: z.string().trim().email("Enter a valid email address"),
  phone: phoneSchema,
  position: z
    .string()
    .trim()
    .min(2, "Which role are you applying for?")
    .max(160),
  experience: z.string().trim().max(40).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type CareerInput = z.infer<typeof careerSchema>;

/** Résumé upload constraints, enforced on both client and server. */
export const RESUME_MAX_BYTES = 5 * 1024 * 1024; // 5 MB
export const RESUME_ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
