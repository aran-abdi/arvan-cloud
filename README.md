# Arvan

Next.js dashboard app with a shared design system, feature-based architecture, and DummyJSON as the API.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Path | What |
|------|------|
| `/login` | Sign in |
| `/dashboard/articles` | Articles (requires auth) |
| `/docs` | Developer docs, component playground, tokens |

## Scripts

```bash
npm run dev        # development server
npm run build      # production build
npm start          # serve production build
npm run lint       # ESLint
npm test           # Vitest (watch)
npm run test:run   # Vitest (CI)
```

## Documentation

Full contributor guides live in the in-app docs:

**[http://localhost:3000/docs/guides/getting-started](http://localhost:3000/docs/guides/getting-started)**

Topics covered:

- Getting started & environment
- Project structure
- Architecture (features, actions, API)
- Auth & sessions
- Design system
- Internationalization
- Testing
- Conventions

Component APIs and design tokens are under `/docs/components` and `/docs/tokens`.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- CSS Modules + design tokens (`src/styles/tokens.css`)
- Vitest + Testing Library
- DummyJSON for auth and posts

## Note for agents / Next.js 16

This version has breaking changes versus older Next.js. Prefer the guides under `node_modules/next/dist/docs/` before changing routing or request interception. Auth guards use `src/proxy.ts`.
