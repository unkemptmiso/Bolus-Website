# Bolus Website Framework

## Purpose

This project is the production-oriented skeleton for the Bolus website. It is intentionally heavier on architecture and route contracts than on polished frontend execution.

The current goal is to give future agents a stable base for:

- marketing page development
- React island work on specific interactive surfaces
- Cloudflare-compatible API expansion
- auth, Stripe, and app-handoff integration work later

## Core Decisions

- Astro is the default rendering engine for all marketing routes.
- React is installed, but should only be used for isolated interactive islands.
- Cloudflare is the deployment target and server runtime boundary.
- Runtime configuration is optional for now and validated through Zod.
- Styling is token-based plain CSS so frontend iterations can change visual execution without rewriting the framework.

## Route Model

### Static marketing entry points

- `/`
- `/pricing`
- `/simulator`
- `/records`
- `/business`
- `/compare/paper-charts`
- `/compare/maps-anesthesia`
- `/security`
- `/support`
- `/privacy`
- `/terms`
- `/login`
- `/app`

### API placeholders

- `/api/health`
- `/api/auth/session`
- `/api/checkout`
- `/api/app-handoff`

## Where Things Live

### Content and information architecture

- `src/config/site-manifest.ts`

This file is the source of truth for:

- page metadata
- hero copy scaffolding
- section primitives
- header navigation
- footer navigation
- route generation for non-homepage marketing pages

If an agent adds or removes a page, this should be the first file they touch.

### Shared layout and rendering

- `src/layouts/BaseLayout.astro`
- `src/components/content/PageTemplate.astro`
- `src/components/content/PageSections.astro`
- `src/components/site/Header.astro`
- `src/components/site/Footer.astro`
- `src/components/seo/SeoHead.astro`

These files define the reusable rendering pipeline for manifest-driven pages.

### Server framework

- `src/lib/server/runtime-env.ts`
- `src/lib/server/api-response.ts`
- `src/pages/api/*`

These files define the backend-oriented skeleton:

- runtime env loading
- integration mode detection
- consistent JSON envelopes
- API route contracts for future implementation

## Integration Strategy

### Auth

`runtime-env.ts` currently treats auth as:

- `mock` when no JWT secret is present
- `configured` when credentials are present

Future auth work should keep the existing `/api/auth/session` contract unless there is a strong reason to version it.

### Stripe

`/api/checkout` is intentionally a mock contract right now. It already distinguishes between:

- mocked Stripe state
- configured Stripe state

Future Stripe work should replace the response internals, not the endpoint shape.

### App handoff

`/api/app-handoff` is the place to centralize:

- App Store redirects
- login handoff logic
- future dashboard routing logic

This keeps app entry behavior out of page components.

## Testing

Current tests focus on framework invariants:

- `tests/config/site-manifest.test.ts`
- `tests/server/runtime-env.test.ts`

They verify:

- route uniqueness
- header navigation budget
- footer pillar structure
- runtime config mode detection

When agents add new framework rules, prefer adding tests here before implementation.

## Recommended Next Work

1. Replace placeholder copy with finalized production copy from guidance docs.
2. Add real assets and product screenshots under `public/` or Astro image pipelines.
3. Introduce the first isolated React island on `/simulator` or `/login`.
4. Connect `/api/checkout` to real Stripe session creation.
5. Implement real auth verification and app shell state.
