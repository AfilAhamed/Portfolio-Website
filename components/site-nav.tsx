'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-border/60 bg-background/95 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            onClick={closeMenu}
            className="font-serif text-lg tracking-tight text-foreground"
          >
            Afil<span className="text-muted-foreground"> Ahamed</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="/resume"
              className="hidden rounded-full border border-foreground/20 px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background md:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:bg-secondary md:hidden"
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="relative block h-4 w-4" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-200 ${
                    menuOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-px w-4 bg-current transition-opacity duration-200 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-px w-4 bg-current transition-transform duration-200 ${
                    menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-4 border-t border-border/60 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume"
                onClick={closeMenu}
                className="mt-1 rounded-lg border border-foreground/20 px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
