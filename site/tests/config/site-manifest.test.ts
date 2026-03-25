import { describe, expect, it } from "vitest";

import {
  footerNavigation,
  headerNavigation,
  pageRegistry,
} from "../../src/config/site-manifest";

describe("site manifest", () => {
  it("keeps routes unique and lowercase", () => {
    const paths = pageRegistry.map((page) => page.path);
    expect(new Set(paths).size).toBe(paths.length);
    expect(paths.every((path) => path === path.toLowerCase())).toBe(true);
  });

  it("keeps the header navigation within the four-link budget", () => {
    expect(headerNavigation.length).toBeLessThanOrEqual(4);
    expect(
      headerNavigation.every((item) =>
        pageRegistry.some((page) => page.id === item.pageId),
      ),
    ).toBe(true);
  });

  it("retains the four footer pillars from the guidance docs", () => {
    expect(footerNavigation.map((group) => group.title)).toEqual([
      "Product",
      "Compare",
      "Company",
      "Legal",
    ]);
  });
});
