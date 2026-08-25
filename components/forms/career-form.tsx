"use client";

import { useActionState } from "react";
import { CheckCircle2, Upload } from "lucide-react";

import { initialFormState, submitApplication } from "@/app/actions/enquiry";
import { SubmitButton } from "@/components/forms/enquiry-form";
import { controlClasses, Field } from "@/components/forms/field";
import { cn } from "@/lib/utils";
import { jobOpenings } from "@/content/careers";

/** Short application form with résumé upload, per the client brief. */
export function CareerForm() {
  const [state, formAction] = useActionState(submitApplication, initialFormState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-brand-200 bg-brand-50 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-brand-500" aria-hidden />
        <h3 className="mt-4 font-heading text-xl font-bold text-ink-950">
          Application received
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-600">
          {state.message}
        </p>
      </div>
    );
  }

  // Note: no `method` or `encType` on the form below. When `action` is a
  // server action, React sets them itself (POST + multipart/form-data), and
  // specifying them manually is overridden and logs a warning. File uploads
  // still work.
  return (
    <form
      action={formAction}
      noValidate
      className="rounded-xl border border-ink-200 bg-white p-6 md:p-8"
    >
      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="mb-6 rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-medium text-brand-700"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full name" required errors={state.errors?.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={controlClasses}
            placeholder="Your name"
          />
        </Field>

        <Field name="email" label="Email" required errors={state.errors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={controlClasses}
            placeholder="you@example.com"
          />
        </Field>

        <Field name="phone" label="Phone" required errors={state.errors?.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={controlClasses}
            placeholder="+91 00000 00000"
          />
        </Field>

        <Field
          name="position"
          label="Position applied for"
          required
          errors={state.errors?.position}
        >
          {/*
            A datalist rather than a select: applicants can pick one of the
            advertised roles, but the field stays free text so speculative
            applications — which the copy alongside invites — still work.
          */}
          <input
            id="position"
            name="position"
            type="text"
            required
            list="open-positions"
            className={controlClasses}
            placeholder="e.g. UAV Pilot, GIS & Photogrammetry"
          />
          <datalist id="open-positions">
            {jobOpenings.map((job) => (
              <option key={job.id} value={job.title} />
            ))}
          </datalist>
        </Field>

        <Field name="experience" label="Years of experience" errors={state.errors?.experience}>
          <input
            id="experience"
            name="experience"
            type="text"
            className={controlClasses}
            placeholder="e.g. 3 years"
          />
        </Field>

        <Field name="location" label="Current location" errors={state.errors?.location}>
          <input
            id="location"
            name="location"
            type="text"
            className={controlClasses}
            placeholder="City, state"
          />
        </Field>

        <Field
          name="resume"
          label="Résumé"
          hint="PDF, DOC or DOCX, up to 5 MB."
          errors={state.errors?.resume}
          className="sm:col-span-2"
        >
          <div className="relative">
            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className={cn(
                controlClasses,
                "cursor-pointer py-2 file:mr-3 file:rounded-md file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-brand-700"
              )}
            />
            <Upload
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ink-300"
              aria-hidden
            />
          </div>
        </Field>

        <Field
          name="message"
          label="Anything you'd like to add"
          errors={state.errors?.message}
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={4}
            className={cn(controlClasses, "resize-y")}
            placeholder="Briefly tell us why you would be a good fit."
          />
        </Field>
      </div>

      {/* Honeypot */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="career_company_website">Do not fill this in</label>
        <input
          id="career_company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <SubmitButton label="Submit application" />
    </form>
  );
}
