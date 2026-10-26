import type { Metadata } from "next";
import Link from "next/link";
import { nowEntries, currentFocus, type NowEntry } from "@/content/now";

export const metadata: Metadata = {
  title: "Now | FADI Technologies",
  description:
    "A live log of what I'm building, learning, and thinking about right now — updated as things change.",
};

// Updated styles to match the hacker/terminal aesthetic
const tagStyles: Record<string, string> = {
  shipped: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  building: "text-pink-500 border-pink-500/30 bg-pink-500/10",
  learning: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  reading: "text-amber-400 border-amber-500/30 bg-amber-500/10",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function NowPage() {
  const latest = nowEntries[0]?.date
    ? new Date(nowEntries[0].date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : "now";

  return (
    <div className="bg-[#09090b] min-h-screen text-white selection:bg-pink-500 selection:text-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-pink-500 mb-6">
          [ SYSTEM LOG ] // NOW
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Currently executing,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            {latest}
          </span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
          A live log of what I&apos;m building, learning, and thinking about. 
          Updated when things change — not on a schedule. Inspired by{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 underline-offset-4 hover:underline"
          >
            /now pages
          </a>
          .
        </p>
      </section>

      {/* Current Focus Dashboard */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-xl border border-gray-800 bg-[#121214] p-6 shadow-2xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-l-2 border-pink-500 pl-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                &gt;_ Building
              </span>
              <p className="mt-2 text-sm font-medium text-white">{currentFocus.building}</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                &gt;_ Learning
              </span>
              <p className="mt-2 text-sm font-medium text-white">{currentFocus.learning}</p>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                &gt;_ Reading
              </span>
              <p className="mt-2 text-sm font-medium text-white">{currentFocus.reading}</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                &gt;_ Open To
              </span>
              <p className="mt-2 text-sm font-medium text-white">{currentFocus.open_to}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Log */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
            &gt;_ Execution Log
          </span>
          <span className="h-px flex-1 bg-gray-800" />
          <span className="font-mono text-xs text-gray-500">
            {nowEntries.length} {nowEntries.length === 1 ? "entry" : "entries"} found
          </span>
        </div>

        <div className="space-y-16">
          {nowEntries.map((entry: NowEntry, i) => (
            <article
              key={entry.date + i}
              className="grid grid-cols-1 gap-6 md:grid-cols-[160px_1fr] md:gap-10 group"
            >
              {/* Date & Tags Column */}
              <div className="flex flex-col gap-3">
                <time className="font-mono text-xs text-gray-500">
                  {formatDate(entry.date)}
                </time>
                {entry.tags && entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${
                          tagStyles[t] ||
                          "border-gray-700 bg-gray-800 text-gray-400"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Column */}
              <div className="relative pl-6 md:pl-8 border-l border-gray-800 group-hover:border-pink-500/50 transition-colors">
                {/* Terminal dot indicator */}
                <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-gray-700 group-hover:bg-pink-500 transition-colors" />
                
                <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-pink-500 transition-colors">
                  {entry.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-400">
                  {entry.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24 border-t border-gray-800 pt-12">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-md border border-gray-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-900"
          >
            ← See the work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-bold text-black transition-colors hover:bg-gray-200"
          >
            Start a Project
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}