# Section 4 Pinned Workflow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn homepage section 4 into a pinned three-stage workflow story with synchronized left-copy and iPhone-screen transitions plus a native iOS-style bottom navigation bar beneath the device.

**Architecture:** Keep the existing `HomeWorkflowSection.astro` entry point, but replace the single-phase placeholder with a three-phase data model rendered into two vertical stacks: one for copy and one for phone screens. Use CSS `sticky` layout and a lightweight inline browser script that maps section scroll progress to CSS custom properties and a phase index, while preserving a readable non-JS fallback and a simpler reduced-motion/mobile experience.

**Tech Stack:** Astro, CSS, inline browser script, Vitest

---

### Task 1: Lock the section-4 interaction contract with failing tests

**Files:**
- Modify: `site/tests/components/home-workflow-section.test.ts`
- Modify: `site/src/components/content/HomeWorkflowSection.astro`
- Modify: `site/src/styles/global.css`

- [ ] **Step 1: Write the failing test**

Expand `site/tests/components/home-workflow-section.test.ts` so it expects:
- all three phase labels: `Pre-Op`, `Intra-Op`, `Post-Op`
- the drafted `Intra-Op` heading and body from the homepage blueprint
- placeholder `Post-Op` heading/body/chips
- bottom navigation labels `Pre-Op`, `Intra-Op`, `Post-Op`
- a pinned/sticky workflow structure such as `data-workflow-section`, `data-workflow-stage`, `data-workflow-copy-track`, `data-workflow-screen-track`
- a scroll progress script using `requestAnimationFrame` or a throttled scroll update
- CSS hooks for sticky layout, tall outer section height, phase viewport masking, and native bottom tab bar styling

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/components/home-workflow-section.test.ts`
Expected: FAIL because the current section only renders a single pre-op state, has no bottom nav, and has no sticky multi-phase scroll hooks.

### Task 2: Refactor section 4 markup into a three-phase data model

**Files:**
- Modify: `site/src/components/content/HomeWorkflowSection.astro`
- Test: `site/tests/components/home-workflow-section.test.ts`

- [ ] **Step 1: Replace the single-phase constant with a workflow phase array**

Create a `workflowPhases` array in `site/src/components/content/HomeWorkflowSection.astro` with three objects:
- `pre-op`
- `intra-op`
- `post-op`

Each object should include:
- `id`
- `label`
- `heading`
- `body`
- `points`
- lightweight screen-state metadata for placeholder rendering

Use:
- existing drafted `Pre-Op` content
- drafted `Intra-Op` content from `Guidance/homepage_copy_blueprint.md`
- explicit placeholder strings for `Post-Op`

- [ ] **Step 2: Render stacked copy states**

Replace the current single `.workflow-section__phase` block and single points list with:
- a persistent intro area for eyebrow, headline, and lede
- a masked phase viewport
- a vertical copy track containing three `.workflow-phase-card` states

Each phase state should include:
- phase label
- mini heading
- body
- three chips

- [ ] **Step 3: Render stacked phone screen states**

Replace the current single placeholder screen with a phone screen track containing three full-height screen panels:
- `Pre-Op` placeholder
- `Intra-Op` placeholder with more timeline-oriented structure
- `Post-Op` placeholder

Keep the phone frame and notch, but ensure the new markup supports vertical translation of the inner screen track.

- [ ] **Step 4: Add the native bottom tab bar markup**

Below the phone frame, render a dedicated bottom nav container with three items:
- `Pre-Op`
- `Intra-Op`
- `Post-Op`

Each item should expose an active-state hook through:
- `data-phase`
- `aria-current`
- or a section-level `data-active-phase`

- [ ] **Step 5: Re-run the targeted test**

Run: `npm test -- tests/components/home-workflow-section.test.ts`
Expected: FAIL, but now only on missing sticky layout styles and missing scroll behavior hooks if the markup refactor is correct.

### Task 3: Build the pinned layout and native iOS tab bar styling

**Files:**
- Modify: `site/src/styles/global.css`
- Test: `site/tests/components/home-workflow-section.test.ts`

- [ ] **Step 1: Convert section 4 into a tall pinned-scroll container**

Update the workflow section CSS so:
- the outer section has enough vertical height for three phases, around `300vh` to `340vh`
- the inner stage uses `position: sticky`
- desktop keeps the left-copy / right-device grid
- the section remains readable if sticky behavior is unsupported

Key selectors to add or update:
- `.workflow-section`
- `.workflow-section__inner`
- `.workflow-section__stage`
- `.workflow-section__copy`
- `.workflow-section__device`

- [ ] **Step 2: Add masked tracks for copy and screen motion**

Add CSS for:
- `.workflow-section__phase-viewport`
- `.workflow-section__phase-track`
- `.workflow-phase-card`
- `.workflow-phone__screen-viewport`
- `.workflow-phone__screen-track`
- `.workflow-phone__panel--preop`
- `.workflow-phone__panel--intraop`
- `.workflow-phone__panel--postop`

Use CSS custom properties such as:
- `--workflow-progress`
- `--workflow-phase-index`
- `--workflow-copy-shift`
- `--workflow-screen-shift`

Drive transforms with `translate3d(...)` so both the copy track and phone screen track can move smoothly.

- [ ] **Step 3: Style the bottom tab bar to match the native iOS reference**

Add a new bar under the phone with:
- translucent light background
- blur/saturation treatment
- faint top border or hairline
- compact spacing
- rounded outer shell
- stronger active item emphasis
- calmer inactive item opacity

Likely selectors:
- `.workflow-tabs`
- `.workflow-tabs__list`
- `.workflow-tabs__item`
- `.workflow-tabs__item.is-active`

- [ ] **Step 4: Preserve responsive and reduced-motion behavior**

At the mobile breakpoint:
- simplify the pinned effect if needed
- keep the section readable in normal document flow
- avoid awkward oversized empty space from the tall section height

Inside `@media (prefers-reduced-motion: reduce)`:
- disable long interpolated transforms
- show a stable readable state without scroll choreography

- [ ] **Step 5: Re-run the targeted test**

Run: `npm test -- tests/components/home-workflow-section.test.ts`
Expected: FAIL only on missing scroll script behavior or active-state logic if the layout/style contract is now present.

### Task 4: Implement scroll-linked phase progression

**Files:**
- Modify: `site/src/components/content/HomeWorkflowSection.astro`
- Modify: `site/src/styles/global.css`
- Test: `site/tests/components/home-workflow-section.test.ts`

- [ ] **Step 1: Add section-level progress hooks**

In `site/src/components/content/HomeWorkflowSection.astro`, add section data hooks such as:
- `data-workflow-section`
- `data-workflow-stage`
- `data-workflow-copy-track`
- `data-workflow-screen-track`
- `data-workflow-tabs`

Expose the current phase on the section root with a dataset field like:
- `data-workflow-active-phase="pre-op"`

- [ ] **Step 2: Add the inline scroll script**

Implement a small inline script that:
- finds the workflow section
- exits early for reduced motion if appropriate
- reads the section’s bounding rect on scroll and resize
- converts the pinned section progress into a clamped `0..1` progress value
- derives the active phase index:
  - `0` for `Pre-Op`
  - `1` for `Intra-Op`
  - `2` for `Post-Op`
- updates CSS custom properties on the section element
- updates the active phase dataset for styling

Use `requestAnimationFrame` to avoid noisy direct scroll writes.

- [ ] **Step 3: Map progress to smooth copy and phone transforms**

Use the script outputs to translate:
- the left copy track upward between phase cards
- the phone screen track upward between screen panels

Keep the motion synchronized, but preserve slightly different easing curves in CSS so the phone feels a touch smoother than the copy.

- [ ] **Step 4: Keep the section resilient without JS**

Ensure the markup order and CSS fallback still produce readable stacked content if the script does not run.

- [ ] **Step 5: Re-run the targeted test**

Run: `npm test -- tests/components/home-workflow-section.test.ts`
Expected: PASS

### Task 5: Verify the full homepage behavior

**Files:**
- Test: `site/tests/components/home-workflow-section.test.ts`
- Test: `site/tests/components/home-solution-section.test.ts`
- Test: project-wide homepage and component tests

- [ ] **Step 1: Run section-4 targeted verification**

Run: `npm test -- tests/components/home-workflow-section.test.ts`
Expected: PASS

- [ ] **Step 2: Run the full test suite**

Run: `npm test`
Expected: PASS

- [ ] **Step 3: Run the production build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Do a manual browser spot-check**

Verify in the rendered homepage that:
- section 4 remains pinned during progression
- copy transitions from `Pre-Op` to `Intra-Op` to `Post-Op`
- the phone screen scrolls upward in sync
- the tab bar active state updates correctly
- section 5 is only reached after the phase sequence completes
- mobile remains readable and not over-engineered

- [ ] **Step 5: Commit the implementation**

```bash
git add site/src/components/content/HomeWorkflowSection.astro site/src/styles/global.css site/tests/components/home-workflow-section.test.ts
git commit -m "feat: add pinned workflow story to homepage section four"
```
