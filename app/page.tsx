'use client'

import { useLayoutEffect } from 'react'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact, Footer } from '@/components/contact'

export default function Page() {
  useLayoutEffect(() => {
    const savedPosition = sessionStorage.getItem('projects-scroll-position')
    if (!savedPosition) return

    sessionStorage.removeItem('projects-scroll-position')
    const position = Number(savedPosition)
    if (!Number.isFinite(position)) return

    // Restore the exact position before the first paint so returning from a
    // project detail page does not visibly jump to the top or re-animate.
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, position)

    // Keep the requested #projects URL while preserving the exact prior
    // scroll position rather than triggering another hash scroll.
    window.history.replaceState(null, '', '/#projects')
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
