import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="ambient relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[1fr_auto] md:items-center md:gap-16 md:py-28">
        {/* Left: text */}
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-fg-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Independent product studio · Ghana
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl">
            We ship AI-powered
            <br />
            products for{" "}
            <span className="text-accent">African markets</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
            From RAG systems to full-stack apps to security — built to launch,
            not to demo. Founded and run by a Gen&nbsp;Z developer who is still
            early, still learning, and shipping anyway.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              See the work
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-muted"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative mx-auto md:mx-0">
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-border bg-surface-muted sm:h-72 sm:w-72 md:h-80 md:w-80">
            <Image
              src="/portrait.jpg"
              alt="Portrait of the founder of FADI Technologies"
              fill
              sizes="(min-width: 768px) 320px, 224px"
              className="object-cover"
              priority
            />
          </div>
          {/* subtle accent glow behind the photo */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-accent/10 blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}