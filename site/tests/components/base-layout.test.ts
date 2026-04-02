import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const baseLayoutSource = readFileSync(
  new URL("../../src/layouts/BaseLayout.astro", import.meta.url),
  "utf8",
);

describe("base layout", () => {
  it("uses the white-backed Bolus favicon PNG as the site icon", () => {
    expect(baseLayoutSource).toContain('import bolusFavicon from "../assets/logos/bolus-favicon.png";');
    expect(baseLayoutSource).toContain('<link rel="icon" type="image/png" href={bolusFavicon.src} />');
    expect(baseLayoutSource).not.toContain('<link rel="icon" type="image/svg+xml" href="/favicon.svg" />');
    expect(baseLayoutSource).not.toContain('<link rel="icon" href="/favicon.ico" />');
  });
});
