"use server";

import {
  careerSchema,
  enquirySchema,
  RESUME_ACCEPTED_TYPES,
  RESUME_MAX_BYTES,
} from "@/lib/validation";

/**
 * Server actions backing the site's forms.
 *
 * Validation and spam filtering are complete and production-ready. Delivery is
 * the one piece that needs the client's decision: see `deliverEnquiry` below
 * for the single place to wire up SMTP, a transactional email provider, or a
 * CRM webhook.
 */

export interface FormState {
  status: "idle" | "success" | "error";
  message?: string;
  /** Field-level errors keyed by input name. */
  errors?: Record<string, string[]>;
}

export const initialFormState: FormState = { status: "idle" };

/**
 * TODO (integration): route submissions to their destination.
 *
 * Recipients per the client brief:
 *   drones / daas / software / grievance → info@schnelldronetech.com
 *   distributor                          → Himalaya@SchnellDroneTech.com
 *
 * Suggested implementation: an SMTP transport (Nodemailer) or a provider such
 * as Resend/SendGrid, configured through environment variables. Until that is
 * connected, submissions are logged server-side so nothing is silently lost.
 */
async function deliverEnquiry(
  subject: string,
  payload: Record<string, unknown>
): Promise<void> {
  console.info("[enquiry]", subject, JSON.stringify(payload));
}

/** Strips the honeypot field before anything is stored or sent onward. */
function withoutHoneypot<T extends { company_website?: string }>(
  data: T
): Omit<T, "company_website"> {
  const { company_website, ...rest } = data;
  void company_website;
  return rest;
}

export async function submitEnquiry(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = enquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    organisation: formData.get("organisation") ?? "",
    state: formData.get("state") ?? "",
    enquiryType: formData.get("enquiryType"),
    message: formData.get("message"),
    company_website: formData.get("company_website") ?? "",
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // Honeypot tripped — accept silently so the bot does not learn it was caught.
  if (parsed.data.company_website) {
    return { status: "success", message: "Thank you. Your enquiry has been received." };
  }

  try {
    const enquiry = withoutHoneypot(parsed.data);
    await deliverEnquiry(`Business enquiry — ${enquiry.enquiryType}`, enquiry);

    return {
      status: "success",
      message:
        "Thank you. Your enquiry has been received — our team will get back to you shortly.",
    };
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong sending your enquiry. Please call us on +91 20 4721 6736 instead.",
    };
  }
}

export async function submitApplication(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = careerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    position: formData.get("position"),
    experience: formData.get("experience") ?? "",
    location: formData.get("location") ?? "",
    message: formData.get("message") ?? "",
    company_website: formData.get("company_website") ?? "",
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  if (parsed.data.company_website) {
    return { status: "success", message: "Thank you. Your application has been received." };
  }

  // Résumé is optional, but when present it must be a real document of a size
  // we are willing to accept. Never trust the client-side `accept` attribute.
  const resume = formData.get("resume");
  if (resume instanceof File && resume.size > 0) {
    if (resume.size > RESUME_MAX_BYTES) {
      return {
        status: "error",
        message: "Your résumé is larger than 5 MB. Please upload a smaller file.",
        errors: { resume: ["File must be 5 MB or smaller"] },
      };
    }
    if (!RESUME_ACCEPTED_TYPES.includes(resume.type)) {
      return {
        status: "error",
        message: "Please upload your résumé as a PDF or Word document.",
        errors: { resume: ["Accepted formats: PDF, DOC, DOCX"] },
      };
    }
  }

  try {
    const application = withoutHoneypot(parsed.data);
    await deliverEnquiry("Career application", {
      ...application,
      resumeName: resume instanceof File && resume.size > 0 ? resume.name : null,
      resumeSize: resume instanceof File && resume.size > 0 ? resume.size : null,
    });

    return {
      status: "success",
      message:
        "Thank you for applying. Our team will review your application and be in touch.",
    };
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong sending your application. Please email careers to info@schnelldronetech.com instead.",
    };
  }
}
