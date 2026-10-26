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
          background: "#09090b", // Matches the new site background
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
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700, letterSpacing: -0.5 }}>
            <span>FADI</span>
            <span style={{ color: "#ec4899" }}>.</span> {/* Pink accent */}
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#71717a" }}>
            [ SYSTEM ONLINE ] // faditechnologies.com
          </div>
        </div>

        {/* Middle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 800, // Made it bolder
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 950,
            }}
          >
            <span>Building AI products for&nbsp;</span>
            <span style={{ color: "#ec4899" }}>African markets</span>
            <span>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa", maxWidth: 800 }}>
            RAG systems. Full-stack apps. Security. Built to launch, not to demo.
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", gap: 8, width: "100%" }}>
          <div style={{ width: 80, height: 6, background: "#ec4899", borderRadius: 3 }} /> {/* Pink */}
          <div style={{ width: 40, height: 6, background: "#f472b6", borderRadius: 3 }} /> {/* Light Pink */}
          <div style={{ width: 20, height: 6, background: "#52525b", borderRadius: 3 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}