import Link from "next/link";
import { shippedProjects, type Project } from "@/content/featured";

// Updated to match the dark terminal aesthetic
const statusStyles: Record<Project["status"], string> = {
  live: "text-emerald-400",
  "in-progress": "text-pink-500",
  paused: "text-amber-400",
  concept: "text-gray-500",
};

const statusDot: Record<Project["status"], string> = {
  live: "bg-emerald-400",
  "in-progress": "bg-pink-500",
  paused: "bg-amber-400",
  concept: "bg-gray-500",
};

export function ShippedGrid() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      {/* Section label */}
      <div className="mb-8 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
          &gt;_ Shipped Projects
        </span>
        <span className="h-px flex-1 bg-gray-800" />
        <Link
          href="/work"
          className="font-mono text-xs text-gray-400 transition-colors hover:text-pink-500"
        >
          view all →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shippedProjects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group relative flex flex-col justify-between rounded-xl border border-gray-800 bg-[#121214] p-6 transition-all hover:-translate-y-1 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.1)]"
          >
            {/* top row: status + year */}
            <div className="flex items-center justify-between">
              <span
                className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider ${statusStyles[p.status]}`}
              >
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${statusDot[p.status]}`}
                />
                {p.status}
              </span>
              <span className="font-mono text-[10px] text-gray-600">
                {p.year}
              </span>
            </div>

            {/* name + tagline */}
            <div className="mt-8">
              <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-pink-500 transition-colors">
                {p.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400 line-clamp-2">
                {p.tagline}
              </p>
            </div>

            {/* stack + arrow */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.slice(0, 2).map((s) => (
                  <span
                    key={s}
                    className="rounded-sm border border-gray-800 bg-[#09090b] px-2 py-0.5 font-mono text-[10px] text-gray-400"
                  >
                    {s}
                  </span>
                ))}
                {p.stack.length > 2 && (
                  <span className="font-mono text-[10px] text-gray-600 pt-0.5">
                    +{p.stack.length - 2}
                  </span>
                )}
              </div>
              <span
                aria-hidden
                className="text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-pink-500 text-lg"
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}