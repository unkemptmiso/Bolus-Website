import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const siteManifestSource = readFileSync(
  new URL("../../src/config/site-manifest.ts", import.meta.url),
  "utf8",
);
const headerSource = readFileSync(
  new URL("../../src/components/site/Header.astro", import.meta.url),
  "utf8",
);
const footerSource = readFileSync(
  new URL("../../src/components/site/Footer.astro", import.meta.url),
  "utf8",
);
const downloadSectionSource = readFileSync(
  new URL("../../src/components/content/HomeDownloadSection.astro", import.meta.url),
  "utf8",
);

describe("waitlist navigation", () => {
  it("routes only the app CTAs to the waitlist page", () => {
    expect(siteManifestSource).toContain('label: "Get the app"');
    expect(siteManifestSource).toContain('href: "/waitlist"');
    expect(downloadSectionSource).toContain('class="download-section__button"');
    expect(downloadSectionSource).toContain('href="/waitlist"');
  });

  it("keeps the Bolus brand links pointed at the homepage", () => {
    expect(headerSource).toContain('class="brand-lockup"\n          href="/"');
    expect(headerSource).toContain('class="mobile-brand-lockup"\n            href="/"');
    expect(headerSource).toContain('aria-label="Bolus home"');
    expect(footerSource).toContain('class="footer-brand-lockup"\n      href="/"');
    expect(footerSource).toContain('aria-label="Bolus home"');
  });
});
