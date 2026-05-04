import { existsSync, readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const middlewareUrl = new URL("../../src/middleware.ts", import.meta.url);
const middlewareSource = existsSync(middlewareUrl) ? readFileSync(middlewareUrl, "utf8") : "";

describe("HTTPS enforcement", () => {
  it("redirects HTTP requests to HTTPS before rendering pages", () => {
    expect(middlewareSource).toContain("defineMiddleware");
    expect(middlewareSource).toContain('url.protocol === "http:"');
    expect(middlewareSource).toContain('url.protocol = "https:"');
    expect(middlewareSource).toContain("Response.redirect(url, 301)");
  });
});
