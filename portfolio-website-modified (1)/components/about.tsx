import { profile, languages } from '@/lib/portfolio-data'

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
            Building mobile products with care and craft.
          </h2>
        </div>
        <div className="space-y-8">
          <p className="text-pretty text-lg leading-relaxed text-foreground/80">
            {profile.summary}
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            From marketplaces to e-learning platforms, I focus on performant
            architecture, elegant UI, and details that make apps feel effortless
            to use — across both iOS and Android.
          </p>
          <dl className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Based in
              </dt>
              <dd className="mt-2 text-foreground">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Languages
              </dt>
              <dd className="mt-2 text-foreground">{languages.join(' · ')}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
