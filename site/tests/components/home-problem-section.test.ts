import { existsSync, readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const homePageSource = readFileSync(
  new URL("../../src/pages/index.astro", import.meta.url),
  "utf8",
);
const problemSectionSource = readFileSync(
  new URL("../../src/components/content/HomeProblemSection.astro", import.meta.url),
  "utf8",
);
const globalStyles = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);
const updatedRecordAsset = new URL(
  "../../public/assets/home/updated-anesthesia-record.webp",
  import.meta.url,
);

describe("home problem section", () => {
  it("mounts the second homepage section directly after the splash hero", () => {
    expect(homePageSource).toContain(
      'import HomeProblemSection from "../components/content/HomeProblemSection.astro";',
    );
    expect(homePageSource).toContain("<HomeSplashHero />");
    expect(homePageSource).toContain("<HomeProblemSection />");
  });

  it("uses the approved section two headline and support copy", () => {
    expect(problemSectionSource).toContain("Your anesthesia record");
    expect(problemSectionSource).toContain("shouldn't feel like a liability.");
    expect(problemSectionSource).toContain('class="problem-section__title-line"');
    expect(problemSectionSource).toContain(
      "Ambiguous timestamps and crossed-out vitals create",
    );
    expect(problemSectionSource).toContain(
      "uncertainty when you need clarity most.",
    );
    expect(problemSectionSource).toContain(
      "Bolus ensures every record is crisp,",
    );
    expect(problemSectionSource).toContain(
      "professional, and easy to stand behind.",
    );
  });

  it("applies a dark, text-led layout that matches the reference composition", () => {
    expect(problemSectionSource).toContain('class="problem-section"');
    expect(problemSectionSource).toContain('class="problem-section__title"');
    expect(problemSectionSource).toContain('class="problem-section__body"');
    expect(problemSectionSource).toContain('class="problem-section__record"');
    expect(problemSectionSource).toContain('const problemRecordSrc = "/assets/home/updated-anesthesia-record.webp?v=20260426";');
    expect(problemSectionSource).toContain('src={problemRecordSrc}');
    expect(problemSectionSource).toContain('alt="Handwritten anesthesia record"');
    expect(problemSectionSource).toContain('width="980"');
    expect(problemSectionSource).toContain('height="1305"');
    expect(problemSectionSource).toContain('loading="lazy"');
    expect(problemSectionSource).not.toContain('fetchpriority="high"');
    expect(existsSync(updatedRecordAsset)).toBe(true);
    expect(globalStyles).toContain(".problem-section {");
    expect(globalStyles).toContain(".problem-section__inner {");
    expect(globalStyles).toContain("min-height: clamp(560px, 70vw, 760px);");
    expect(globalStyles).toContain(".problem-section__title {");
    expect(globalStyles).toContain(".problem-section__body {");
    expect(globalStyles).toContain(".problem-section__record {");
    expect(globalStyles).toContain(".problem-section__record::after {");
    expect(globalStyles).toContain("justify-items: start;");
    expect(globalStyles).toContain("text-align: left;");
    expect(globalStyles).toContain("right: clamp(-18rem, -16vw, -10rem);");
    expect(globalStyles).toContain("width: min(48vw, 580px);");
    expect(globalStyles).toContain("max-width: 48ch;");
    expect(globalStyles).toContain("opacity: 1;");
    expect(globalStyles).toContain("transform: translate3d(0, 24%, 0);");
    expect(globalStyles).toContain("transform: translate3d(-14px, 15px, 0);");
    expect(globalStyles).toContain("transform: translate3d(-28px, 30px, 0);");
    expect(globalStyles).toContain("@supports (animation-timeline: view())");
    expect(globalStyles).toContain("animation: problem-record-reveal linear both;");
    expect(globalStyles).toContain("@keyframes problem-record-reveal");
    expect(globalStyles).toContain("@media (prefers-reduced-motion: reduce)");
    expect(globalStyles).toContain(
      'font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;',
    );
    expect(globalStyles).toContain("font-size: 56px;");
    expect(globalStyles).toContain("letter-spacing: -0.28px;");
    expect(globalStyles).toContain("line-height: 1;");
    expect(globalStyles).toContain("font-size: 22px;");
    expect(globalStyles).toContain("line-height: 1.5;");
    expect(globalStyles).toContain("color: rgba(255, 255, 255, 0.8);");
    expect(globalStyles).toContain(".problem-section__title-line {");
    expect(globalStyles).toContain("max-width: 48ch;");
    expect(globalStyles).toContain("@media (max-width: 1320px)");
    expect(globalStyles).toContain("width: calc(100vw - 2rem);");
    expect(globalStyles).toContain("margin-left: 1rem;");
    expect(globalStyles).toContain("max-width: min(58vw, 38rem);");
    expect(globalStyles).toContain("right: clamp(-24rem, -24vw, -15rem);");
    expect(globalStyles).toContain("width: min(42vw, 500px);");
    expect(globalStyles).toContain('@media (orientation: portrait) and (min-width: 820px) and (max-width: 1045px)');
    expect(globalStyles).toContain("grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);");
    expect(globalStyles).toContain("gap: clamp(1rem, 1.8vw, 1.75rem);");
    expect(globalStyles).toContain("align-items: center;");
    expect(globalStyles).toContain("min-height: auto;");
    expect(globalStyles).toContain("padding: 3.25rem 0 1.75rem;");
    expect(globalStyles).toContain("padding-left: clamp(2.25rem, 5vw, 4rem);");
    expect(globalStyles).toContain("padding-right: clamp(1.25rem, 2.5vw, 2rem);");
    expect(globalStyles).toContain(".problem-section__copy {\n    max-width: none;");
    expect(globalStyles).toContain("width: 100%;");
    expect(globalStyles).toContain("position: relative;");
    expect(globalStyles).toContain("right: auto;");
    expect(globalStyles).toContain("bottom: auto;");
    expect(globalStyles).toContain("justify-self: start;");
    expect(globalStyles).toContain("width: min(100%, 32rem);");
    expect(globalStyles).toContain("margin: 0 0 -0.5rem -0.75rem;");
    expect(globalStyles).toContain("animation: none;");
    expect(globalStyles).toContain(".problem-section__title {\n    max-width: none;");
    expect(globalStyles).toContain("width: 100%;");
  });
});
