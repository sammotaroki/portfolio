# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience: startups and small businesses evaluating Samm Motaroki for remote freelance/contract work — not full-time employers. Two engagement tracks share one audience: software engineering (full-stack web / AI-powered tools) and security engagements (penetration testing / vulnerability assessment).

## Product Purpose

A personal portfolio site that converts visitors into paid freelance/contract inquiries by presenting Samm Motaroki's dual capability as a software engineer and security researcher.

## Positioning

The dual focus is the differentiator, not a career hedge: understanding how software breaks makes the builder work stronger, and building real systems makes the security findings more actionable. A builder-only or pentester-only competitor could not truthfully claim both halves.

## Operating Context

Remote, globally available freelance/contract work. Two named engagement tracks, each with its own section and CTA: software development ("Software that ships.", `#software`) and security ("Security that holds.", `#security`).

## Capabilities and Constraints

- Software: React/Next.js, TypeScript, Node.js, Python, PostgreSQL, Redis, Tailwind CSS, Docker, CI/CD (GitHub Actions), AWS (EC2, S3), Linux/Nginx.
- Security: penetration testing / vulnerability assessment.
- Résumé download is wired to `/public/resume.pdf` but the file has not been added yet.
- Headshot photo has not been added yet (About section currently shows a placeholder).

## Brand Commitments

- Name: Samm Motaroki, based in Tanzania.
- Tagline pairing: "Software that ships." / "Security that holds."
- Handles: GitHub `sammotaroki`, TryHackMe `rawky`.
- Contact: sammotaroki@gmail.com.

## Evidence on Hand

- Certifications: Certificate of Penetration Testing (iLab Africa, Strathmore University); TryHackMe Jr Penetration Tester path (tryhackme.com/p/rawky). Active picoCTF player (username: sammotaroki). Not currently displayed on the page (the Credentials & Training card was removed from the Security panel by request) but still true and citable if the user asks for it back. More credentials may be added later — re-check this file rather than assuming the list is final.
- Real shipped projects (rendered live via `Console.jsx`'s Software panel, each tagged with a type label): Triage Engine (flagship, AI-powered CV screening with Claude — type: HR Tech, `github.com/sammotaroki/Triage-Engine`), Portfolio Backtester (Next.js stock allocation simulator — type: FinTech, `github.com/sammotaroki/portfolio-backtester`), Nile Hotel (hotel management UI — type: Hospitality, `github.com/sammotaroki/nile-hotel`), Wellness & Cosmetics (beauty/cosmetics e-commerce for the Kenyan market, Next.js storefront + admin console with M-Pesa Daraja STK Push payments — type: E-commerce, repo `github.com/sammotaroki/wellness-cosmetics` is **private**, so the card shows no Code link, just a "Private" label — don't add a repo link for it unless the user says it's been made public).
- "Tea Shop" was removed: its linked repo (`github.com/sammotaroki/tea-shop`) 404s — confirmed via the live `github.com/sammotaroki?tab=repositories` listing, which has no repo by that name. "Buyer" (Android e-commerce app, confirmed via its README) was tried as the e-commerce slot first, then swapped out for the user's actual, more current e-commerce project (Wellness & Cosmetics) once named. A repo named `e-shop` also exists but has no README/description confirming its purpose — not used.
- Real security projects (rendered live via `Console.jsx`'s Security panel, section relabeled "Projects", each with a Completed/In progress status badge): (1) a self-scoped web application penetration test against OWASP Juice Shop with a full report and CVSS v3.1 scoring — status: Completed; (2) LLM application security research building a deliberately vulnerable RAG chatbot to demonstrate OWASP LLM Top 10 issues — status: In progress; (3) Home SOC Lab, a self-hosted detection-engineering lab (Wazuh, Suricata, Elastic Stack, Kibana) built and in ongoing active use for practicing detection/triage/investigation — status: Completed (build), continuously used.
- Security technical-skills grid includes a SOC category: Wazuh, Suricata, Elastic Stack (ELK), Kibana — matching the Home SOC Lab tooling.
- `App.jsx` renders `Hero`, `About`, `Console` (merged Software/Security toggle component), `Contact`. `Projects.jsx` and `Skills.jsx` are dead files, not part of the live site — they hold placeholder/template content (generic github.com/example.com links, an unverifiable "200+ engineers daily" claim, fabricated project names like DevFlow/Quanta UI/Pulse Analytics). Do not cite them as evidence, polish them as if real, or use them as a pattern to invent further fake projects/metrics. Flag to the user that these two files are unused and ask before deleting or resurrecting them.

## Product Principles

- Lead with the combined software + security capability; never split into two separate personas or pages.
- Freelance/contract framing throughout — availability language and CTAs address hiring for engagements, not full-time roles.
- Never fabricate project metrics, client names, testimonials, or credentials beyond what is confirmed here.
- Security credibility now rests on real projects (Juice Shop pentest, LLM security research, Home SOC Lab) plus certifications, not certifications alone.
