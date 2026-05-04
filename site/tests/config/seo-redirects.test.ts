import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const redirectsSource = readFileSync(new URL("../../public/_redirects", import.meta.url), "utf8");

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
      "/mobile-anesthesia-charting  /mobile-anesthesia-charting/  301",
      "/paper-anesthesia-chart-alternative  /paper-anesthesia-chart-alternative/  301",
      "/pricing  /pricing/  301",
      "/waitlist  /waitlist/  301",
    ];

    for (const redirect of expectedRedirects) {
      expect(redirectsSource).toContain(redirect);
    }
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

  it("redirects removed public pages to the closest current destination", () => {
    const expectedRedirects = [
      "/simulator  /  301",
      "/simulator/  /  301",
      "/business  /pricing/  301",
      "/business/  /pricing/  301",
      "/support  /contact/  301",
      "/support/  /contact/  301",
      "/security  /legal/hipaa-compliance-policy/  301",
      "/security/  /legal/hipaa-compliance-policy/  301",
    ];

    for (const redirect of expectedRedirects) {
      expect(redirectsSource).toContain(redirect);
    }
  });
});
