import Image from 'next/image'
import { ProjectBackButton } from '@/components/project-back-button'
import { ProjectDetailScroll } from '@/components/project-detail-scroll'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/portfolio-data'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) notFound()

  return (
    <>
      <ProjectDetailScroll />
      <main className="min-h-screen bg-background px-6 pb-16 pt-28 text-foreground md:pt-32">
      <div className="mx-auto max-w-5xl">
        <ProjectBackButton />

        <article className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="relative aspect-[16/8] w-full bg-secondary/30">
            <Image
              src={project.image}
              alt={`${project.name} app preview`}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-7 sm:p-10 md:p-12">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {project.availability}
            </span>
            <h1 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-primary">{project.tagline}</p>

            <div className="mt-8 space-y-5 text-base leading-8 text-foreground/80">
              {project.detailedDescription.split('. ').map((sentence, index, sentences) => (
                <p key={`${project.slug}-paragraph-${index}`}>
                  {sentence.trim()}
                  {index < sentences.length - 1 && '.'}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
              <a
                href={project.stores.playStore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                View on Google Play ↗
              </a>
              <a
                href={project.stores.appStore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                View on App Store ↗
              </a>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <h2 className="font-serif text-2xl">Project details</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-xl border border-border/80 bg-background/60 p-4 text-sm leading-relaxed text-foreground/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
      </main>
    </>
}
