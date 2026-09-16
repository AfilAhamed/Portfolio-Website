'use client'

import { useEffect } from 'react'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact, Footer } from '@/components/contact'

export default function Page() {
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('projects-scroll-position')
    if (!savedPosition) return

    sessionStorage.removeItem('projects-scroll-position')

    const restorePosition = () => {
      const position = Number(savedPosition)
      if (Number.isFinite(position)) {
        window.scrollTo({ top: position, left: 0, behavior: 'auto' })
      }
    }

    // Let the returned page finish laying out before restoring the exact position.
    requestAnimationFrame(() => {
      requestAnimationFrame(restorePosition)
    })
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
