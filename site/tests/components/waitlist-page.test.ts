import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const waitlistPageSource = readFileSync(
  new URL("../../src/pages/waitlist.astro", import.meta.url),
  "utf8",
);
const waitlistContentSource = readFileSync(
  new URL("../../src/content/pages/waitlist.md", import.meta.url),
  "utf8",
);

describe("waitlist page", () => {
  it("defines its own seo data instead of failing on a content lookup", () => {
    expect(waitlistPageSource).toContain('const seo: CollectionEntry<"pages">["data"] = {');
    expect(waitlistPageSource).toContain('title: "Waitlist | Bolus"');
    expect(waitlistPageSource).not.toContain('getEntry("pages", "waitlist")');
    expect(waitlistPageSource).not.toContain("Could not find the 'waitlist' page metadata.");
  });

  it("includes the required waitlist fields and keeps comments optional", () => {
    expect(waitlistPageSource).toContain('name="name"');
    expect(waitlistPageSource).toContain('name="email"');
    expect(waitlistPageSource).toContain('inputmode="email"');
    expect(waitlistPageSource).toContain('name="practiceName"');
    expect(waitlistPageSource).toContain('name="referralSource"');
    expect(waitlistPageSource).toContain('name="referralSourceOther"');
    expect(waitlistPageSource).toContain('name="comments"');
    expect(waitlistPageSource).toContain('name="name" required');
    expect(waitlistPageSource).toContain('name="email"');
    expect(waitlistPageSource).toContain("required");
    expect(waitlistPageSource).toContain('name="practiceName" required');
    expect(waitlistPageSource).toContain('<select name="referralSource" data-referral-source required>');
    expect(waitlistPageSource).not.toContain('name="comments" required');
  });

  it("uses a referral dropdown with the requested sources and conditional other field", () => {
    expect(waitlistPageSource).toContain('<option value="instagram">Instagram</option>');
    expect(waitlistPageSource).toContain('<option value="facebook">Facebook</option>');
    expect(waitlistPageSource).toContain('<option value="google-search">Google Search</option>');
    expect(waitlistPageSource).toContain('<option value="ai-recommendation">AI Recommendation</option>');
    expect(waitlistPageSource).toContain('<option value="colleague">Colleague</option>');
    expect(waitlistPageSource).toContain('<option value="my-practice">My Practice</option>');
    expect(waitlistPageSource).toContain('<option value="other">Other</option>');
    expect(waitlistPageSource).toContain('data-referral-source');
    expect(waitlistPageSource).toContain('data-referral-source-other');
    expect(waitlistPageSource).toContain("otherSourceField.hidden = !showOther;");
    expect(waitlistPageSource).toContain("otherSourceInput.required = showOther;");
  });

  it("switches to a thank-you confirmation after a valid submit", () => {
    expect(waitlistPageSource).toContain('data-waitlist-form');
    expect(waitlistPageSource).toContain('data-waitlist-success');
    expect(waitlistPageSource).toContain('class="waitlist-form-card__content"');
    expect(waitlistPageSource).toContain("form.reportValidity()");
    expect(waitlistPageSource).toContain("setCustomValidity(\"Please enter a valid email address.\")");
    expect(waitlistPageSource).toContain("form.hidden = true;");
    expect(waitlistPageSource).toContain("successState.hidden = false;");
    expect(waitlistPageSource).toContain('class="waitlist-success"');
    expect(waitlistPageSource).toContain("place-self: start stretch;");
    expect(waitlistPageSource).toContain("Thank you for signing up.");
    expect(waitlistPageSource).toContain("contact@bolusanesthesia.com");
  });

  it("uses the approved title metadata and direct launch copy", () => {
    expect(waitlistContentSource).toContain('title: "Waitlist | Bolus"');
    expect(waitlistPageSource).toContain('<h1 class="waitlist-hero__title">Waitlist</h1>');
    expect(waitlistPageSource).toContain(
      "Bolus is currently undergoing testing in hundreds of practices across the country to",
    );
    expect(waitlistPageSource).toContain("ensure it lives up to high clinical standards.");
    expect(waitlistPageSource).toContain(
      "Leave your details and we’ll let you know when Bolus is available for public use.",
    );
    expect(waitlistPageSource).toContain("Join the waitlist");
    expect(waitlistPageSource).not.toContain("Bolus is not released yet.");
    expect(waitlistPageSource).not.toContain("All fields except Comments are required.");
  });

  it("centers the page heading and uses a split form panel like the reference", () => {
    expect(waitlistPageSource).toContain(".waitlist-hero__copy {\n    gap: 0.8rem;");
    expect(waitlistPageSource).toContain("justify-items: center;");
    expect(waitlistPageSource).toContain("text-align: center;");
    expect(waitlistPageSource).toContain(".waitlist-form-card {\n    grid-template-columns:");
    expect(waitlistPageSource).toContain(".waitlist-form-card__content {\n    display: grid;");
    expect(waitlistPageSource).toContain(".waitlist-form__submit {\n    appearance: none;");
    expect(waitlistPageSource).toContain("width: 100%;");
    expect(waitlistPageSource).not.toContain("App Store Release");
  });
});
