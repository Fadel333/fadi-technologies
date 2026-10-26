import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Terminal } from "@/components/site/terminal";
import { Assistant } from "@/components/site/assistant";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FADI Technologies — AI-powered products for African markets",
    template: "%s — FADI Technologies",
  },
  description:
     "An independent product studio shipping AI systems, full-stack platforms, and security tools for African markets. Built to launch, not to demo.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FADI Technologies",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://faditechnologies.com",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090b] text-white min-h-screen relative`}
      >
        {/* Subtle background glow for the "BuildWithFADI" vibe */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
        
        {/* Main Content wrapped in relative z-index to sit above the glow */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        
        {/* Floating elements */}
        <Terminal />
        <Assistant />
      </body>
    </html>
  );
}