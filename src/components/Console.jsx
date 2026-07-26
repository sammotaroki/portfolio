import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const PROJECTS = [
  {
    id:        '01',
    title:     'Triage Engine',
    type:      'HR Tech',
    flagship:  true,
    badge:     'Flagship · AI',
    desc:      'AI-powered applicant screening: paste a job spec, drop in CVs, and Claude scores every candidate 0–100 with structured reasoning — cutting hours of manual CV review to seconds. Runs locally, no database or Docker required.',
    tags:      ['Python', 'FastAPI', 'Anthropic API', 'Claude Sonnet'],
    github:    'https://github.com/sammotaroki/Triage-Engine',
    live:      null,
  },
  {
    id:        '02',
    title:     'Portfolio Backtester',
    type:      'FinTech',
    flagship:  false,
    badge:     null,
    desc:      'Simulate how any stock allocation would have actually performed against history. Define tickers, choose buy-and-hold or annual rebalancing, and measure outcomes across 5 metrics — CAGR, Sharpe ratio, max drawdown — benchmarked against the S&P 500.',
    tags:      ['Next.js', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    github:    'https://github.com/sammotaroki/portfolio-backtester',
    live:      null,
  },
  {
    id:        '03',
    title:     'Nile Hotel',
    type:      'Hospitality',
    flagship:  false,
    badge:     null,
    desc:      'A hotel management web interface — browse rooms, handle bookings, and manage operations from a single dashboard.',
    tags:      ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github:    'https://github.com/sammotaroki/nile-hotel',
    live:      null,
  },
  {
    id:        '04',
    title:     'Wellness & Cosmetics',
    type:      'E-commerce',
    flagship:  false,
    badge:     null,
    desc:      'Beauty & cosmetics e-commerce for the Kenyan market — Next.js storefront and admin console with M-Pesa (Daraja STK Push) payments.',
    tags:      ['Next.js', 'M-Pesa Daraja API'],
    github:    null,
    live:      null,
  },
]

const SW_SERVICES = [
  'Launch your MVP',
  'Automate workflows with AI',
  'Extend existing products safely',
]

const SW_SKILLS = [
  { cat: 'Languages',   items: ['JavaScript / TypeScript', 'Java', 'Python', 'SQL'] },
  { cat: 'Frontend',    items: ['React', 'Vite', 'Tailwind CSS'] },
  { cat: 'Backend',     items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Firebase'] },
  { cat: 'Applied AI',  items: ['LLM APIs (Claude / OpenAI)', 'Prompt engineering', 'RAG pipelines'] },
  { cat: 'Mobile',      items: ['Android (Java)'] },
  { cat: 'Tools',       items: ['Git / GitHub', 'Docker', 'Linux', 'Vercel', 'GitHub Actions'] },
]

const SEC_SERVICES = [
  'Pentest your web app before launch',
  'Assess existing app for vulnerabilities',
  'Review code for security flaws',
  'Test AI features against prompt injection & data leakage',
]

const SEC_PROJECTS = [
  {
    id:     '01',
    title:  'LLM Application Security Research',
    status: 'In progress',
    desc:   'Building a deliberately vulnerable RAG chatbot and demonstrating prompt injection, system prompt extraction, and insecure output handling — mapped to the OWASP Top 10 for LLM Applications.',
  },
  {
    id:     '02',
    title:  'Home SOC Lab',
    status: 'Completed',
    desc:   'A self-hosted Security Operations Center lab for hands-on detection engineering — Wazuh for host-based SIEM/EDR-style monitoring, Suricata for network intrusion detection, and the Elastic Stack (Elasticsearch + Kibana) for log aggregation and dashboarding. Built and in ongoing use to simulate attacks and practice detection, triage, and investigation.',
    tags:   ['Wazuh', 'Suricata', 'Elastic Stack', 'Kibana'],
  },
  {
    id:     '03',
    title:  'Web Application Penetration Test — OWASP Juice Shop',
    status: 'Completed',
    desc:   'End-to-end web application penetration test against OWASP Juice Shop under a self-defined formal engagement scope: recon through exploitation to a full professional report with CVSS v3.1 scoring and prioritized remediation guidance.',
  },
]

const SEC_SKILLS = [
  { cat: 'Web App Security', items: ['OWASP Top 10', 'Burp Suite', 'Manual exploitation'] },
  { cat: 'Network',          items: ['nmap', 'Enumeration', 'Metasploit', 'Privilege escalation'] },
  { cat: 'LLM / AI Security', items: ['Prompt injection', 'OWASP LLM Top 10', 'RAG security'] },
  { cat: 'SOC',              items: ['Wazuh', 'Suricata', 'Elastic Stack (ELK)', 'Kibana'] },
  { cat: 'Reporting',        items: ['CVSS v3.1 scoring', 'Professional assessment reports'] },
  { cat: 'Environment',      items: ['Kali Linux', 'Bash', 'Python scripting'] },
]

function GithubIcon() {
  return (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function SoftwarePanel() {
  return (
    <div>
      <h2 className="text-[2.1rem] sm:text-[2.4rem] font-bold tracking-[-0.03em]
                     leading-[1.15] mb-6 max-w-2xl text-ink">
        Ship products that work.<br />
        <span className="text-outline-dark">In production, not just demos.</span>
      </h2>
      <p className="font-mono text-[0.875rem] text-inkSoft leading-[1.9] max-w-xl mb-6">
        I help businesses turn ideas into working products — web apps, APIs, and AI tools
        that ship on time and don't fall over in production.
      </p>
      <div className="flex flex-wrap gap-2.5 mb-16 max-w-3xl">
        {SW_SERVICES.map(s => (
          <span key={s}
            className="font-mono text-[0.72rem] px-3 py-1.5 border border-mintDeep/25
                       text-mintDeep rounded-sm bg-mintDeep/[0.06]">
            {s}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-10 lg:gap-16">
        <div>
          <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink/45 mb-5">
            Selected projects
          </h3>
          <div className="flex flex-col gap-px bg-ink/[0.08] border border-ink/[0.08]
                          rounded-lg overflow-hidden">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className={`group bg-paper hover:bg-white transition-colors duration-200
                            p-6 sm:p-8 ${p.flagship ? 'border-l-2 border-mintDeep' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="font-mono text-[0.6rem] text-ink/40 tracking-widest">
                        {p.id}
                      </span>
                      {p.badge && (
                        <span className="font-mono text-[0.58rem] uppercase tracking-[0.1em]
                                         px-2 py-0.5 bg-mintDeep text-paper rounded">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-display font-bold text-lg tracking-tight mb-1
                                   text-ink group-hover:text-mintDeep transition-colors duration-200">
                      {p.title}
                    </h4>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-mintDeep mb-3">
                      {p.type}
                    </p>
                    <p className="font-mono text-[0.82rem] text-inkSoft leading-[1.85]
                                  max-w-md mb-4">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map(tag => (
                        <span key={tag}
                          className="font-mono text-[0.62rem] uppercase tracking-[0.07em]
                                     px-2.5 py-1 bg-paperDeep border border-ink/[0.08]
                                     text-inkSoft rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-4 shrink-0">
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${p.title} source on GitHub`}
                        className="flex items-center gap-1.5 font-mono text-[0.68rem] uppercase
                                   tracking-[0.08em] text-inkSoft hover:text-ink
                                   transition-colors"
                      >
                        <GithubIcon /> Code
                      </a>
                    ) : (
                      <span
                        aria-label={`${p.title} source is a private repository`}
                        className="flex items-center gap-1.5 font-mono text-[0.68rem] uppercase
                                   tracking-[0.08em] text-ink/30"
                      >
                        Private
                      </span>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${p.title} live demo`}
                        className="flex items-center gap-1.5 font-mono text-[0.68rem] uppercase
                                   tracking-[0.08em] text-inkSoft hover:text-mintDeep
                                   transition-colors"
                      >
                        ↗ Live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 text-right">
            <a
              href="https://github.com/sammotaroki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase
                         tracking-[0.1em] text-ink/45 hover:text-mintDeep transition-colors"
            >
              All repos on GitHub
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink/45 mb-5">
            Technical skills
          </h3>
          <div className="flex flex-col gap-6">
            {SW_SKILLS.map(({ cat, items }) => (
              <div key={cat}>
                <p className="font-mono text-[0.63rem] uppercase tracking-[0.13em]
                              text-mintDeep mb-3">
                  {cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item}
                      className="font-mono text-[0.72rem] px-2.5 py-1 bg-paper
                                 border border-ink/[0.08] text-inkSoft rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SecurityPanel() {
  return (
    <div>
      <h2 className="text-[2.1rem] sm:text-[2.4rem] font-bold tracking-[-0.03em]
                     leading-[1.15] mb-6 max-w-2xl">
        Find the holes first.<br />
        <span className="text-outline">Before attackers do.</span>
      </h2>
      <p className="font-mono text-[0.875rem] text-gray-400 leading-[1.9] max-w-xl mb-6">
        I help businesses find and fix their security holes before attackers exploit them —
        protecting customer data, uptime, and customer trust.
      </p>
      <div className="flex flex-wrap gap-2.5 mb-16 max-w-3xl">
        {SEC_SERVICES.map(s => (
          <span key={s}
            className="font-mono text-[0.72rem] px-3 py-1.5 border border-security/20
                       text-security/80 rounded-sm bg-security/[0.04]">
            {s}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-10 lg:gap-16">
        <div>
          <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.16em]
                         text-gray-600 mb-5">
            Projects
          </h3>
          <div className="flex flex-col gap-px bg-security/[0.08] border border-security/15
                          rounded-lg overflow-hidden">
            {SEC_PROJECTS.map((p) => (
              <article
                key={p.id}
                className="group bg-bg hover:bg-surface transition-colors duration-200
                           p-6 sm:p-8 border-l-2 border-security/40"
              >
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="font-mono text-[0.6rem] text-gray-600 tracking-widest">
                    {p.id}
                  </span>
                  <span className="font-mono text-[0.58rem] uppercase tracking-[0.1em]
                                   px-2 py-0.5 bg-security/10 text-security
                                   border border-security/25 rounded">
                    {p.status}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg tracking-tight
                               leading-snug mb-3 group-hover:text-security
                               transition-colors duration-200">
                  {p.title}
                </h4>
                <p className="font-mono text-[0.82rem] text-gray-400 leading-[1.85] max-w-md mb-4">
                  {p.desc}
                </p>
                {p.tags && (
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag}
                        className="font-mono text-[0.62rem] uppercase tracking-[0.07em]
                                   px-2.5 py-1 bg-surface border border-white/[0.07]
                                   text-gray-500 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.16em]
                         text-gray-600 mb-5">
            Technical skills
          </h3>
          <div className="flex flex-col gap-6">
            {SEC_SKILLS.map(({ cat, items }) => (
              <div key={cat}>
                <p className="font-mono text-[0.63rem] uppercase tracking-[0.13em]
                              text-security mb-3">
                  {cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item}
                      className="font-mono text-[0.72rem] px-2.5 py-1 bg-surface2
                                 border border-security/10 text-gray-400 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Console() {
  const [activeTab, setActiveTab] = useState(() => (
    window.location.hash === '#security' ? 'security' : 'software'
  ))
  const activeTabRef = useRef(activeTab)
  const isSoftware = activeTab === 'software'

  const sectionRef   = useRef(null)
  const wrapRef       = useRef(null)
  const swRef          = useRef(null)
  const secRef         = useRef(null)
  const prevHeightRef  = useRef(null)
  const isFirstRender  = useRef(true)
  const animatingRef   = useRef(false)

  useEffect(() => { activeTabRef.current = activeTab }, [activeTab])

  // Scroll-entrance for the section as a whole
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.console-label', {
          clipPath: 'inset(0 100% 0 0)', duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: '.console-label', start: 'top 88%', once: true },
        })
        gsap.from('.console-switch', {
          opacity: 0, y: 16, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.console-switch', start: 'top 88%', once: true },
        })
        gsap.from(wrapRef.current, {
          opacity: 0, y: 24, duration: 0.7, ease: 'power3.out', delay: 0.1,
          scrollTrigger: { trigger: wrapRef.current, start: 'top 85%', once: true },
        })
      }, sectionRef)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  // Single entry point for switching tabs — used by clicks, keyboard nav, and hash sync
  const switchTo = (tab) => {
    if (tab !== 'software' && tab !== 'security') return
    if (tab === activeTabRef.current || animatingRef.current) return

    window.history.replaceState(null, '', `#${tab}`)

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setActiveTab(tab)
      return
    }

    animatingRef.current = true
    const outEl = activeTabRef.current === 'software' ? swRef.current : secRef.current
    if (wrapRef.current) prevHeightRef.current = wrapRef.current.offsetHeight
    gsap.to(outEl, {
      opacity: 0, y: -10, duration: 0.2, ease: 'power2.in',
      onComplete: () => setActiveTab(tab),
    })
  }

  // Deep-link sync: nav links and Hero CTAs use plain #software / #security anchors
  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash.slice(1)
      if (h === 'software' || h === 'security') switchTo(h)
    }
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Fade the new panel in and tween the wrapper height to match it
  useLayoutEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return }
    const wrap = wrapRef.current
    const inEl = activeTab === 'software' ? swRef.current : secRef.current
    if (!wrap || !inEl) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      gsap.set(inEl, { opacity: 1, y: 0 })
      gsap.set(wrap, { height: 'auto' })
      animatingRef.current = false
      return
    }

    const endHeight = wrap.scrollHeight
    gsap.set(wrap, { height: prevHeightRef.current })
    gsap.set(inEl, { opacity: 0, y: 10 })
    gsap.to(wrap, {
      height: endHeight, duration: 0.4, ease: 'power2.inOut',
      onComplete: () => { gsap.set(wrap, { height: 'auto' }); animatingRef.current = false },
    })
    gsap.to(inEl, { opacity: 1, y: 0, duration: 0.3, delay: 0.08, ease: 'power2.out' })
  }, [activeTab])

  const onTabKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = isSoftware ? 'security' : 'software'
    switchTo(next)
    requestAnimationFrame(() => {
      document.getElementById(next === 'software' ? 'tab-software' : 'tab-security')?.focus()
    })
  }

  const mutedTextClass = isSoftware
    ? 'text-ink/45 hover:text-ink/70'
    : 'text-gray-500 hover:text-gray-300'

  return (
    <>
      {/* Anchor targets for #software / #security deep links — both land on this section */}
      <span id="software" className="block h-0 w-0" aria-hidden="true" />
      <span id="security" className="block h-0 w-0" aria-hidden="true" />

      <section
        ref={sectionRef}
        aria-label="Software and security work"
        data-console={activeTab}
        className={`relative z-10 py-24 sm:py-32 border-y transition-colors duration-500
                    ${isSoftware ? 'bg-paperDeep text-ink border-ink/[0.08]' : 'bg-bg border-white/[0.06]'}`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">

          {/* Shared eyebrow — stable identity, accent tracks the active console */}
          <div className={`console-label flex items-center gap-3 mb-10 font-mono text-[0.68rem]
                          uppercase tracking-[0.16em] transition-colors duration-500
                          ${isSoftware ? 'text-mintDeep' : 'text-security'}`}>
            <span>
              02 — Work
              <span className="terminal-cursor" aria-hidden="true" />
            </span>
            <span className={`block flex-1 max-w-[80px] h-px transition-colors duration-500
                              ${isSoftware ? 'bg-ink/10' : 'bg-white/10'}`} aria-hidden="true" />
          </div>

          {/* Toggle switch */}
          <div
            role="tablist"
            aria-label="Choose console"
            className={`console-switch relative inline-flex items-center rounded-lg border p-1 mb-14
                        font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-colors duration-500
                        ${isSoftware ? 'border-ink/10 bg-ink/[0.04]' : 'border-white/10 bg-white/[0.04]'}`}
          >
            <span
              aria-hidden="true"
              className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-md
                          transition-[transform,background-color] duration-300 ease-in-out
                          ${isSoftware ? 'bg-mintDeep translate-x-0' : 'bg-security translate-x-[calc(100%+4px)]'}`}
            />
            <button
              type="button"
              role="tab"
              id="tab-software"
              aria-selected={isSoftware}
              aria-controls="panel-software"
              tabIndex={isSoftware ? 0 : -1}
              onClick={() => switchTo('software')}
              onKeyDown={onTabKeyDown}
              className={`relative z-10 px-5 py-2 rounded-md transition-colors duration-200
                          ${isSoftware ? 'text-paper' : mutedTextClass}`}
            >
              &gt; Software
            </button>
            <button
              type="button"
              role="tab"
              id="tab-security"
              aria-selected={!isSoftware}
              aria-controls="panel-security"
              tabIndex={!isSoftware ? 0 : -1}
              onClick={() => switchTo('security')}
              onKeyDown={onTabKeyDown}
              className={`relative z-10 px-5 py-2 rounded-md transition-colors duration-200
                          ${!isSoftware ? 'text-bg' : mutedTextClass}`}
            >
              &gt; Security
            </button>
          </div>

          {/* Panels — both mounted, inactive one absolutely positioned + inert for the crossfade */}
          <div ref={wrapRef} className="relative">
            <div
              ref={swRef}
              role="tabpanel"
              id="panel-software"
              aria-labelledby="tab-software"
              aria-hidden={!isSoftware}
              inert={!isSoftware ? true : undefined}
              className={isSoftware ? 'relative' : 'absolute inset-0 top-0 opacity-0 pointer-events-none'}
            >
              <SoftwarePanel />
            </div>
            <div
              ref={secRef}
              role="tabpanel"
              id="panel-security"
              aria-labelledby="tab-security"
              aria-hidden={isSoftware}
              inert={isSoftware ? true : undefined}
              className={!isSoftware ? 'relative' : 'absolute inset-0 top-0 opacity-0 pointer-events-none'}
            >
              <SecurityPanel />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
