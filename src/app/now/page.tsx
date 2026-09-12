import type { Metadata } from "next";
import Link from "next/link";
import { nowEntries, currentFocus, type NowEntry } from "@/content/now";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What I'm building, learning, and thinking about right now — updated as things change.",
};

const tagStyles: Record<string, string> = {
  shipped: "text-success border-success/30 bg-success/5",
  building: "text-accent border-accent/30 bg-accent/5",
  learning: "text-terminal border-terminal/30 bg-terminal/5",
  reading: "text-warning border-warning/30 bg-warning/5",
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
    <>
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12">
        <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
          Now
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl">
          What I&apos;m working on,{" "}
          <span className="text-accent">{latest}</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted">
          A live log of what I&apos;m building, learning, and thinking about.
          Updated when things change — not on a schedule. Inspired by{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            /now pages
          </a>
          .
        </p>
      </section>

      {/* Current focus card */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                Building
              </span>
              <p className="mt-1 text-sm text-fg">{currentFocus.building}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                Learning
              </span>
              <p className="mt-1 text-sm text-fg">{currentFocus.learning}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                Reading
              </span>
              <p className="mt-1 text-sm text-fg">{currentFocus.reading}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                Open to
              </span>
              <p className="mt-1 text-sm text-fg">{currentFocus.open_to}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Log */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
            Log
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs text-fg-subtle">
            {nowEntries.length} {nowEntries.length === 1 ? "entry" : "entries"}
          </span>
        </div>

        <div className="space-y-12">
          {nowEntries.map((entry: NowEntry, i) => (
            <article
              key={entry.date + i}
              className="grid grid-cols-1 gap-4 md:grid-cols-[140px_1fr] md:gap-10"
            >
              {/* date column */}
              <div className="flex flex-col gap-2">
                <time className="font-mono text-xs text-fg-subtle">
                  {formatDate(entry.date)}
                </time>
                {entry.tags && entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {entry.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded border px-1.5 py-0.5 font-mono text-[10px] ${
                          tagStyles[t] ||
                          "border-border bg-surface-muted text-fg-subtle"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* content column */}
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-fg">
                  {entry.title}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-fg-muted">
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
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-surface-muted"
          >
            ← See the work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}