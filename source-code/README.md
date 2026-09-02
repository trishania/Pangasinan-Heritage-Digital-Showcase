# Pangasinan Heritage

Student Name: Trishania Neri Marcilla
Selected Framework: Next.js (React)

Live Website:
https://trishania.github.io/Pangasinan-Heritage-Digital-Showcase/

🚀 Quick Start
Prerequisites
Node.js ≥ 18.17.0
npm ≥ 9 (or pnpm ≥ 8 / yarn ≥ 1.22)
Install dependencies
npm install
# or
pnpm install
Run in development mode
npm run dev
# or
pnpm dev

Open http://localhost:3000 to view the site.

Build for production (static export)
npm run build

Output is a fully static site in /out, ready for Vercel, Netlify, or any static host.

Preview the production build
npx serve out
📁 Project Structure
source-code/
├── app/
│   ├── globals.css          # Global styles, CSS custom properties
│   ├── layout.tsx           # Root layout (fonts, metadata, header/footer)
│   ├── page.tsx             # Home page (search + grid + sections)
│   └── sites/
│       └── [slug]/
│           └── page.tsx     # Heritage site detail page (static export)
│
├── components/
│   ├── atoms/               # Level 1 — fundamental UI primitives
│   │   ├── Button.tsx
│   │   ├── ColorTokens.tsx
│   │   ├── Icon.tsx
│   │   ├── Image.tsx
│   │   └── Typography.tsx
│   │
│   ├── molecules/           # Level 2 — composed from atoms
│   │   ├── HeritageCard.tsx
│   │   ├── NavigationItem.tsx
│   │   └── SearchForm.tsx
│   │
│   ├── organisms/           # Level 3 — complex UI sections
│   │   ├── Footer.tsx
│   │   ├── HeaderNavigation.tsx
│   │   └── HeritageGrid.tsx
│   │
│   └── sections/            # Page-level assembler sections
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx
│       └── HeroSection.tsx
│
├── data/
│   └── heritageSites.ts     # Static content data (100% type-safe)
│
├── lib/
│   └── utils.ts             # Shared utilities (cn, clamp, truncate)
│
├── public/
│   └── images/              # Heritage site placeholder images
│
├── tailwind.config.ts       # Design tokens + custom theme
└── next.config.mjs          # Static export + image optimization

🎨 Design System — Atomic Design
Level	Components
Atoms	Button · Typography (Heading, Body, Label, Caption, TagLabel) · ColorTokens · Icon · Image (HeritageImage)
Molecules	HeritageCard · SearchForm · NavigationItem
Organisms	HeritageGrid · HeaderNavigation · Footer
Color Tokens
Token	Hex	Usage
primary-600	#16a34a	Primary CTAs, links, active states
accent-500	#f97316	Secondary CTAs, highlights
ocean-500	#0ea5e9	Coastal category, info
sand-500	#eab308	Historical / cultural category
♿ Accessibility (WCAG 2.1 AA)
Semantic HTML5 landmarks (<header>, <nav>, <main>, <section>, <footer>, <article>)
Skip-to-content link for keyboard users
aria-current="page" on active nav links
aria-expanded, aria-controls on mobile menu toggle
role="search" on search form; aria-live="polite" on result count
All images have descriptive alt text (enforced at TypeScript type level)
Visible :focus-visible ring on all interactive elements
Color contrast ratios meet AA (4.5:1 for body text, 3:1 for large text)

⚡ Performance
Technique	Implementation
Font loading	next/font/google (zero layout shift, preloaded)
Images	next/image with fill, sizes, loading="lazy"
Static export	output: "export" — pure static HTML/CSS/JS
Code splitting	Automatic via Next.js App Router
Below-fold lazy	HeritageCard[lazy=true] for grid index >0
🌐 Deployment

This project is configured for static export (output: "export" in next.config.mjs).

Deploy to Vercel:

npx vercel deploy

Deploy to Netlify: Push to GitHub and connect via Netlify dashboard. Build command: npm run build, Publish directory: out.

📝 Tech Stack
Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS v3 + CSS Custom Properties
Font: Inter (body) + Playfair Display (headings) via next/font
Icons: Inline SVG (zero dependencies)
Deployment: Static export (JAMstack-compatible)
