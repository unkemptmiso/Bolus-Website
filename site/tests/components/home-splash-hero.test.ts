import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const splashHeroSource = readFileSync(
  new URL("../../src/components/content/HomeSplashHero.astro", import.meta.url),
  "utf8",
);
const globalStyles = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("home splash hero", () => {
  it("keeps the approved headline stack and a wider mobile text measure", () => {
    expect(splashHeroSource).toContain('class="splash__title"');
    expect(splashHeroSource).toContain('class="splash__lede"');
    expect(splashHeroSource).toContain('class="splash__body splash__body--centered"');
    expect(globalStyles).toContain(".splash__lede {\n  max-width: 24ch;");
    expect(globalStyles).toContain(".splash__body {\n  margin-top: -0.04rem;");
    expect(globalStyles).toContain("@media (max-width: 820px) {");
    expect(globalStyles).toContain(".splash__lede {\n    max-width: 20ch;");
  });
});
