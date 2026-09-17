'use client'

import { useLayoutEffect } from 'react'

export function ProjectDetailScroll() {
  useLayoutEffect(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    // The project card click already disables smooth scrolling. This is a
    // second safeguard so the detail page opens at the top without animation.
    root.style.scrollBehavior = 'auto'
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    const frame = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return null
}
