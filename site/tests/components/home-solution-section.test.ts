import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const homePageSource = readFileSync(
  new URL("../../src/pages/index.astro", import.meta.url),
  "utf8",
);
const solutionSectionSource = readFileSync(
  new URL("../../src/components/content/HomeSolutionSection.astro", import.meta.url),
  "utf8",
);
const globalStyles = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("home solution section", () => {
  it("mounts the third homepage section after the problem block", () => {
    expect(homePageSource).toContain(
      'import HomeSolutionSection from "../components/content/HomeSolutionSection.astro";',
    );
    expect(homePageSource).toContain("<HomeProblemSection />");
    expect(homePageSource).toContain("<HomeSolutionSection />");
  });

  it("uses the approved section three headline and the three drafted proof points", () => {
    expect(solutionSectionSource).toContain("Charting built for speed.");
    expect(solutionSectionSource).toContain("Records made to last.");
    expect(solutionSectionSource).toContain("Bolus is a mobile anesthesia record app for office-based practice.");
    expect(solutionSectionSource).toContain(
      "It replaces paper charting with a faster, cleaner documentation workflow",
    );
    expect(solutionSectionSource).not.toContain("The Shift");
    expect(solutionSectionSource).toContain("Built for the pace of the case.");
    expect(solutionSectionSource).toContain("One record from start to finish.");
    expect(solutionSectionSource).toContain("Cleaner when it matters later.");
    expect(solutionSectionSource).toContain('class="solution-card__icon"');
  });

  it("uses native-feeling cards with scroll-triggered reveal behavior", () => {
    expect(solutionSectionSource).toContain("IntersectionObserver");
    expect(solutionSectionSource).toContain('data-solution-card');
    expect(globalStyles).toContain(".solution-section {");
    expect(globalStyles).toContain(".solution-section__inner {");
    expect(globalStyles).toContain("background: #ffffff;");
    expect(globalStyles).toContain("grid-template-columns: 1fr;");
    expect(globalStyles).toContain("justify-items: center;");
    expect(globalStyles).toContain("text-align: center;");
    expect(globalStyles).toContain(".solution-card {");
    expect(globalStyles).toContain(".solution-card__icon {");
    expect(globalStyles).toContain(".solution-card.is-visible {");
    expect(globalStyles).toContain("cubic-bezier(0.22, 1.18, 0.36, 1)");
  });
});
