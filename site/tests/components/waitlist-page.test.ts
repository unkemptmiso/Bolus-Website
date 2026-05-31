import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const waitlistPagePath = fileURLToPath(
  new URL("../../src/pages/waitlist.astro", import.meta.url),
);
const waitlistContentPath = fileURLToPath(
  new URL("../../src/content/pages/waitlist.md", import.meta.url),
);
const redirectsSource = readFileSync(new URL("../../public/_redirects", import.meta.url), "utf8");
const officialAppStoreUrl =
  "https://apps.apple.com/us/app/bolus-anesthesia-record/id6761444886";

describe("waitlist page retirement", () => {
  it("does not ship a waitlist page or waitlist content document", () => {
    expect(existsSync(waitlistPagePath)).toBe(false);
    expect(existsSync(waitlistContentPath)).toBe(false);
  });

  it("keeps old waitlist URLs on a direct permanent redirect instead of a 404", () => {
    expect(redirectsSource).toContain(`/waitlist  ${officialAppStoreUrl}  301`);
    expect(redirectsSource).toContain(`/waitlist/  ${officialAppStoreUrl}  301`);
    expect(redirectsSource).toContain(`/waitlist/index.html  ${officialAppStoreUrl}  301`);
  });
});
