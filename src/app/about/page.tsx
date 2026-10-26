import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | FADI Technologies",
  description:
    "FADI Technologies is an independent product studio building AI-powered software for African markets. Founded by Iddrisu Fadel—shipping working software, not slide decks.",
};

const capabilities = [
  {
    label: "Full-Stack Engineering",
    description:
      "Next.js, Python, Postgres, Flask. End-to-end builds — auth, payments, deployment.",
  },
  {
    label: "AI & RAG Systems",
    description:
      "Retrieval-augmented generation, vector search, LLM integration. Systems that use AI where it actually helps.",
  },
  {
    label: "Cybersecurity",
    description:
      "Threat modeling, secure API design, and responsible disclosure. Security baked in, not bolted on.",
  },
  {
    label: "Product Strategy",
    description:
      "Discovery, scoping, and shipping. Turning a real problem into a live product, not a concept deck.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#09090b] min-h-screen text-white selection:bg-pink-500 selection:text-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-pink-500 mb-6">
          [ SYSTEM ONLINE ] // ABOUT THE STUDIO
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Independent builder.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Shipping real software.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
          I build AI-powered and traditional software products for African markets, one problem at a time. No hype, just execution.
        </p>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-16 border-t border-gray-800 pt-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
              &gt;_ The Studio
            </span>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-gray-400">
            <p>
              FADI Technologies started as a way to formalize something I was
              already doing — building tools for problems I kept running into.
              Graduate employability. Elections integrity. Prayer habits.
              Trading education. Each one became working software, not a pitch deck.
            </p>

            <p>
              I&apos;m still early in the journey. I&apos;m still learning. Some of what I
              build works, some of it doesn&apos;t, and I publish the honest
              version either way. The throughline is <strong className="text-white font-semibold">
              shipping</strong> — because ideas are cheap, and working software
              isn&apos;t.
            </p>

            <p>
              Today the studio focuses on three things: <strong className="text-white font-semibold">
              full-stack web apps</strong>, <strong className="text-white font-semibold">AI and
              RAG systems</strong>, and <strong className="text-white font-semibold">security
              work</strong>. Often all three in the same project.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-16 border-t border-gray-800 pt-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
              &gt;_ Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.label} className="bg-[#121214] border border-gray-800 p-6 rounded-lg hover:border-pink-500/50 transition-colors">
                <h3 className="font-mono text-sm font-semibold text-white">
                  {c.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Building (TikTok Hook) */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="border border-pink-500/30 bg-pink-500/5 rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-pink-500 mb-2">[ IN DEVELOPMENT ]</p>
            <h3 className="text-2xl font-bold text-white">Klik Haus</h3>
            <p className="text-gray-400 mt-2 max-w-md">A new tool being built in silence. Follow the build process on TikTok.</p>
          </div>
          <Link
            href="https://www.tiktok.com/@buildwithfadi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-500 whitespace-nowrap"
          >
            Watch the Build
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24 border-t border-gray-800 pt-12">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-gray-200"
          >
            See the work
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-gray-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}