"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { controlClasses, Field } from "@/components/forms/field";
import { initialFormState, submitEnquiry } from "@/app/actions/enquiry";
import { enquiryTypes } from "@/lib/validation";
import { cn } from "@/lib/utils";

/**
 * Business enquiry form.
 *
 * Built on a server action so it submits and validates without JavaScript;
 * `useActionState` layers on inline errors and a pending state when JS is
 * available. `defaultEnquiryType` lets a page pre-select the relevant option
 * (e.g. the distributor page).
 */
export function EnquiryForm({
  defaultEnquiryType = "daas",
  title,
  description,
}: {
  defaultEnquiryType?: string;
  title?: string;
  description?: string;
}) {
  const [state, formAction] = useActionState(submitEnquiry, initialFormState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-brand-200 bg-brand-50 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-brand-500" aria-hidden />
        <h3 className="mt-4 font-heading text-xl font-bold text-ink-950">
          Enquiry received
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-600">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-xl border border-ink-200 bg-white p-6 md:p-8"
    >
      {title ? (
        <h2 className="font-heading text-xl font-bold text-ink-950">{title}</h2>
      ) : null}
      {description ? (
        <p className="mt-2 mb-6 text-sm leading-relaxed text-ink-600">{description}</p>
      ) : (
        <div className="mb-6" />
      )}

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
            aria-invalid={Boolean(state.errors?.name)}
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
            aria-invalid={Boolean(state.errors?.email)}
            className={controlClasses}
            placeholder="you@organisation.com"
          />
        </Field>

        <Field name="phone" label="Phone" required errors={state.errors?.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-invalid={Boolean(state.errors?.phone)}
            className={controlClasses}
            placeholder="+91 00000 00000"
          />
        </Field>

        <Field
          name="organisation"
          label="Organisation / department"
          errors={state.errors?.organisation}
        >
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            className={controlClasses}
            placeholder="Company, cooperative or department"
          />
        </Field>

        <Field name="state" label="State" errors={state.errors?.state}>
          <input
            id="state"
            name="state"
            type="text"
            className={controlClasses}
            placeholder="e.g. Maharashtra"
          />
        </Field>

        <Field
          name="enquiryType"
          label="Nature of enquiry"
          required
          errors={state.errors?.enquiryType}
        >
          <select
            id="enquiryType"
            name="enquiryType"
            required
            defaultValue={defaultEnquiryType}
            className={cn(controlClasses, "appearance-none bg-white")}
          >
            {enquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          name="message"
          label="Your requirement"
          required
          errors={state.errors?.message}
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-invalid={Boolean(state.errors?.message)}
            className={cn(controlClasses, "resize-y")}
            placeholder="Tell us the area to be covered, the timeline, and any specific requirements."
          />
        </Field>
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="company_website">Do not fill this in</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <SubmitButton label="Send enquiry" />

      <p className="mt-4 text-xs leading-relaxed text-ink-500">
        By submitting this form you agree that Schnell Drone Technologies may
        contact you about your enquiry.
      </p>
    </form>
  );
}

/**
 * Submit button with a pending state.
 * Must be a separate component — `useFormStatus` only reads the status of the
 * form it is rendered inside.
 */
export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-brand-matte px-8 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-matte-hover active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden />
          Sending…
        </>
      ) : (
        <>
          {label}
          <Send className="size-4" aria-hidden />
        </>
      )}
    </button>
  );
}
