import type { MetadataRoute } from "next";

import { products } from "@/content/products";
import { services } from "@/content/services";
import { softwareProducts } from "@/content/software";
import { routes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

/**
 * XML sitemap, generated from the same route and content modules the pages
 * use — so a new service or product appears in the sitemap automatically and
 * can never be forgotten.
 *
 * Served at /sitemap.xml and referenced from robots.txt.
 *
 * `priority` is a relative hint within this site only, not a ranking factor.
 * `changeFrequency` is advisory; Google largely relies on `lastModified`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  /** Top-level pages, most important first. */
  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: routes.home, priority: 1, changeFrequency: "weekly" },
    { path: routes.daas, priority: 0.9, changeFrequency: "monthly" },
    { path: routes.products, priority: 0.9, changeFrequency: "monthly" },
    { path: routes.software, priority: 0.8, changeFrequency: "monthly" },
    { path: routes.repairMaintenance, priority: 0.8, changeFrequency: "monthly" },
    { path: routes.about, priority: 0.7, changeFrequency: "monthly" },
    { path: routes.management, priority: 0.6, changeFrequency: "yearly" },
    { path: routes.contact, priority: 0.8, changeFrequency: "yearly" },
    { path: routes.distributor, priority: 0.7, changeFrequency: "monthly" },
    { path: routes.careers, priority: 0.6, changeFrequency: "weekly" },
    { path: routes.investors, priority: 0.6, changeFrequency: "monthly" },
    { path: routes.investorsGovernance, priority: 0.5, changeFrequency: "yearly" },
    { path: routes.privacy, priority: 0.3, changeFrequency: "yearly" },
    { path: routes.terms, priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),

    // Service detail pages — each carries its hero image for image search.
    ...services.map((service) => ({
      url: absoluteUrl(service.href),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: [absoluteUrl(service.hero.src)],
    })),

    ...products.map((product) => ({
      url: absoluteUrl(product.href),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [absoluteUrl(product.hero.src)],
    })),

    ...softwareProducts.map((product) => ({
      url: absoluteUrl(product.href),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [absoluteUrl(product.hero.src)],
    })),
  ];
}
