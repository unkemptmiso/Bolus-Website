import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const waitlistPagePath = fileURLToPath(
  new URL("../../src/pages/waitlist.astro", import.meta.url),
);
const waitlistApiSource = readFileSync(
  new URL("../../src/pages/api/waitlist.ts", import.meta.url),
  "utf8",
);

describe("waitlist form submission", () => {
  it("does not ship the retired waitlist form page", () => {
    expect(existsSync(waitlistPagePath)).toBe(false);
  });

  it("validates and appends waitlist submissions through the API route", () => {
    expect(waitlistApiSource).toContain("export const prerender = false;");
    expect(waitlistApiSource).toContain("parseWaitlistSubmission");
    expect(waitlistApiSource).toContain("appendWaitlistSubmission");
    expect(waitlistApiSource).toContain("invalid_payload");
    expect(waitlistApiSource).toContain("waitlist_unavailable");
    expect(waitlistApiSource).toContain("submitted");
  });
});
