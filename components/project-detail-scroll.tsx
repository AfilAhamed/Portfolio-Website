'use client'

import { useLayoutEffect } from 'react'

export function ProjectDetailScroll() {
  useLayoutEffect(() => {
    const root = document.documentElement
    // Open the detail page at the top without triggering the site's smooth
    // scrolling behavior. Remove the temporary override immediately after.
    root.style.scrollBehavior = 'auto'
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    const frame = window.requestAnimationFrame(() => {
      root.style.removeProperty('scroll-behavior')
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return null
}
