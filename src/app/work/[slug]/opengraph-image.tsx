import { ImageResponse } from "next/og";
import { caseStudies } from "@/content/case-studies";

export const runtime = "edge";
export const alt = "Case study — FADI Technologies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies[slug];

  const title = study?.name ?? "Work";
  const tagline = study?.tagline ?? "Shipped by FADI Technologies";
  const status = study?.status ?? "";
  const stack = study?.stack?.slice(0, 4) ?? [];

  const statusColor =
    status === "live"
      ? "#16a34a"
      : status === "in-progress"
      ? "#22d3ee"
      : status === "paused"
      ? "#f59e0b"
      : "#71717a";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#f4f4f5",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 24, fontWeight: 700 }}>
            <span>FADI</span>
            <span style={{ color: "#7c3aed" }}>.</span>
          </div>
          {status && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 20,
                color: statusColor,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: statusColor,
                }}
              />
              <span>{status}</span>
            </div>
          )}
        </div>

        {/* Middle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#a1a1aa",
              maxWidth: 900,
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            width: "100%",
          }}
        >
          {stack.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                fontSize: 18,
                padding: "6px 14px",
                border: "1px solid #27272a",
                borderRadius: 8,
                color: "#a1a1aa",
              }}
            >
              {s}
            </div>
          ))}
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              fontSize: 20,
              color: "#7c3aed",
            }}
          >
            faditechnologies.com →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}