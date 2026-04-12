import { describe, expect, it } from "vitest";

import {
  appendWaitlistSubmission,
  formatWaitlistRow,
  parseWaitlistSubmission,
} from "../../src/lib/server/waitlist";
import { resolveServerRuntimeConfig } from "../../src/lib/server/runtime-env";

describe("waitlist submission parsing", () => {
  it("accepts required fields and keeps other-source text only when needed", () => {
    const parsed = parseWaitlistSubmission({
      name: "Jane Doe",
      email: "jane@example.com",
      practiceName: "Main Street Anesthesia",
      referralSource: "other",
      referralSourceOther: "State society email",
      comments: "Interested in early access",
    });

    expect(parsed.referralSource).toBe("other");
    expect(parsed.referralSourceOther).toBe("State society email");
    expect(parsed.comments).toBe("Interested in early access");
  });

  it("rejects missing other-source text when Other is selected", () => {
    expect(() =>
      parseWaitlistSubmission({
        name: "Jane Doe",
        email: "jane@example.com",
        practiceName: "Main Street Anesthesia",
        referralSource: "other",
        referralSourceOther: "",
      }),
    ).toThrow();
  });
});

describe("waitlist row formatting", () => {
  it("creates a stable row shape for storage", () => {
    const row = formatWaitlistRow(
      {
        name: "Jane Doe",
        email: "jane@example.com",
        practiceName: "Main Street Anesthesia",
        referralSource: "google-search",
        referralSourceOther: "",
        comments: "",
      },
      "2026-04-11T00:00:00.000Z",
    );

    expect(row).toEqual([
      "2026-04-11T00:00:00.000Z",
      "Jane Doe",
      "jane@example.com",
      "Main Street Anesthesia",
      "google-search",
      "",
      "",
    ]);
  });
});

describe("waitlist persistence", () => {
  it("inserts a submission into the configured D1 database", async () => {
    const calls: unknown[][] = [];
    const database = {
      prepare(query: string) {
        expect(query).toContain("insert into waitlist_signups");

        return {
          bind(...values: unknown[]) {
            calls.push(values);

            return {
              run: async () => ({
                success: true,
              }),
            };
          },
        };
      },
    };

    await appendWaitlistSubmission(database, {
      name: "Jane Doe",
      email: "jane@example.com",
      practiceName: "Main Street Anesthesia",
      referralSource: "google-search",
      referralSourceOther: "",
      comments: "",
    });

    expect(calls).toHaveLength(1);
    expect(calls[0]?.slice(1)).toEqual([
      "Jane Doe",
      "jane@example.com",
      "Main Street Anesthesia",
      "google-search",
      "",
      "",
    ]);
  });
});

describe("waitlist runtime config", () => {
  it("marks the waitlist integration as configured when either D1 or Google Sheets is present", () => {
    const configuredD1 = resolveServerRuntimeConfig({
      PUBLIC_SITE_URL: "https://bolus.invalid",
      WAITLIST_D1_BINDING: "bound",
    });

    expect(configuredD1.integrations.waitlist.mode).toBe("configured");
    expect(configuredD1.integrations.waitlist.provider).toBe("cloudflare-d1");

    const configuredSheets = resolveServerRuntimeConfig({
      PUBLIC_SITE_URL: "https://bolus.invalid",
      WAITLIST_GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/123/exec",
    });

    expect(configuredSheets.integrations.waitlist.mode).toBe("configured");
    expect(configuredSheets.integrations.waitlist.provider).toBe("google-sheets");

    const configuredBoth = resolveServerRuntimeConfig({
      PUBLIC_SITE_URL: "https://bolus.invalid",
      WAITLIST_D1_BINDING: "bound",
      WAITLIST_GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/123/exec",
    });

    expect(configuredBoth.integrations.waitlist.mode).toBe("configured");
    expect(configuredBoth.integrations.waitlist.provider).toBe("both");
  });
});
