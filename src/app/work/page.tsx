import type { Metadata } from "next";
import Link from "next/link";
import { featuredProject, shippedProjects, labProjects } from "@/content/featured";
import { RepoList } from "@/components/site/repo-list";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products shipped by FADI Technologies — AI systems, full-stack apps, and security tools for African markets.",
};

const statusStyles: Record<string, string> = {
  live: "text-success",
  "in-progress": "text-terminal",
  paused: "text-warning",
  concept: "text-fg-subtle",
};

export default function WorkPage() {
  const p = featuredProject;

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12">
        <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
          Work
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Everything I&apos;ve{" "}
          <span className="text-accent">actually shipped</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted">
          Live products, client work, and ideas in progress. No slide decks, no
          concepts dressed up as companies. Just working software.
        </p>
      </section>

      {/* Flagship */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
            Flagship
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <Link
          href={`/work/${p.slug}`}
          className="group block rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-fg group-hover:text-accent">
                {p.name}
              </h2>
              <p className="mt-1 text-sm text-accent">{p.tagline}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fg-muted">
                {p.description}
              </p>
            </div>
            <span
              aria-hidden
              className="text-fg-subtle transition-all group-hover:translate-x-0.5 group-hover:text-accent"
            >
              →
            </span>
          </div>
        </Link>
      </section>

      {/* Shipped */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
            Shipped
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {shippedProjects.map((proj) => (
            <Link
              key={proj.slug}
              href={`/work/${proj.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 font-mono text-[11px] ${statusStyles[proj.status]}`}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                  {proj.status}
                </span>
                <span className="font-mono text-[10px] text-fg-subtle">
                  {proj.year}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-fg group-hover:text-accent">
                {proj.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-fg-muted">
                {proj.tagline}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Lab */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
            In the lab
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="divide-y divide-border rounded-xl border border-border bg-surface">
          {labProjects.map((proj) => (
            <div
              key={proj.slug}
              className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-sm font-medium text-fg">{proj.name}</h3>
                <p className="mt-1 text-xs text-fg-muted">{proj.tagline}</p>
              </div>
              <span
                className={`shrink-0 font-mono text-[11px] ${statusStyles[proj.status]}`}
              >
                {proj.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Live GitHub repos */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
            On GitHub
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <RepoList />
      </section>
    </>
  );
}