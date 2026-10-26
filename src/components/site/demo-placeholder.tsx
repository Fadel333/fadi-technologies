type Props = {
  name: string;
  tagline: string;
  stack: string[];
  status: "live" | "in-progress" | "paused" | "concept";
};

const statusColor: Record<Props["status"], string> = {
  live: "text-emerald-400",
  "in-progress": "text-pink-500",
  paused: "text-amber-400",
  concept: "text-gray-500",
};

const statusDot: Record<Props["status"], string> = {
  live: "bg-emerald-400",
  "in-progress": "bg-pink-500",
  paused: "bg-amber-400",
  concept: "bg-gray-500",
};

export function DemoPlaceholder({ name, tagline, stack, status }: Props) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#09090b] p-8">
      {/* grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* accent glow - changed to pink */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"
      />

      {/* top row: brand + status */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[11px] text-gray-400">
          <span className="inline-block h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
          <span>fadi · project</span>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider ${statusColor[status]}`}
        >
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${statusDot[status]}`} />
          {status}
        </span>
      </div>

      {/* center: name + tagline */}
      <div className="relative mt-8">
        <div className="font-mono text-[10px] uppercase tracking-widest text-pink-500">
          &gt;_ Demo video coming soon
        </div>
        <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          {name}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-400">
          {tagline}
        </p>
      </div>

      {/* bottom: stack pills */}
      <div className="relative flex flex-wrap gap-2 mt-8">
        {stack.slice(0, 5).map((s) => (
          <span
            key={s}
            className="rounded-sm border border-gray-800 bg-[#121214] px-2.5 py-1 font-mono text-[10px] text-gray-400"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}