import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* soft radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, oklch(0.9 0.05 78), transparent)',
        }}
      />
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Available for new opportunities
        </p>
        <h1 className="text-balance font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-lg tracking-wide text-muted-foreground md:text-xl">
          {profile.title} · Crafting refined cross-platform experiences
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-pretty leading-relaxed text-foreground/80">
          Flutter Developer focused on building polished, reliable cross-platform applications with thoughtful UI, strong performance, and practical integrations.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View my projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-foreground/20 px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {profile.email}
          </a>
        </div>
        <dl className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-10">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Experience
            </dt>
            <dd className="mt-2 font-serif text-3xl text-foreground">3+ yrs</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Apps Shipped
            </dt>
            <dd className="mt-2 font-serif text-3xl text-foreground">10+</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Focus
            </dt>
            <dd className="mt-2 font-serif text-3xl text-foreground">Mobile · Web</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
