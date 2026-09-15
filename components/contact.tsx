import { profile } from '@/lib/portfolio-data'

export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Contact
        </p>
        <h2 className="text-balance font-serif text-4xl leading-tight text-foreground md:text-6xl">
          Let&apos;s build something great together.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          I&apos;m open to new opportunities and collaborations. Reach out and
          I&apos;ll get back to you soon.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p className="font-serif text-base text-foreground">
          Afil Ahamed
        </p>
        <p>
          © {new Date().getFullYear()} · Crafted with Flutter passion
        </p>
      </div>
    </footer>
  )
}
