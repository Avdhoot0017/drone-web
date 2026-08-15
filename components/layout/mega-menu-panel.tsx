import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { NavPanel } from "@/types/navigation";

interface MegaMenuPanelProps {
  panel: NavPanel;
  /** Closes the menu after a link is activated. */
  onNavigate: () => void;
}

/**
 * The dropdown contents for a top-level nav item: an optional rail of image
 * cards on the left, then columns of titled links with descriptions.
 *
 * Layout mirrors the client's reference: products on the left, applications
 * on the right, a divider and a "see everything" link at the bottom.
 */
export function MegaMenuPanel({ panel, onNavigate }: MegaMenuPanelProps) {
  const hasFeatured = Boolean(panel.featured?.cards.length);

  return (
    <div className="container-site py-9 lg:py-11">
      <div
        className={cn(
          "grid gap-x-12 gap-y-10",
          hasFeatured ? "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]" : "lg:grid-cols-1"
        )}
      >
        {/* ---------------------------------------------------------------- */}
        {/* Featured image cards                                              */}
        {/* ---------------------------------------------------------------- */}
        {panel.featured && hasFeatured ? (
          <div>
            <PanelHeading>{panel.featured.heading}</PanelHeading>

            <ul
              className={cn(
                "mt-5 grid gap-5",
                // A lone card would otherwise stretch to the full column width
                // and tower over the link lists beside it.
                panel.featured.cards.length > 1
                  ? "sm:grid-cols-2"
                  : "sm:max-w-xs sm:grid-cols-1"
              )}
            >
              {panel.featured.cards.map((card) => (
                <li key={card.href}>
                  <Link
                    href={card.href}
                    onClick={onNavigate}
                    className="media-zoom group block rounded-lg outline-none"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-ink-100">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 22vw, 90vw"
                        // Eager, but at low fetch priority: the panel is always
                        // mounted, so these thumbnails are ready the instant the
                        // menu opens, without competing with the page's LCP
                        // image for bandwidth.
                        loading="eager"
                        fetchPriority="low"
                        className="object-cover"
                      />
                      {card.badge ? (
                        <span className="absolute top-3 left-3 rounded-sm bg-brand-500 px-2 py-1 text-[0.65rem] font-bold tracking-wider text-white uppercase">
                          {card.badge}
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-ink-950 transition-colors duration-200 group-hover:text-brand-500">
                      {card.label}
                      <ArrowRight
                        className="size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden
                      />
                    </p>
                    {card.caption ? (
                      <p className="mt-0.5 text-xs text-ink-500">{card.caption}</p>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* ---------------------------------------------------------------- */}
        {/* Link columns                                                      */}
        {/* ---------------------------------------------------------------- */}
        <div
          className={cn(
            "grid gap-x-10 gap-y-8",
            panel.columns.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"
          )}
        >
          {panel.columns.map((column) => (
            <div key={column.heading}>
              <PanelHeading>{column.heading}</PanelHeading>

              <ul className="mt-4 space-y-5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="group block rounded-sm outline-none"
                    >
                      <span className="flex items-center gap-2 text-[0.95rem] font-semibold text-ink-950 transition-colors duration-200 group-hover:text-brand-500 group-focus-visible:text-brand-500">
                        {link.label}
                        {link.badge ? (
                          <span className="rounded-sm bg-brand-50 px-1.5 py-0.5 text-[0.6rem] font-bold tracking-wider text-brand-700 uppercase">
                            {link.badge}
                          </span>
                        ) : null}
                      </span>
                      {link.description ? (
                        <span className="mt-1 block max-w-md text-sm leading-relaxed text-ink-500">
                          {link.description}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Footer link                                                         */}
      {/* ------------------------------------------------------------------ */}
      {panel.footerLink ? (
        <div className="mt-9 border-t border-ink-200 pt-5">
          <Link
            href={panel.footerLink.href}
            onClick={onNavigate}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-500 outline-none"
          >
            {panel.footerLink.label}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      ) : null}
    </div>
  );
}

function PanelHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-base font-bold tracking-tight text-ink-950">
      {children}
    </h3>
  );
}
