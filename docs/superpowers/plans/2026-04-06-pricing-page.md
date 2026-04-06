# Pricing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a custom `/pricing` page with direct Bolus-aligned copy, a working monthly/annual toggle, and plan cards for Starter, Professional, Professional Cloud, and Enterprise.

**Architecture:** Move pricing content into a small config module, render a dedicated Astro route for `/pricing`, and use a small client script to switch displayed billing state. Keep the page visually consistent with the home page by reusing the same typography rules and restrained clinical styling.

**Tech Stack:** Astro, TypeScript, scoped Astro CSS, Vitest

---

### Task 1: Add a failing pricing page test

**Files:**
- Create: `site/tests/components/pricing-page.test.ts`
- Test: `site/tests/components/pricing-page.test.ts`

- [ ] Step 1: Write a failing test for the pricing page config and route source
- [ ] Step 2: Run `npm test -- tests/components/pricing-page.test.ts` in `site/` and confirm it fails because the new page/config do not exist yet

### Task 2: Add pricing page configuration

**Files:**
- Create: `site/src/config/pricing-page.ts`
- Test: `site/tests/components/pricing-page.test.ts`

- [ ] Step 1: Define hero copy, billing periods, and plan data in a typed config
- [ ] Step 2: Keep plan names free of the `Bolus` prefix and encode rounded monthly values
- [ ] Step 3: Re-run the targeted test and confirm remaining failures are now about the route markup

### Task 3: Build the custom Astro pricing route

**Files:**
- Create: `site/src/pages/pricing.astro`
- Modify: `site/src/config/site-manifest.ts`
- Test: `site/tests/components/pricing-page.test.ts`

- [ ] Step 1: Render hero copy, toggle, three-card grid, and enterprise row
- [ ] Step 2: Make `Professional` the strongest visual card
- [ ] Step 3: Make `Professional Cloud` visibly coming soon while still showing price
- [ ] Step 4: Add a small browser script to swap displayed billing values and labels
- [ ] Step 5: Re-run the targeted test and confirm it passes

### Task 4: Verify the site

**Files:**
- Test: `site/tests/components/pricing-page.test.ts`
- Test: `site/tests/config/site-manifest.test.ts`

- [ ] Step 1: Run `npm test -- tests/components/pricing-page.test.ts`
- [ ] Step 2: Run `npm test`
- [ ] Step 3: Run `npm run check`
- [ ] Step 4: Run `npm run build`
- [ ] Step 5: Review the page copy and structure against the approved requirements
