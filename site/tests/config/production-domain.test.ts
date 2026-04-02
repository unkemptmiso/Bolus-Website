import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

const contentPagesDir = fileURLToPath(new URL("../../src/content/pages/", import.meta.url));
const wranglerSource = readFileSync(
  new URL("../../wrangler.jsonc", import.meta.url),
  "utf8",
);
const runtimeEnvSource = readFileSync(
  new URL("../../src/lib/server/runtime-env.ts", import.meta.url),
  "utf8",
);
const siteManifestSource = readFileSync(
  new URL("../../src/config/site-manifest.ts", import.meta.url),
  "utf8",
);
const astroConfigSource = readFileSync(
  new URL("../../astro.config.mjs", import.meta.url),
  "utf8",
);

describe("production domain configuration", () => {
  it("uses bolusanesthesia.com across content canonicals and runtime defaults", () => {
    const contentFiles = readdirSync(contentPagesDir).filter((file) => file.endsWith(".md"));

    for (const file of contentFiles) {
      const source = readFileSync(join(contentPagesDir, file), "utf8");
      expect(source).toContain('canonicalURL: "https://bolusanesthesia.com');
      expect(source).not.toContain("https://bolus.app");
    }

    const comparePaperSource = readFileSync(
      join(contentPagesDir, "compare-paper-charts.md"),
      "utf8",
    );
    const compareMapsSource = readFileSync(
      join(contentPagesDir, "compare-maps-anesthesia.md"),
      "utf8",
    );

    expect(comparePaperSource).toContain(
      'canonicalURL: "https://bolusanesthesia.com/compare/paper-charts"',
    );
    expect(compareMapsSource).toContain(
      'canonicalURL: "https://bolusanesthesia.com/compare/maps-anesthesia"',
    );

    expect(wranglerSource).toContain('"vars": {');
    expect(wranglerSource).toContain('"PUBLIC_SITE_URL": "https://bolusanesthesia.com"');
    expect(runtimeEnvSource).toContain('PUBLIC_SITE_URL: z.url().default("https://bolusanesthesia.com")');
    expect(siteManifestSource).toContain('defaultSiteUrl: "https://bolusanesthesia.com"');
    expect(astroConfigSource).toContain('site: process.env.PUBLIC_SITE_URL ?? "https://bolusanesthesia.com"');
    expect(runtimeEnvSource).not.toContain("https://bolus-site.invalid");
    expect(siteManifestSource).not.toContain("https://bolus-site.invalid");
    expect(astroConfigSource).not.toContain("https://bolus-site.invalid");
  });
});
