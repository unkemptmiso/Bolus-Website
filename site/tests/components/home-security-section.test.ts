import { existsSync, readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const homePageSource = readFileSync(
  new URL("../../src/pages/index.astro", import.meta.url),
  "utf8",
);
const securitySectionPath = new URL(
  "../../src/components/content/HomeSecuritySection.astro",
  import.meta.url,
);
const securitySectionSource = existsSync(securitySectionPath)
  ? readFileSync(securitySectionPath, "utf8")
  : "";
const globalStyles = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("home security section", () => {
  it("mounts the sixth homepage section after the export block", () => {
    expect(homePageSource).toContain(
      'import HomeSecuritySection from "../components/content/HomeSecuritySection.astro";',
    );
    expect(homePageSource).toContain("<HomeExportSection />");
    expect(homePageSource).toContain("<HomeSecuritySection />");
  });

  it("uses the approved security copy and proof points", () => {
    expect(securitySectionSource).toContain('class="security-section__icon-shell"');
    expect(securitySectionSource).toContain('class="security-section__icon"');
    expect(securitySectionSource).toContain('src="/privacy-lock.svg"');
    expect(securitySectionSource).toContain('alt="Privacy lock icon"');
    expect(securitySectionSource).toContain("Secure by design.");
    expect(securitySectionSource).toContain(
      "Bolus is built for secure anesthesia documentation, using <span class=\"u-color-ios-blue\">AES-256 encryption</span>, authentication-gated access, and local on-device storage so PHI stays secure.",
    );
    expect(securitySectionSource).toContain("AES-256 encryption");
    expect(securitySectionSource).toContain("Authentication-gated access");
    expect(securitySectionSource).toContain("PHI stored locally on device");
  });

  it("uses a centered trust section with compact proof cards", () => {
    expect(securitySectionSource).toContain('class="security-section__copy"');
    expect(globalStyles).toContain(".security-section__icon-shell {");
    expect(globalStyles).toContain(".security-section__icon {");
    expect(securitySectionSource).toContain('class="security-section__points"');
    expect(securitySectionSource).toContain('class="security-point"');
    expect(globalStyles).toContain(".security-section {");
    expect(globalStyles).toContain(".security-section__inner {");
    expect(globalStyles).toContain(".security-section__copy {");
    expect(globalStyles).toContain(".security-section__points {");
    expect(globalStyles).toContain(".security-point {");
    expect(globalStyles).toContain("justify-items: center;");
    expect(globalStyles).toContain("text-align: center;");
    expect(globalStyles).toContain("border-radius: 1.85rem;");
    expect(globalStyles).toContain("box-shadow:");
    expect(globalStyles).toContain("background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);");
    expect(globalStyles).toContain("grid-template-columns: repeat(3, minmax(0, 1fr));");
  });

  it("keeps the proof cards in a tablet-friendly grid instead of stacking them in one column", () => {
    expect(globalStyles).toContain("@media (max-width: 820px)");
    expect(globalStyles).toContain(`  .security-section__points {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }`);
    expect(globalStyles).toContain(`  .security-point:last-child {
    grid-column: 1 / -1;
    max-width: min(100%, 22rem);
    justify-self: center;
  }`);
  });

  it("hides the proof cards entirely on iPad mini portrait and smaller to match the phone treatment", () => {
    expect(globalStyles).toContain("@media (max-width: 768px)");
    expect(globalStyles).toContain(`  .security-section__points {
    display: none;
  }`);
  });
});
