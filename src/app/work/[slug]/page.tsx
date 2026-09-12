import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, type CaseStudy } from "@/content/case-studies";
import { DemoPlaceholder } from "@/components/site/demo-placeholder";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return { title: "Not found" };
  return {
    title: study.name,
    description: study.tagline,
  };
}

const statusStyles: Record<CaseStudy["status"], string> = {
  live: "text-success",
  "in-progress": "text-terminal",
  paused: "text-warning",
  concept: "text-fg-subtle",
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) notFound();

  return (
    <article>
      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-10">
        <Link
          href="/work"
          className="font-mono text-xs text-fg-muted transition-colors hover:text-accent"
        >
          ← all work
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center gap-1.5 font-mono text-xs ${statusStyles[study.status]}`}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
            {study.status}
          </span>
          <span className="text-fg-subtle">·</span>
          <span className="font-mono text-xs text-fg-subtle">
            {study.year}
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl">
          {study.name}
        </h1>
        <p className="mt-3 text-lg text-accent">{study.tagline}</p>

        {/* Meta row */}
        <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-5 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
              Role
            </dt>
            <dd className="mt-1 text-sm text-fg">{study.role}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
              Stack
            </dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {study.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-fg-muted"
                >
                  {s}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        {(study.liveUrl || study.repoUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Visit live ↗
              </a>
            )}
            {study.repoUrl && (
              <a
                href={study.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-surface-muted"
              >
                View code ↗
              </a>
            )}
          </div>
        )}
      </section>

      {/* Media */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
       <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
  {study.videoUrl ? (
    <iframe
      src={study.videoUrl}
      title={`${study.name} demo`}
      className="h-full w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ) : (
    <DemoPlaceholder
      name={study.name}
      tagline={study.tagline}
      stack={study.stack}
      status={study.status}
    />
  )}
</div>  
      </section>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="space-y-14">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
              The problem
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-fg-muted">
              {study.problem.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
              The approach
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-fg-muted">
              {study.approach.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
              Outcome
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-fg-muted">
              {study.outcome.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {study.metrics && study.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {study.metrics.map((m) => (
                <div key={m.label} className="bg-surface p-5">
                  <div className="text-lg font-semibold text-fg">
                    {m.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="text-sm text-fg-muted">
            Have a similar problem worth solving?
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}