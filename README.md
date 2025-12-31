# iConcur

Simplifying agreements for everyone. iConcur helps teams draft, understand, and sign contracts with clarity and confidence through intelligent tooling and secure workflows.

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI primitives
- Lucide icons
- Framer Motion (animations)
- Embla Carousel

## Getting Started
### Prerequisites
- Node.js 18+ (recommended: latest LTS)
- npm 10+ or pnpm/yarn

### Setup
```bash
npm install
npm run dev
```
Visit http://localhost:3000

### Scripts
- `npm run dev` – start local development
- `npm run build` – production build
- `npm start` – run the built app
- `npm run lint` – lint the codebase

## Project Overview
### Key Directories
- `app/` – application routes and pages
- `components/` – reusable UI and page sections
  - `landing/` – hero, features, how-it-works, CTA
  - `pricing/` – header, cards (monthly/yearly), FAQ, trust indicators
  - `about/` – hero, stats, mission, values, leadership
  - `auth/` – get started, login headers and form
  - `dashboard/` – layout, header, sidebar, stats, activity, actions
  - `contract/` – drafting and analyzer layouts/components
  - `ui/` – shared UI primitives (button, accordion, switch, etc.)
- `public/` – static assets (e.g., `logo.png`, `mission.png`)
- `app/globals.css` – Tailwind layers and design tokens

### Pages
- `/` – Landing
- `/pricing` – Pricing with billing toggle and FAQ
- `/about` – About Us (mission, values, leadership)
- `/get-started` and `/login` – Auth flows
- `/dashboard` – User dashboard
- `/contract-drafting` – Draft contracts
- `/contract-analyzer` – Analyze contracts with AI insights

## Conventions
- Type-safe React components
- Tailwind utility-first styling and custom tokens
- Reuse UI primitives from `components/ui`
- Prefer existing class names (e.g., `layout-container`, `layout-content-container`)
- No secrets or keys committed to the repo

## Deployment
- Build with `npm run build`
- Deploy on platforms supporting Next.js (e.g., Vercel)

## License
Copyright © 2025 iConcur Inc. All rights reserved.

