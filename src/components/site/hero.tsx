import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090b]">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-[#121214] px-3 py-1.5 font-mono text-xs text-gray-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
            INDEPENDENT PRODUCT STUDIO · GHANA
          </p>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">
            I build AI-powered
            <br />
            products for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              African markets
            </span>
            .
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-xl">
            From RAG systems to full-stack apps to security — built to launch,
            not to demo. No noise, just execution. Still early, still learning, still shipping.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-gray-200"
            >
              See the work
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-gray-700 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}