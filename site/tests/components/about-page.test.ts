import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const aboutPageSource = readFileSync(
  new URL("../../src/pages/about.astro", import.meta.url),
  "utf8",
);
const globalStylesSource = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("about page", () => {
  it("uses a dedicated dark editorial page instead of the generic page template", () => {
    expect(aboutPageSource).toContain('getEntry("pages", "about")');
    expect(aboutPageSource).toContain('mainClass="site-main site-main--about"');
    expect(aboutPageSource).not.toContain("PageTemplate");
    expect(aboutPageSource).toContain('class="about-page"');
    expect(aboutPageSource).toContain('class="about-hero"');
    expect(aboutPageSource).toContain("Why we built Bolus");
    expect(aboutPageSource).toContain("Paper charting should not still be the standard.");
    expect(aboutPageSource).toContain('class="about-manifesto"');
    expect(aboutPageSource).not.toContain('class="about-art"');
  });

  it("uses the guidance typography and a simple dark text-first layout", () => {
    expect(globalStylesSource).toContain(".site-main--about {");
    expect(globalStylesSource).toContain(".about-page {");
    expect(globalStylesSource).toContain(".about-hero {");
    expect(globalStylesSource).toContain("justify-items: center;");
    expect(globalStylesSource).toContain(".about-hero h1 {");
    expect(globalStylesSource).toContain("font-size: 65px;");
    expect(globalStylesSource).toContain("letter-spacing: -1px;");
    expect(globalStylesSource).toContain(".about-hero__dek {");
    expect(globalStylesSource).toContain("font-size: 32px;");
    expect(globalStylesSource).toContain("font-weight: 700;");
    expect(globalStylesSource).toContain("letter-spacing: -0.28px;");
    expect(globalStylesSource).toContain(".about-manifesto p {");
    expect(globalStylesSource).toContain("font-size: 19px;");
    expect(globalStylesSource).toContain("line-height: 1.5;");
    expect(globalStylesSource).toContain("text-align: left;");
    expect(globalStylesSource).toContain(".about-manifesto {");
    expect(globalStylesSource).toContain("background: #050816;");
  });
});
