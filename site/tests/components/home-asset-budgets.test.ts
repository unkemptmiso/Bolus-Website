import { statSync } from "node:fs";

import { describe, expect, it } from "vitest";

const assetSize = (path: string) =>
  statSync(new URL(`../../${path}`, import.meta.url)).size;

const maxBytes = (mb: number) => mb * 1024 * 1024;

describe("homepage asset budgets", () => {
  it("keeps the section two record and download preview in compressed web formats", () => {
    expect(assetSize("public/assets/home/updated-anesthesia-record.webp")).toBeLessThan(maxBytes(0.25));
    expect(assetSize("public/assets/home/download-devices.webp")).toBeLessThan(maxBytes(0.2));
  });

  it("keeps document preview images lightweight without relying on huge PNGs", () => {
    for (const page of [1, 2, 3, 4, 5, 6]) {
      expect(assetSize(`public/assets/record-screenshots/page-${page}.webp`)).toBeLessThan(maxBytes(0.2));
    }
  });

  it("keeps the phone frame small enough to preload eagerly", () => {
    expect(assetSize("public/assets/iphone-17-black-portrait.webp")).toBeLessThan(maxBytes(0.1));
  });

  it("keeps workflow preview clips below the interaction budget", () => {
    const clips = [
      "intra-op-events.mp4",
      "intra-op-medications.mp4",
      "intra-op-vitals.mp4",
      "post-op-substances.mp4",
      "post-op-vitals.mp4",
      "pre-op-consent.mp4",
      "pre-op-evaluation.mp4",
      "pre-op-media-attachment.mp4",
    ];

    for (const clip of clips) {
      expect(assetSize(`public/assets/workflow/${clip}`)).toBeLessThan(maxBytes(8));
    }
  });
});
