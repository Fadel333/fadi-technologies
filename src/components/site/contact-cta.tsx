import Link from "next/link";

export function ContactCta() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-10 sm:p-14">
        {/* accent glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        />

        <div className="relative max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            Got a problem worth shipping a solution to?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">
            I take on select client work — AI systems, full-stack web apps,
            and security-focused builds. If the fit is right, the timeline is
            honest, and the problem is real, let's talk.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </Link>
            <a
              href="mailto:fadiliddrisu24@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-muted"
            >
              fadiliddrisu24@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}