import { existsSync, readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const homePageSource = readFileSync(
  new URL("../../src/pages/index.astro", import.meta.url),
  "utf8",
);
const faqSectionPath = new URL(
  "../../src/components/content/HomeFaqSection.astro",
  import.meta.url,
);
const faqSectionSource = existsSync(faqSectionPath)
  ? readFileSync(faqSectionPath, "utf8")
  : "";
const globalStyles = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("home faq section", () => {
  it("mounts the seventh homepage section after the security block", () => {
    expect(homePageSource).toContain(
      'import HomeFaqSection from "../components/content/HomeFaqSection.astro";',
    );
    expect(homePageSource).toContain("<HomeSecuritySection />");
    expect(homePageSource).toContain("<HomeFaqSection />");
  });

  it("uses the approved faq heading and answer copy", () => {
    expect(faqSectionSource).toContain("FAQs");
    expect(faqSectionSource).toContain("What is Bolus?");
    expect(faqSectionSource).toContain(
      "Bolus is an anesthesia record app built for office-based and mobile practice.",
    );
    expect(faqSectionSource).toContain("Who is Bolus for?");
    expect(faqSectionSource).toContain("Can Bolus replace paper anesthesia records?");
    expect(faqSectionSource).toContain("Can I use Bolus on iPhone and iPad?");
    expect(faqSectionSource).toContain(
      "Does Bolus include pre-op, intra-op, and post-op charting?",
    );
    expect(faqSectionSource).toContain("How does Bolus protect patient data?");
  });

  it("uses a left-aligned one-at-a-time accordion that starts closed and animates open smoothly", () => {
    expect(faqSectionSource).toContain('data-faq-section');
    expect(faqSectionSource).toContain('data-faq-item');
    expect(faqSectionSource).toContain('data-faq-trigger');
    expect(faqSectionSource).toContain('aria-expanded="false"');
    expect(faqSectionSource).toContain("button.addEventListener(\"click\"");
    expect(faqSectionSource).toContain("content.classList.toggle(\"is-open\", isActive)");
    expect(faqSectionSource).toContain("faq-item__content-inner");
    expect(faqSectionSource).toContain("faq-item__chevron");
    expect(globalStyles).toContain(".faq-section {");
    expect(globalStyles).toContain(".faq-section__inner {");
    expect(globalStyles).toContain(".faq-list {");
    expect(globalStyles).toContain(".faq-item {");
    expect(globalStyles).toContain(".faq-item__trigger {");
    expect(globalStyles).toContain(".faq-item__content {");
    expect(globalStyles).toContain(".faq-item__content-inner {");
    expect(globalStyles).toContain(".faq-item__chevron {");
    expect(globalStyles).toContain(".faq-item.is-open .faq-item__chevron {");
    expect(globalStyles).toContain("border-top: 1px solid rgba(15, 23, 42, 0.1);");
    expect(globalStyles).toContain("justify-items: start;");
    expect(globalStyles).toContain("text-align: left;");
    expect(globalStyles).toContain("grid-template-rows: 0fr;");
    expect(globalStyles).toContain("transition: grid-template-rows 260ms cubic-bezier(0.22, 1, 0.36, 1);");
    expect(globalStyles).toContain("transform: rotate(180deg);");
  });
});
