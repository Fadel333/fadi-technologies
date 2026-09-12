import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-start justify-center px-6">
      <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
        404 · Not found
      </p>

      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl">
        This page is still loading.
        <br />
        <span className="text-accent">So am I.</span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
        Whatever you were looking for isn&apos;t here — maybe it moved, maybe it
        never existed, maybe it&apos;s shipping next week.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Go home
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-muted"
        >
          See the work
        </Link>
      </div>
    </section>
  );
}