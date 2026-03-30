# Section 5 Export Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add homepage section 5 as a restrained editorial split with export-focused copy on the left and a large cropped record preview on the right.

**Architecture:** Create a dedicated `HomeExportSection.astro` component and mount it after `HomeWorkflowSection` on the homepage. Use CSS to build a premium cropped-record preview with light framing and native typography, keeping the section minimal and static so it feels like the payoff after the interactive workflow section.

**Tech Stack:** Astro, CSS, Vitest

---

### Task 1: Lock section 5 into tests with a failing contract

**Files:**
- Create: `site/tests/components/home-export-section.test.ts`
- Modify: `site/src/pages/index.astro`
- Modify: `site/src/styles/global.css`

- [ ] **Step 1: Write the failing test**

Add a new source-contract test that expects:
- `HomeExportSection` to be imported and mounted after `HomeWorkflowSection`
- the approved section-5 headline and support copy
- the four export proof points
- a split layout with left-side copy and right-side preview
- a cropped export preview structure and related CSS hooks

- [ ] **Step 2: Run the targeted test to verify it fails**

Run: `npm test -- tests/components/home-export-section.test.ts`
Expected: FAIL because section 5 does not exist yet.

### Task 2: Build the section-5 component

**Files:**
- Create: `site/src/components/content/HomeExportSection.astro`
- Modify: `site/src/pages/index.astro`
- Test: `site/tests/components/home-export-section.test.ts`

- [ ] **Step 1: Create the export-section component**

Render:
- eyebrow if useful, or go straight into the headline
- approved headline
- approved support copy
- four short export proof points
- a right-side cropped export preview

- [ ] **Step 2: Mount section 5 on the homepage**

Import `HomeExportSection` in `site/src/pages/index.astro` and mount it directly after `HomeWorkflowSection`.

- [ ] **Step 3: Re-run the targeted test**

Run: `npm test -- tests/components/home-export-section.test.ts`
Expected: FAIL only on missing style hooks if the component and mounting are correct.

### Task 3: Style the editorial split and cropped export preview

**Files:**
- Modify: `site/src/styles/global.css`
- Test: `site/tests/components/home-export-section.test.ts`

- [ ] **Step 1: Add the section layout**

Create section-5 styles for:
- white / near-white background
- two-column editorial split on desktop
- stacked layout on mobile
- typography that matches the guidance

- [ ] **Step 2: Add the cropped export preview styling**

Create a large cropped document preview with:
- light framing
- subtle border
- restrained shadow
- structured internal rows to imply a polished PDF export

- [ ] **Step 3: Add quiet motion**

If needed, use a light reveal treatment only.
Keep the section static and calm relative to section 4.

- [ ] **Step 4: Re-run the targeted test**

Run: `npm test -- tests/components/home-export-section.test.ts`
Expected: PASS

### Task 4: Verify the homepage

**Files:**
- Test: `site/tests/components/home-export-section.test.ts`
- Test: project-wide tests

- [ ] **Step 1: Run targeted export-section verification**

Run: `npm test -- tests/components/home-export-section.test.ts`
Expected: PASS

- [ ] **Step 2: Run the full suite**

Run: `npm test`
Expected: PASS

- [ ] **Step 3: Run the production build**

Run: `npm run build`
Expected: PASS
