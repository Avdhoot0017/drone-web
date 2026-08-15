"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { MegaMenuPanel } from "@/components/layout/mega-menu-panel";
import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/utils";

/** Grace period before a hover-opened menu closes, so diagonal mouse paths survive. */
const CLOSE_DELAY_MS = 140;

/**
 * Desktop navigation with full-width mega-menu panels.
 *
 * Interaction model:
 * - Pointer: hover opens, a short delay on leave prevents flicker.
 * - Keyboard: Enter/Space toggles, Escape closes and restores focus, Tab out closes.
 * - Route change closes the menu automatically.
 */
export function DesktopNav() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const open = useCallback((index: number) => {
    clearCloseTimer();
    setOpenIndex(index);
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenIndex(null), CLOSE_DELAY_MS);
  }, []);

  const closeNow = useCallback(() => {
    clearCloseTimer();
    setOpenIndex(null);
  }, []);

  // The panel is closed explicitly by `onNavigate` when a menu link is
  // activated, so no route-change effect is needed here.

  // Escape closes the panel; clicking anywhere outside does too.
  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNow();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) closeNow();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openIndex, closeNow]);

  // Flags the open state on <body> so the page-dimming overlay can be drawn
  // outside the header's stacking context.
  useEffect(() => {
    if (openIndex === null) {
      delete document.body.dataset.megaOpen;
    } else {
      document.body.dataset.megaOpen = "true";
    }
  }, [openIndex]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
      delete document.body.dataset.megaOpen;
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div
      ref={navRef}
      className="hidden lg:block"
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!navRef.current?.contains(event.relatedTarget as Node)) closeNow();
      }}
    >
      <nav aria-label="Main">
        <ul className="flex items-center">
          {mainNav.map((item, index) => {
            const expanded = openIndex === index;
            const active = isActive(item.href);
            const panelId = `mega-panel-${index}`;

            return (
              <li key={item.label} onMouseEnter={() => (item.panel ? open(index) : closeNow())}>
                {item.panel ? (
                  <button
                    type="button"
                    id={`mega-trigger-${index}`}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => (expanded ? closeNow() : open(index))}
                    className={cn(
                      "relative flex items-center gap-1 px-3.5 py-2 text-[0.9rem] font-medium transition-colors duration-200 xl:px-4",
                      expanded || active ? "text-brand-500" : "text-ink-800 hover:text-brand-500"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-300",
                        expanded && "rotate-180"
                      )}
                      aria-hidden
                    />
                    <NavUnderline visible={expanded || active} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex items-center px-3.5 py-2 text-[0.9rem] font-medium transition-colors duration-200 xl:px-4",
                      active ? "text-brand-500" : "text-ink-800 hover:text-brand-500"
                    )}
                  >
                    {item.label}
                    <NavUnderline visible={active} />
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ------------------------------------------------------------------ */}
      {/* Mega-menu panels — full-bleed, positioned under the whole header.    */}
      {/* All panels stay mounted so their links remain crawlable, and only    */}
      {/* the open one is visible and focusable.                              */}
      {/* ------------------------------------------------------------------ */}
      {mainNav.map((item, index) =>
        item.panel ? (
          <div
            key={item.label}
            id={`mega-panel-${index}`}
            aria-labelledby={`mega-trigger-${index}`}
            // `inert` (not `hidden`) keeps the panel out of the tab order and
            // the a11y tree while still allowing it to animate — `display:none`
            // would cancel the transition.
            inert={openIndex !== index}
            data-open={openIndex === index}
            onMouseEnter={() => open(index)}
            // `mega-panel` (globals.css) drives the roll-down reveal; the data
            // attribute is the open/closed switch it keys off.
            className={cn(
              "mega-panel absolute inset-x-0 top-full z-40 origin-top border-t border-ink-200 bg-white shadow-lift",
              openIndex === index ? "pointer-events-auto" : "pointer-events-none"
            )}
          >
            <MegaMenuPanel panel={item.panel} onNavigate={closeNow} />
          </div>
        ) : null
      )}

      {/*
        Page dimming is drawn by `body[data-mega-open]::after` (see globals.css)
        rather than by an element here. The header is a z-50 stacking context,
        so any overlay rendered inside it would paint over the header's own
        background instead of the page behind it.
      */}
    </div>
  );
}

/** Animated red rule that grows under the active or open nav item. */
function NavUnderline({ visible }: { visible: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute inset-x-3.5 -bottom-px h-0.5 origin-left rounded-full bg-brand-500 transition-transform duration-300 ease-out-soft xl:inset-x-4",
        visible ? "scale-x-100" : "scale-x-0"
      )}
    />
  );
}
