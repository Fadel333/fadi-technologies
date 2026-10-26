import Link from "next/link";
import { featuredProject } from "@/content/featured";
import { DemoPlaceholder } from "./demo-placeholder";

export function TalentForgeSpotlight() {
  const p = featuredProject;

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      {/* Section label */}
      <div className="mb-8 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
          &gt;_ Flagship Product
        </span>
        <span className="h-px flex-1 bg-gray-800" />
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-14">
        {/* Left: media (video or poster) */}
        <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-800 bg-[#121214]">
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
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {p.name}
          </h2>
          <p className="mt-2 text-sm font-medium text-pink-500 font-mono">
            {p.tagline}
          </p>

          <p className="mt-5 text-base leading-relaxed text-gray-400">
            {p.description}
          </p>

          {/* Bullet points with terminal dashes */}
          <ul className="mt-6 space-y-3">
            {p.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-gray-300"
              >
                <span className="font-mono text-pink-500 mt-0.5">&gt;_</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-sm border border-gray-800 bg-[#121214] px-2.5 py-1 font-mono text-[11px] text-gray-400"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/work/${p.slug}`}
              className="inline-flex items-center gap-2 rounded-md bg-pink-600 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
            >
              Read the case study
              <span aria-hidden>→</span>
            </Link>
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-gray-700 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-900"
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