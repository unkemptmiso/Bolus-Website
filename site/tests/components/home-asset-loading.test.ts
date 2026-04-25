import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const indexSource = readFileSync(
  new URL("../../src/pages/index.astro", import.meta.url),
  "utf8",
);
const baseLayoutSource = readFileSync(
  new URL("../../src/layouts/BaseLayout.astro", import.meta.url),
  "utf8",
);
const splashHeroSource = readFileSync(
  new URL("../../src/components/content/HomeSplashHero.astro", import.meta.url),
  "utf8",
);
const problemSectionSource = readFileSync(
  new URL("../../src/components/content/HomeProblemSection.astro", import.meta.url),
  "utf8",
);
const solutionSectionSource = readFileSync(
  new URL("../../src/components/content/HomeSolutionSection.astro", import.meta.url),
  "utf8",
);
const workflowSectionSource = readFileSync(
  new URL("../../src/components/content/HomeWorkflowSection.astro", import.meta.url),
  "utf8",
);
const exportSectionSource = readFileSync(
  new URL("../../src/components/content/HomeExportSection.astro", import.meta.url),
  "utf8",
);

describe("homepage asset loading", () => {
  it("emits homepage resource hints from the shared layout head", () => {
    expect(baseLayoutSource).toContain("assetHints?: AssetHint[];");
    expect(baseLayoutSource).toContain("const assetHints = Astro.props.assetHints ?? [];");
    expect(baseLayoutSource).toContain('rel={hint.rel ?? "preload"}');
    expect(baseLayoutSource).toContain('as={hint.rel === "prefetch" ? undefined : hint.as}');
    expect(baseLayoutSource).toContain("fetchpriority={hint.fetchpriority}");
  });

  it("passes critical preloads and below-fold prefetches from the homepage", () => {
    expect(indexSource).toContain('import { getImage } from "astro:assets";');
    expect(indexSource).toContain('import heroDevices from "../assets/hero-devices.png";');
    expect(indexSource).toContain("const optimizedHeroDevices = await getImage");
    expect(indexSource).toContain("const homepageAssetHints");
    expect(indexSource).toContain("href: optimizedHeroDevices.src");
    expect(indexSource).toContain('href: "/assets/home/crumpled-sample-record.webp"');
    expect(indexSource).toContain('href: "/assets/iphone-17-black-portrait.webp"');
    expect(indexSource).toContain('href: "/assets/workflow/pre-op-evaluation.mp4"');
    expect(indexSource).toContain('href: "/assets/record-screenshots/page-1.webp"');
    expect(indexSource).toContain('rel: "prefetch"');
    expect(indexSource).toContain('href: "/assets/workflow/intra-op-events.mp4"');
    expect(indexSource).toContain('assetHints={homepageAssetHints}');
  });

  it("marks visible homepage media as eager and high-priority where appropriate", () => {
    expect(splashHeroSource).toContain('loading="eager"');
    expect(splashHeroSource).toContain('fetchpriority="high"');
    expect(problemSectionSource).toContain('loading="eager"');
    expect(problemSectionSource).toContain('fetchpriority="high"');
    expect(solutionSectionSource).toContain('loading="eager"');
    expect(workflowSectionSource).toContain('class="workflow-phone__frame"');
    expect(workflowSectionSource).toContain('loading="eager"');
    expect(workflowSectionSource).toContain('preload={index === 0 ? "auto" : "metadata"}');
    expect(exportSectionSource).toContain('loading="eager"');
    expect(exportSectionSource).toContain('fetchpriority={index === 0 ? "high" : "low"}');
  });
});
