import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const contentPagesDir = fileURLToPath(new URL("../../src/content/pages/", import.meta.url));
const astroConfigSource = readFileSync(
  new URL("../../astro.config.mjs", import.meta.url),
  "utf8",
);

describe("canonical URL policy", () => {
  it("uses trailing-slash canonical URLs for every non-homepage document", () => {
    const contentFiles = readdirSync(contentPagesDir).filter((file) => file.endsWith(".md"));

    for (const file of contentFiles) {
      const source = readFileSync(join(contentPagesDir, file), "utf8");
      const canonical = source.match(/canonicalURL: "([^"]+)"/)?.[1];

      expect(canonical, `${file} must declare a canonical URL`).toBeTruthy();

      if (canonical === "https://bolusanesthesia.com/") {
        continue;
      }

      expect(canonical, `${file} canonical should match Cloudflare's trailing-slash route`).toMatch(/\/$/);
    }
  });

  it("does not hard-fail no-slash URLs in Astro dev and preview", () => {
    expect(astroConfigSource).not.toContain('trailingSlash: "always"');
  });

  it("excludes only explicitly noindexed pages from the sitemap", () => {
    expect(astroConfigSource).toContain("noindexPaths");
    expect(astroConfigSource).toContain("return !sitemapExcludedPaths.has(path);");
  });

  it("keeps the retired waitlist page out of the sitemap without making it a 404", () => {
    expect(astroConfigSource).toContain('const retiredPaths = ["/waitlist"];');
    expect(astroConfigSource).toContain("sitemapExcludedPaths");
  });
});
