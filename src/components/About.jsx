import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.about-label', {
          clipPath: 'inset(0 100% 0 0)',
          duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-label', start: 'top 88%', once: true },
        })
        gsap.from('.about-heading', {
          opacity: 0, y: 26, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-heading', start: 'top 88%', once: true },
        })
        gsap.from('.about-text', {
          opacity: 0, y: 18, duration: 0.6, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.about-text', start: 'top 85%', once: true },
        })
      }, sectionRef)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Samm Motaroki"
      className="relative z-10 py-24 sm:py-32 px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto"
    >
      {/* Label */}
      <div className="about-label flex items-center gap-3 mb-14 font-mono text-[0.68rem]
                      uppercase tracking-[0.16em] text-accent">
        <span>
          01 — About
          <span className="terminal-cursor" aria-hidden="true" />
        </span>
        <span className="block w-20 h-px bg-white/10" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px]
                      gap-10 lg:gap-16 items-start">
        <div className="flex flex-col gap-6">
          <h2 className="about-heading text-[2.1rem] sm:text-[2.4rem] font-bold
                         tracking-[-0.03em] leading-[1.15]">
            Engineer who builds it.<br />
            <span className="text-outline">And knows how it breaks.</span>
          </h2>

          <p className="about-text font-mono text-[0.875rem] text-gray-400 leading-[1.9] max-w-[560px]">
            I'm{' '}
            <span className="text-gray-200 font-medium">Samm Motaroki</span>, a software
            engineer and security researcher based in Nairobi. I build full-stack web
            applications — from MVPs to AI-powered tools — and test them for the
            vulnerabilities that matter before attackers find them.
          </p>

          <p className="about-text font-mono text-[0.875rem] text-gray-400 leading-[1.9] max-w-[560px]">
            My work sits at the intersection of software engineering and applied security.
            The dual focus isn't a career hedge — understanding how software breaks makes
            me a better builder, and building real systems makes my security findings more
            actionable.
          </p>
        </div>

        {/* Availability callout */}
        <div className="about-text p-5 rounded border border-white/[0.07] bg-surface self-start">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent mb-1.5">
            Open to Inquiries
          </p>
          <p className="font-mono text-[0.8rem] text-gray-400 leading-[1.8]">
            Remote freelance &amp; contract — software development and security
            engagements. Open globally.
          </p>
        </div>
      </div>
    </section>
  )
}
