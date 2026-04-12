import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const wranglerSource = readFileSync(new URL("../../wrangler.jsonc", import.meta.url), "utf8");

describe("waitlist D1 binding", () => {
  it("declares a D1 binding for waitlist submissions", () => {
    expect(wranglerSource).toContain('"d1_databases"');
    expect(wranglerSource).toContain('"binding": "WAITLIST_DB"');
  });
});
