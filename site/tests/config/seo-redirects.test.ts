import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const redirectsSource = readFileSync(new URL("../../public/_redirects", import.meta.url), "utf8");
const officialAppStoreUrl =
  "https://apps.apple.com/us/app/bolus-anesthesia-record/id6761444886";

describe("SEO redirects", () => {
  it("redirects canonical public routes without trailing slashes to the indexed URL", () => {
    const expectedRedirects = [
      "/about  /about/  301",
      "/contact  /contact/  301",
      "/legal  /legal/  301",
      "/legal/hipaa-compliance-policy  /legal/hipaa-compliance-policy/  301",
      "/legal/medical-disclaimer  /legal/medical-disclaimer/  301",
      "/legal/privacy-policy  /legal/privacy-policy/  301",
      "/legal/terms-of-service  /legal/terms-of-service/  301",
      "/pricing  /pricing/  301",
    ];

    for (const redirect of expectedRedirects) {
      expect(redirectsSource).toContain(redirect);
    }
  });

  it("retires the waitlist route with direct permanent redirects to the App Store listing", () => {
    const expectedRedirects = [
      `/waitlist  ${officialAppStoreUrl}  301`,
      `/waitlist/  ${officialAppStoreUrl}  301`,
      `/waitlist/index.html  ${officialAppStoreUrl}  301`,
    ];

    for (const redirect of expectedRedirects) {
      expect(redirectsSource).toContain(redirect);
    }

    expect(redirectsSource).not.toContain("/waitlist  /waitlist/  301");
  });

  it("redirects old legal aliases with and without trailing slashes", () => {
    const expectedRedirects = [
      "/privacy  /legal/privacy-policy/  301",
      "/privacy/  /legal/privacy-policy/  301",
      "/privacy-policy  /legal/privacy-policy/  301",
      "/privacy-policy/  /legal/privacy-policy/  301",
      "/terms  /legal/terms-of-service/  301",
      "/terms/  /legal/terms-of-service/  301",
      "/terms-of-service  /legal/terms-of-service/  301",
      "/terms-of-service/  /legal/terms-of-service/  301",
      "/medical-disclaimer  /legal/medical-disclaimer/  301",
      "/medical-disclaimer/  /legal/medical-disclaimer/  301",
      "/hipaa  /legal/hipaa-compliance-policy/  301",
      "/hipaa/  /legal/hipaa-compliance-policy/  301",
      "/hippa  /legal/hipaa-compliance-policy/  301",
      "/hippa/  /legal/hipaa-compliance-policy/  301",
      "/legal/hippa-compliance-policy  /legal/hipaa-compliance-policy/  301",
      "/legal/hippa-compliance-policy/  /legal/hipaa-compliance-policy/  301",
    ];

    for (const redirect of expectedRedirects) {
      expect(redirectsSource).toContain(redirect);
    }
  });

  it("redirects unpublished charting pages to the homepage", () => {
    const expectedRedirects = [
      "/mobile-anesthesia-charting  /  301",
      "/mobile-anesthesia-charting/  /  301",
      "/mobile-anesthesia-charting/index.html  /  301",
      "/paper-anesthesia-chart-alternative  /  301",
      "/paper-anesthesia-chart-alternative/  /  301",
      "/paper-anesthesia-chart-alternative/index.html  /  301",
    ];

    for (const redirect of expectedRedirects) {
      expect(redirectsSource).toContain(redirect);
    }
  });

  it("does not keep legacy redirects for deleted marketing pages", () => {
    const deletedPagePaths = ["/support", "/simulator", "/business", "/security"];

    for (const path of deletedPagePaths) {
      expect(redirectsSource).not.toMatch(new RegExp(`^${path}\\s`, "m"));
      expect(redirectsSource).not.toMatch(new RegExp(`^${path}/\\s`, "m"));
    }
  });
});
