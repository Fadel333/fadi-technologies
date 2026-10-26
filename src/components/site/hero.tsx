import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090b]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-[#121214] px-3 py-1.5 font-mono text-xs text-gray-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
            INDEPENDENT PRODUCT STUDIO · GHANA
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            I build software that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              actually ships
            </span>
            .
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            From AI systems and full-stack web apps to photography platforms and security tools. 
            No slide decks, no fluff. Just working software built for real markets.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-sm font-bold text-black transition-colors hover:bg-gray-200"
            >
              Explore the Work
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-gray-700 bg-transparent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-900"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}