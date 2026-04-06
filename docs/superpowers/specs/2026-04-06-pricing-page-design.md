# Pricing Page Design

Date: 2026-04-06

## Goal

Replace the scaffolded `/pricing` page with a production-style pricing surface that matches the existing Bolus visual system and clearly presents the current subscription ladder.

## Confirmed Direction

- The page should use the same Apple-forward system typography already established on the homepage.
- Headline tracking should follow the home guidance, especially the `-1px` headline letter spacing.
- The plan names should be:
  - `Starter`
  - `Professional`
  - `Professional Cloud`
  - `Enterprise`
- The top row should contain three cards:
  - `Starter`
  - `Professional`
  - `Professional Cloud`
- `Enterprise` should live in a separate row below and remain open-ended for now.
- `Professional Cloud` should look visibly unavailable because it is upcoming.
- The billing control should support `Monthly` and `Annual`.
- Annual pricing should reflect a 15% discount.
- Monthly prices should be rounded to clean whole-dollar values.

## Pricing And Packaging

### Starter

- Free on annual and monthly states
- Includes:
  - core mobile charting
  - `5` case exports per month
  - `1` consent form
  - `1` snippet per category

### Professional

- Annual: `$49/mo`
- Monthly: `$58/mo`
- Includes everything in Starter plus:
  - unlimited case exports
  - unlimited snippets
  - unlimited consent forms
- This card should be the strongest visual CTA on the page.

### Professional Cloud

- Annual: `$89/mo`
- Monthly: `$105/mo`
- Includes everything in Professional plus:
  - cloud backup
  - sync across multiple devices
- This card should be visibly muted and labeled as coming soon.

### Enterprise

- Keep present as a lower-row placeholder.
- Do not finalize enterprise packaging yet.
- The card should invite future rollout or practice-level conversations without pretending the offer is fully defined.

## Page Structure

1. Hero copy block at the top
2. Billing toggle
3. Three-card pricing grid
4. Single enterprise card below

## Copy Direction

The page should keep the same direct, restrained tone as the homepage:

- clear
- confident
- uncluttered
- not salesy
- not startup-jargony

The top copy should frame pricing around clean documentation and practical upgrade points rather than generic SaaS language.

## Interaction Direction

- The billing toggle must function in the browser.
- The cards should switch between monthly and annual display states without reloading.
- Annual state should be the initial default.
- The Cloud card can show price while still remaining unavailable.

## Visual Direction

- Light background
- Black and white base
- Muted blue used sparingly
- Open white space
- Crisp borders and soft shadows
- `Professional` should feel selected or recommended without becoming flashy
- `Professional Cloud` should feel present but recessed

## Implementation Notes

Likely files:

- `site/src/pages/pricing.astro`
- `site/src/config/pricing-page.ts`
- `site/tests/components/pricing-page.test.ts`

## Success Criteria

- `/pricing` renders through a custom page, not the generic scaffold
- plan names do not include `Bolus`
- headline spacing matches the homepage guidance
- monthly/annual toggle works
- `Professional` is clearly the primary paid option
- `Professional Cloud` is visibly coming soon
- page tone matches the rest of the site
