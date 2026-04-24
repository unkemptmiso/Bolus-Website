import { existsSync, readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const homePageSource = readFileSync(
  new URL("../../src/pages/index.astro", import.meta.url),
  "utf8",
);
const workflowSectionSource = readFileSync(
  new URL("../../src/components/content/HomeWorkflowSection.astro", import.meta.url),
  "utf8",
);
const globalStyles = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);
const workflowAssetUrl = (filename: string) =>
  new URL(`../../public/assets/workflow/${filename}`, import.meta.url);

describe("home workflow section", () => {
  it("mounts the fourth homepage section after the solution block", () => {
    expect(homePageSource).toContain(
      'import HomeWorkflowSection from "../components/content/HomeWorkflowSection.astro";',
    );
    expect(homePageSource).toContain("<HomeSolutionSection />");
    expect(homePageSource).toContain("<HomeWorkflowSection />");
  });

  it("uses the approved three-phase workflow copy including the finalized post-op content", () => {
    expect(workflowSectionSource).not.toContain('<p class="workflow-section__eyebrow">Workflow</p>');
    expect(workflowSectionSource).toContain('<span class="workflow-section__title-line">One workflow from</span>');
    expect(workflowSectionSource).toContain('<span class="workflow-section__title-line">Pre-Op to Post-Op.</span>');
    expect(workflowSectionSource).toContain(
      "Bolus is built to follow the case from start to finish, without sending you back to paper.",
    );
    expect(workflowSectionSource).toContain("Pre-Op");
    expect(workflowSectionSource).toContain("Pre-Op without the paper shuffle.");
    expect(workflowSectionSource).toContain("Built-in evaluation notes");
    expect(workflowSectionSource).toContain("Consent captured in the record");
    expect(workflowSectionSource).toContain("Media added on the spot");
    expect(workflowSectionSource).toContain("Intra-Op");
    expect(workflowSectionSource).toContain("Intra-Op charting that keeps up.");
    expect(workflowSectionSource).toContain(
      "With a timeline that continues to move through the case, Bolus helps you chart quickly without constantly feeling like you have to catch up.",
    );
    expect(workflowSectionSource).toContain("Vitals in seconds, one hand, no manual entry");
    expect(workflowSectionSource).toContain("One-tap medications");
    expect(workflowSectionSource).toContain("Case events at your fingertips");
    expect(workflowSectionSource).toContain("Post-Op");
    expect(workflowSectionSource).toContain("Post-Op that wraps up cleanly.");
    expect(workflowSectionSource).toContain(
      "Bolus makes closing out the record feel quick and organized.",
    );
    expect(workflowSectionSource).toContain("Fast discharge vitals");
    expect(workflowSectionSource).toContain(
      "Enter discharge vitals quickly with a scrubber built for speed.",
    );
    expect(workflowSectionSource).toContain("Controlled substance reconciliation");
    expect(workflowSectionSource).toContain(
      "Complete reconciliation with a signature pad and totals pulled automatically from the record.",
    );
    expect(workflowSectionSource).toContain("One-click secure PDF export");
    expect(workflowSectionSource).toContain(
      "Generate a high-fidelity PDF export of the entire anesthesia record instantly.",
    );
    expect(workflowSectionSource).not.toContain("Placeholder");
  });

  it("uses autoplaying workflow phone video playlists with tile-triggered clips", () => {
    expect(workflowSectionSource).not.toContain('import defaultPreOpHomepage');
    expect(workflowSectionSource).not.toContain('class="workflow-phone__preview-image"');
    expect(workflowSectionSource).not.toContain('src={defaultPreOpHomepage.src}');
    expect(workflowSectionSource).toContain("const workflowPreviewClips = {");
    expect(workflowSectionSource).toContain('id: "evaluation"');
    expect(workflowSectionSource).toContain('src: "/assets/workflow/pre-op-evaluation.mp4"');
    expect(workflowSectionSource).toContain('id: "consent"');
    expect(workflowSectionSource).toContain('src: "/assets/workflow/pre-op-consent.mp4"');
    expect(workflowSectionSource).toContain('id: "media"');
    expect(workflowSectionSource).toContain('src: "/assets/workflow/pre-op-media-attachment.mp4"');
    expect(workflowSectionSource).toContain('src: "/assets/workflow/intra-op-vitals.mp4"');
    expect(workflowSectionSource).toContain('src: "/assets/workflow/intra-op-medications.mp4"');
    expect(workflowSectionSource).toContain('src: "/assets/workflow/intra-op-events.mp4"');
    expect(workflowSectionSource).toContain('src: "/assets/workflow/post-op-vitals.mp4"');
    expect(workflowSectionSource).toContain('src: "/assets/workflow/post-op-substances.mp4"');
    expect(workflowSectionSource).not.toContain('src: "/assets/workflow/post-op-export');
    expect(workflowSectionSource).toContain('data-workflow-video-trigger');
    expect(workflowSectionSource).toContain('data-workflow-phase={workflowClip ? phase.id : undefined}');
    expect(workflowSectionSource).toContain('data-workflow-clip={workflowClip?.id}');
    expect(workflowSectionSource).toContain('tabindex={workflowClip ? "0" : undefined}');
    expect(workflowSectionSource).toContain('data-workflow-media-state="video"');
    expect(workflowSectionSource).toContain('data-workflow-video-container');
    expect(workflowSectionSource).toContain("phaseClips.map");
    expect(workflowSectionSource).toContain("data-workflow-video");
    expect(workflowSectionSource).toContain("data-workflow-clip-id={clip.id}");
    expect(workflowSectionSource).toContain('autoplay');
    expect(workflowSectionSource).toContain('preload={phase.id === "pre-op" && index === 0 ? "auto" : "metadata"}');
    expect(workflowSectionSource).toContain('muted');
    expect(workflowSectionSource).toContain('playsinline');
    expect(workflowSectionSource).toContain('class="workflow-phone__preview-media"');
    expect(workflowSectionSource).not.toContain("workflow-phone__preview-statusbar");
    expect(workflowSectionSource).not.toContain("workflow-phone__preview-time");
    expect(workflowSectionSource).toContain('trigger.addEventListener("pointerenter"');
    expect(workflowSectionSource).toContain('trigger.addEventListener("focus"');
    expect(workflowSectionSource).toContain('slot.addEventListener("ended"');
    expect(workflowSectionSource).toContain('playClipByIndex("pre-op", 0, { restart: false })');
    expect(workflowSectionSource).toContain("crossFadeToClip");
    expect(workflowSectionSource).toContain("workflowCrossfadeMs");
    expect(workflowSectionSource).toContain('slot.classList.add("is-leaving")');
    expect(workflowSectionSource).toContain("whenVideoCanRender");
    expect(workflowSectionSource).toContain("warmWorkflowVideos");
    expect(workflowSectionSource).toContain("workflowClips");
    expect(globalStyles).toContain(".workflow-phone__preview {");
    expect(globalStyles).toContain(".workflow-phone__preview-media {");
    expect(globalStyles).not.toContain(".workflow-phone__preview-statusbar {");
    expect(globalStyles).toContain(".workflow-phone__preview-video {");
    expect(globalStyles).toContain(".workflow-phone__preview-video.is-active {");
    expect(globalStyles).toContain(".workflow-phone__preview-video.is-leaving {");
    expect(globalStyles).toContain("opacity 760ms cubic-bezier(0.45, 0, 0.2, 1)");
    expect(globalStyles).not.toContain("--workflow-preview-statusbar-height");
    expect(globalStyles).toContain(".workflow-point[data-workflow-video-trigger] {");
    expect(globalStyles).toContain(".workflow-phone__frame {");
    expect(globalStyles).toContain("z-index: 10;");
    expect(globalStyles).toContain(".workflow-phone__screen-viewport {");
    expect(globalStyles).toContain("position: absolute;");
    expect(globalStyles).toContain("inset: 1.3% 4% 1.45%;");
    expect(globalStyles).toContain("z-index: 1;");
    expect(globalStyles).toContain(".workflow-phone__screen {");
    expect(globalStyles).toContain("min-height: 100%;");
    expect(globalStyles).toContain(".workflow-phone__screen--pre-op {");
    expect(globalStyles).toContain("position: relative;");
    expect(globalStyles).toContain(".workflow-phone__preview {");
    expect(globalStyles).toContain("inset: 0;");
    expect(globalStyles).toContain("object-fit: contain;");
  });

  it("ships workflow clips as web video assets instead of duplicate MOV files", () => {
    expect(existsSync(workflowAssetUrl("pre-op-evaluation.mp4"))).toBe(true);
    expect(existsSync(workflowAssetUrl("pre-op-consent.mp4"))).toBe(true);
    expect(existsSync(workflowAssetUrl("pre-op-media-attachment.mp4"))).toBe(true);
    expect(existsSync(workflowAssetUrl("intra-op-vitals.mp4"))).toBe(true);
    expect(existsSync(workflowAssetUrl("intra-op-medications.mp4"))).toBe(true);
    expect(existsSync(workflowAssetUrl("intra-op-events.mp4"))).toBe(true);
    expect(existsSync(workflowAssetUrl("post-op-vitals.mp4"))).toBe(true);
    expect(existsSync(workflowAssetUrl("post-op-substances.mp4"))).toBe(true);
    expect(existsSync(workflowAssetUrl("pre-op-evaluation.mov"))).toBe(false);
    expect(existsSync(workflowAssetUrl("pre-op-consent.mov"))).toBe(false);
    expect(existsSync(workflowAssetUrl("pre-op-media-attachment.mov"))).toBe(false);
    expect(existsSync(workflowAssetUrl("intra-op-vitals.mov"))).toBe(false);
    expect(existsSync(workflowAssetUrl("intra-op-medications.mov"))).toBe(false);
    expect(existsSync(workflowAssetUrl("intra-op-events.mov"))).toBe(false);
    expect(existsSync(workflowAssetUrl("post-op-vitals.mov"))).toBe(false);
    expect(existsSync(workflowAssetUrl("post-op-substances.mov"))).toBe(false);
  });

  it("uses a pinned workflow story layout with stacked copy and phone tracks", () => {
    expect(workflowSectionSource).toContain('data-workflow-section');
    expect(workflowSectionSource).toContain('data-workflow-stage');
    expect(workflowSectionSource).toContain('data-workflow-copy-track');
    expect(workflowSectionSource).toContain('data-workflow-screen-track');
    expect(workflowSectionSource).toContain('data-workflow-tabs');
    expect(workflowSectionSource).toContain('data-phase-trigger');
    expect(workflowSectionSource).toContain('type="button"');
    expect(workflowSectionSource).toContain("requestAnimationFrame");
    expect(workflowSectionSource).toContain('tab.addEventListener("click"');
    expect(workflowSectionSource).toContain("window.scrollTo({");
    expect(workflowSectionSource).toContain('behavior: "smooth"');
    expect(workflowSectionSource).toContain('window.matchMedia("(max-width: 820px)")');
    expect(workflowSectionSource).toContain("progress < 0.28");
    expect(workflowSectionSource).toContain("progress < 0.58");
    expect(workflowSectionSource).toContain('class="workflow-section__copy"');
    expect(workflowSectionSource).toContain('class="workflow-section__device"');
    expect(workflowSectionSource).toContain('class="workflow-phone"');
    expect(workflowSectionSource).toContain('class="workflow-tabs"');
    expect(globalStyles).toContain(".workflow-section {");
    expect(globalStyles).toContain(".workflow-section__inner {");
    expect(globalStyles).toContain(".workflow-section__stage {");
    expect(globalStyles).toContain(".workflow-section__title-line {");
    expect(globalStyles).toContain(".workflow-section__phase-viewport {");
    expect(globalStyles).toContain(".workflow-section__phase-track {");
    expect(globalStyles).toContain(".workflow-phase-card {");
    expect(globalStyles).toContain("position: relative;");
    expect(globalStyles).toContain("position: absolute;");
    expect(globalStyles).toContain("pointer-events: none;");
    expect(globalStyles).toContain(
      '.workflow-section[data-workflow-active-phase="post-op"] .workflow-phase-card[data-phase="post-op"] {',
    );
    expect(globalStyles).toContain(".workflow-phone__screen-viewport {");
    expect(globalStyles).toContain(".workflow-phone__screen-track {");
    expect(globalStyles).toContain("grid-auto-columns: 100%;");
    expect(globalStyles).toContain("grid-auto-flow: column;");
    expect(globalStyles).toContain("transform: translate3d(calc(var(--workflow-screen-shift, 0%) * -1), 0, 0);");
    expect(globalStyles).toContain(".workflow-tabs {");
    expect(globalStyles).toContain("min-height: 280vh;");
    expect(globalStyles).toContain("min-height: inherit;");
    expect(globalStyles).toContain("position: sticky;");
    expect(globalStyles).toContain("top: 0;");
    expect(globalStyles).toContain("--workflow-progress");
    expect(globalStyles).toContain("overflow: visible;");
    expect(globalStyles).toContain("background: transparent;");
    expect(globalStyles).toContain("border: none;");
    expect(globalStyles).toContain(".workflow-section__phase-track {");
    expect(globalStyles).toContain("transition: none;");
    expect(globalStyles).toContain("background: #2c2c2e;");
    expect(globalStyles).toContain("color: #ffffff;");
    expect(globalStyles).toContain("grid-template-columns: minmax(0, 0.95fr) minmax(300px, 0.85fr);");
    expect(globalStyles).toContain(".workflow-phone {");
    expect(globalStyles).toContain(".workflow-phone__screen-track {");
  });
});
