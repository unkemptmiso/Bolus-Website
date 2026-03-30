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
  it("uses the shared site footer on the homepage with the compare group removed", () => {
    expect(siteManifestSource).toContain('id: "compare"');
    expect(siteManifestSource).toContain('id: "support"');
    expect(baseLayoutSource).toContain("footerOmitGroups?: FooterGroupId[];");
    expect(baseLayoutSource).toContain('{showFooter && <Footer omitGroups={footerOmitGroups} />}');
    expect(homePageSource).toContain("showFooter={true}");
    expect(homePageSource).toContain('footerOmitGroups={["compare"]}');
    expect(footerSource).toContain('<footer class="site-footer">');
    expect(footerSource).toContain("omitGroups = []");
    expect(footerSource).toContain("footerNavigation.filter((group) => !omitGroups.includes(group.id))");
    expect(footerSource).toContain("footer-brand-lockup");
    expect(footerSource).not.toContain('import { Image } from "astro:assets";');
    expect(footerSource).toContain('draggable="false"');
    expect(globalStylesSource).toContain(".footer-brand-lockup");
    expect(globalStylesSource).toContain(".footer-nav-grid");
    expect(globalStylesSource).toContain(".footer-nav-grid {\n  display: flex;");
    expect(globalStylesSource).toContain("flex-wrap: nowrap;");
    expect(globalStylesSource).toContain(".footer-column {\n  flex: 1 1 0;");
    expect(globalStylesSource).toContain(".footer-column {\n  flex: 1 1 0;\n  min-width: 0;\n  display: grid;\n  gap: 0.18rem;");
    expect(globalStylesSource).toContain(".footer-list {\n  display: grid;\n  gap: 0.2rem;");
  });
});
