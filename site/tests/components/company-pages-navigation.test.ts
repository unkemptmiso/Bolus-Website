import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const siteManifestSource = readFileSync(
  new URL("../../src/config/site-manifest.ts", import.meta.url),
  "utf8",
);
const headerSource = readFileSync(
  new URL("../../src/components/site/Header.astro", import.meta.url),
  "utf8",
);

describe("company pages navigation", () => {
  it("replaces records and security with about and contact across shared navigation", () => {
    expect(siteManifestSource).toContain('id: "about"');
    expect(siteManifestSource).toContain('path: "/about"');
    expect(siteManifestSource).toContain('id: "contact"');
    expect(siteManifestSource).toContain('path: "/contact"');
    expect(siteManifestSource).toContain('{ label: "About", pageId: "about" }');
    expect(siteManifestSource).toContain('{ label: "Contact", pageId: "contact" }');
    expect(siteManifestSource).toContain('links: ["pricing", "simulator", "about"]');
    expect(siteManifestSource).not.toContain('id: "records"');
    expect(siteManifestSource).not.toContain('path: "/records"');
    expect(siteManifestSource).not.toContain('id: "security"');
    expect(siteManifestSource).not.toContain('path: "/security"');
    expect(headerSource).toContain('{ pageId: "about", icon: "about" }');
    expect(headerSource).toContain('{ pageId: "contact", icon: "contact" }');
    expect(headerSource).not.toContain('{ pageId: "records", icon: "records" }');
    expect(headerSource).not.toContain('{ pageId: "security", icon: "security" }');
  });
});
