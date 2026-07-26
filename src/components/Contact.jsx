import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticLink from './MagneticLink'

const SOCIALS = [
  {
    label: 'GitHub',
    handle: '@sammotaroki',
    href: 'https://github.com/sammotaroki',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Samm Motaroki',
    href: 'https://linkedin.com/in/samm-motaroki', // Update with real slug
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  }
]

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.ct-label', {
          clipPath: 'inset(0 100% 0 0)', duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: '.ct-label', start: 'top 88%', once: true },
        })
        gsap.from('.ct-content', {
          opacity: 0, y: 22, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.ct-content', start: 'top 88%', once: true },
        })
        gsap.from('.ct-social', {
          opacity: 0, x: 16, duration: 0.5, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: '.ct-social', start: 'top 88%', once: true },
        })
      }, sectionRef)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-label="Contact"
      className="relative z-10 py-24 sm:py-32 bg-surface border-t border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">

        {/* Label */}
        <div className="ct-label flex items-center gap-3 mb-14 font-mono text-[0.68rem]
                        uppercase tracking-[0.16em] text-accent">
          <span>03 — Contact</span>
          <span className="block w-20 h-px bg-white/10" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

          {/* Left — socials */}
          <div className="flex flex-col gap-px bg-white/[0.06] border border-white/[0.06]
                          rounded-lg overflow-hidden self-start">
            {SOCIALS.map(({ label, handle, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} — ${handle}`}
                className="ct-social group flex items-center justify-between p-5 bg-bg
                           hover:bg-surface2 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 group-hover:text-accent transition-colors">
                    {icon}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-sm text-gray-300
                                  group-hover:text-white transition-colors">
                      {label}
                    </p>
                    <p className="font-mono text-[0.68rem] text-gray-600">{handle}</p>
                  </div>
                </div>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24" aria-hidden="true"
                  className="text-gray-700 group-hover:text-accent
                             group-hover:translate-x-0.5 transition-all duration-200">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Right — CTA */}
          <div className="ct-content">
            <h2 className="text-[2.4rem] sm:text-[2.8rem] font-extrabold tracking-[-0.04em]
                           leading-[1.1] mb-6">
              Let's build<br />
              <span className="text-outline">something great.</span>
            </h2>
            <p className="font-mono text-[0.875rem] text-gray-400 leading-[1.9] mb-8 max-w-sm">
              Open to new opportunities — whether that's a product to build, a system to
              audit, or just a conversation about what you're working on.
            </p>
            <MagneticLink
              href="mailto:sammotaroki@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg font-mono
                         text-[0.8rem] uppercase tracking-[0.1em] font-medium rounded
                         hover:bg-white transition-colors duration-200
                         hover:shadow-[0_0_40px_rgba(79,255,176,0.22)]"
            >
              Say hello
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"
                viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </MagneticLink>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-3">
          <span className="font-mono text-[0.65rem] text-gray-700 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Samm Motaroki
          </span>
          <span className="font-mono text-[0.65rem] text-gray-700 uppercase tracking-widest">
            Built with React + Vite + Tailwind + GSAP
          </span>
        </div>

      </div>
    </section>
  )
}
