# Schnell Drone Technologies — Website

Marketing and investor website for **Schnell Drone Technologies Ltd.**, built with
Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and shadcn/ui.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build — all routes prerender to static HTML
npm run lint
```

---

## Project structure

```
app/                          Routes only — each page composes, it does not hold content
  layout.tsx                  Fonts, global metadata, Organization + WebSite JSON-LD
  page.tsx                    Homepage
  about/  products/  drone-services/  software/  investors/  careers/  contact/
  actions/enquiry.ts          Server actions for both forms
  sitemap.ts  robots.ts  opengraph-image.tsx  not-found.tsx

components/
  ui/                         shadcn/ui primitives (generated — avoid hand-editing)
  layout/                     Header, mega menu, mobile drawer, footer, logo
  sections/                   Page-specific composite sections (home hero, service cards)
  common/                     Reusable building blocks (reveal, stat counter, blocks…)
  forms/                      Enquiry and career forms

content/                      All copy, as typed data
  navigation.ts  company.ts  products.ts  services.ts  software.ts
  maintenance.ts  investors.ts  shared.ts

lib/
  site-config.ts              Company facts — contacts, address, social, URL
  routes.ts                   Every URL, declared once
  seo.ts                      Metadata builder + JSON-LD generators
  validation.ts               Zod schemas shared by client and server
  utils.ts                    `cn()` class merger

types/                        Navigation and content type definitions
public/images/
  brand/                      Logo
  doc/                        Real imagery extracted from the client's document
  stock/                      Licensed placeholders (Pexels) — swap for real photos
```

### Two rules that keep this maintainable

1. **Content lives in `content/`, never in a page.** Pages import typed data and
   render it. Adding a sixth drone service means adding an object to
   `content/services.ts` — the page, the nav, the sitemap and the JSON-LD all
   follow automatically.
2. **Facts live in `lib/site-config.ts` and `lib/routes.ts`.** A phone number or
   a URL appears exactly once in the codebase.

---

## Theming

The **entire site's colour** derives from three values at the top of
`app/globals.css`:

```css
--brand-h: 357;   /* hue        */
--brand-s: 87%;   /* saturation */
--brand-l: 52%;   /* lightness  */
```

These are sampled from the Schnell logo (`#EF1C25`). Every shade — the 50→950
brand ramp, the warm-tinted neutral "ink" scale, borders, focus rings, shadows
and gradients — is computed from them. Changing the hue re-brands the whole site
coherently, with no other edits.

Usage discipline: white and the faint tints (`brand-50`/`brand-100`) carry large
surfaces; the parent red is reserved for accents, CTAs, focus states and the
single deep CTA band.

Motion tokens (`--dur-*`, `--ease-*`) live in the same block, so the feel of every
transition on the site is tuned from one place. `prefers-reduced-motion` disables
all of it.

---

## Forms

Both forms are built on **server actions** (`app/actions/enquiry.ts`), so they
submit and validate without JavaScript; `useActionState` layers on inline errors
and pending states when JS is available.

Validation (Zod), honeypot spam filtering and résumé file-type/size checks are
complete. **Delivery is not connected** — `deliverEnquiry()` currently logs to
the server. Wire it to SMTP, Resend/SendGrid, or a CRM webhook. Routing per the
client brief:

| Enquiry type | Recipient |
|---|---|
| drones / DaaS / software / grievance | `info@schnelldronetech.com` |
| distributor | `Himalaya@SchnellDroneTech.com` |

---

## Before launch

See **[SEO.md](./SEO.md)** for the full SEO implementation and the Google Search
Console indexing checklist.

Content still needed from the client:

- Coastal surveillance statistics (4 counters currently render as `—`)
- Investor PDFs — annual reports, directors' report, audit report, MOA, AOA, KMP
- Board committee membership
- CA Parag Rathi's profile
- Real product and operational photography (stock placeholders are labelled in the UI)
- Approved Privacy Policy and Terms of Use copy

Environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://www.schnelldronetech.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=      # optional, from Search Console
NEXT_PUBLIC_ALLOW_INDEXING=false           # set on staging only
```

---

## Image credits

Placeholder photography is from [Pexels](https://www.pexels.com) under the Pexels
licence (free for commercial use, no attribution required). Every placeholder is
visibly marked in the UI and should be replaced with Schnell's own photography
before launch. Images under `public/images/doc/` are the client's own, extracted
from the requirements document.
