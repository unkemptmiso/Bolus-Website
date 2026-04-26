import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

const contentPagesDir = fileURLToPath(new URL("../../src/content/pages/", import.meta.url));

function readPage(fileName: string) {
  return readFileSync(join(contentPagesDir, fileName), "utf8");
}

describe("page metadata titles", () => {
  it("uses properly capitalized browser titles across public pages", () => {
    expect(readPage("about.md")).toContain('title: "About | Bolus"');
    expect(readPage("app.md")).toContain('title: "App | Bolus"');
    expect(readPage("compare-maps-anesthesia.md")).toContain(
      'title: "Bolus vs Maps Anesthesia | Bolus"',
    );
    expect(readPage("compare-paper-charts.md")).toContain(
      'title: "Bolus vs Paper Charts | Bolus"',
    );
    expect(readPage("contact.md")).toContain('title: "Contact | Bolus"');
    expect(readPage("legal.md")).toContain('title: "Legal | Bolus"');
    expect(readPage("login.md")).toContain('title: "Sign In | Bolus"');
    expect(readPage("medical-disclaimer.md")).toContain(
      'title: "Medical Disclaimer | Bolus"',
    );
    expect(readPage("privacy-policy.md")).toContain('title: "Privacy Policy | Bolus"');
    expect(readPage("terms-of-service.md")).toContain(
      'title: "Terms of Service | Bolus"',
    );
    expect(readPage("hipaa-compliance-policy.md")).toContain(
      'title: "HIPAA Compliance Policy | Bolus"',
    );
  });
});
