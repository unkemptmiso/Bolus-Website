import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const pageTemplateSource = readFileSync(
  new URL("../../src/components/content/PageTemplate.astro", import.meta.url),
  "utf8",
);
const legalHubPageSource = readFileSync(
  new URL("../../src/components/content/LegalHubPage.astro", import.meta.url),
  "utf8",
);
const dynamicPageSource = readFileSync(
  new URL("../../src/pages/[...slug].astro", import.meta.url),
  "utf8",
);
const siteManifestSource = readFileSync(
  new URL("../../src/config/site-manifest.ts", import.meta.url),
  "utf8",
);
const redirectsSource = readFileSync(
  new URL("../../public/_redirects", import.meta.url),
  "utf8",
);
const legalHubSeoSource = readFileSync(
  new URL("../../src/content/pages/legal.md", import.meta.url),
  "utf8",
);
const privacySeoSource = readFileSync(
  new URL("../../src/content/pages/privacy-policy.md", import.meta.url),
  "utf8",
);
const termsSeoSource = readFileSync(
  new URL("../../src/content/pages/terms-of-service.md", import.meta.url),
  "utf8",
);
const disclaimerSeoSource = readFileSync(
  new URL("../../src/content/pages/medical-disclaimer.md", import.meta.url),
  "utf8",
);
const hipaaSeoSource = readFileSync(
  new URL("../../src/content/pages/hipaa-compliance-policy.md", import.meta.url),
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
  it("keeps a dedicated legal hub plus clean legal document routes in the site manifest and footer", () => {
    expect(siteManifestSource).toContain('id: "legal"');
    expect(siteManifestSource).toContain('path: "/legal"');
    expect(siteManifestSource).toContain('id: "privacy-policy"');
    expect(siteManifestSource).toContain('path: "/legal/privacy-policy"');
    expect(siteManifestSource).toContain('id: "terms-of-service"');
    expect(siteManifestSource).toContain('path: "/legal/terms-of-service"');
    expect(siteManifestSource).toContain('id: "medical-disclaimer"');
    expect(siteManifestSource).toContain('path: "/legal/medical-disclaimer"');
    expect(siteManifestSource).toContain('id: "hipaa-compliance-policy"');
    expect(siteManifestSource).toContain('path: "/legal/hipaa-compliance-policy"');
    expect(siteManifestSource).toContain(
      'links: ["privacy-policy", "terms-of-service", "medical-disclaimer", "hipaa-compliance-policy"]',
    );
    expect(redirectsSource).toContain("/privacy  /legal/privacy-policy/  301");
    expect(redirectsSource).toContain("/privacy/  /legal/privacy-policy/  301");
    expect(redirectsSource).toContain("/terms  /legal/terms-of-service/  301");
    expect(redirectsSource).toContain("/terms/  /legal/terms-of-service/  301");
    expect(redirectsSource).toContain("/medical-disclaimer  /legal/medical-disclaimer/  301");
    expect(redirectsSource).toContain("/medical-disclaimer/  /legal/medical-disclaimer/  301");
  });

  it("uses a legal hub plus dedicated legal document source and layout instead of the old placeholder note blocks", () => {
    expect(pageTemplateSource).toContain('page.id !== "legal"');
    expect(pageTemplateSource).toContain("LegalDocumentPage");
    expect(legalHubPageSource).toContain("{page.hero.eyebrow &&");
    expect(legalHubPageSource).toContain("{page.hero.body &&");
    expect(dynamicPageSource).toContain("pageSeo?.data ??");
    expect(dynamicPageSource).not.toContain("Could not find the");
    expect(legalDocsSource).toContain('"privacy-policy"');
    expect(legalDocsSource).toContain('"terms-of-service"');
    expect(legalDocsSource).toContain("medical-disclaimer");
    expect(legalDocsSource).toContain('"hipaa-compliance-policy"');
    expect(legalDocsSource).toContain('"title": "Privacy Policy"');
    expect(legalDocsSource).toContain('"title": "Terms of Service"');
    expect(legalDocsSource).toContain('"title": "Bolus Medical Disclaimer"');
    expect(legalDocsSource).toContain('"title": "HIPAA Security & Compliance Policy"');
    expect(legalDocsSource).toContain('"effectiveDate": "May 23, 2026"');
    expect(legalDocsSource).toContain('"title": "11. Intended Users"');
    expect(legalDocsSource).not.toContain("11. Children and Intended Users");
    expect(legalDocsSource).toContain('"type": "list"');
    expect(legalDocsSource).toContain('"type": "subheading"');
    expect(legalDocsSource).toContain("Pressor Systems LLC");
    expect(legalDocsSource).toContain('"text": "Email: contact@bolusanesthesia.com"');
    expect(legalDocsSource).toContain('"text": "Website: bolusanesthesia.com"');
    expect(legalDocsSource).not.toContain("Email: contact@bolusanesthesia.com Website: bolusanesthesia.com");
    expect(legalDocsSource).not.toContain("[INSERT DATE]");
    expect(legalDocsSource).not.toContain("[INSERT WEBSITE]");
  });

  it("keeps dedicated SEO metadata and simple white legal page styling for the hub and documents", () => {
    expect(legalHubSeoSource).toContain('title: "Legal | Bolus"');
    expect(legalHubSeoSource).toContain('canonicalURL: "https://bolusanesthesia.com/legal/"');
    expect(siteManifestSource).toContain('id: "legal"');
    expect(siteManifestSource).toContain('title: "Legal"');
    expect(legalHubPageSource).not.toContain('page.hero.eyebrow ?? "Legal"');
    expect(siteManifestSource).toContain('body: ""');
    expect(privacySeoSource).toContain('title: "Privacy Policy | Bolus"');
    expect(privacySeoSource).toContain('canonicalURL: "https://bolusanesthesia.com/legal/privacy-policy/"');
    expect(termsSeoSource).toContain('title: "Terms of Service | Bolus"');
    expect(termsSeoSource).toContain('canonicalURL: "https://bolusanesthesia.com/legal/terms-of-service/"');
    expect(disclaimerSeoSource).toContain('title: "Medical Disclaimer | Bolus"');
    expect(disclaimerSeoSource).toContain('canonicalURL: "https://bolusanesthesia.com/legal/medical-disclaimer/"');
    expect(hipaaSeoSource).toContain('title: "HIPAA Compliance Policy | Bolus"');
    expect(hipaaSeoSource).toContain(
      'canonicalURL: "https://bolusanesthesia.com/legal/hipaa-compliance-policy/"',
    );
    expect(globalStylesSource).toContain(".legal-hub {");
    expect(globalStylesSource).toContain(".legal-hub__list {");
    expect(globalStylesSource).toContain(".legal-hub__card {");
    expect(globalStylesSource).toContain(".legal-page {");
    expect(globalStylesSource).toContain(".legal-page__inner {");
    expect(globalStylesSource).toContain(".legal-page__title {");
    expect(globalStylesSource).toContain(".legal-page__section {");
    expect(globalStylesSource).toContain(".legal-page__section h2 {");
    expect(globalStylesSource).toContain(".legal-page__section h3 {");
    expect(globalStylesSource).toContain(".legal-page__section p {");
    expect(globalStylesSource).toContain(".legal-page__section ul {");
    expect(globalStylesSource).toContain(".legal-page__section li {");
    expect(globalStylesSource).toContain("list-style: disc;");
    expect(globalStylesSource).toContain("background: #ffffff;");
  });
});
