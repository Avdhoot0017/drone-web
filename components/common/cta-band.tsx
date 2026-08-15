import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

interface CtaBandProps {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Which contact set to surface — general enquiries or Himalaya sales. */
  contact?: "general" | "sales";
}

/**
 * Full-width conversion band closing every page. Uses the deep brand gradient
 * so the parent red appears deliberately and sparingly, as an accent moment.
 */
export function CtaBand({
  title = "Talk to India's most experienced drone services team",
  description = "Whether you need daily coastal surveillance, agrochemical spraying at scale, or survey-grade geospatial data — tell us the mission and we will scope it.",
  primary = { label: "Send a business enquiry", href: routes.contact },
  secondary,
  contact = "general",
}: CtaBandProps) {
  const details = siteConfig.contact[contact];

  return (
    <section className="surface-brand-deep relative overflow-hidden">
      {/* Subtle radial highlight so the flat gradient reads with depth. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/2 right-0 aspect-square w-[42rem] rounded-full bg-white/10 blur-3xl"
      />

      <div className="container-site relative section-y">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <h2 className="max-w-2xl font-heading text-3xl leading-tight font-bold text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={primary.href}
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-brand-600 transition-all duration-200 hover:bg-ink-50 active:translate-y-px"
              >
                {primary.label}
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>

              {secondary ? (
                <Link
                  href={secondary.href}
                  className="inline-flex h-11 items-center rounded-full border border-white/40 px-7 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>

          <ul className="space-y-4 border-white/25 lg:border-l lg:pl-10">
            <li>
              <a
                href={details.phoneHref}
                className="group flex items-center gap-3.5 text-white transition-opacity hover:opacity-85"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Phone className="size-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs tracking-wide text-white/70 uppercase">
                    Call us
                  </span>
                  <span className="font-heading text-lg font-bold">{details.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${details.email}`}
                className="group flex items-center gap-3.5 text-white transition-opacity hover:opacity-85"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Mail className="size-4" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-white/70 uppercase">
                    Email us
                  </span>
                  <span className="block truncate font-semibold">{details.email}</span>
                </span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
