import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const pageTemplateSource = readFileSync(
  new URL("../../src/components/content/PageTemplate.astro", import.meta.url),
  "utf8",
);
const siteManifestSource = readFileSync(
  new URL("../../src/config/site-manifest.ts", import.meta.url),
  "utf8",
);
const privacySeoSource = readFileSync(
  new URL("../../src/content/pages/privacy.md", import.meta.url),
  "utf8",
);
const termsSeoSource = readFileSync(
  new URL("../../src/content/pages/terms.md", import.meta.url),
  "utf8",
);
const disclaimerSeoSource = readFileSync(
  new URL("../../src/content/pages/medical-disclaimer.md", import.meta.url),
  "utf8",
);
const legalDocsSource = readFileSync(
  new URL("../../src/legal/legal-documents.ts", import.meta.url),
  "utf8",
);
const globalStylesSource = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("legal pages", () => {
  it("keeps dedicated privacy, terms, and medical disclaimer routes in the site manifest and footer", () => {
    expect(siteManifestSource).toContain('id: "privacy"');
    expect(siteManifestSource).toContain('path: "/privacy"');
    expect(siteManifestSource).toContain('id: "terms"');
    expect(siteManifestSource).toContain('path: "/terms"');
    expect(siteManifestSource).toContain('id: "medical-disclaimer"');
    expect(siteManifestSource).toContain('path: "/medical-disclaimer"');
    expect(siteManifestSource).toContain('links: ["privacy", "terms", "medical-disclaimer"]');
  });

  it("uses a dedicated legal document source and layout instead of the old placeholder note blocks", () => {
    expect(pageTemplateSource).toContain('page.category === "legal"');
    expect(pageTemplateSource).toContain("LegalDocumentPage");
    expect(pageTemplateSource).not.toContain("Privacy policy placeholder ready for legal copy.");
    expect(legalDocsSource).toContain("privacy");
    expect(legalDocsSource).toContain("terms");
    expect(legalDocsSource).toContain("medical-disclaimer");
    expect(legalDocsSource).toContain('title: "Medical Disclaimer"');
    expect(legalDocsSource).not.toContain('title: "Bolus Medical Disclaimer"');
    expect(legalDocsSource).toContain('effectiveDate: "March 7, 2026"');
    expect(legalDocsSource).toContain("Pressor Systems LLC");
  });

  it("keeps dedicated SEO metadata and simple white legal-page styling", () => {
    expect(privacySeoSource).toContain('title: "privacy policy | Bolus"');
    expect(termsSeoSource).toContain('title: "terms of use | Bolus"');
    expect(disclaimerSeoSource).toContain('title: "medical disclaimer | Bolus"');
    expect(globalStylesSource).toContain(".legal-page {");
    expect(globalStylesSource).toContain(".legal-page__inner {");
    expect(globalStylesSource).toContain(".legal-page__title {");
    expect(globalStylesSource).toContain(".legal-page__section {");
    expect(globalStylesSource).toContain(".legal-page__section h2 {");
    expect(globalStylesSource).toContain(".legal-page__section p {");
    expect(globalStylesSource).toContain("background: #ffffff;");
  });
});
