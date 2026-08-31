import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { LinkedInIcon } from "@/components/common/brand-icons";
import { Logo } from "@/components/layout/logo";
import { footerNav } from "@/content/navigation";
import { routes } from "@/lib/routes";
import { formattedAddress, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink-950 text-ink-300">
      <div className="container-site py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          {/* -------------------------------------------------------------- */}
          {/* Identity + contact                                              */}
          {/* -------------------------------------------------------------- */}
          <div>
            {/* Shares the Logo component so sizing rules live in one place. */}
            <Logo height={40} />

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300/85">
              One of India&rsquo;s leading Drone-as-a-Service companies — built on
              fifteen years of GIS and photogrammetry expertise, operating from
              coastlines to glaciers.
            </p>

            <address className="mt-7 space-y-3.5 text-sm not-italic">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
                <span className="text-ink-300/85">{formattedAddress}</span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
                <a
                  href={siteConfig.contact.sales.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.sales.phone}
                </a>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
                <a
                  href={`mailto:${siteConfig.contact.general.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {siteConfig.contact.general.email}
                </a>
              </p>
            </address>

            {siteConfig.social.linkedin ? (
              <div className="mt-7 flex gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} on LinkedIn`}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 transition-all duration-200 hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  <LinkedInIcon className="size-4" />
                </a>
              </div>
            ) : null}
          </div>

          {/* -------------------------------------------------------------- */}
          {/* Link columns                                                    */}
          {/* -------------------------------------------------------------- */}
          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.heading}>
                <h2 className="font-heading text-sm font-bold tracking-wide text-white uppercase">
                  {group.heading}
                </h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-ink-300/85 transition-colors duration-200 hover:text-brand-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Legal strip                                                         */}
      {/* ------------------------------------------------------------------ */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href={routes.privacy} className="transition-colors hover:text-brand-400">
              Privacy Policy
            </Link>
            <Link href={routes.terms} className="transition-colors hover:text-brand-400">
              Terms of Use
            </Link>
            <Link
              href={routes.careers}
              className="group inline-flex items-center gap-1 transition-colors hover:text-brand-400"
            >
              We&rsquo;re hiring
              <ArrowUpRight
                className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
