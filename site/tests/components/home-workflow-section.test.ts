import { readFileSync } from "node:fs";

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
    expect(workflowSectionSource).toContain('<span class="workflow-section__title-line">pre-op to post-op.</span>');
    expect(workflowSectionSource).toContain(
      "Bolus is built to follow the case from start to finish, without sending you back to paper.",
    );
    expect(workflowSectionSource).toContain("Pre-Op");
    expect(workflowSectionSource).toContain("Pre-op without the paper shuffle.");
    expect(workflowSectionSource).toContain("Built-in evaluation notes");
    expect(workflowSectionSource).toContain("Consent captured in the record");
    expect(workflowSectionSource).toContain("Media added on the spot");
    expect(workflowSectionSource).toContain("Intra-Op");
    expect(workflowSectionSource).toContain("Intra-op charting that keeps up.");
    expect(workflowSectionSource).toContain(
      "With a timeline that continues to move through the case, Bolus helps you chart vitals, medications, and events very quickly, without constantly back charting.",
    );
    expect(workflowSectionSource).toContain("Vitals in seconds, one hand, no manual entry");
    expect(workflowSectionSource).toContain("One-tap medications");
    expect(workflowSectionSource).toContain("Case events at your fingertips");
    expect(workflowSectionSource).toContain("Post-Op");
    expect(workflowSectionSource).toContain("Post-op that wraps up cleanly.");
    expect(workflowSectionSource).toContain(
      "Bolus makes closing out the record feel quick and organized.",
    );
    expect(workflowSectionSource).toContain("Fast discharge vitals");
    expect(workflowSectionSource).toContain(
      "Enter discharge vitals quickly with a scrubber built for speed.",
    );
    expect(workflowSectionSource).toContain("Automatic case summary");
    expect(workflowSectionSource).toContain(
      "Review the case with total anesthesia time already calculated.",
    );
    expect(workflowSectionSource).toContain("Controlled substance reconciliation");
    expect(workflowSectionSource).toContain(
      "Complete reconciliation with a signature pad and totals pulled automatically from the record.",
    );
    expect(workflowSectionSource).not.toContain("Placeholder");
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
