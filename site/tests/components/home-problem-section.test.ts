import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const homePageSource = readFileSync(
  new URL("../../src/pages/index.astro", import.meta.url),
  "utf8",
);
const problemSectionSource = readFileSync(
  new URL("../../src/components/content/HomeProblemSection.astro", import.meta.url),
  "utf8",
);
const globalStyles = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("home problem section", () => {
  it("mounts the second homepage section directly after the splash hero", () => {
    expect(homePageSource).toContain(
      'import HomeProblemSection from "../components/content/HomeProblemSection.astro";',
    );
    expect(homePageSource).toContain("<HomeSplashHero />");
    expect(homePageSource).toContain("<HomeProblemSection />");
  });

  it("uses the approved section two headline and support copy", () => {
    expect(problemSectionSource).toContain("Your anesthesia record shouldn't");
    expect(problemSectionSource).toContain("feel like a liability.");
    expect(problemSectionSource).toContain('class="problem-section__title-line"');
    expect(problemSectionSource).toContain(
      "Ambiguous timestamps and crossed-out vitals create",
    );
    expect(problemSectionSource).toContain(
      "uncertainty when you need clarity most.",
    );
    expect(problemSectionSource).toContain(
      "Bolus ensures every record is crisp,",
    );
    expect(problemSectionSource).toContain(
      "professional, and easy to stand behind.",
    );
  });

  it("applies a dark, text-led layout that matches the reference composition", () => {
    expect(problemSectionSource).toContain('class="problem-section"');
    expect(problemSectionSource).toContain('class="problem-section__title"');
    expect(problemSectionSource).toContain('class="problem-section__body"');
    expect(globalStyles).toContain(".problem-section {");
    expect(globalStyles).toContain(".problem-section__inner {");
    expect(globalStyles).toContain(".problem-section__title {");
    expect(globalStyles).toContain(".problem-section__body {");
    expect(globalStyles).toContain(
      'font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;',
    );
    expect(globalStyles).toContain("font-size: 56px;");
    expect(globalStyles).toContain("letter-spacing: -0.28px;");
    expect(globalStyles).toContain("line-height: 1;");
    expect(globalStyles).toContain("font-size: 22px;");
    expect(globalStyles).toContain("line-height: 1.5;");
    expect(globalStyles).toContain("color: rgba(255, 255, 255, 0.8);");
    expect(globalStyles).toContain(".problem-section__title-line {");
    expect(globalStyles).toContain("max-width: 58ch;");
    expect(globalStyles).toContain(".problem-section__title {\n    max-width: none;");
    expect(globalStyles).toContain("width: 100%;");
  });
});
