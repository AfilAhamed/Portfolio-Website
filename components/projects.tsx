import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Projects
        </p>
        <h2 className="mb-14 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          Projects I&apos;m proud of.
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
            >
              <article className="grid overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-lg">
                <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[0.82fr_1.18fr] md:p-10">
                  <div className="relative min-h-64 overflow-hidden rounded-xl border border-border bg-secondary/30 md:min-h-[320px]">
                    <Image
                      src={project.image}
                      alt={`${project.name} app preview`}
                      fill
                      sizes="(min-width: 768px) 40vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <span className="font-serif text-sm text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-primary">{project.tagline}</p>
                    <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-7 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      <span className="rounded-full border border-border bg-background px-4 py-1.5 text-foreground/70">
                        {project.availability}
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        View project details →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
