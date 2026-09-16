'use client'

import { useRouter } from 'next/navigation'

export function ProjectBackButton() {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      ← Back to projects
    </button>
  )
}
