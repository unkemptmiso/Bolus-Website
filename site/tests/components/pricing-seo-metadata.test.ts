import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const pricingPageSource = readFileSync(
  new URL("../../src/pages/pricing.astro", import.meta.url),
  "utf8",
);

describe("pricing SEO metadata", () => {
  it("resolves pricing SEO data from the pages collection using the pricing canonical URL", () => {
    expect(pricingPageSource).toContain('getCollection("pages")');
    expect(pricingPageSource).toContain(
      'entry.data.canonicalURL === "https://bolusanesthesia.com/pricing"',
    );
    expect(pricingPageSource).not.toContain('getEntry("pages", "pricing")');
  });
});
