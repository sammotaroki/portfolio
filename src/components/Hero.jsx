import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function MagneticLink({ href, children, className }) {
  const ref = useRef(null)

  const onMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.28
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.28
    gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' })
  }

  const onLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
  }

  return (
    <a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
      {children}
    </a>
  )
}

const LINE_ONE = ['Software', 'that', 'ships.']
const LINE_TWO = ['Security', 'that', 'holds.']

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.15 })
        tl.from('.hero-tag', { opacity: 0, y: 14, duration: 0.5, ease: 'power3.out' })
          .from('.hero-word', { opacity: 0, y: 32, duration: 0.65, ease: 'power3.out', stagger: 0.07 }, '-=0.2')
          .from('.hero-sub', { opacity: 0, y: 18, duration: 0.55, ease: 'power3.out' }, '-=0.35')
          .from('.hero-cta', { opacity: 0, y: 14, duration: 0.45, ease: 'power3.out', stagger: 0.1 }, '-=0.25')
          .from('.hero-badge', { opacity: 0, y: 10, duration: 0.4, ease: 'power3.out' }, '-=0.1')
          .from('.hero-scroll', { opacity: 0, duration: 0.5 }, '-=0.1')
      }, sectionRef)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-label="Introduction"
      className="relative z-10 min-h-screen flex items-center
                 px-4 sm:px-8 lg:px-16 pt-24 pb-16 max-w-[1200px] mx-auto"
    >
      <div className="max-w-3xl">
        {/* Availability tag */}
        <div className="hero-tag flex items-center gap-3 mb-8 font-mono text-[0.7rem]
                        uppercase tracking-[0.14em] text-accent">
          <span className="block w-6 h-px bg-accent" aria-hidden="true" />
          Available for remote work
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.02]
                       tracking-[-0.04em] mb-6">
          <span className="block">
            {LINE_ONE.map((w, i) => (
              <span key={i} className="hero-word inline-block mr-[0.22em]">{w}</span>
            ))}
          </span>
          <span className="block text-outline">
            {LINE_TWO.map((w, i) => (
              <span key={i} className="hero-word inline-block mr-[0.22em]">{w}</span>
            ))}
          </span>
        </h1>

        {/* Subline */}
        <p className="hero-sub font-mono text-[0.9rem] text-gray-400 leading-[1.9] max-w-lg mb-10">
          I help{' '}
          <span className="text-gray-200">startups and small businesses</span>{' '}
          build reliable web products — and find their vulnerabilities before attackers do.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap mb-14">
          <MagneticLink
            href="#software"
            className="hero-cta inline-flex items-center gap-2 px-7 py-3 bg-accent text-bg
                       font-mono text-[0.78rem] uppercase tracking-[0.08em] font-medium rounded
                       hover:bg-white transition-colors duration-200
                       hover:shadow-[0_0_32px_rgba(79,255,176,0.3)]"
          >
            See my work
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </MagneticLink>
          <MagneticLink
            href="#security"
            className="hero-cta inline-flex items-center gap-2 px-7 py-3 border border-white/15
                       text-gray-400 font-mono text-[0.78rem] uppercase tracking-[0.08em] rounded
                       hover:border-security hover:text-security transition-colors duration-200"
          >
            Security engagements
          </MagneticLink>
        </div>

        {/* Status badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                        border border-white/[0.07] bg-surface font-mono text-[0.7rem] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" aria-hidden="true" />
          Open to remote freelance &amp; contract — software + security
        </div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex
                   flex-col items-center gap-2 font-mono text-[0.62rem] uppercase
                   tracking-[0.12em] text-gray-600"
      >
        <div className="w-px h-12 bg-gradient-to-b from-accent/40 to-transparent animate-pulse-slow" />
        Scroll
      </div>
    </section>
  )
}
