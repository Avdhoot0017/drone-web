"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Mail, Menu, Phone } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav } from "@/content/navigation";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { NavPanel } from "@/types/navigation";

/**
 * Mobile navigation drawer.
 *
 * Mega-menu panels are flattened into accordion sections so every desktop link
 * remains reachable on small screens — nothing is hidden from mobile users.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  /** Every link closes the drawer, so navigation never leaves it hanging open. */
  const closeDrawer = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open navigation menu"
        className="inline-flex size-10 items-center justify-center rounded-md text-ink-800 transition-colors duration-200 hover:bg-brand-50 hover:text-brand-500 lg:hidden"
      >
        <Menu className="size-5" aria-hidden />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full gap-0 overflow-y-auto p-0 sm:max-w-md"
      >
        <div className="flex items-center border-b border-ink-200 px-5 py-4">
          <SheetTitle className="sr-only">Site navigation</SheetTitle>
          <Logo height={36} />
        </div>

        <nav aria-label="Mobile" className="flex-1 px-2 py-3">
          <ul>
            {mainNav.map((item) => {
              const isOpen = expanded === item.label;

              if (!item.panel) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={closeDrawer}
                      className="block rounded-md px-3 py-3.5 text-base font-semibold text-ink-950 transition-colors duration-200 hover:bg-brand-50 hover:text-brand-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label} className="border-b border-ink-100 last:border-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-3.5 text-base font-semibold text-ink-950 transition-colors duration-200 hover:text-brand-500"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-4 text-ink-500 transition-transform duration-300",
                        isOpen && "rotate-180 text-brand-500"
                      )}
                      aria-hidden
                    />
                  </button>

                  {/* Grid-rows trick animates to the content's natural height. */}
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-out-soft",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <MobilePanelLinks
                        panel={item.panel}
                        overviewHref={item.href}
                        onNavigate={closeDrawer}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact block pinned to the bottom of the drawer */}
        <div className="mt-auto border-t border-ink-200 bg-ink-50 px-5 py-5">
          <Link
            href={routes.contact}
            onClick={closeDrawer}
            className="mb-4 flex h-11 w-full items-center justify-center rounded-full bg-brand-matte text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-matte-hover"
          >
            Contact Us
          </Link>

          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href={siteConfig.contact.general.phoneHref}
                className="flex items-center gap-2.5 text-ink-600 transition-colors hover:text-brand-500"
              >
                <Phone className="size-4 text-brand-500" aria-hidden />
                {siteConfig.contact.general.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.general.email}`}
                className="flex items-center gap-2.5 break-all text-ink-600 transition-colors hover:text-brand-500"
              >
                <Mail className="size-4 text-brand-500" aria-hidden />
                {siteConfig.contact.general.email}
              </a>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/** Flattens a desktop mega-menu panel into a simple mobile link list. */
function MobilePanelLinks({
  panel,
  overviewHref,
  onNavigate,
}: {
  panel: NavPanel;
  overviewHref: string;
  onNavigate: () => void;
}) {
  // A featured card usually promotes a link that also appears in a column.
  // On desktop the two look different; flattened for mobile they would simply
  // read as a duplicate, so only unique featured links are kept.
  const columnHrefs = new Set(
    panel.columns.flatMap((column) => column.links.map((link) => link.href))
  );
  const featuredCards =
    panel.featured?.cards.filter((card) => !columnHrefs.has(card.href)) ?? [];

  return (
    <div className="space-y-5 px-3 pb-4">
      <Link
        href={overviewHref}
        onClick={onNavigate}
        className="block text-sm font-semibold text-brand-500 transition-opacity hover:opacity-75"
      >
        Overview
      </Link>

      {featuredCards.length ? (
        <ul className="space-y-2">
          {featuredCards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                onClick={onNavigate}
                className="block text-sm text-ink-600 transition-colors hover:text-brand-500"
              >
                {card.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      {panel.columns.map((column) => (
        <div key={column.heading}>
          <p className="mb-2 text-[0.7rem] font-bold tracking-wider text-ink-500 uppercase">
            {column.heading}
          </p>
          <ul className="space-y-2.5">
            {column.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="block text-sm text-ink-600 transition-colors hover:text-brand-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
