import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const siteManifestSource = readFileSync(
  new URL("../../src/config/site-manifest.ts", import.meta.url),
  "utf8",
);
const homePageSource = readFileSync(
  new URL("../../src/pages/index.astro", import.meta.url),
  "utf8",
);
const baseLayoutSource = readFileSync(
  new URL("../../src/layouts/BaseLayout.astro", import.meta.url),
  "utf8",
);
const footerSource = readFileSync(
  new URL("../../src/components/site/Footer.astro", import.meta.url),
  "utf8",
);
const globalStylesSource = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("home footer", () => {
  it("uses the shared site footer on the homepage with only product and legal groups", () => {
    expect(baseLayoutSource).toContain("footerOmitGroups?: FooterGroupId[];");
    expect(baseLayoutSource).toContain('{showFooter && <Footer omitGroups={footerOmitGroups} />}');
    expect(homePageSource).toContain("showFooter={true}");
    expect(footerSource).toContain('<footer class="site-footer">');
    expect(footerSource).toContain("omitGroups = []");
    expect(footerSource).toContain("footerNavigation.filter((group) => !omitGroups.includes(group.id))");
    expect(footerSource).toContain("footer-brand-lockup");
    expect(footerSource).toContain('class="footer-content"');
    expect(footerSource).not.toContain('import { Image } from "astro:assets";');
    expect(footerSource).toContain('draggable="false"');
    expect(footerSource).toContain("Copyright © Pressor Systems LLC 2026");
    expect(siteManifestSource).toContain('title: "Product"');
    expect(siteManifestSource).toContain('title: "Legal"');
    expect(siteManifestSource).not.toContain('title: "Compare"');
    expect(siteManifestSource).not.toContain('title: "Company"');
    expect(siteManifestSource).not.toContain('title: "Support"');
    expect(globalStylesSource).toContain(".footer-brand-lockup");
    expect(globalStylesSource).toContain(".footer-content {");
    expect(globalStylesSource).toContain(".footer-nav-grid");
    expect(globalStylesSource).toContain(".footer-nav-grid {\n  display: flex;");
    expect(globalStylesSource).toContain("justify-content: flex-start;");
    expect(globalStylesSource).toContain("flex-wrap: nowrap;");
    expect(globalStylesSource).toContain(".footer-column {\n  flex: 0 0 auto;");
    expect(globalStylesSource).toContain(".footer-column {\n  flex: 0 0 auto;\n  min-width: min(8.75rem, 100%);\n  display: grid;\n  gap: 0.18rem;");
    expect(globalStylesSource).toContain(".footer-list {\n  display: grid;\n  gap: 0.2rem;");
    expect(globalStylesSource).toContain(".footer-meta {\n  margin: 1.1rem 0 0;");
    expect(globalStylesSource).toContain(
      '.footer-meta {\n  margin: 1.1rem 0 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;',
    );
  });
});
