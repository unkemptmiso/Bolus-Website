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
  it("uses direct logo asset URLs instead of production-brittle _image transforms", () => {
    expect(headerSource).not.toContain('import { Image } from "astro:assets";');
    expect(headerSource).toContain('import bolusMark from "../../assets/logos/bolus-mark.png";');
    expect(headerSource).toContain('import bolusText from "../../assets/logos/bolus-text.png";');
    expect(headerSource).toContain('src={bolusMark.src}');
    expect(headerSource).toContain('alt="Bolus logo mark"');
    expect(headerSource).toContain('src={bolusText.src}');
    expect(headerSource).toContain('draggable="false"');
    expect(headerSource).not.toContain("<Image");
  });

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
    expect(globalStyles).toContain(":root[data-header-state=\"condensed\"] .nav-shell {\n  padding: 0.44rem 0.88rem;");
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
    expect(globalStyles).toContain("opacity: 0.48;");
    expect(globalStyles).toContain(":root[data-header-state=\"condensed\"] .header-action {\n  padding: 0.18rem 0.75rem;");
    expect(globalStyles).toContain(".header-action__icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;");
    expect(globalStyles).toContain(":root[data-header-state=\"condensed\"] .header-action__icon {\n  width: 1.16rem;\n  height: 1.16rem;\n  background: transparent;\n  box-shadow: none;");
  });

  it("adds a phone-only dropdown header that mirrors the condensed desktop behavior", () => {
    expect(headerSource).toContain("const mobileNavigation = [");
    expect(headerSource).toContain('class="mobile-header"');
    expect(headerSource).toContain('class="mobile-header__cta"');
    expect(headerSource).toContain('class="mobile-menu-toggle"');
    expect(headerSource).toContain('data-mobile-menu-toggle');
    expect(headerSource).toContain('id="mobile-menu-panel"');
    expect(headerSource).toContain('class="mobile-menu-panel"');
    expect(headerSource).toContain('{ pageId: "simulator", icon: "simulator" }');
    expect(headerSource).toContain('{ pageId: "business", icon: "business" }');
    expect(headerSource).toContain('header.dataset.mobileMenu = nextMenuState;');
    expect(headerSource).toContain('menuToggle.setAttribute("aria-expanded", String(isMobileMenuOpen));');
    expect(headerSource).toContain('window.matchMedia("(max-width: 767px)")');
    expect(globalStyles).toContain("@media (max-width: 767px) {");
    expect(globalStyles).toContain(".mobile-header {");
    expect(globalStyles).toContain(".mobile-header__actions {");
    expect(globalStyles).toContain(".mobile-header__cta {");
    expect(globalStyles).toContain(".mobile-menu-toggle {");
    expect(globalStyles).toContain(".mobile-menu-shell {");
    expect(globalStyles).toContain('.nav-shell[data-mobile-menu="open"] .mobile-menu-shell {');
    expect(globalStyles).toContain(".mobile-menu-grid {");
    expect(globalStyles).toContain(".mobile-menu-link {");
    expect(globalStyles).toContain('border-color: transparent;');
    expect(globalStyles).toContain('background: rgba(255, 255, 255, 0.52);');
    expect(globalStyles).toContain('box-shadow:\n      0 10px 28px rgba(15, 23, 42, 0.07),');
    expect(globalStyles).toContain(".mobile-brand-lockup__mark {\n    width: 2.1rem;\n    height: 2.1rem;");
    expect(globalStyles).toContain(".mobile-brand-lockup__text {\n    max-width: 4.1rem;\n    height: 0.98rem;");
    expect(globalStyles).toContain('.nav-shell[data-mobile-menu="open"] .mobile-header {\n    padding: 0.28rem 0.46rem;');
    expect(globalStyles).toContain('.nav-shell[data-mobile-menu="open"] .mobile-header__actions {\n    gap: 0.24rem;');
    expect(globalStyles).toContain(".mobile-header__cta {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 2.12rem;");
    expect(globalStyles).toContain(".mobile-menu-toggle {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 2.12rem;\n    height: 2.12rem;");
    expect(globalStyles).toContain(".mobile-menu-link {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    min-height: 2.35rem;");
    expect(globalStyles).toContain(".site-header__inner {\n    width: calc(100vw - 3.1rem);\n    max-width: calc(100vw - 3.1rem);");
  });
});
