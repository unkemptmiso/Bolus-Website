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
    expect(securitySectionSource).toContain("Secure by design.");
    expect(securitySectionSource).toContain(
      "Bolus is built for secure anesthesia documentation, using AES-256 encryption, authentication-gated access, and local on-device storage so PHI stays off the cloud.",
    );
    expect(securitySectionSource).toContain("AES-256 encryption");
    expect(securitySectionSource).toContain("authentication-gated access");
    expect(securitySectionSource).toContain("PHI stored locally on device");
    expect(securitySectionSource).toContain("Full security details");
    expect(securitySectionSource).toContain('href="/security"');
  });

  it("uses a centered trust section with compact proof cards", () => {
    expect(securitySectionSource).toContain('class="security-section__copy"');
    expect(securitySectionSource).toContain('class="security-section__points"');
    expect(securitySectionSource).toContain('class="security-point"');
    expect(globalStyles).toContain(".security-section {");
    expect(globalStyles).toContain(".security-section__inner {");
    expect(globalStyles).toContain(".security-section__copy {");
    expect(globalStyles).toContain(".security-section__points {");
    expect(globalStyles).toContain(".security-point {");
    expect(globalStyles).toContain("justify-items: center;");
    expect(globalStyles).toContain("text-align: center;");
    expect(globalStyles).toContain("grid-template-columns: repeat(3, minmax(0, 1fr));");
  });
});
