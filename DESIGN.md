---
name: Samm Motaroki — Portfolio
description: A dark, terminal-voiced portfolio splitting one engineer into two operator consoles — software (mint) and security (amber).
colors:
  bg: "#080a0f"
  surface: "#0e1117"
  surface2: "#161b24"
  terminal-mint: "#4fffb0"
  warning-amber: "#e8a020"
  paper: "#f5f7f4"
  paper-deep: "#e8ece7"
  ink: "#0b120e"
  ink-soft: "#4a564e"
  mint-deep: "#0c6640"
typography:
  display:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(2.8rem, 7vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(2.1rem, 4vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Syne, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
  full: "9999px"
spacing:
  section-y: "6rem"
  section-y-lg: "8rem"
  container-x: "4rem"
  card-p: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.terminal-mint}"
    textColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "#ffffff"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#9ca3af"
    rounded: "{rounded.md}"
    padding: "12px 28px"
  tag:
    backgroundColor: "{colors.surface2}"
    textColor: "#9ca3af"
    rounded: "{rounded.md}"
    padding: "4px 10px"
---

# Design System: Samm Motaroki — Portfolio

## Overview

**Creative North Star: "The Dual Console"**

The site is two operator consoles sharing one dark chassis. One engineer, one physical shell, two lit-up disciplines: software work reads through a mint console, security work through an amber one. The chassis itself — near-black background, hairline dividers, monospace as the default speaking voice — never changes; only the accent color and the tone of the copy shift when you cross from one track to the other.

The voice is terminal-native, not terminal-themed: section labels open with `> LABEL` and a blinking cursor, body copy runs in DM Mono instead of a humanist sans. This isn't decorative retro-computing; it's the visual claim that the person behind the site actually lives in a terminal.

Depth is chrome-free. Nothing sits on a shadow. Structure comes from 1px hairline borders (dividers between list rows, section rules, card outlines at ~7% white) and from a single accent color rationed to the elements that matter — headline underscores, active nav, primary CTAs, the currently-relevant console's labels.

**Key Characteristics:**
- Near-black chassis (#080a0f) with two accent lanes: Terminal Mint for software, Warning Amber for security.
- Software and Security share one physical section, switched by a toggle control rather than stacked as separate scroll sections — the Powered-On Rule is now a literal, clickable state change, not just a color choice (see Components → Console Toggle).
- The Software console is powered on: it inverts to a light paper surface (ink-on-paper) while every other section stays on the dark chassis — see "The Powered-On Rule" below.
- Monospace (DM Mono) is the default body/label voice; Syne (grotesque sans, heavy weights) is reserved for display and headline moments only.
- Zero ambient shadows; structure is hairline borders and 1px-gap row dividers, not elevation.
- Terminal-native motifs: `>_` command-style section labels, blinking text cursor. Native OS pointer throughout — no custom cursor.
- Restraint: accent color appears on <10% of any screen — links, active states, one CTA, one border.

## Colors

Two saturated accents on a near-black neutral scale; each accent is scoped to one console and essentially never appears in the other's territory.

### Primary
- **Terminal Mint** (#4fffb0): the software console's signal color, but only against the dark chassis — Hero/About CTAs, hovers, focus ring. It reads as a bright light in a dark room; on a light surface it nearly disappears (~1.2:1 contrast) so it never appears there directly.
- **Deep Terminal Mint** (#0c6640): the same hue, darkened for legibility on paper. This is Terminal Mint's on-light counterpart — text, borders, and icons inside the Software section use this, never the bright value. (≥5.7:1 on both paper tones.)

### Secondary
- **Warning Amber** (#e8a020): the security console's signal color. Scoped entirely to the Security section — its section label, service tags, project accents, and skill tags. Never used for a primary action outside that section.

### Neutral (dark chassis)
- **Void** (#080a0f) — `bg`: page background, primary button text color (inverted on mint).
- **Panel** (#0e1117) — `surface`: raised dark sections (Contact band), row hover states.
- **Deep Panel** (#161b24) — `surface2`: tag/pill backgrounds, nested hover states, mobile menu tooltip fill.
- **Signal White** (#e8eaf0): default body text color set at the `<body>` level (the CSS default; most visible prose overrides to the gray scale below via Tailwind's mono utility classes).
- **Gray scale** (Tailwind default gray-200 → gray-700): gray-200 for emphasized inline text, gray-400 for standard body copy, gray-600 for tertiary labels and disabled-feeling text (e.g. "Blog — Coming soon"), gray-700 for the About-section headshot placeholder glyph.

### Neutral (light console — Software section only)
- **Paper** (#f5f7f4) — `paper`: raised row/card surfaces inside Software, at rest.
- **Deep Paper** (#e8ece7) — `paperDeep`: the Software section's own background (one step deeper than its rows, mirroring how `surface` sits one step off `bg` on the dark side); also tag/pill backgrounds.
- **Ink** (#0b120e) — `ink`: headings and primary text on paper (17.6:1 on paper).
- **Soft Ink** (#4a564e) — `inkSoft`: secondary body text on paper, tinted from Ink rather than a neutral gray (7.1:1 on paper).
- Row hover state lightens further to pure white, the inverse of the dark chassis's hover-toward-surface step.

### Named Rules
**The One Console Rule.** A section belongs to exactly one accent. Software-track UI never borrows amber, Security-track UI never borrows mint; the two consoles are legible apart even with labels hidden.

**The Rationed Accent Rule.** Accent color marks meaning (active, primary, current section), not decoration. Default state is neutral gray/white on the void; color is earned by state (hover, featured, focus) or role (one primary CTA per view).

**The Powered-On Rule.** Software is the one console rendered powered-on: a light, ink-on-paper surface, while Hero, About, Security, and Contact stay on the dark chassis. The inversion is total (background, text, borders, hover states) so Software never looks like a broken dark-mode component — it's a second register of the same system, using Deep Terminal Mint in place of bright Terminal Mint throughout.

## Typography

**Display Font:** Syne (with sans-serif fallback)
**Body/Label Font:** DM Mono (with monospace fallback)

**Character:** A geometric, slightly eccentric grotesque (Syne) for the handful of moments that need to shout, dropped into a page whose default voice is monospace — clipped, technical, terminal-adjacent. The pairing reads as "engineer's handwriting on top of a code editor," not a typical display/body sans pairing.

### Hierarchy
- **Display** (800, `clamp(2.8rem, 7vw, 5.5rem)`, leading 1.02, tracking -0.04em): Hero H1 only. Two stacked lines, second line rendered as an outlined/hollow variant (`text-outline`: transparent fill, 1px white-22%-opacity stroke).
- **Headline** (700, `clamp(2.1rem, 4vw, 2.8rem)`, leading 1.15, tracking -0.03em): section H2s (About, Software, Security, Contact). Same two-line, second-line-outlined treatment as Display, at smaller scale.
- **Title** (700, ~1.125rem–1.25rem, tracking tight): project card titles (H3/H4), nav logo mark.
- **Body** (400, 0.8–0.875rem, leading 1.85–1.9, DM Mono): all paragraph copy, rendered in gray-400 by default with gray-200 spans for emphasis. Notably narrow and dense for a body size — the monospace choice and tight line-height give it a "log output" density rather than an editorial reading rhythm.
- **Label** (400, 0.6–0.72rem, uppercase, tracking 0.08em–0.16em, DM Mono): section index labels (`01 — About`, `> SOFTWARE`), nav links, buttons, tags/pills, status badges. This is the single most-used type role on the page.

### Named Rules
**The Mono-Voice Rule.** Anything that isn't a headline speaks in DM Mono, uppercase-and-tracked when it's a label. Syne only appears in Display/Headline/Title roles — it never carries body copy.

## Layout

Single-column, centered content within a `max-w-[1200px]` (nav bar extends to `max-w-[1440px]`) container, with responsive gutters `px-4` (mobile) → `px-8` (sm) → `px-16` (lg). Generous vertical rhythm: `py-24`–`py-32` per major section, so each console gets a full-bleed band of breathing room before the next begins.

Content within a section groups into **hairline-divided rows** rather than free-floating cards: a flex/grid container with a 1px background color acting as the seam (`bg-white/[0.07]` or `bg-security/[0.08]`) creates the divider lines between sibling `bg-bg` rows, avoiding explicit `border-bottom` rules on every item. Featured/flagship rows get a 2px solid left accent border to break the rhythm without breaking the grid.

Skill and case-study groups use responsive CSS grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` or `grid-cols-4`) with `gap-6` between columns. The page is a single scrolling document — no client-side routing, section anchors (`#about`, `#software`, `#security`, `#contact`) drive navigation. `#software` and `#security` both resolve to the same merged Console section (see Components → Console Toggle); which one lands pre-selects the matching tab rather than scrolling to a distinct section. Section index numbering reflects the merge: 01 About, 02 Work (Software/Security), 03 Contact.

## Elevation & Depth

Flat by default: no ambient box-shadows anywhere in the implementation. Depth and separation come entirely from color-value steps (bg → surface → surface2) and 1px hairline borders/dividers at low white-opacity (typically 6–7%).

The one exception is deliberate, not structural: primary CTAs (`Say hello`, `See my work`) emit a soft mint glow — `box-shadow: 0 0 32–40px rgba(79,255,176,0.22–0.3)` — but only on `:hover`, never at rest. It reads as a power-on/active-state cue for the console's one actionable button, not as elevation.

### Named Rules
**The Flat Console Rule.** Surfaces never cast a shadow at rest. The only shadow in the system is the hover-only glow on a primary CTA, and it signals "live/active," not "raised above the page."

## Shapes

Small, consistent radii throughout — `rounded` (4px) is the workhorse for tags, buttons, and card containers, `rounded-lg` (8px) for larger row-group containers, `rounded-sm` (2px) for the small service-tag pills, `rounded-full` for the pulsing status dot and the skip-link's bottom corners. Nothing exceeds 8px; the system stays angular and technical rather than soft.

One recurring signature motif: **corner brackets** — four small L-shaped border marks (`border-t border-l`, etc.) at each corner of the About-section headshot frame, echoing viewfinder/HUD crosshairs. This is the system's one overtly "interface" flourish outside of typography.

## Components

### Buttons
- **Shape:** 4px radius (`rounded`), generous horizontal padding (28px+), label always uppercase DM Mono at ~0.78–0.8rem with 0.08–0.1em tracking.
- **Primary:** Terminal Mint fill, void-colored text, weight 500. Hover swaps fill to white and adds the mint glow (see Elevation).
- **Secondary / Ghost:** Transparent fill, 1px white-15%-opacity border, gray-400 text. Hover changes border+text color to whichever accent the surrounding console owns (mint or amber) rather than filling the button.

### Tags / Pills
- **Style:** `surface2` or `surface` background, hairline border in the console's accent at low opacity (10–25%), uppercase DM Mono ~0.6–0.72rem, 4px radius, tight padding (`px-2.5 py-1` typical).
- **State:** No interactive state on most tags (display-only); tags inside skill lists are static, service-offer tags are static, only nav-adjacent tooltips fade in on hover.

### Cards / Row Containers
- **Corner Style:** 8px radius on the outer row-group wrapper; individual rows inside are square (radius lives on the group, not each row).
- **Background:** `bg-bg` at rest, steps to `surface`/`surface2` on hover.
- **Shadow Strategy:** none (see Elevation & Depth) — separation is the 1px background-color seam between rows plus the hover background shift.
- **Border:** featured/flagship rows get a 2px solid left border in the console's accent; non-featured rows have none beyond the shared seam.
- **Internal Padding:** `p-6 sm:p-8` (24–32px).

### Navigation
- Fixed, full-width, `bg-bg` at 80% opacity with backdrop blur, hairline bottom border. Shrinks vertical padding on scroll (`py-5` → `py-3`) rather than changing background.
- Logo is a Title-weight monogram (`SM`) with a mint full-stop accent character.
- Links: uppercase DM Mono label style, gray-400 at rest, mint on hover — no underline, no background pill.
- Mobile: hamburger → animated three-line-to-X icon; menu is an accordion-style reveal (`max-h` transition) below the bar, not an overlay.

### Console Toggle (signature component)
A two-position segmented switch (`> Software` / `> Security`) that swaps the Work section between its two registers. A sliding pill thumb (Deep Terminal Mint on the Software side, Warning Amber on the Security side) tracks the selection; the inactive label is muted in whichever neutral the current register uses. Real ARIA tabs pattern underneath (`role="tablist"`/`tab`/`tabpanel"`, arrow-key navigation, `aria-selected`), not a decorative click target.

Selecting a tab crossfades the whole section: background, text color, and border hairline all animate together (`transition-colors duration-500`) while the panel content fades out/in and the container's height tweens to match the new panel — no instant layout jump between the shorter and taller panel. Both panels stay mounted; the inactive one is `opacity-0`, `pointer-events-none`, and `inert` so it's invisible, unclickable, and unreachable by keyboard until selected. `#software` and `#security` both drive this same control via `hashchange`, so the nav links and Hero's two CTAs still deep-link straight to the right tab, pre-selected, exactly as when these were separate sections.

## Do's and Don'ts

### Do:
- **Do** keep DM Mono as the voice for every paragraph, label, tag, and nav item; reserve Syne strictly for Display/Headline/Title roles.
- **Do** scope Terminal Mint to software-track UI and Warning Amber to security-track UI; never mix the two within one section.
- **Do** build separation with 1px hairline dividers and background-color steps (bg → surface → surface2), not shadows.
- **Do** ration accent color to state and role (hover, featured, one primary CTA) rather than decorating with it by default.

### Don't:
- **Don't** add ambient box-shadows to cards, rows, or panels — the system is deliberately flat; the only permitted shadow is the hover-only glow on a primary CTA.
- **Don't** use Warning Amber for a general-purpose primary action outside the Security section, or Terminal Mint inside it.
- **Don't** exceed an 8px corner radius anywhere; the angular, technical read depends on staying small and consistent.
- **Don't** use bright Terminal Mint (#4fffb0) for text, borders, or icons on the paper/paperDeep backgrounds — it fails contrast there (~1.2:1). Use Deep Terminal Mint (#0c6640) on any light surface instead.
- **Don't** invert any section besides Software to the light palette without a deliberate re-decision — the Powered-On Rule is a one-console exception, not a toggle.
- **Don't** re-split Software and Security back into separate scroll sections without a deliberate re-decision — they're one Console component now; keep `#software`/`#security` both resolving to it with tab pre-selection.
- **Don't** treat `Projects.jsx` or `Skills.jsx` as design reference — they're unused files with fabricated placeholder content, not part of the live system (see PRODUCT.md Evidence on Hand).
- **Don't** reintroduce a custom cursor (dot, ring, or otherwise) — tried twice and rejected both times as unnatural. Native OS pointer is the confirmed, durable choice.
