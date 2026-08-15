import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Shared field wrapper: label, control, error message.
 *
 * Errors are wired with `aria-describedby` and announced politely, so keyboard
 * and screen-reader users get the same feedback sighted users do.
 */
export function Field({
  name,
  label,
  required,
  hint,
  errors,
  children,
  className,
}: {
  name: string;
  label: string;
  required?: boolean;
  hint?: string;
  errors?: string[];
  children: React.ReactNode;
  className?: string;
}) {
  const errorId = `${name}-error`;
  const hintId = `${name}-hint`;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={name} className="text-sm font-semibold text-ink-950">
        {label}
        {required ? (
          <span className="ml-0.5 text-brand-500" aria-hidden>
            *
          </span>
        ) : (
          <span className="ml-1.5 text-xs font-normal text-ink-500">(optional)</span>
        )}
      </label>

      {children}

      {hint ? (
        <p id={hintId} className="text-xs text-ink-500">
          {hint}
        </p>
      ) : null}

      {errors?.length ? (
        <p
          id={errorId}
          role="alert"
          className="flex items-center gap-1.5 text-xs font-medium text-brand-600"
        >
          <AlertCircle className="size-3.5 shrink-0" aria-hidden />
          {errors[0]}
        </p>
      ) : null}
    </div>
  );
}

/** Consistent input styling shared by text inputs, selects and textareas. */
export const controlClasses =
  "w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-950 transition-colors duration-200 placeholder:text-ink-300 hover:border-ink-300 focus:border-brand-500 focus:outline-none";
