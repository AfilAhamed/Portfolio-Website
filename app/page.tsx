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

    // Restore the exact position before the first paint. Temporarily disable
    // the site's global smooth scrolling so the browser cannot animate from
    // the top to the saved project position.
    const root = document.documentElement
    root.style.scrollBehavior = 'auto'
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, position)

    // Keep the requested #projects URL without triggering another hash scroll.
    window.history.replaceState(null, '', '/#projects')

    const frame = window.requestAnimationFrame(() => {
      root.style.removeProperty('scroll-behavior')
    })

    return () => window.cancelAnimationFrame(frame)
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
