import { existsSync, readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const middlewareUrl = new URL("../../src/middleware.ts", import.meta.url);
const middlewareSource = existsSync(middlewareUrl) ? readFileSync(middlewareUrl, "utf8") : "";
const wranglerSource = readFileSync(new URL("../../wrangler.jsonc", import.meta.url), "utf8");

describe("HTTPS enforcement", () => {
  it("redirects HTTP requests to HTTPS before rendering pages", () => {
    expect(middlewareSource).toContain("defineMiddleware");
    expect(middlewareSource).toContain('url.protocol === "http:"');
    expect(middlewareSource).toContain('url.protocol = "https:"');
    expect(middlewareSource).toContain("Response.redirect(url, 301)");
  });

  it("runs the Worker before static assets so the HTTPS middleware can protect public pages", () => {
    expect(wranglerSource).toContain('"run_worker_first": true');
  });

  it("publishes the Worker on the production zone route", () => {
    expect(wranglerSource).toContain('"pattern": "bolusanesthesia.com/*"');
    expect(wranglerSource).toContain('"zone_name": "bolusanesthesia.com"');
  });
});
