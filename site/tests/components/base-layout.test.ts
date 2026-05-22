import { existsSync, readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const baseLayoutSource = readFileSync(
  new URL("../../src/layouts/BaseLayout.astro", import.meta.url),
  "utf8",
);
const faviconSource = readFileSync(
  new URL("../../public/favicon.svg", import.meta.url),
  "utf8",
);

describe("base layout", () => {
  it("uses the rounded white-backed Bolus favicon asset as the site icon", () => {
    expect(baseLayoutSource).toContain('const faviconVersion = "20260512";');
    expect(baseLayoutSource).toContain("const faviconIcoHref = `/favicon.ico?v=${faviconVersion}`;");
    expect(baseLayoutSource).toContain("const faviconSvgHref = `/favicon.svg?v=${faviconVersion}`;");
    expect(baseLayoutSource).toContain("const faviconPngHref = `/favicon-mark.png?v=${faviconVersion}`;");
    expect(baseLayoutSource).toContain('<link rel="icon" href={faviconIcoHref} sizes="48x48" />');
    expect(baseLayoutSource).toContain('<link rel="icon" type="image/svg+xml" href={faviconSvgHref} sizes="any" />');
    expect(baseLayoutSource).toContain('<link rel="shortcut icon" href={faviconIcoHref} />');
    expect(baseLayoutSource).toContain('<link rel="apple-touch-icon" href={faviconPngHref} />');
    expect(baseLayoutSource).not.toContain('import bolusFavicon from "../assets/logos/bolus-favicon.png";');
    expect(existsSync(new URL("../../public/favicon.svg", import.meta.url))).toBe(true);
    expect(existsSync(new URL("../../public/favicon.ico", import.meta.url))).toBe(true);
    expect(existsSync(new URL("../../public/favicon-mark.png", import.meta.url))).toBe(true);
    expect(faviconSource).toContain('<rect x="8" y="8" width="112" height="112" rx="30" fill="#ffffff" />');
    expect(faviconSource).toContain('stroke="#d9dee7"');
    expect(faviconSource).toContain('<image');
    expect(faviconSource).toContain('href="data:image/png;base64,');
  });

  it("passes through only the page noindex flag instead of a global index allowlist", () => {
    expect(baseLayoutSource).not.toContain('import { isIndexablePage } from "../config/site-manifest";');
    expect(baseLayoutSource).not.toContain("shouldNoindex");
    expect(baseLayoutSource).toContain("<SeoHead data={seo} noindex={page.noindex} />");
  });
});
