export function Thesis() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
            The thesis
          </span>
        </div>

        <div className="space-y-6">
          <p className="text-xl leading-relaxed text-fg sm:text-2xl">
            Africa has no shortage of{" "}
            <span className="text-accent">real problems</span> worth solving.
            What it lacks is people who{" "}
            <span className="text-accent">actually ship</span>.
          </p>

          <p className="text-base leading-relaxed text-fg-muted">
            Every product under FADI Technologies started the same way —
            noticing something broken in the market around me. Graduate
            employability. Elections integrity. Prayer habits. Trading
            education. None of them were problems I could stop thinking about.
            So I built.
          </p>

          <p className="text-base leading-relaxed text-fg-muted">
            The pattern is consistent: <strong className="text-fg">observe,
            build, ship, iterate</strong>. Some are live. Some are paused. All
            of them exist as working software, not slide decks.
          </p>
        </div>
      </div>
    </section>
  );
}