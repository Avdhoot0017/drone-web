import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export interface Crumb {
  name: string;
  href: string;
}

/**
 * Visible breadcrumb trail.
 *
 * Pages pass the same `crumbs` array to `breadcrumbJsonLd()`, so the visible
 * trail and the structured data Google reads can never disagree.
 */
export function Breadcrumbs({
  crumbs,
  theme = "light",
  className,
}: {
  crumbs: Crumb[];
  theme?: "light" | "dark";
  className?: string;
}) {
  const trail = [{ name: "Home", href: routes.home }, ...crumbs];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-medium",
          theme === "dark" ? "text-white/65" : "text-ink-500"
        )}
      >
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;

          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span
                  aria-current="page"
                  className={theme === "dark" ? "text-white" : "text-ink-950"}
                >
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    href={crumb.href}
                    className={cn(
                      "transition-colors duration-200",
                      theme === "dark" ? "hover:text-white" : "hover:text-brand-500"
                    )}
                  >
                    {crumb.name}
                  </Link>
                  <ChevronRight className="size-3 opacity-60" aria-hidden />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
