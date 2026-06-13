function FlowLine({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 600"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M-50 420 C 300 320, 520 180, 760 300 S 1180 520, 1500 360"
        stroke="url(#flow-grad)"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="flow-grad" x1="0" y1="0" x2="1440" y2="0">
          <stop stopColor="oklch(0.74 0.09 266)" stopOpacity="0" />
          <stop offset="0.5" stopColor="oklch(0.74 0.09 266)" stopOpacity="0.7" />
          <stop offset="1" stopColor="oklch(0.74 0.09 266)" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <FlowLine className="pointer-events-none absolute inset-0 h-full w-full" />
      <div
        className="pointer-events-none absolute right-0 top-20 -z-10 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.4 0.1 266) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <p className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-accent">
          <span className="h-px w-10 bg-accent/60" />
          Building the Future with AI
        </p>

        <h1 className="mt-8 max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-tight text-balance text-foreground md:text-7xl lg:text-8xl">
          Building the future through {" "}
          <span className="italic text-accent">innovation</span> and{" "}
          <span className="italic text-accent">engineering.</span>
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          I believe technology can shape the future, and I'm on a journey to build the knowledge, skills, and products that contribute to it.
        </p>

        {/* <div className="mt-32 grid grid-cols-1 gap-px border-t border-border md:grid-cols-3">
          {[
            { stat: "30+", label: "models shipped to production" },
            { stat: "12M", label: "daily predictions served at scale" },
            { stat: "6", label: "years engineering intelligent systems" },
          ].map((item) => (
            <div key={item.label} className="flex items-baseline gap-5 pt-8 pr-6">
              <span className="font-serif text-5xl font-medium text-accent md:text-6xl">
                {item.stat}
              </span>
              <span className="max-w-[14rem] text-sm leading-relaxed text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
