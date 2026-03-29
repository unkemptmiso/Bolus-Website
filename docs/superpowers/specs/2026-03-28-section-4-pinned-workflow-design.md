# Section 4 Pinned Workflow Design

Date: 2026-03-28

## Goal

Turn homepage section 4 into a pinned, three-stage workflow story that feels like a native iOS product walkthrough.

The section should:

- keep the existing left-copy, right-device composition on desktop
- add a native iOS-style bottom navigation bar below the phone
- use scroll progress inside section 4 to move through `Pre-Op`, `Intra-Op`, and `Post-Op`
- animate the phone screen and the left-side copy together as the workflow advances
- prevent the user from reaching section 5 until the full three-stage sequence is complete

This should feel like a deliberate product story, not a carousel and not a hard wheel-event hijack.

## Inputs And Constraints

### From User Direction

- The bottom menu bar should closely match the provided native iOS screenshot aesthetic.
- The menu items are:
  - `Pre-Op`
  - `Intra-Op`
  - `Post-Op`
- The screen inside the iPhone should animate upward from one phase to the next as the user scrolls.
- The left-side heading, body, and chips should also transition from `Pre-Op` to `Intra-Op` to `Post-Op`.
- `Post-Op` content can remain placeholder copy for now.

### From Homepage Guidance

- Section 4 headline: `One workflow from pre-op to post-op.`
- Section 4 support copy: `Bolus is built to follow the case from start to finish, without sending you back to paper.`
- `Pre-Op` and `Intra-Op` copy should follow the drafted homepage blueprint.
- Typography must stay within the Apple-native system stack and spacing rules in the design guidance.
- The overall visual system should remain stark, restrained, and native rather than flashy or over-illustrated.

## Recommended Interaction Model

Section 4 becomes a pinned scroll sequence.

- The outer section is taller than the viewport, roughly `300vh` to `340vh`.
- Inside it, a `sticky` stage remains fixed during the sequence.
- Scroll progress is converted into a normalized progress value from `0` to `1`.
- That progress value drives both:
  - the active workflow phase
  - the transform of the copy stack
  - the transform of the phone screen stack
  - the active state of the bottom navigation bar

This keeps native browser scrolling intact while still making section 4 behave like a controlled product walkthrough.

## Layout

### Desktop

- Left column:
  - section eyebrow, headline, and lede remain visible at the top of the copy column
  - below that, a masked phase viewport contains three vertically stacked phase blocks
  - only one phase is primarily visible at a time
- Right column:
  - iPhone frame remains visually anchored
  - a phone screen viewport contains three vertically stacked screen states
  - a frosted bottom navigation bar sits below the phone frame

### Mobile

- The section should degrade gracefully rather than trying to preserve the full pinned desktop choreography.
- The likely fallback is:
  - copy first
  - phone second
  - reduced or simplified scroll-driven transitions
- The exact mobile fallback will be planned during implementation, with a bias toward stability and clarity over spectacle.

## Content States

### Persistent Section Copy

- Eyebrow: `Workflow`
- Headline: `One workflow from pre-op to post-op.`
- Lede: `Bolus is built to follow the case from start to finish, without sending you back to paper.`

### Phase 1: Pre-Op

- Label: `Pre-Op`
- Mini heading: `Pre-op without the paper shuffle.`
- Body: `Bolus helps you move through pre-op quickly by keeping the essential documentation in one place from the start.`
- Chips:
  - `Built-in evaluation notes`
  - `Consent captured in the record`
  - `Media added on the spot`

### Phase 2: Intra-Op

- Label: `Intra-Op`
- Mini heading: `Intra-op charting that keeps up.`
- Body: `With a timeline that continues to move through the case, Bolus helps you chart vitals, medications, and events quickly without constantly catching up or backcharting later.`
- Chips:
  - `Vitals in seconds, one hand, no manual entry`
  - `One-tap medications`
  - `Case events at your fingertips`

### Phase 3: Post-Op

- Label: `Post-Op`
- Mini heading: placeholder for now
- Body: placeholder for now
- Chips:
  - placeholder
  - placeholder
  - placeholder

## Phone Experience

The phone should feel like one continuous app, not three disconnected mockups.

- The phone frame stays fixed.
- The inner screen content is a vertical strip with three full-height states.
- As progress advances:
  - the strip translates upward from state 1 to state 2 to state 3
  - screen transitions remain smooth and slightly damped
  - later, the placeholder states can be replaced with real product screenshots without reworking the interaction model

For now:

- `Pre-Op` can reuse and refine the current placeholder screen
- `Intra-Op` should be a second placeholder screen with a more timeline-driven structure
- `Post-Op` should remain placeholder

## Bottom Navigation Bar

The navigation bar below the phone should copy the provided native iOS aesthetic as closely as possible without importing Apple UI directly.

Visual characteristics:

- translucent light surface
- strong blur and saturation
- subtle top hairline or border
- soft rounding
- compact icon-and-label or label-only spacing, depending on what best matches the screenshot reference
- active state emphasized with darker text and stronger opacity
- inactive states softened but still legible

Behavior:

- the active item tracks the currently visible phase
- the bar is informational for this version
- it does not need to be clickable in the first implementation unless that comes essentially for free

## Motion Rules

- Use scroll-linked progress, not wheel-event interception.
- Animate only `transform`, `opacity`, filter-free highlights, and state classes when possible.
- Copy and phone should move together but not identically:
  - copy motion should feel slightly firmer
  - phone content should feel slightly more gliding and native
- The bottom nav highlight should update during the same progress window.
- Motion should remain deliberate and smooth, not bouncy.

## State Model

A three-step model will drive the section:

- Step `0`: `Pre-Op`
- Step `1`: `Intra-Op`
- Step `2`: `Post-Op`

Implementation should also support a continuous progress value so transitions can interpolate instead of snapping.

Useful outputs from the section script:

- normalized section progress
- active phase index
- translate offsets for copy stack
- translate offsets for phone screen stack

## Accessibility And Resilience

- Respect `prefers-reduced-motion` by disabling the long interpolated motion and falling back to direct phase changes or a simpler static layout.
- Keep all text in the DOM at all times.
- Do not trap keyboard users in a custom scroll experience.
- Avoid hard scroll hijacking.
- If JavaScript fails, the content should still render as readable stacked content.

## Implementation Notes

Likely files:

- `site/src/components/content/HomeWorkflowSection.astro`
- `site/src/styles/global.css`
- `site/tests/components/home-workflow-section.test.ts`

Likely structure changes:

- convert current single-phase data into a three-phase workflow array
- add stacked copy states and stacked phone states
- add a bottom tab bar component within the section markup
- add a small inline script to compute progress and update CSS custom properties or active state attributes

## Test Coverage Direction

Tests should verify:

- section 4 still mounts in the homepage flow
- `Pre-Op`, `Intra-Op`, and `Post-Op` states exist in the markup
- the bottom nav labels exist
- the section includes pinned/sticky workflow hooks
- the phone stack and copy stack structures exist
- placeholder `Post-Op` content is intentionally present for now

## Out Of Scope For This Pass

- real product screenshots
- finalized `Post-Op` copy
- clickable bottom navigation behavior
- section 5 redesign

## Success Criteria

This design is successful if:

- section 4 feels like a native iOS product story
- users understand the workflow progression without extra explanation
- the transition from `Pre-Op` to `Intra-Op` to `Post-Op` is driven by normal scrolling
- section 5 is only reached after the workflow sequence completes
- the implementation remains stable enough to swap in real screenshots later
