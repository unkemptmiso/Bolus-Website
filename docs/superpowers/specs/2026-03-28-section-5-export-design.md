# Section 5 Export Design

Date: 2026-03-28

## Goal

Add homepage section 5 as the payoff moment after the workflow walkthrough.

This section should prove that the final Bolus record is:

- clean
- legible
- structured
- modern enough to feel categorically different from paper

The section should visually center on the exported record itself, but use a cropped preview instead of a full-page PDF mockup.

## Approved Direction

Use an editorial split layout.

- Left side:
  - section headline
  - support copy
  - 3 short proof points
- Right side:
  - one large cropped export preview

This should feel calm, premium, and almost gallery-like, without turning into another busy product feature section.

## Copy

### Headline

`An anesthesia record that doesn’t look like it’s from the 90s.`

### Support Copy

`The final record is clean, legible, and thoughtfully structured, with medications, vital signs, and intraoperative events laid out clearly to reduce ambiguity and reflect the quality of care delivered.`

### Proof Points

- `readable structure`
- `clean timestamps`
- `polished PDF layout`
- `easier storage, retrieval, and review than paper`

## Layout

### Desktop

- Two-column section
- Copy on the left
- Cropped export preview on the right
- Generous spacing between the two sides
- The cropped record should be large enough to feel like evidence, not decoration

### Mobile

- Copy first
- Cropped export preview below
- Keep the export image large and readable
- Reduce extra framing so the layout stays clean on narrow screens

## Visual Direction

The section should stay within the existing homepage aesthetic:

- white or near-white background
- Apple-native typography
- sparse, structured spacing
- minimal borders instead of heavy shadow
- no loud card grid or SaaS dashboard styling

The export preview should feel like a polished native document surface:

- light frame or document edge
- subtle border
- restrained shadow, if any
- visible hierarchy inside the crop
- enough visible rows and labels to imply real record structure

## Cropped Preview Rules

The export should not be shown as a fully zoomed-out page.

Instead:

- show a cropped portion of the record
- emphasize information density and legibility
- reveal enough structure to suggest timestamps, medication rows, or event organization
- avoid tiny unreadable micro-detail

The crop should feel intentional, as if we are showing the most convincing slice of the final output.

## Motion

- The section can use a subtle fade/slide-up reveal on entry
- The export preview can have a slightly delayed rise or settle animation
- Motion should remain quiet and deliberate
- No flashy parallax or bouncing effects

## Relationship To Section 4

Section 4 explains the workflow.
Section 5 should feel like the receipt.

That means the design should:

- simplify after the more interactive section 4
- let the exported record do the convincing
- create a clean transition into the later trust/security sections

## Implementation Notes

Likely files:

- `site/src/components/content/HomeExportSection.astro`
- `site/src/pages/index.astro`
- `site/src/styles/global.css`
- `site/tests/components/home-export-section.test.ts`

Likely approach:

- create a dedicated section-5 component
- mount it after `HomeWorkflowSection`
- use CSS-only document preview scaffolding for now unless a real export image is already available
- keep the preview cropped and stylized through layout rather than building a full PDF page

## Test Coverage Direction

Tests should verify:

- section 5 is mounted after section 4
- approved section-5 headline and body are present
- proof points are present
- the layout includes a left-copy and right-preview split
- the export preview structure exists

## Out Of Scope

- real final PDF asset
- before/after paper comparison
- interactive export controls

## Success Criteria

This section is successful if:

- the output feels like the clearest proof of product quality so far
- the crop makes the record feel modern and readable
- the section remains minimal and premium
- it bridges naturally from workflow to trust
