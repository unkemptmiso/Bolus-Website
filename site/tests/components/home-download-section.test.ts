import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const homePageSource = readFileSync(
  new URL("../../src/pages/index.astro", import.meta.url),
  "utf8",
);
const downloadSectionSource = readFileSync(
  new URL("../../src/components/content/HomeDownloadSection.astro", import.meta.url),
  "utf8",
);
const globalStyles = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("home download section", () => {
  it("mounts the final homepage CTA after the FAQ section", () => {
    expect(homePageSource).toContain(
      'import HomeDownloadSection from "../components/content/HomeDownloadSection.astro";',
    );
    expect(homePageSource).toContain("<HomeFaqSection />");
    expect(homePageSource).toContain("<HomeDownloadSection />");
  });

  it("uses the approved device-led App Store CTA copy and button treatment", () => {
    expect(downloadSectionSource).toContain('id="download"');
    expect(downloadSectionSource).toContain("Ready to leave paper behind?");
    expect(downloadSectionSource).toContain(
      "Bolus keeps your anesthesia record clear, quick, and connected from pre-op to",
    );
    expect(downloadSectionSource).toContain(
      "post-op on iPhone, iPad mini, and iPad Pro.",
    );
    expect(downloadSectionSource).toContain("Get Bolus");
    expect(downloadSectionSource).toContain('aria-label="Download Bolus on the App Store"');
    expect(downloadSectionSource).toContain('viewBox="0 0 24 24"');
    expect(downloadSectionSource).toContain("iPhone");
    expect(downloadSectionSource).toContain("iPad mini");
    expect(downloadSectionSource).toContain("iPad Pro");
  });

  it("uses the soft atmospheric layout with three device mockups", () => {
    expect(downloadSectionSource).toContain('class="download-section__button"');
    expect(downloadSectionSource).toContain('class="download-section__device download-section__device--iphone"');
    expect(downloadSectionSource).toContain(
      'class="download-section__device download-section__device--ipad-mini"',
    );
    expect(downloadSectionSource).toContain(
      'class="download-section__device download-section__device--ipad-pro"',
    );
    expect(globalStyles).toContain(".download-section {");
    expect(globalStyles).toContain(".download-section__inner {");
    expect(globalStyles).toContain(".download-section__button {");
    expect(globalStyles).toContain(".download-section__button-icon {");
    expect(globalStyles).toContain(".download-section__devices {");
    expect(globalStyles).toContain(".download-section__device--iphone {");
    expect(globalStyles).toContain(".download-section__device--ipad-mini {");
    expect(globalStyles).toContain(".download-section__device--ipad-pro {");
    expect(globalStyles).toContain("font-size: 56px;");
    expect(globalStyles).toContain("line-height: 1;");
    expect(globalStyles).toContain("letter-spacing: -0.28px;");
    expect(globalStyles).toContain("font-size: 22px;");
    expect(globalStyles).toContain("color: rgba(0, 0, 0, 0.65);");
    expect(globalStyles).toContain("radial-gradient(circle at top");
    expect(globalStyles).toContain("border-radius: 999px;");
    expect(globalStyles).toContain("0 0 24px rgba(255, 255, 255, 0.28);");
    expect(globalStyles).toContain(".download-section__button span {");
    expect(globalStyles).toContain("transform: rotate(-9deg);");
    expect(globalStyles).toContain("transform: rotate(7deg);");
  });
});
