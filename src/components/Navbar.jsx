import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Software', href: '#software' },
  { label: 'Security', href: '#security' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const progressRef = useRef(null)

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top -20',
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    })
    return () => trigger.kill()
  }, [])

  // Scroll-progress fill — tracks the user's own scroll 1:1, no autonomous motion
  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (progressRef.current) gsap.set(progressRef.current, { scaleX: self.progress })
      },
    })
    return () => st.kill()
  }, [])

  // Close mobile menu on hash navigation
  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl
                  border-b border-white/[0.06] transition-all duration-300
                  ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto">
        {/* Logo */}
        <a href="#hero" className="font-display font-extrabold text-lg tracking-tight">
          SM<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-gray-400
                           hover:text-accent transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="relative group">
            <span
              tabIndex={0}
              aria-label="Blog — Coming soon"
              className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-gray-600
                         cursor-default select-none"
            >
              Blog
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2
                         px-2 py-1 bg-surface2 border border-white/10 rounded
                         font-mono text-[0.6rem] text-gray-400 whitespace-nowrap
                         opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            >
              Coming soon
            </span>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 -mr-2"
        >
          <span className={`block w-5 h-px bg-gray-300 origin-center transition-all duration-200
                            ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-gray-300 transition-all duration-200
                            ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-px bg-gray-300 origin-center transition-all duration-200
                            ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300
                    ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="border-t border-white/[0.06] bg-bg/95 backdrop-blur-xl">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-6 py-4 font-mono text-[0.75rem] uppercase
                         tracking-[0.1em] text-gray-400 hover:text-accent hover:bg-surface
                         border-b border-white/[0.04] transition-colors"
            >
              {label}
            </a>
          ))}
          <span className="flex items-center px-6 py-4 font-mono text-[0.75rem] uppercase
                           tracking-[0.1em] text-gray-600 border-b border-white/[0.04]">
            Blog — Coming soon
          </span>
        </div>
      </div>

      {/* Scroll progress */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-white/[0.06] overflow-hidden" aria-hidden="true">
        <div
          ref={progressRef}
          className="h-full w-full bg-accent origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </nav>
  )
}
