"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { WaveDivider } from "@/components/common/wave-divider";
import { heroSlides, type HeroSlide } from "@/content/home";
import { cn } from "@/lib/utils";

/** How long each slide holds before advancing. */
const SLIDE_DURATION_MS = 5000;

/** Crossfade length. Kept well inside the slide duration so each image is
 *  fully settled before the next transition begins. */
const FADE_MS = 850;

/**
 * Homepage hero carousel.
 *
 * All five slides are present in the server-rendered HTML — only visibility is
 * animated — so every headline and link stays crawlable and remains readable
 * with JavaScript disabled.
 *
 * Autoplay pauses on hover, on keyboard focus, when the tab is hidden, and is
 * disabled outright for users who prefer reduced motion.
 */
export function HomeHero() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  /*
    Autoplay has three independent reasons to pause. They are tracked
    separately rather than as one `paused` flag: with a single boolean whichever
    event fired last would overwrite the others, so returning to the tab with a
    control still focused left the carousel paused forever.
  */
  const [hovering, setHovering] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);

  const count = heroSlides.length;

  const goTo = useCallback((index: number) => setActive((index + count) % count), [count]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const previous = useCallback(() => goTo(active - 1), [active, goTo]);

  /*
    Tracks how the user last interacted, so focus events can be told apart.
    `:focus-visible` is not enough here: when a tab regains visibility the
    browser restores focus to the previously focused control, and that restored
    focus *does* match `:focus-visible` — which would re-pause the carousel
    every time the user came back to the tab.

    A ref, not state: this is read inside event handlers and must never cause a
    render of its own.
  */
  const lastInputWasKeyboard = useRef(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") lastInputWasKeyboard.current = true;
    };
    const onPointerDown = () => {
      lastInputWasKeyboard.current = false;
    };

    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, []);

  // Respect the OS-level motion preference, and keep tracking it if it changes.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Stop advancing while the tab is in the background — an unseen carousel
  // burning frames helps nobody.
  useEffect(() => {
    const onVisibilityChange = () => {
      const hidden = document.hidden;
      setTabHidden(hidden);
      // Coming back to the tab is a fresh start: drop any focus-pause left over
      // from before, and treat restored focus as non-keyboard.
      if (!hidden) {
        lastInputWasKeyboard.current = false;
        setKeyboardFocus(false);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const autoplayRunning =
    !hovering && !keyboardFocus && !tabHidden && !reducedMotion;

  /**
   * Schedules the next slide.
   *
   * `active` is a dependency on purpose: a one-shot timeout that is torn down
   * and re-armed whenever the slide changes means every slide gets the full
   * duration, no matter how it was reached. A `setInterval` would keep its own
   * fixed cadence, so clicking an arrow or a dot late in a cycle would flip to
   * the next slide a moment later — the timer bug this replaces.
   */
  useEffect(() => {
    if (!autoplayRunning) return;

    const id = setTimeout(
      () => setActive((current) => (current + 1) % count),
      SLIDE_DURATION_MS
    );

    return () => clearTimeout(id);
  }, [active, autoplayRunning, count]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Schnell Drone Technologies highlights"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      // Only *keyboard* focus pauses, so clicking an arrow no longer parks the
      // carousel, while tabbing into it still holds the slide so it can be read.
      onFocusCapture={() => {
        if (lastInputWasKeyboard.current) setKeyboardFocus(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setKeyboardFocus(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") next();
        if (event.key === "ArrowLeft") previous();
      }}
      className="relative isolate flex min-h-[40rem] flex-col justify-center overflow-hidden bg-ink-950 lg:min-h-[46rem]"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background images — crossfade with a slow ken-burns drift           */}
      {/* ------------------------------------------------------------------ */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden={index !== active}
          style={{ transitionDuration: `${FADE_MS}ms` }}
          className={cn(
            "absolute inset-0 -z-10 transition-opacity ease-out-soft",
            index === active ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.image.src}
            alt={slide.image.alt}
            fill
            // Every slide loads eagerly so none pops in mid-rotation, but only
            // the first is the LCP candidate and gets high fetch priority.
            loading="eager"
            fetchPriority={index === 0 ? "high" : "auto"}
            sizes="100vw"
            style={{ objectPosition: slide.objectPosition ?? "center" }}
            className={cn(
              // Drift completes just after the slide hands over, so the
              // movement reads as continuous rather than stopping short.
              "object-cover transition-transform duration-[6800ms] ease-linear motion-reduce:transform-none",
              index === active ? "scale-[1.07]" : "scale-100"
            )}
          />
        </div>
      ))}

      <div className="scrim-media absolute inset-0 -z-10" aria-hidden />

      {/*
        Brand-red wash rising from the foot of the hero. Sits above the scrim
        but below the wave, so the photograph warms into the brand colour before
        handing off to the white curve — and the deepest tint lands exactly where
        the carousel controls sit, which lifts their contrast.
      */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-brand-950/55 via-brand-950/20 to-transparent"
      />

      {/* ------------------------------------------------------------------ */}
      {/* Slide content                                                       */}
      {/* ------------------------------------------------------------------ */}
      {/* Extra bottom padding keeps the controls clear of the wave divider */}
      <div className="container-site relative w-full pt-24 pb-40 md:pt-28 md:pb-48">
        {/*
          All slides share a single grid cell, so the block is always as tall as
          the longest slide. With absolute positioning only the active slide
          contributed height, so the hero — and the wave pinned to its bottom —
          shifted every time a longer or shorter slide came round.
        */}
        <div className="grid max-w-3xl">
          {heroSlides.map((slide, index) => (
            <SlideContent
              key={slide.id}
              slide={slide}
              isActive={index === active}
              // Only the leading slide carries the page's <h1>; the rest use
              // <h2> so the document keeps a single top-level heading.
              headingLevel={index === 0 ? "h1" : "h2"}
              position={`Slide ${index + 1} of ${count}`}
            />
          ))}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Controls                                                          */}
        {/* ---------------------------------------------------------------- */}
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
          <div className="flex items-center gap-2">
            <CarouselButton label="Previous slide" onClick={previous}>
              <ChevronLeft className="size-4" aria-hidden />
            </CarouselButton>
            <CarouselButton label="Next slide" onClick={next}>
              <ChevronRight className="size-4" aria-hidden />
            </CarouselButton>
          </div>

          {/* Progress indicators — the active one fills over the slide duration */}
          <ul className="flex flex-1 items-center gap-2.5">
            {heroSlides.map((slide, index) => (
              <li key={slide.id} className="max-w-16 flex-1">
                <button
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}: ${slide.eyebrow}`}
                  aria-current={index === active}
                  className="group block w-full py-2"
                >
                  <span className="block h-0.5 w-full overflow-hidden rounded-full bg-white/30 transition-colors duration-200 group-hover:bg-white/50">
                    <span
                      className={cn(
                        "block h-full rounded-full bg-brand-500",
                        index === active
                          ? autoplayRunning
                            ? "animate-hero-progress"
                            : "w-full"
                          : "w-0"
                      )}
                      style={
                        index === active && autoplayRunning
                          ? { animationDuration: `${SLIDE_DURATION_MS}ms` }
                          : undefined
                      }
                      // Restart the fill animation whenever the slide changes.
                      key={`${slide.id}-${active}-${String(autoplayRunning)}`}
                    />
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <p className="font-heading text-sm font-bold text-white/70 tabular-nums">
            <span className="text-white">{String(active + 1).padStart(2, "0")}</span>
            <span className="mx-1.5 text-white/40">/</span>
            {String(count).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Himalayan ridge — brand signature tying the hero to the flagship    */}
      {/* product name. Sits above the scrim, below the content.              */}
      {/* ------------------------------------------------------------------ */}
      <WaveDivider className="absolute inset-x-0 bottom-0 -z-10 h-20 text-white md:h-28" />

    </section>
  );
}

/**
 * A single slide's copy. Inactive slides stay in the DOM for crawlers but are
 * made inert so they never receive focus or intercept clicks.
 */
function SlideContent({
  slide,
  isActive,
  headingLevel: Heading,
  position,
}: {
  slide: HeroSlide;
  isActive: boolean;
  headingLevel: "h1" | "h2";
  position: string;
}) {
  /**
   * Splits the title so the highlighted phrase can be coloured.
   *
   * The phrase must actually occur in the title. Guarding on that matters:
   * `split` on a missing phrase returns the whole title, so the highlight span
   * would then render text that is not in the heading — printing it twice.
   * Titles get edited often, so this keeps a copy change from breaking the UI.
   */
  const highlight =
    slide.highlight && slide.title.includes(slide.highlight)
      ? slide.highlight
      : undefined;
  const [before, after] = highlight
    ? slide.title.split(highlight)
    : [slide.title, ""];

  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={position}
      inert={!isActive}
      className={cn(
        "transition-all duration-[600ms] ease-out-soft",
        // Same grid cell for every slide — see the container comment above.
        "col-start-1 row-start-1",
        isActive
          ? "opacity-100 blur-0"
          : "pointer-events-none translate-y-4 opacity-0 blur-[2px]"
      )}
    >
      <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
        <span className="size-1.5 rounded-full bg-brand-400" aria-hidden />
        {slide.eyebrow}
      </p>

      <Heading className="mt-6 font-heading text-3xl leading-[1.08] font-bold text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
        {before}
        {highlight ? (
          // `nowrap` keeps hyphenated brand terms such as "Drone-as-a-Service"
          // on a single line instead of breaking them across three.
          <span className="inline-block whitespace-nowrap text-brand-400">
            {highlight}
          </span>
        ) : null}
        {after}
      </Heading>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
        {slide.description}
      </p>

      {slide.facts?.length ? (
        // Chips rather than divider-separated text: dividers strand themselves
        // at the start of a wrapped line on narrow screens.
        <ul className="mt-6 flex flex-wrap gap-2">
          {slide.facts.map((fact) => (
            <li
              key={fact}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
            >
              {fact}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-9 flex flex-wrap gap-3">
        <Link
          href={slide.primary.href}
          className="group inline-flex h-11 items-center gap-2 rounded-full bg-brand-matte px-7 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-matte-hover active:translate-y-px"
        >
          {slide.primary.label}
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>

        {slide.secondary ? (
          <Link
            href={slide.secondary.href}
            className="inline-flex h-11 items-center rounded-full border border-white/35 px-7 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
          >
            {slide.secondary.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:border-brand-400 hover:bg-brand-500 active:translate-y-px"
    >
      {children}
    </button>
  );
}
