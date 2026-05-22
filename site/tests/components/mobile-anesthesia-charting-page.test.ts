import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const pageSource = readFileSync(
  new URL("../../src/pages/mobile-anesthesia-charting.astro", import.meta.url),
  "utf8",
);
const globalStylesSource = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);
const metadataSource = readFileSync(
  new URL("../../src/content/pages/mobile-anesthesia-charting.md", import.meta.url),
  "utf8",
);

describe("mobile anesthesia charting page", () => {
  it("uses a light homepage-aligned landing page shell", () => {
    expect(pageSource).toContain('mainClass="site-main site-main--mobile-charting"');
    expect(pageSource).not.toContain('footerVariant="dark"');
    expect(globalStylesSource).toContain(".site-main--mobile-charting {");
    expect(globalStylesSource).toContain("background: #ffffff;");
  });

  it("opens with product imagery and high-intent mobile anesthesia charting copy", () => {
    expect(pageSource).toContain("Mobile anesthesia charting for office-based cases.");
    expect(pageSource).toContain("iPhone and iPad");
    expect(pageSource).toContain("/combined-hero-shot.png");
    expect(pageSource).toContain("The Bolus mobile anesthesia charting interface shown on iPhone and iPad");
  });

  it("includes homepage-style visual sections for paper risk, workflow, PDF export, and security", () => {
    expect(pageSource).toContain("/assets/home/updated-anesthesia-record.webp");
    expect(pageSource).toContain("/assets/workflow/intra-op-vitals.mp4");
    expect(pageSource).toContain("/assets/record-screenshots/page-1.webp");
    expect(pageSource).toContain("/privacy-lock.svg");
  });

  it("positions Bolus against bloated mobile anesthesia software without unsupported claims", () => {
    expect(pageSource).toContain("Focused charting, not another bloated practice platform.");
    expect(pageSource).toContain("mobile anesthesia practice software");
    expect(pageSource).toContain("Maps Anesthesia");
    expect(pageSource).not.toContain("better than Maps");
  });

  it("keeps FAQ depth for search intent and updates the browser title", () => {
    expect(pageSource).toContain("What should a mobile anesthesia charting app include?");
    expect(pageSource).toContain("Can Bolus work for mobile anesthesia practices?");
    expect(metadataSource).toContain(
      'title: "Mobile Anesthesia Charting App for Office-Based Care | Bolus"',
    );
  });
});
