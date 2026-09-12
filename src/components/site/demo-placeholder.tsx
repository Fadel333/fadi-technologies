type Props = {
  name: string;
  tagline: string;
  stack: string[];
  status: "live" | "in-progress" | "paused" | "concept";
};

const statusColor: Record<Props["status"], string> = {
  live: "text-success",
  "in-progress": "text-terminal",
  paused: "text-warning",
  concept: "text-fg-subtle",
};

const statusDot: Record<Props["status"], string> = {
  live: "bg-success",
  "in-progress": "bg-terminal",
  paused: "bg-warning",
  concept: "bg-fg-subtle",
};

export function DemoPlaceholder({ name, tagline, stack, status }: Props) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#0a0a0b] p-8">
      {/* grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />

      {/* top row: brand + status */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[11px] text-fg-subtle">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span>fadi · project</span>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[11px] ${statusColor[status]}`}
        >
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${statusDot[status]}`} />
          {status}
        </span>
      </div>

      {/* center: name + tagline */}
      <div className="relative">
        <div className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
          Demo video coming soon
        </div>
        <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          {name}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
          {tagline}
        </p>
      </div>

      {/* bottom: stack pills */}
      <div className="relative flex flex-wrap gap-1.5">
        {stack.slice(0, 5).map((s) => (
          <span
            key={s}
            className="rounded border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}