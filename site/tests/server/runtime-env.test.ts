import { describe, expect, it } from "vitest";

import { resolveServerRuntimeConfig } from "../../src/lib/server/runtime-env";

describe("resolveServerRuntimeConfig", () => {
  it("marks optional integrations as mocked when credentials are absent", () => {
    const config = resolveServerRuntimeConfig({
      PUBLIC_SITE_URL: "https://bolus.invalid",
      PUBLIC_APP_STORE_URL: "https://apps.apple.com/app/id123",
    });

    expect(config.site.url).toBe("https://bolus.invalid");
    expect(config.integrations.auth.mode).toBe("mock");
    expect(config.integrations.stripe.mode).toBe("mock");
    expect(config.integrations.appHandoff.downloadUrl).toBe(
      "https://apps.apple.com/app/id123",
    );
  });

  it("marks integrations as configured when required credentials are present", () => {
    const config = resolveServerRuntimeConfig({
      PUBLIC_SITE_URL: "https://bolus.invalid",
      AUTH_JWT_SECRET: "super-secret-jwt-key",
      FIREBASE_PROJECT_ID: "bolus-dev",
      STRIPE_SECRET_KEY: "sk_test_123",
      STRIPE_WEBHOOK_SECRET: "whsec_123",
    });

    expect(config.integrations.auth.mode).toBe("configured");
    expect(config.integrations.auth.provider).toBe("firebase");
    expect(config.integrations.stripe.mode).toBe("configured");
  });

  it("trims the Apps Script webhook before validating it", () => {
    const config = resolveServerRuntimeConfig({
      PUBLIC_SITE_URL: "https://bolus.invalid",
      WAITLIST_D1_BINDING: "bound",
    });

    expect(config.integrations.waitlist.mode).toBe("configured");
    expect(config.integrations.waitlist.provider).toBe("cloudflare-d1");
  });
});
