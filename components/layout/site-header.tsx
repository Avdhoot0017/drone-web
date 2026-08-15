"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

import { DesktopNav } from "@/components/layout/desktop-nav";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Site header: a slim utility bar above the main navigation bar, matching the
 * client's reference. The utility bar scrolls away while the navigation bar
 * sticks to the top of the viewport.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative z-50">
      {/* Skip link — first tab stop for keyboard and screen-reader users. */}
      <a
        href="#main-content"
        className="sr-only-focusable absolute top-2 left-2 z-50 rounded-md bg-brand-matte px-4 py-2 text-sm font-semibold text-white"
      >
        Skip to main content
      </a>

      {/* ------------------------------------------------------------------ */}
      {/* Main navigation bar                                                 */}
      {/* ------------------------------------------------------------------ */}
      <div
        className={cn(
          // Opaque, not translucent: the mega menu's page-dimming overlay sits
          // behind this bar, and any transparency would let it tint the nav.
          "sticky top-0 z-50 border-b bg-ink-50 transition-shadow duration-300",
          scrolled ? "border-ink-200 shadow-soft" : "border-transparent"
        )}
      >
        <div className="container-site flex h-20 items-center justify-between gap-6">
          <Logo priority height={42} />

          <DesktopNav />

          <div className="flex items-center gap-5 xl:gap-6">
            {/*
              The sales number moved into the nav bar when the utility strip was
              removed, so the primary contact route stays one click away.
            */}
            <a
              href={siteConfig.contact.sales.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold whitespace-nowrap text-ink-800 transition-colors duration-200 hover:text-brand-500 xl:inline-flex"
            >
              <Phone className="size-4 shrink-0 text-brand-500" aria-hidden />
              {siteConfig.contact.sales.phone}
            </a>

            {/* h-11 matches the page-hero action buttons (e.g. "View full
                specifications"), so the primary CTA is the same height
                wherever it appears. */}
            <Link
              href={routes.contact}
              className="hidden h-11 items-center rounded-full bg-brand-matte px-6 text-sm font-semibold whitespace-nowrap text-white transition-colors duration-200 hover:bg-brand-matte-hover active:translate-y-px lg:inline-flex"
            >
              Contact Us
            </Link>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
