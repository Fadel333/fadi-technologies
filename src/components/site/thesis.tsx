export function Thesis() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-16 border-t border-gray-800 pt-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
            &gt;_ The Thesis
          </span>
        </div>

        <div className="space-y-8">
          <p className="text-xl font-medium leading-relaxed text-white sm:text-3xl tracking-tight">
            Africa has no shortage of{" "}
            <span className="text-pink-500">real problems</span> worth solving.
            What it lacks is people who{" "}
            <span className="text-pink-500">actually ship</span>.
          </p>

          <div className="space-y-6 text-base leading-relaxed text-gray-400">
            <p>
              Every product under FADI Technologies started the same way —
              noticing something broken in the market around me. Graduate
              employability. Elections integrity. Prayer habits. Trading
              education. None of them were problems I could stop thinking about.
              So I built.
            </p>

            <p>
              The pattern is consistent: <strong className="text-white font-semibold">
              observe, build, ship, iterate</strong>. Some are live. Some are paused. All
              of them exist as working software, not slide decks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}