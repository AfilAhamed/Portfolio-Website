import { profile } from '@/lib/portfolio-data'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
      {children}
    </p>
  )
}

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Experienced Flutter engineer focused on quality.
          </h2>
        </div>
        <div className="space-y-8">
          <p className="text-pretty text-lg leading-relaxed text-foreground/80">
            {profile.summary}
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            From concept to architecture, development, and deployment — I
            engineer scalable systems, refined interfaces, and production-ready
            solutions that deliver seamless, high-performance experiences across
            platforms.
          </p>
        </div>
      </div>
    </section>
  )
}
