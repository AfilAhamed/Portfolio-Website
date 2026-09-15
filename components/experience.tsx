import { experiences } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Experience
        </p>
        <h2 className="mb-14 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          A steady path of growth.
        </h2>
        <ol className="relative">
          {experiences.map((exp, i) => (
            <li
              key={exp.company}
              className="group grid gap-2 border-t border-border py-8 md:grid-cols-[0.35fr_0.9fr_1.1fr] md:gap-8 md:py-10"
            >
              <span className="text-sm text-muted-foreground">
                {exp.period}
              </span>
              <div>
                <h3 className="font-serif text-xl text-foreground">
                  {exp.role}
                </h3>
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex text-sm text-primary transition-opacity hover:opacity-80"
                  aria-label={`Visit ${exp.company}`}
                >
                  {exp.company}
                  <span aria-hidden="true" className="ml-1">↗</span>
                </a>
              </div>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              {i === experiences.length - 1 && (
                <span className="hidden" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
