'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export function ProjectBackButton() {
  const router = useRouter()

  const handleBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    // Return to the home route without invoking hash scrolling. The home page
    // restores the exact project-card position before the first paint.
    document.documentElement.style.scrollBehavior = 'auto'
    router.push('/', { scroll: false })
  }

  return (
    <Link
      href="/#projects"
      scroll={false}
      onClick={handleBack}
      className="inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      ← Back to projects
    </Link>
  )
}
