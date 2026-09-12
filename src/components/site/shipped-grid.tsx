import Link from "next/link";
import { shippedProjects, type Project } from "@/content/featured";

const statusStyles: Record<Project["status"], string> = {
  live: "text-success",
  "in-progress": "text-terminal",
  paused: "text-warning",
  concept: "text-fg-subtle",
};

const statusDot: Record<Project["status"], string> = {
  live: "bg-success",
  "in-progress": "bg-terminal",
  paused: "bg-warning",
  concept: "bg-fg-subtle",
};

export function ShippedGrid() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      {/* Section label */}
      <div className="mb-8 flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
          Shipped
        </span>
        <span className="h-px flex-1 bg-border" />
        <Link
          href="/work"
          className="font-mono text-xs text-fg-muted transition-colors hover:text-accent"
        >
          view all →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shippedProjects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent"
          >
            {/* top row: status + year */}
            <div className="flex items-center justify-between">
              <span
                className={`inline-flex items-center gap-1.5 font-mono text-[11px] ${statusStyles[p.status]}`}
              >
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${statusDot[p.status]}`}
                />
                {p.status}
              </span>
              <span className="font-mono text-[11px] text-fg-subtle">
                {p.year}
              </span>
            </div>

            {/* name + tagline */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold tracking-tight text-fg">
                {p.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {p.tagline}
              </p>
            </div>

            {/* stack + arrow */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {p.stack.slice(0, 2).map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border bg-surface-muted px-1.5 py-0.5 font-mono text-[10px] text-fg-subtle"
                  >
                    {s}
                  </span>
                ))}
                {p.stack.length > 2 && (
                  <span className="font-mono text-[10px] text-fg-subtle">
                    +{p.stack.length - 2}
                  </span>
                )}
              </div>
              <span
                aria-hidden
                className="text-fg-subtle transition-all group-hover:translate-x-0.5 group-hover:text-accent"
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