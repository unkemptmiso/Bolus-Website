import { describe, expect, it } from "vitest";

import { homeSplash } from "../../src/config/home-splash";

describe("home splash config", () => {
  it("uses the approved headline hierarchy", () => {
    expect(homeSplash.headline).toBe("Ditch Paper.");
    expect(homeSplash.lede).toBe(
      "Modernize Your Practice With Clean and Defensible Records.",
    );
    expect(homeSplash.subheadline).toBe(
      "A clean, mobile-first anesthesia record app built to replace messy paper workflows with a faster and more defensible standard",
    );
  });

  it("uses the required button labels in order", () => {
    expect(homeSplash.actions).toEqual([]);
  });

  it("preserves the responsive layout strategy", () => {
    expect(homeSplash.layout.desktop).toBe("stacked");
    expect(homeSplash.layout.mobile).toBe("stacked");
    expect(homeSplash.placeholders).toHaveLength(2);
  });

  it("uses typography values aligned with the foundational docs", () => {
    expect(homeSplash.typography.headlineLetterSpacing).toBe("-1px");
    expect(homeSplash.typography.headlineLineHeight).toBe("1");
    expect(homeSplash.typography.fontStack).toContain("-apple-system");
  });

  it("uses a true white canvas and true black headline treatment", () => {
    expect(homeSplash.theme.background).toBe("#FFFFFF");
    expect(homeSplash.theme.headlineColor).toBe("#000000");
  });
});
