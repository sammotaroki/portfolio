# Portfolio — Vite + React + Tailwind CSS

A dark, sleek software engineering portfolio. Built with Vite, React, and Tailwind CSS v3. Deployable to Vercel in one command.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:5173
```

## Customization

All your personal content lives in the component files — no config files to hunt through:

| What to change | File |
|---|---|
| Name, tagline, bio | `src/components/Hero.jsx`, `src/components/About.jsx` |
| Stats (years, projects, etc.) | `src/components/About.jsx` → `stats` array |
| Tech stack | `src/components/Skills.jsx` → `skillGroups` array |
| Projects | `src/components/Projects.jsx` → `projects` array |
| Social links & email | `src/components/Contact.jsx` |
| Nav logo initials | `src/components/Navbar.jsx` |
| Page title / meta | `index.html` |
| Colors & fonts | `tailwind.config.js` |

## Deploy to Vercel (Free)

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts — it auto-detects Vite. Done.

### Option B — Vercel Dashboard (no CLI)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite. Click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

Vercel's free Hobby plan includes: custom domains, HTTPS, global CDN, unlimited deploys.

## Build for Production

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        └── Contact.jsx
```
