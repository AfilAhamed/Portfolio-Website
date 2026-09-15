import Link from 'next/link'
import Image from 'next/image'

const pages = ['/resume-pages/page-1.png', '/resume-pages/page-2.png']

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background px-3 pb-10 pt-24 sm:px-6 sm:pt-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:gap-6">
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
            href="/api/download-resume"
            className="inline-flex w-fit items-center justify-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Download Resume
          </a>
        </div>

        <section
          aria-label="Resume preview"
          className="rounded-2xl border border-border/60 bg-muted/20 p-2 shadow-sm sm:p-4"
        >
          <div className="mx-auto flex max-w-[850px] flex-col gap-3">
            {pages.map((page, index) => (
              <div
                key={page}
                className="overflow-hidden rounded-lg bg-white shadow-sm"
              >
                <Image
                  src={page}
                  alt={`Afil Ahamed Flutter Developer Resume page ${index + 1}`}
                  width={1191}
                  height={1684}
                  priority={index === 0}
                  className="block h-auto w-full"
                  sizes="(max-width: 640px) 100vw, 850px"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
