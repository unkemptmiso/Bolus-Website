# Header Scroll Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the desktop sticky header pull the Bolus mark and CTA closer to the nav on scroll with smoother motion, hidden wordmark text, and reduced jitter near the top threshold.

**Architecture:** Keep the existing Astro header structure, but tune the condensed state with transform-led motion on the brand and CTA while stabilizing the scroll state logic with separate enter and exit thresholds. Add a lightweight source-contract test so the condensed motion rules remain intentional.

**Tech Stack:** Astro, CSS, inline browser script, Vitest

---

### Task 1: Lock the motion contract with a failing test

**Files:**
- Create: `site/tests/components/header-scroll-motion.test.ts`
- Modify: `site/src/components/site/Header.astro`
- Modify: `site/src/styles/global.css`

- [ ] **Step 1: Write the failing test**

Add a Vitest source-contract test that expects:
- separate condensed enter and exit thresholds in the header script
- scroll-state updates only when the state changes
- condensed brand and CTA transforms in the desktop header CSS

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- header-scroll-motion`
Expected: FAIL because the current header script has a single threshold and the current condensed CSS does not use the tighter transform-led motion contract.

### Task 2: Implement smoother condensed motion

**Files:**
- Modify: `site/src/components/site/Header.astro`
- Modify: `site/src/styles/global.css`

- [ ] **Step 1: Stabilize scroll state transitions**

Add separate enter and exit thresholds plus a cached `headerState` guard so the DOM dataset only updates when the desktop header actually changes state.

- [ ] **Step 2: Tune condensed desktop motion**

Use shared motion timing variables, inward `translate3d(...)` transforms on the left brand and right CTA, tighter condensed spacing, and a cleaner wordmark collapse so the nav stays visually stable while the outer elements tuck inward.

- [ ] **Step 3: Preserve mobile behavior**

Keep the current mobile header layout and ensure the condensed desktop transforms do not leak into the mobile breakpoint rules.

### Task 3: Verify the change

**Files:**
- Test: `site/tests/components/header-scroll-motion.test.ts`

- [ ] **Step 1: Run targeted tests**

Run: `npm test -- header-scroll-motion`
Expected: PASS

- [ ] **Step 2: Run broader project verification**

Run: `npm test`
Expected: PASS

Run: `npm run build`
Expected: PASS
