import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const waitlistPageSource = readFileSync(
  new URL("../../src/pages/waitlist.astro", import.meta.url),
  "utf8",
);
const waitlistApiSource = readFileSync(
  new URL("../../src/pages/api/waitlist.ts", import.meta.url),
  "utf8",
);

describe("waitlist form submission", () => {
  it("posts the form payload to the waitlist API before showing success", () => {
    expect(waitlistPageSource).toContain('fetch("/api/waitlist"');
    expect(waitlistPageSource).toContain("method: \"POST\"");
    expect(waitlistPageSource).toContain("content-type");
    expect(waitlistPageSource).toContain("await response.json()");
    expect(waitlistPageSource).toContain("successState.hidden = false;");
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
