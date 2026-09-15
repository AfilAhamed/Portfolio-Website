import { projects } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section id="work" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Selected Work
        </p>
        <h2 className="mb-14 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          Projects I&apos;m proud of.
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="grid gap-8 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40 md:grid-cols-[0.9fr_1.1fr] md:p-10"
            >
              <div>
                <span className="font-serif text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-primary">{project.tagline}</p>
                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-6 inline-flex rounded-full border border-border bg-background px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-foreground/70">
                  {project.availability}
                </p>
              </div>
              <ul className="grid gap-3 self-center border-t border-border pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
