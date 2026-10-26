import Link from "next/link";

export function ContactCta() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-[#121214] p-10 sm:p-14">
        {/* Accent glow - made stronger for the neon aesthetic */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-pink-500/20 blur-[100px]"
        />
        
        {/* Subtle grid pattern overlay (optional, but looks very "hacker") */}
        <div 
          aria-hidden 
          className="pointer-events-none absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        />

        <div className="relative max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-pink-500 mb-4">
            [ INITIATE CONTACT ]
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Got a problem worth shipping a solution to?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            I take on select client work — AI systems, full-stack web apps,
            and security-focused builds. If the fit is right, the timeline is
            honest, and the problem is real, let's talk.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-pink-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </Link>
            <a
              href="mailto:fadiliddrisu24@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-gray-700 bg-[#09090b] px-6 py-3 font-mono text-sm text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
            >
              <span className="text-pink-500">&gt;_</span> fadiliddrisu24@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}