# Ahmed Oueslati — Portfolio

Production-ready Next.js 14 portfolio. App Router · TypeScript · Tailwind · Framer Motion.

## Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion (scroll reveals + hover)
- DM Serif Display + DM Sans via `next/font/google`

## Project structure

```
app/
  layout.tsx        Fonts, metadata, root html
  page.tsx          Composes the page
  globals.css       Tailwind + a couple of base rules
components/
  Navbar.tsx        Fixed, blurred, mobile-hides links
  Hero.tsx          Hero portrait + intro
  Projects.tsx      Section header
  ProjectCard.tsx   Card + triple/stacked image grid
  About.tsx         Bio, skills, stats
  CTA.tsx           Dark contact section with email
  Footer.tsx        Copyright + socials
  Reveal.tsx        Reusable scroll-reveal wrapper
data/
  projects.ts       All project content (titles, descriptions, tags, images)
public/
  images/           Project screenshots + hero portrait
```

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Required images

Drop these files in `public/images/`:

- `hero.png` — hero portrait
- `zayzom-lens.jpg`, `zayzom-companies.jpg`, `zayzom-detail.jpg` — Zayzom screenshots
- `ai-diagnostic.jpg` — AI maturity diagnostic screenshot
- `n8n-workflow.jpg` — n8n workflow screenshot

## Editing content

- **Hero copy** — `components/Hero.tsx`
- **Projects** — `data/projects.ts` (title, description, tags, image grid layout)
- **About / skills / stats** — `components/About.tsx`
- **CTA email** — `EMAIL` const in `components/CTA.tsx`
- **Socials** — `socials` array in `components/Footer.tsx`

## Deploy to Vercel + custom domain

1. Push the repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo. Defaults are fine — no env vars needed.
3. After the first deploy, go to **Project → Settings → Domains** and add `ahmedoueslati.com` and `www.ahmedoueslati.com`.
4. Vercel will show DNS records. At your domain registrar:
   - Apex (`ahmedoueslati.com`) → A record `76.76.21.21`
   - `www` → CNAME `cname.vercel-dns.com`
5. Wait for DNS to propagate (usually minutes; up to 48h). Vercel auto-issues SSL.
6. Set `ahmedoueslati.com` as the primary domain so `www` redirects to apex.

The site is already configured for that domain — `metadataBase`, OG URL, and canonical link in `app/layout.tsx` all point to `https://ahmedoueslati.com`.
