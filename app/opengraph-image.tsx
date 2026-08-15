import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

/**
 * Default social sharing card, generated at build time.
 *
 * Any page that does not declare its own image inherits this one, so every URL
 * shared on LinkedIn, WhatsApp or X renders as a branded card rather than a
 * bare link. Only flexbox and a subset of CSS are supported here.
 */
export const alt = `${siteConfig.legalName} — Drone-as-a-Service in India`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #7d1418 0%, #cf1a22 55%, #EF1C25 100%)",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 56,
              background: "#ffffff",
              borderRadius: 4,
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#ffffff",
            }}
          >
            <span style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
              schnell
            </span>
            <span style={{ fontSize: 17, opacity: 0.85, letterSpacing: 3 }}>
              drone technologies
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", color: "#ffffff" }}>
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            India&apos;s most experienced Drone-as-a-Service company
          </span>
          <span style={{ fontSize: 26, marginTop: 26, opacity: 0.9, maxWidth: 900 }}>
            Coastal surveillance · Agriculture spraying · Land mapping · GIS software
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 21,
            color: "#ffffff",
            opacity: 0.85,
          }}
        >
          <span>815 km coastline</span>
          <span>·</span>
          <span>DGCA type certified</span>
          <span>·</span>
          <span>Operating since 2010</span>
        </div>
      </div>
    ),
    size
  );
}
