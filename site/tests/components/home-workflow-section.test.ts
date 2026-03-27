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

  it("uses the approved pre-op workflow copy", () => {
    expect(workflowSectionSource).toContain("One workflow from pre-op to post-op.");
    expect(workflowSectionSource).toContain(
      "Bolus is built to follow the case from start to finish, without sending you back to paper.",
    );
    expect(workflowSectionSource).toContain("Pre-op without the paper shuffle.");
    expect(workflowSectionSource).toContain("Built-in evaluation notes");
    expect(workflowSectionSource).toContain("Consent captured in the record");
    expect(workflowSectionSource).toContain("Media added on the spot");
  });

  it("uses a left-copy, right-phone layout with a native placeholder frame", () => {
    expect(workflowSectionSource).toContain('class="workflow-section__copy"');
    expect(workflowSectionSource).toContain('class="workflow-section__device"');
    expect(workflowSectionSource).toContain('class="workflow-phone"');
    expect(globalStyles).toContain(".workflow-section {");
    expect(globalStyles).toContain(".workflow-section__inner {");
    expect(globalStyles).toContain("grid-template-columns: minmax(0, 0.95fr) minmax(300px, 0.85fr);");
    expect(globalStyles).toContain(".workflow-phone {");
    expect(globalStyles).toContain(".workflow-phone__screen {");
  });
});
