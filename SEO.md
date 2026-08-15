# SEO Implementation — Schnell Drone Technologies

How search engine optimisation is handled in this Next.js application, and what
you need to do to get the site indexed by Google.

- **Framework:** Next.js 16.3 (App Router, Turbopack)
- **Rendering:** every public page is prerendered to static HTML at build time
- **Styling:** Tailwind CSS v4 + shadcn/ui

---

## 1. Why this stack is good for SEO

| Concern | How it is handled |
|---|---|
| Crawlers must see content, not a loading spinner | All 31 routes are **statically prerendered** (`○ Static` / `● SSG` in the build output). The HTML that Googlebot receives already contains every heading, paragraph, spec value and link. |
| JavaScript-dependent content is a risk | Nothing on the site requires JS to be readable. Scroll animations only toggle a CSS attribute — the content is in the HTML either way. |
| Speed is a ranking signal | Static HTML + AVIF/WebP images + `font-display: swap` + no client-side data fetching on any marketing page. |
| Duplicate URLs dilute ranking | `trailingSlash: false` plus a self-referencing canonical on every page. |

### Verifying it yourself

```bash
npm run build     # every route should print ○ (Static) or ● (SSG)
curl -s http://localhost:3000/products/himalaya-agriculture-spraying-drone | grep "28.5 kg"
```

If the spec value appears in the raw curl output, Googlebot can read it without
executing a line of JavaScript.

---

## 2. Metadata architecture

### One builder, used by every page

All metadata is produced by `buildMetadata()` in **`lib/seo.ts`**. Pages never
hand-write meta tags, so no page can ship without a canonical, an OG image or a
robots directive.

```ts
// app/about/page.tsx
export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: "Schnell Drone Technologies Ltd. — founded in 2010 …",
  path: routes.about,          // → canonical + og:url
  image: "/images/stock/…jpg", // → og:image + twitter:image
  keywords: ["drone company Pune", …],
});
```

Every call emits: `<title>`, `<meta name="description">`, `<link rel="canonical">`,
the full Open Graph set, the Twitter card set, and explicit robots directives
(`max-image-preview:large`, `max-snippet:-1`, `max-video-preview:-1` — these
allow Google to show large image thumbnails and full-length snippets).

### Title templating

`app/layout.tsx` defines:

```ts
title: {
  default: "Schnell Drone Technologies Ltd. | Drone-as-a-Service & Agri Spraying Drones in India",
  template: "%s | Schnell Drone Technologies",
}
```

A page that sets `title: "About Us"` renders as
`About Us | Schnell Drone Technologies`. Brand reinforcement on every SERP entry,
with zero repetition in page code.

### metadataBase

Set once in the root layout from `siteConfig.url`. This is what lets every other
page pass a **relative** path and still emit an absolute canonical/OG URL.

> **Before launch:** set `NEXT_PUBLIC_SITE_URL` to the final production origin
> (with or without `www`, matching whichever you make canonical). Everything
> else — canonicals, sitemap, robots, OG tags — follows automatically.

### Dynamic pages

Service, product and software detail pages use `generateMetadata()`, pulling the
title/description/keywords from the content module:

```ts
// app/drone-services/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const service = getServiceBySlug((await params).slug);
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: service.href,
    image: service.hero.src,
    keywords: service.keywords,
  });
}
```

Each of the 11 dynamic pages therefore carries its own hand-written, keyword-
targeted title and description — not a generic template.

---

## 3. Structured data (JSON-LD)

Structured data is what earns **rich results**: star ratings, FAQ dropdowns,
breadcrumb trails in place of raw URLs, and the knowledge panel.

All generators live in `lib/seo.ts` and are rendered through `jsonLdScript()`,
which escapes `<` to `<` to prevent script-tag breakout.

| Schema type | Where | What it earns |
|---|---|---|
| `Organization` | root layout (every page) | Knowledge panel, logo in results, verified contact points |
| `WebSite` | root layout | Site name disambiguation |
| `BreadcrumbList` | every interior page | Breadcrumb trail shown instead of the URL |
| `Service` | 5 DaaS pages + repair page | Service-specific result treatment |
| `Product` | Himalaya page | **All 17 specifications** exposed as `additionalProperty` |
| `SoftwareApplication` | 5 software pages | Software result treatment |
| `FAQPage` | Himalaya, repair, coastal | Expandable Q&A directly in the SERP |
| `ProfessionalService` | contact page | Local business / Google Maps signals |

Entities are linked by `@id` (`…/#organization`), so Google understands that the
Himalaya product, the coastal surveillance service and the Pune office all belong
to the same company.

