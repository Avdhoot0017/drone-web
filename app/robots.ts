import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

/**
 * robots.txt, served at /robots.txt.
 *
 * Everything public is crawlable. Only Next.js internals and the server-action
 * endpoints are excluded — they return no indexable content and would waste
 * crawl budget.
 *
 * Staging deployments set NEXT_PUBLIC_ALLOW_INDEXING=false to block crawlers
 * entirely, so a preview URL can never outrank the production site.
 */
export default function robots(): MetadataRoute.Robots {
  const indexingAllowed = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false";

  if (!indexingAllowed) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/actions/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
