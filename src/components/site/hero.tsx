import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090b]">
      {/* Subtle background glow for the whole hero section */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full" />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[1fr_auto] md:items-center md:gap-16 md:py-28 relative z-10">
        {/* Left: text */}
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-[#121214] px-3 py-1.5 font-mono text-xs text-gray-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
            INDEPENDENT PRODUCT STUDIO · GHANA
          </p>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            I build AI-powered
            <br />
            products for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              African markets
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            From RAG systems to full-stack apps to security — built to launch,
            not to demo. No noise, just execution. Still early, still learning, still shipping.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
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

        {/* Right: photo */}
        <div className="relative mx-auto md:mx-0">
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-gray-800 bg-[#121214] sm:h-72 sm:w-72 md:h-80 md:w-80">
            <Image
              src="/portrait.jpg"
              alt="Portrait of the founder of FADI Technologies"
              fill
              sizes="(min-width: 768px) 320px, 224px"
              className="object-cover opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500"
              priority
            />
          </div>
          {/* Stronger pink glow behind the photo */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-pink-500/20 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}