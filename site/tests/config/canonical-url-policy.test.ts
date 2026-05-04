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

  it("configures Astro to emit trailing-slash route URLs", () => {
    expect(astroConfigSource).toContain('trailingSlash: "always"');
  });
});
