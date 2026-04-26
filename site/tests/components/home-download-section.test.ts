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
      "Bolus keeps your anesthesia record clear, quick, and connected from Pre-Op to",
    );
    expect(downloadSectionSource).toContain(
      "Post-Op on iPhone, iPad mini, and iPad Pro.",
    );
    expect(downloadSectionSource).toContain("Get Bolus");
    expect(downloadSectionSource).toContain('aria-label="Download Bolus on the App Store"');
    expect(downloadSectionSource).toContain('viewBox="0 0 24 24"');
    expect(downloadSectionSource).toContain('const downloadPreviewSrc = "/assets/home/download-devices.webp";');
    expect(downloadSectionSource).toContain('src={downloadPreviewSrc}');
  });

  it("uses the soft atmospheric layout with a single optimized device preview image", () => {
    expect(downloadSectionSource).toContain('class="download-section__button"');
    expect(downloadSectionSource).toContain('class="download-section__preview-image"');
    expect(downloadSectionSource).toContain('width="1020"');
    expect(downloadSectionSource).toContain('height="924"');
    expect(downloadSectionSource).toContain('loading="lazy"');
    expect(globalStyles).toContain(".download-section {");
    expect(globalStyles).toContain(".download-section__inner {");
    expect(globalStyles).toContain(".download-section__button {");
    expect(globalStyles).toContain(".download-section__button-icon {");
    expect(globalStyles).toContain(".download-section__preview-image {");
    expect(globalStyles).toContain("font-size: 56px;");
    expect(globalStyles).toContain("line-height: 1;");
    expect(globalStyles).toContain("letter-spacing: -0.28px;");
    expect(globalStyles).toContain("font-size: 22px;");
    expect(globalStyles).toContain("color: rgba(0, 0, 0, 0.65);");
    expect(globalStyles).toContain("radial-gradient(circle at top");
    expect(globalStyles).toContain("border-radius: 999px;");
    expect(globalStyles).toContain(".download-section__button span {");
  });
});
