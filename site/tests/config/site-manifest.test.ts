import { describe, expect, it } from "vitest";

import {
  footerNavigation,
  headerNavigation,
  pageRegistry,
  siteMetadata,
} from "../../src/config/site-manifest";

describe("site manifest", () => {
  it("keeps routes unique and lowercase", () => {
    const paths = pageRegistry.map((page) => page.path);
    expect(new Set(paths).size).toBe(paths.length);
    expect(paths.every((path) => path === path.toLowerCase())).toBe(true);
  });

  it("keeps the desktop header navigation aligned to the four-link Flighty-style layout", () => {
    expect(headerNavigation.map((item) => item.label)).toEqual([
      "About",
      "Pricing",
      "Support",
      "Contact",
    ]);
    expect(
      headerNavigation.every((item) =>
        pageRegistry.some((page) => page.id === item.pageId),
      ),
    ).toBe(true);
  });

  it("keeps the footer groups aligned to the current homepage/footer design", () => {
    expect(footerNavigation.map((group) => group.title)).toEqual([
      "Product",
      "Legal",
    ]);
  });

  it("keeps the header CTA and brand assets available for the splash navbar", () => {
    expect(siteMetadata.headerCta.label).toBe("Get the app");
    expect(siteMetadata.headerBrand.markSrc).toBe("/src/assets/logos/bolus-mark.png");
    expect(siteMetadata.headerBrand.textSrc).toBe("/src/assets/logos/bolus-text.png");
    expect(siteMetadata.headerBrand.markSize).toBe(34);
    expect(siteMetadata.headerBrand.wordmarkHeight).toBe(22);
  });
});
