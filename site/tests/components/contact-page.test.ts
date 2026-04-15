import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const contactPageSource = readFileSync(
  new URL("../../src/pages/contact.astro", import.meta.url),
  "utf8",
);
const globalStylesSource = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("contact page", () => {
  it("uses a dedicated minimal contact page with only a centered heading and email", () => {
    expect(contactPageSource).toContain('getEntry("pages", "contact")');
    expect(contactPageSource).not.toContain("PageTemplate");
    expect(contactPageSource).toContain('class="contact-page"');
    expect(contactPageSource).toContain('class="contact-page__inner"');
    expect(contactPageSource).toContain("Get in touch with us");
    expect(contactPageSource).toContain("contact@bolusanesthesia.com");
    expect(contactPageSource).toContain('class="contact-page__email-button"');
    expect(contactPageSource).toContain('class="contact-page__email-icon"');
  });

  it("uses the guidance typography for the heading and supporting text", () => {
    expect(globalStylesSource).toContain(".site-main--contact {");
    expect(globalStylesSource).toContain(".contact-page {");
    expect(globalStylesSource).toContain("place-items: start center;");
    expect(globalStylesSource).toContain(".contact-page h1 {");
    expect(globalStylesSource).toContain("font-size: 65px;");
    expect(globalStylesSource).toContain("letter-spacing: -1px;");
    expect(globalStylesSource).toContain(".contact-page__email-button {");
    expect(globalStylesSource).toContain(".contact-page__email-icon {");
    expect(globalStylesSource).toContain("font-size: 22px;");
    expect(globalStylesSource).toContain("font-weight: 500;");
    expect(globalStylesSource).toContain("line-height: 1.5;");
    expect(globalStylesSource).toContain("border-radius: 999px;");
    expect(globalStylesSource).toContain("background: #007AFF;");
    expect(globalStylesSource).toContain("box-shadow:");
    expect(globalStylesSource).toContain("rgba(0, 122, 255, 0.14)");
    expect(globalStylesSource).toContain("text-align: center;");
  });
});