**Validate with:** [Rich Results Test](https://search.google.com/test/rich-results)
and [Schema Markup Validator](https://validator.schema.org/).

---

## 4. Sitemap & robots

### `app/sitemap.ts` → `/sitemap.xml`

Generated from the same `content/` modules the pages render from. **Add a new
service to `content/services.ts` and it appears in the sitemap automatically** —
it is impossible for the sitemap to fall out of sync.

Includes image entries (`<image:loc>`) for every service, product and software
hero, which feeds Google Images.

### `app/robots.ts` → `/robots.txt`

Allows everything public; blocks `/api/`, `/_next/` and `/actions/`. Points at
the sitemap and declares the canonical host.

**Staging protection:** set `NEXT_PUBLIC_ALLOW_INDEXING=false` on any preview or
staging deployment and robots.txt becomes a blanket `Disallow: /`. This stops a
staging URL competing with production — a common and expensive mistake.

---

## 5. Content & on-page SEO

- **One `<h1>` per page**, always inside `PageHero`. Section titles are `<h2>`,
  card titles `<h3>` — a clean, machine-readable outline.
- **Semantic landmarks**: `<header>`, `<nav aria-label>`, `<main id="main-content">`,
  `<footer>`, `<article>`, `<address>`. Accessibility and SEO reinforce each other.
- **Descriptive alt text on every image**, written for the actual content
  ("Himalaya agricultural spraying drone hovering over a pomegranate orchard"),
  not stuffed with keywords.
- **Keyword targeting** is per-page and intent-led — the Himalaya page targets
  *"DGCA type certified agriculture drone"*, the coastal page targets
  *"IUU fishing drone surveillance"*. No single page tries to rank for everything.
- **Internal linking**: the mega menu, service cards, CTA bands and footer create
  a dense internal link graph. No page is more than two clicks from the homepage.
- **Real, substantial copy** — every page carries genuine technical content from
  the client brief rather than thin marketing filler.

---

## 6. Performance (Core Web Vitals)

| Metric | What was done |
|---|---|
| **LCP** | Hero images use `priority` + `sizes="100vw"` so they are preloaded, never lazy-loaded. AVIF/WebP conversion is on. |
| **CLS** | Every image is either `fill` inside a fixed-aspect-ratio container or has explicit `width`/`height`. Fonts use `display: swap` with `next/font` self-hosting (no external font request, no FOIT). |
| **INP** | Almost the whole site is server components. Client JS is limited to the nav, the reveal observer, the counters and the two forms. |
| **Caching** | Static assets are fingerprinted; optimized images cache for 30 days. |

Security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
`Permissions-Policy`) are set in `next.config.ts`; HTTPS and clean headers are a
minor but real trust signal.

---

## 7. Launch checklist — do these in order

### Before deploying

1. **Set the production URL.** `NEXT_PUBLIC_SITE_URL=https://www.schnelldronetech.com`
   (use the exact host you want canonical — `www` or apex, not both).
2. **Pick one host and 301 the other.** Redirect apex → www (or the reverse) at
   the DNS/hosting layer. Serving both is the single most common duplicate-content
   problem.
3. **Confirm staging is blocked.** `NEXT_PUBLIC_ALLOW_INDEXING=false` everywhere
   except production.
4. `npm run build` — confirm every route is `○` or `●`.

### Google Search Console (your manual indexing step)

5. **Add the property** at [search.google.com/search-console](https://search.google.com/search-console)
   — use the *Domain* property type so all subdomains and protocols are covered.
6. **Verify ownership.** Either the DNS TXT record (recommended for a Domain
   property), or set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy — the
   root layout emits the `google-site-verification` meta tag automatically when
   that variable is present.
7. **Submit the sitemap:** Search Console → *Sitemaps* → enter `sitemap.xml` → Submit.
8. **Request indexing for the priority pages.** Search Console → *URL Inspection*
   → paste the URL → *Request Indexing*. Do these first:
   - `/`
   - `/products/himalaya-agriculture-spraying-drone`
   - `/drone-services/coastal-security-surveillance`
   - `/drone-services/agriculture-fertilizer-spraying`
   - `/drone-services/land-mapping-survey`
   - `/contact`

   The rest will be discovered through the sitemap and internal links.
9. **Check coverage after ~a week** in *Pages*, and fix anything reported as
   excluded.

### Also worth doing

10. **Google Business Profile** for the Pune office — this is what makes the
    company appear in Maps and in local "drone company near me" searches. The
    `ProfessionalService` JSON-LD on the contact page supports it, but the
    Business Profile itself must be claimed and verified separately.
11. **Bing Webmaster Tools** — you can import the Search Console property directly.
12. **Update the office coordinates** in `lib/site-config.ts` (`address.geo`) to
    the exact surveyed lat/long.
13. **Add the real social profile URLs** in `lib/site-config.ts` — they feed the
    `sameAs` array, which strengthens the knowledge panel.

---

## 8. Where to change things

| I want to change… | Edit this file |
|---|---|
| Company name, phone, email, address, social links | `lib/site-config.ts` |
| Production domain | `NEXT_PUBLIC_SITE_URL` env var |
| Any URL on the site | `lib/routes.ts` (sitemap and nav follow automatically) |
| Page title / description / keywords | The relevant `content/*.ts` module, or the page's `buildMetadata()` call |
| Sitemap priorities | `app/sitemap.ts` |
| Crawl rules | `app/robots.ts` |
| Structured data | `lib/seo.ts` |
| The social sharing card image | `app/opengraph-image.tsx` |
| **The brand colour** | `app/globals.css` — the three `--brand-h/s/l` values at the top |

---

## 9. Known gaps to close with the client

These are content gaps, not technical ones, but they affect ranking:

- **Coastal surveillance statistics** (flights, area surveyed, flying hours, cases
  identified) are placeholders. Real numbers are strong, uniquely-ownable content.
- **Investor PDFs** are listed but not uploaded — the document rows currently show
  a "Pending" state rather than a broken link.
- **CA Parag Rathi's profile** is missing from the brief.
- **Real product and operational photography** — most images are licensed stock
  placeholders, clearly marked in the UI. Genuine field photography with
  descriptive filenames and alt text will perform better in Google Images.
- **Privacy Policy and Terms of Use** contain placeholder copy pending legal sign-off.
