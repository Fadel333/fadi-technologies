import Link from "next/link";
import { featuredProject } from "@/content/featured";
import { DemoPlaceholder } from "./demo-placeholder";

export function TalentForgeSpotlight() {
  const p = featuredProject;

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      {/* Section label */}
      <div className="mb-8 flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
          Flagship
        </span>
        <span className="h-px flex-1 bg-border" />
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-success">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-14">
        {/* Left: media (video or poster) */}
         <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
  {p.videoUrl ? (
    <iframe
      src={p.videoUrl}
      title={`${p.name} demo`}
      className="h-full w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ) : (
    <DemoPlaceholder
      name={p.name}
      tagline={p.tagline}
      stack={p.stack}
      status={p.status}
    />
  )}
</div>

        {/* Right: content */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            {p.name}
          </h2>
          <p className="mt-2 text-sm font-medium text-accent">{p.tagline}</p>

          <p className="mt-5 text-base leading-relaxed text-fg-muted">
            {p.description}
          </p>

          <ul className="mt-6 space-y-2">
            {p.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-fg-muted"
              >
                <span
                  aria-hidden
                  className="mt-1.5 inline-block h-1 w-3 shrink-0 rounded-full bg-accent"
                />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-fg-muted"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/work/${p.slug}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Read the case study
              <span aria-hidden>→</span>
            </Link>
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-surface-muted"
              >
                Visit live ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}