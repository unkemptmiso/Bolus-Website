# Bolus Website

Production-oriented Astro skeleton for the Bolus marketing site, designed to keep the public experience lean while giving future agents a stable backend, route, and content framework to extend.

## Stack

- Astro 6 with Cloudflare adapter
- React islands for future interactive surfaces
- Framer Motion installed for isolated animation work later
- Zod-based runtime config parsing
- Vitest for framework-level tests

## Commands

- `npm run dev` starts Astro locally
- `npm run build` builds the Cloudflare-ready production bundle
- `npm run check` runs Astro's type and route checks
- `npm run test` runs the architecture tests
- `npm run generate-types` refreshes Cloudflare worker bindings types

## Project Shape

```text
site/
├── docs/
│   └── architecture/
├── public/
├── src/
│   ├── components/
│   ├── config/
│   ├── layouts/
│   ├── lib/
│   │   └── server/
│   ├── pages/
│   │   └── api/
│   └── styles/
├── tests/
└── wrangler.jsonc
```

## Framework Decisions

- Marketing pages are content-driven through `src/config/site-manifest.ts`.
- The header/footer/navigation rules from the guidance docs are encoded as typed data and guarded by tests.
- Runtime credentials are optional for now, but the server layer knows when auth or Stripe are mocked versus configured.
- API routes return structured JSON so real vendor integrations can drop in later without changing the public contract.
- Styling is based on plain CSS tokens first, which keeps the framework stable while frontend work evolves.

## Environment

Create a local `.env` file from `.env.example` when you want to test real configuration.
