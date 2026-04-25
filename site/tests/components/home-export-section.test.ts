import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const homePageSource = readFileSync(
  new URL("../../src/pages/index.astro", import.meta.url),
  "utf8",
);
const exportSectionSource = readFileSync(
  new URL("../../src/components/content/HomeExportSection.astro", import.meta.url),
  "utf8",
);
const globalStyles = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("home export section", () => {
  it("mounts the fifth homepage section after the workflow block", () => {
    expect(homePageSource).toContain(
      'import HomeExportSection from "../components/content/HomeExportSection.astro";',
    );
    expect(homePageSource).toContain("<HomeWorkflowSection />");
    expect(homePageSource).toContain("<HomeExportSection />");
  });

  it("uses the approved export copy without extra proof-point bullets", () => {
    expect(exportSectionSource).toContain("An anesthesia record that doesn’t look like it’s from the 90s.");
    expect(exportSectionSource).toContain("The final record is clean, legible, and thoughtfully structured");
    expect(exportSectionSource).toContain("quality of care delivered.");
    expect(exportSectionSource).not.toContain("readable structure");
    expect(exportSectionSource).not.toContain("clean timestamps");
    expect(exportSectionSource).not.toContain("polished PDF layout");
    expect(exportSectionSource).not.toContain("easier storage, retrieval, and review than paper");
    expect(exportSectionSource).not.toContain('class="export-section__points"');
  });

  it("uses a centered stacked editorial layout with a hoverable document rolodex underneath the copy", () => {
    expect(exportSectionSource).toContain('class="export-section__copy"');
    expect(exportSectionSource).toContain('class="export-section__preview"');
    expect(exportSectionSource).toContain('class="record-rolodex"');
    expect(exportSectionSource).toContain("recordPages");
    expect(exportSectionSource).toContain("/assets/record-screenshots/page-1.png");
    expect(exportSectionSource).toContain("/assets/record-screenshots/page-6.png");
    expect(exportSectionSource).toContain("export-document-card");
    expect(exportSectionSource).toContain("data-record-page");
    expect(exportSectionSource).toContain("data-record-rolodex");
    expect(exportSectionSource).toContain("const initialSpread = 190;");
    expect(exportSectionSource).toContain("const focusStage = 520;");
    expect(exportSectionSource).toContain("max-width: 720px");
    expect(exportSectionSource).toContain("restSpread");
    expect(exportSectionSource).toContain("focusStage");
    expect(exportSectionSource).toContain("--page-yaw\", isActive ? \"0deg\"");
    expect(exportSectionSource).toContain("--page-yaw");
    expect(exportSectionSource).toContain("--page-depth");
    expect(exportSectionSource).not.toContain("--page-raise");
    expect(globalStyles).toContain(".export-section {");
    expect(globalStyles).toContain(".export-section__inner {");
    expect(globalStyles).toContain(".export-section__copy {");
    expect(globalStyles).toContain(".record-rolodex {");
    expect(globalStyles).toContain(".export-document-card {");
    expect(globalStyles).toContain(".export-document-card.is-active {");
    expect(globalStyles).toContain("perspective:");
    expect(globalStyles).toContain("rotateY");
    expect(globalStyles).toContain("left: 12%;");
    expect(globalStyles).toContain("width: min(100%, 88rem);");
    expect(globalStyles).toContain("transition:");
    expect(globalStyles).toContain("transform:");
    expect(globalStyles).toContain("grid-template-columns: 1fr;");
    expect(globalStyles).toContain("justify-items: center;");
    expect(globalStyles).toContain("text-align: center;");
    expect(globalStyles).toContain("max-width: none;");
    expect(globalStyles).toContain("width: 100%;");
    expect(globalStyles).toContain("text-wrap: pretty;");
    expect(globalStyles).toContain("overflow: visible;");
  });
});
