import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

import { pricingPage } from "../../src/config/pricing-page";

const pricingPageSource = readFileSync(
  new URL("../../src/pages/pricing.astro", import.meta.url),
  "utf8",
);
const pricingContentSource = readFileSync(
  new URL("../../src/content/pages/pricing.md", import.meta.url),
  "utf8",
);

describe("pricing page", () => {
  it("defines the approved pricing ladder without the product name prefix", () => {
    expect(pricingPage.plans.map((plan) => plan.name)).toEqual([
      "Starter",
      "Professional",
      "Professional Cloud",
      "Enterprise",
    ]);
    expect(pricingPage.plans.find((plan) => plan.slug === "professional")?.prices).toEqual({
      annualMonthly: 49,
      monthlyMonthly: 58,
    });
    expect(
      pricingPage.plans.find((plan) => plan.slug === "professional-cloud")?.prices,
    ).toEqual({
      annualMonthly: 89,
      monthlyMonthly: 105,
    });
  });

  it("uses the homepage headline spacing rules and includes a real billing toggle", () => {
    expect(pricingPageSource).toContain('data-billing-toggle');
    expect(pricingPageSource).toContain('data-billing-price');
    expect(pricingPageSource).toContain('data-billing-copy');
    expect(pricingPageSource).toContain('letter-spacing: -1px;');
    expect(pricingPageSource).toContain('querySelectorAll("[data-billing-toggle]")');
  });

  it("centers the hero copy and billing toggle on a single vertical axis", () => {
    expect(pricingPageSource).toContain(".pricing-hero {\n    display: grid;");
    expect(pricingPageSource).toContain("justify-items: center;");
    expect(pricingPageSource).toContain("text-align: center;");
    expect(pricingPageSource).toContain(".pricing-hero__meta {\n    display: grid;");
    expect(pricingPageSource).toContain("justify-items: center;");
  });

  it("locks the pricing hero headline into two intentional rows", () => {
    expect(pricingPage.titleLines).toEqual([
      "The most robust record,",
      "for the cheapest price.",
    ]);
    expect(pricingPageSource).toContain('class="pricing-hero__title-line"');
    expect(pricingPageSource).toContain(".pricing-hero__title {\n    display: grid;");
    expect(pricingPageSource).toContain("width: fit-content;");
    expect(pricingPageSource).toContain("margin-inline: auto;");
    expect(pricingPageSource).toContain(".pricing-hero__title-line {\n    display: block;");
    expect(pricingPageSource).toContain("justify-self: center;");
    expect(pricingPageSource).toContain("white-space: nowrap;");
  });

  it("removes the redundant page pricing labels above the hero copy", () => {
    expect(pricingPage.eyebrow).toBe("");
    expect(pricingPage.supportingNote).toBe("");
  });

  it("removes redundant free-plan UI and keeps cloud as the only labeled badge", () => {
    expect(pricingPage.plans.find((plan) => plan.slug === "starter")?.ctaHref).toBeUndefined();
    expect(pricingPage.plans.find((plan) => plan.slug === "starter")?.ctaLabel).toBe("");
    expect(pricingPageSource).not.toContain("Start Free");
    expect(pricingPageSource).not.toContain("No charge");
  });

  it("adds an individual providers eyebrow above the top pricing row using the enterprise type style", () => {
    expect(pricingPageSource).toContain("Individual Providers");
    expect(pricingPageSource).toContain(
      '<p class="enterprise-card__eyebrow pricing-grid__eyebrow">Individual Providers</p>',
    );
    expect(pricingPageSource).toContain(".pricing-grid__eyebrow {\n    justify-self: start;");
    expect(pricingPageSource).toContain("font-size: 0.88rem;");
    expect(pricingPageSource).toContain("padding-left: 1.2rem;");
  });

  it("keeps professional cloud on a single title line", () => {
    expect(pricingPageSource).toContain('.plan-card[data-plan-card="professional-cloud"] .plan-card__title {');
    expect(pricingPageSource).toContain("max-width: none;");
    expect(pricingPageSource).toContain("font-size: clamp(1.7rem, 2.2vw, 2.15rem);");
    expect(pricingPageSource).toContain("white-space: nowrap;");
  });

  it("keeps professional emphasized with a stronger border and enterprise on a solid border", () => {
    expect(pricingPageSource).toContain('data-plan-card={plan.slug}');
    expect(pricingPageSource).toContain('data-featured={plan.featured ? "true" : undefined}');
    expect(pricingPageSource).toContain('data-upcoming={plan.upcoming ? "true" : undefined}');
    expect(pricingPageSource).toContain("border: 2px solid rgba(77, 147, 255, 0.42);");
    expect(pricingPageSource).toContain("border: 1px solid rgba(15, 23, 42, 0.12);");
    expect(pricingPageSource).not.toContain("border: 1px dashed rgba(15, 23, 42, 0.16);");
  });

  it("keeps every pricing card on the same internal layout skeleton", () => {
    expect(pricingPageSource).toContain('"plan-card__billing-copy--placeholder"');
    expect(pricingPageSource).toContain(
      'aria-hidden={plan.prices.annualMonthly === 0 ? "true" : undefined}',
    );
    expect(pricingPageSource).toContain(".plan-card {\n    display: flex;");
    expect(pricingPageSource).toContain("flex-direction: column;");
  });

  it("removes the top chips from the plan cards", () => {
    expect(pricingPage.plans.find((plan) => plan.slug === "professional")?.badges).toBeUndefined();
    expect(
      pricingPage.plans.find((plan) => plan.slug === "professional-cloud")?.badges,
    ).toBeUndefined();
    expect(pricingPageSource).not.toContain("plan-card__marker");
  });

  it("uses a measured sliding toggle highlight and still defaults to annual", () => {
    expect(pricingPage.defaultBilling).toBe("annual");
    expect(pricingPageSource).toContain('class="billing-toggle__highlight"');
    expect(pricingPageSource).toContain("data-billing-highlight");
    expect(pricingPageSource).toContain('root.style.setProperty("--billing-toggle-x"');
    expect(pricingPageSource).toContain('root.style.setProperty("--billing-toggle-width"');
    expect(pricingPageSource).toContain(".billing-toggle__highlight {\n    position: absolute;");
    expect(pricingPageSource).toContain(
      "transition:\n      transform 260ms cubic-bezier(0.22, 1, 0.36, 1),",
    );
    expect(pricingPageSource).toContain("width 260ms cubic-bezier(0.22, 1, 0.36, 1);");
    expect(pricingPageSource).not.toContain("flex: 1 1 0;");
    expect(pricingPageSource).toContain("white-space: nowrap;");
  });

  it("capitalizes the pricing page title metadata", () => {
    expect(pricingContentSource).toContain('title: "Pricing | Bolus"');
  });
});
