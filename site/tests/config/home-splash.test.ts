import { describe, expect, it } from "vitest";

import { homeSplash } from "../../src/config/home-splash";

describe("home splash config", () => {
  it("uses the approved headline and subheadline", () => {
    expect(homeSplash.headline).toBe(
      "Ditch Paper, Modernize Your Practice with Clean and Defensible Records",
    );
    expect(homeSplash.subheadline).toBe(
      "A clean, mobile-first anesthesia record app built to replace messy paper workflows with a faster and more defensible standard",
    );
  });

  it("uses the required button labels in order", () => {
    expect(homeSplash.actions.map((action) => action.label)).toEqual([
      "Download on the App Store",
      "See How It Works",
    ]);
  });

  it("preserves the responsive layout strategy", () => {
    expect(homeSplash.layout.desktop).toBe("split");
    expect(homeSplash.layout.mobile).toBe("stacked");
    expect(homeSplash.devices).toHaveLength(2);
  });
});
