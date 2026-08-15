import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Page not found",
  // A 404 must never be indexed — it would compete with real pages.
  robots: { index: false, follow: true },
};

/** Useful destinations, so a wrong URL still ends in a productive click. */
const suggestions = [
  { label: "Drone services", href: routes.daas },
  { label: "Himalaya spraying drone", href: routes.himalaya },
  { label: "Software", href: routes.software },
  { label: "Contact us", href: routes.contact },
];

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-site flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="font-heading text-7xl font-bold text-brand-500 md:text-8xl">404</p>
        <h1 className="mt-6 font-heading text-3xl font-bold text-ink-950 md:text-4xl">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-600">
          The page may have moved or the link may be out of date. Try one of
          these instead.
        </p>

        <ul className="mt-9 flex flex-wrap justify-center gap-3">
          {suggestions.map((suggestion) => (
            <li key={suggestion.href}>
              <Link
                href={suggestion.href}
                className="inline-flex h-11 items-center rounded-full border border-ink-200 px-5 text-sm font-semibold text-ink-800 transition-colors duration-200 hover:border-brand-500 hover:text-brand-500"
              >
                {suggestion.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={routes.home}
          className="group mt-10 inline-flex h-11 items-center gap-2 rounded-full bg-brand-matte px-7 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-matte-hover"
        >
          Back to home
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>
    </section>
  );
}
