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
    "An independent product studio shipping AI-powered software for African markets. From RAG systems to full-stack apps to security — built to launch, not to demo.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FADI Technologies",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://faditechnologies.com",
  },
  twitter: { card: "summary_large_image" },
};

const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
        <Terminal />
        <Assistant />
      </body>
    </html>
  );
}