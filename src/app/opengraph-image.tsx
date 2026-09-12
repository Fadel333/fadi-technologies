import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FADI Technologies — AI-powered products for African markets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
            <span>FADI</span>
            <span style={{ color: "#7c3aed" }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#71717a" }}>
            faditechnologies.com
          </div>
        </div>

        {/* Middle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            <span>We ship AI-powered products for&nbsp;</span>
            <span style={{ color: "#7c3aed" }}>African markets</span>
            <span>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa", maxWidth: 800 }}>
            RAG systems. Full-stack apps. Security. Built to launch, not to demo.
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", gap: 8, width: "100%" }}>
          <div style={{ width: 60, height: 4, background: "#7c3aed", borderRadius: 2 }} />
          <div style={{ width: 30, height: 4, background: "#22d3ee", borderRadius: 2 }} />
          <div style={{ width: 15, height: 4, background: "#52525b", borderRadius: 2 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}