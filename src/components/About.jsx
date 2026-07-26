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
        gsap.from('.about-photo', {
          opacity: 0, scale: 1.04, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-photo', start: 'top 85%', once: true },
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
        <span>01 — About</span>
        <span className="block w-20 h-px bg-white/10" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* Left — headshot + CV */}
        <div className="flex flex-col items-start gap-6">
          {/* Headshot placeholder — swap src once photo is added to /public */}
          <div className="about-photo relative w-full max-w-[340px]">
            <div className="aspect-[3/4] rounded-lg bg-surface2 border border-white/[0.07]
                            flex items-center justify-center overflow-hidden">
              <div className="flex flex-col items-center gap-3 select-none">
                <span className="font-display font-extrabold text-[5rem] leading-none
                                 tracking-tight text-gray-700">
                  SM
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-gray-700">
                  Photo coming soon
                </span>
              </div>
            </div>
            {/* Corner accent marks */}
            <span aria-hidden="true" className="absolute top-0  left-0  w-4 h-4 border-t border-l border-accent/40" />
            <span aria-hidden="true" className="absolute top-0  right-0 w-4 h-4 border-t border-r border-accent/40" />
            <span aria-hidden="true" className="absolute bottom-0 left-0  w-4 h-4 border-b border-l border-accent/40" />
            <span aria-hidden="true" className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/40" />
          </div>

        </div>

        {/* Right — bio */}
        <div className="flex flex-col gap-6">
          <h2 className="about-heading text-[2.1rem] sm:text-[2.4rem] font-bold
                         tracking-[-0.03em] leading-[1.15]">
            Engineer who builds it.<br />
            <span className="text-outline">And knows how it breaks.</span>
          </h2>

          <p className="about-text font-mono text-[0.875rem] text-gray-400 leading-[1.9]">
            I'm{' '}
            <span className="text-gray-200 font-medium">Samm Motaroki</span>, a software
            engineer and security researcher based in Nairobi. I build full-stack web
            applications — from MVPs to AI-powered tools — and test them for the
            vulnerabilities that matter before attackers find them.
          </p>

          <p className="about-text font-mono text-[0.875rem] text-gray-400 leading-[1.9]">
            My work sits at the intersection of software engineering and applied security.
            The dual focus isn't a career hedge — understanding how software breaks makes
            me a better builder, and building real systems makes my security findings more
            actionable.
          </p>

          {/* Availability callout */}
          <div className="about-text p-4 rounded border border-white/[0.07] bg-surface">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent mb-1.5">
              Open to Inquiries
            </p>
            <p className="font-mono text-[0.8rem] text-gray-400 leading-[1.8]">
              Remote freelance &amp; contract — software development and security
              engagements. Open globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
