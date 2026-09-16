'use client'

import Link from 'next/link'

export function ProjectBackButton() {
  return (
    <Link
      href="/#projects"
      className="inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      ← Back to projects
    </Link>
  )
}
