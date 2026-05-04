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
    expect(baseLayoutSource).toContain('const faviconHref = "/favicon.svg?v=20260426";');
    expect(baseLayoutSource).toContain('<link rel="icon" type="image/svg+xml" href={faviconHref} />');
    expect(baseLayoutSource).toContain('<link rel="shortcut icon" href={faviconHref} />');
    expect(baseLayoutSource).toContain('<link rel="apple-touch-icon" href={faviconHref} />');
    expect(baseLayoutSource).not.toContain('import bolusFavicon from "../assets/logos/bolus-favicon.png";');
    expect(existsSync(new URL("../../public/favicon.svg", import.meta.url))).toBe(true);
    expect(faviconSource).toContain('<rect x="8" y="8" width="112" height="112" rx="30" fill="#ffffff" />');
    expect(faviconSource).toContain('stroke="#d9dee7"');
    expect(faviconSource).toContain('<image');
    expect(faviconSource).toContain('href="./favicon-mark.png"');
  });
});
