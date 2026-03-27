import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const headerSource = readFileSync(
  new URL("../../src/components/site/Header.astro", import.meta.url),
  "utf8",
);
const globalStyles = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("header scroll motion", () => {
  it("uses hysteresis thresholds and guarded state updates for condensed mode", () => {
    expect(headerSource).toContain('const condensedEnterThreshold = 18;');
    expect(headerSource).toContain('const condensedExitThreshold = 6;');
    expect(headerSource).toContain('headerState === "condensed"');
    expect(headerSource).toContain("if (nextState !== headerState)");
  });

  it("keeps the menu locked to a center track while the side groups compress inward", () => {
    expect(headerSource).toContain('class="nav-shell__edge nav-shell__edge--brand"');
    expect(headerSource).toContain('class="nav-shell__edge nav-shell__edge--action"');
    expect(globalStyles).toContain(".site-header__inner {\n  width: fit-content;\n  max-width: calc(100vw - 2.4rem);");
    expect(globalStyles).toContain(".nav-shell {\n  --header-motion-duration: 320ms;");
    expect(globalStyles).toContain(":root[data-header-state=\"condensed\"] .nav-shell {\n  padding: 0.18rem 0.38rem 0.18rem 0.38rem;");
    expect(globalStyles).toContain("grid-template-columns: max-content auto max-content;");
    expect(globalStyles).toContain(".header-nav {\n  grid-column: 2;");
    expect(globalStyles).toContain(
      ".nav-shell__edge--brand {\n  justify-self: stretch;\n  justify-content: flex-end;\n  padding-right: clamp(6.25rem, 9vw, 8.5rem);",
    );
    expect(globalStyles).toContain(
      ".nav-shell__edge--action {\n  justify-self: stretch;\n  justify-content: flex-start;\n  padding-left: clamp(6.25rem, 9vw, 8.5rem);",
    );
    expect(globalStyles).toContain(
      ':root[data-header-state="condensed"] .nav-shell__edge--brand {\n  padding-right: 1.35rem;\n  transform: translate3d(0, 0, 0);',
    );
    expect(globalStyles).toContain(
      ':root[data-header-state="condensed"] .nav-shell__edge--action {\n  padding-left: 1.35rem;\n  transform: translate3d(0, 0, 0);',
    );
    expect(globalStyles).toContain("transform: translate3d(-0.34rem, 0, 0) scale(0.96);");
    expect(globalStyles).toContain(".nav-shell__divider {\n  width: 1px;\n  height: 1.4rem;");
    expect(globalStyles).toContain("opacity: 0.34;");
    expect(globalStyles).toContain(":root[data-header-state=\"condensed\"] .header-action {\n  padding: 0.18rem 0.72rem 0.18rem 0.78rem;");
    expect(globalStyles).toContain(".header-action__icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;");
    expect(globalStyles).toContain(":root[data-header-state=\"condensed\"] .header-action__icon {\n  width: 1.16rem;\n  height: 1.16rem;\n  background: transparent;\n  box-shadow: none;");
  });
});
