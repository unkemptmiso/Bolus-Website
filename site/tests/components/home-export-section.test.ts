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
    expect(exportSectionSource).toContain(
      "The final record is clean, legible, and thoughtfully structured, with medications, vital signs, and intraoperative events laid out clearly to reduce ambiguity and reflect the quality of care delivered.",
    );
    expect(exportSectionSource).not.toContain("readable structure");
    expect(exportSectionSource).not.toContain("clean timestamps");
    expect(exportSectionSource).not.toContain("polished PDF layout");
    expect(exportSectionSource).not.toContain("easier storage, retrieval, and review than paper");
    expect(exportSectionSource).not.toContain('class="export-section__points"');
  });

  it("uses a centered stacked editorial layout with a cropped export preview underneath the copy", () => {
    expect(exportSectionSource).toContain('class="export-section__copy"');
    expect(exportSectionSource).toContain('class="export-section__preview"');
    expect(exportSectionSource).toContain('class="export-record"');
    expect(globalStyles).toContain(".export-section {");
    expect(globalStyles).toContain(".export-section__inner {");
    expect(globalStyles).toContain(".export-section__copy {");
    expect(globalStyles).toContain(".export-record {");
    expect(globalStyles).toContain("grid-template-columns: 1fr;");
    expect(globalStyles).toContain("justify-items: center;");
    expect(globalStyles).toContain("text-align: center;");
    expect(globalStyles).toContain("max-width: none;");
    expect(globalStyles).toContain("width: 100%;");
    expect(globalStyles).toContain("text-wrap: pretty;");
    expect(globalStyles).toContain("overflow: hidden;");
  });
});
