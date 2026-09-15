import Link from 'next/link'

export default function ResumePage() {
  const resumePath = '/resume.pdf'

  return (
    <main className="min-h-screen bg-background px-4 pb-10 pt-28 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/#top"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back to portfolio
            </Link>
            <h1 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              Resume
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Afil Ahamed — Flutter Developer
            </p>
          </div>

          <a
            href={resumePath}
            download="Afil Ahamed - Flutter Developer.pdf"
            className="inline-flex w-fit items-center justify-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Download Resume
          </a>
        </div>

        <section className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <iframe
            src={`${resumePath}#toolbar=1&navpanes=0&view=FitH`}
            title="Afil Ahamed Flutter Developer Resume"
            className="h-[calc(100vh-210px)] min-h-[680px] w-full"
          />
        </section>
      </div>
    </main>
  )
}
