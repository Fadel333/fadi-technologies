import type { Metadata } from "next";
import Link from "next/link";
import { featuredProject, shippedProjects, labProjects } from "@/content/featured";
import { RepoList } from "@/components/site/repo-list";

export const metadata: Metadata = {
  title: "Work | FADI Technologies",
  description:
    "Products shipped by FADI Technologies — AI systems, full-stack apps, and security tools for African markets.",
};

const statusStyles: Record<string, string> = {
  live: "text-emerald-400",
  "in-progress": "text-pink-500",
  paused: "text-amber-400",
  concept: "text-gray-500",
};

export default function WorkPage() {
  const p = featuredProject;

  return (
    <div className="bg-[#09090b] min-h-screen text-white selection:bg-pink-500 selection:text-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-pink-500 mb-6">
          [ SYSTEM OUTPUT ] // WORK
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Everything I&apos;ve{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            actually shipped
          </span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
          Live products, client work, and ideas in progress. No slide decks, no
          concepts dressed up as companies. Just working software.
        </p>
      </section>

      {/* Flagship */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
            &gt;_ Flagship Product
          </span>
          <span className="h-px flex-1 bg-gray-800" />
        </div>

        <Link
          href={`/work/${p.slug}`}
          className="group block rounded-xl border border-gray-800 bg-[#121214] p-8 transition-all hover:border-pink-500/50 hover:bg-[#161618]"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-sm">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white group-hover:text-pink-500 transition-colors">
                {p.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-pink-500">{p.tagline}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
                {p.description}
              </p>
            </div>
            <span
              aria-hidden
              className="text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-pink-500 text-xl"
            >
              →
            </span>
          </div>
        </Link>
      </section>

      {/* Shipped */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
            &gt;_ Shipped Projects
          </span>
          <span className="h-px flex-1 bg-gray-800" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shippedProjects.map((proj) => (
            <div
              key={proj.slug}
              className="group flex flex-col justify-between rounded-lg border border-gray-800 bg-[#121214] p-6 transition-all hover:-translate-y-1 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/5"
            >
              <Link href={`/work/${proj.slug}`} className="flex-1">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider ${statusStyles[proj.status]}`}
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                    {proj.status}
                  </span>
                  <span className="font-mono text-[10px] text-gray-600">
                    {proj.year}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white group-hover:text-pink-500 transition-colors">
                    {proj.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">
                    {proj.tagline}
                  </p>
                </div>
              </Link>

              {/* Live Link Button (Only shows if liveUrl exists) */}
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-md border border-gray-700 bg-[#09090b] px-4 py-2 font-mono text-xs text-gray-300 transition-colors hover:border-pink-500 hover:text-pink-500"
                >
                  Visit Live ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lab */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
            &gt;_ In The Lab
          </span>
          <span className="h-px flex-1 bg-gray-800" />
        </div>

        <div className="divide-y divide-gray-800 rounded-xl border border-gray-800 bg-[#121214] overflow-hidden">
          {labProjects.map((proj) => (
            <div
              key={proj.slug}
              className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between hover:bg-[#161618] transition-colors"
            >
              <div>
                <h3 className="text-sm font-bold text-white">{proj.name}</h3>
                <p className="mt-1 text-xs text-gray-400">{proj.tagline}</p>
              </div>
              <span
                className={`shrink-0 font-mono text-[10px] uppercase tracking-wider ${statusStyles[proj.status]} border border-current px-2 py-1 rounded-sm`}
              >
                {proj.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Live GitHub repos */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
            &gt;_ Open Source
          </span>
          <span className="h-px flex-1 bg-gray-800" />
        </div>
        <div className="rounded-xl border border-gray-800 bg-[#121214] p-6">
          <RepoList />
        </div>
      </section>
    </div>
  );
}