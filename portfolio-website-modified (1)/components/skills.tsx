import { skillGroups } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Capabilities
        </p>
        <h2 className="mb-14 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          Tools & technologies I work with.
        </h2>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-card p-7">
              <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
