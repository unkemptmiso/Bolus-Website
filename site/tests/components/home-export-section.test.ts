import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const homePageSource = readFileSync(
  new URL("../../src/pages/index.astro", import.meta.url),
  "utf8",
);
const exportSectionSource = readFileSync(
  new URL("../../src/components/content/HomeExportSection.astro", import.meta.url),
  "utf8",
);
const globalStyles = readFileSync(
  new URL("../../src/styles/global.css", import.meta.url),
  "utf8",
);

describe("home export section", () => {
  it("mounts the fifth homepage section after the workflow block", () => {
    expect(homePageSource).toContain(
      'import HomeExportSection from "../components/content/HomeExportSection.astro";',
    );
    expect(homePageSource).toContain("<HomeWorkflowSection />");
    expect(homePageSource).toContain("<HomeExportSection />");
  });

  it("uses the approved export copy without extra proof-point bullets", () => {
    expect(exportSectionSource).toContain("An anesthesia record that doesn’t look like it’s from the 90s.");
    expect(exportSectionSource).toContain("The final record is clean, legible, and thoughtfully structured");
    expect(exportSectionSource).toContain("quality of care delivered.");
    expect(exportSectionSource).not.toContain("readable structure");
    expect(exportSectionSource).not.toContain("clean timestamps");
    expect(exportSectionSource).not.toContain("polished PDF layout");
    expect(exportSectionSource).not.toContain("easier storage, retrieval, and review than paper");
    expect(exportSectionSource).not.toContain('class="export-section__points"');
  });

  it("uses a centered stacked editorial layout with a hoverable document rolodex underneath the copy", () => {
    expect(exportSectionSource).toContain('class="export-section__copy"');
    expect(exportSectionSource).toContain('class="export-section__preview"');
    expect(exportSectionSource).toContain('class="record-rolodex"');
    expect(exportSectionSource).toContain("recordPages");
    expect(exportSectionSource).toContain("/assets/record-screenshots/page-1.webp");
    expect(exportSectionSource).toContain("/assets/record-screenshots/page-6.webp");
    expect(exportSectionSource).toContain("export-document-card");
    expect(exportSectionSource).toContain("data-record-page");
    expect(exportSectionSource).toContain("data-record-rolodex");
    expect(exportSectionSource).toContain('loading="lazy"');
    expect(exportSectionSource).toContain('fetchpriority="low"');
    expect(exportSectionSource).toContain("const initialSpread = 190;");
    expect(exportSectionSource).toContain('const mobileCarouselBreakpoint = "(max-width: 768px)";');
    expect(exportSectionSource).toContain("max-width: 720px");
    expect(exportSectionSource).toContain("max-width: 980px");
    expect(exportSectionSource).toContain("max-width: 1180px");
    expect(exportSectionSource).toContain("restSpread");
    expect(exportSectionSource).toContain("neighborNudge");
    expect(exportSectionSource).toContain("const getDesktopLayout = () =>");
    expect(exportSectionSource).toContain("const clampPageShift = (shift, layout) =>");
    expect(exportSectionSource).toContain("const safeSpread = Math.min(restSpread, availableSpread);");
    expect(exportSectionSource).toContain("const edgeInset = 28;");
    expect(exportSectionSource).toContain("previousPagePeek");
    expect(exportSectionSource).toContain("const activeShift = clampPageShift(");
    expect(exportSectionSource).toContain("index === activeIndex - 1");
    expect(exportSectionSource).toContain("activeShift - layout.previousPagePeek");
    expect(exportSectionSource).toContain("--page-yaw\", isActive ? \"0deg\"");
    expect(exportSectionSource).toContain("--page-yaw");
    expect(exportSectionSource).toContain("--page-depth");
    expect(exportSectionSource).not.toContain("--page-raise");
    expect(exportSectionSource).toContain('page.style.setProperty("--page-yaw", isActive ? "-18deg" : "-20deg");');
    expect(globalStyles).toContain(".export-section {");
    expect(globalStyles).toContain(".export-section__inner {");
    expect(globalStyles).toContain(".export-section__copy {");
    expect(globalStyles).toContain(".record-rolodex {");
    expect(globalStyles).toContain(".export-document-card {");
    expect(globalStyles).toContain(".export-document-card.is-active {");
    expect(globalStyles).toContain("perspective:");
    expect(globalStyles).toContain("rotateY");
    expect(globalStyles).toContain("border-color: #007AFF;");
    expect(globalStyles).toContain("0 0 0 3px #007AFF");
    expect(globalStyles).toContain("0 26px 58px rgba(0, 122, 255, 0.16)");
    expect(globalStyles).toContain("filter: saturate(1.03);");
    expect(globalStyles).toContain("left: clamp(12.5rem, 18%, 16rem);");
    expect(globalStyles).toContain("width: min(100%, 88rem);");
    expect(globalStyles).toContain("@media (max-width: 1180px)");
    expect(globalStyles).toContain("width: min(100%, 60rem);");
    expect(globalStyles).toContain("width: min(32vw, 20rem);");
    expect(globalStyles).toContain("@media (max-width: 980px)");
    expect(globalStyles).toContain("width: min(100%, 44rem);");
    expect(globalStyles).toContain("width: min(30vw, 16rem);");
    expect(globalStyles).toContain("width: min(64vw, 16rem);");
    expect(globalStyles).toContain("width: min(74vw, 14rem);");
    expect(globalStyles).toContain("scroll-snap-type: x mandatory;");
    expect(globalStyles).toContain("-webkit-overflow-scrolling: touch;");
    expect(globalStyles).toContain("width: min(100%, calc(100vw - 2rem));");
    expect(globalStyles).toContain("--record-card-width: min(72vw, 15rem);");
    expect(globalStyles).toContain("--record-edge-peek: clamp(1.25rem, 4vw, 2rem);");
    expect(globalStyles).toContain("overflow: visible;");
    expect(globalStyles).toContain(
      "scroll-padding-inline: max(var(--record-edge-peek), calc((100% - var(--record-card-width)) / 2));",
    );
    expect(globalStyles).toContain(
      "padding: 1.15rem max(var(--record-edge-peek), calc((100% - var(--record-card-width)) / 2)) 2.1rem;",
    );
    expect(globalStyles).toContain("scroll-snap-align: center;");
    expect(globalStyles).toContain("flex: 0 0 var(--record-card-width);");
    expect(globalStyles).toContain("perspective: 1200px;");
    expect(globalStyles).toContain("transform-style: preserve-3d;");
    expect(globalStyles).toContain("rotateY(-8deg) scale(0.975);");
    expect(globalStyles).toContain(".export-document-card + .export-document-card {");
    expect(globalStyles).toContain("margin-left: -2.1rem;");
    expect(globalStyles).toContain(`  .export-document-card::after {
    opacity: 0;
  }`);
    expect(globalStyles).toContain(`  .export-document-card img {
    background: #ffffff;
    opacity: 1;
  }`);
    expect(globalStyles).toContain("z-index: 1;");
    expect(globalStyles).toContain("transition-duration: 420ms, 420ms, 240ms, 240ms;");
    expect(globalStyles).toContain("transition-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);");
    expect(globalStyles).toContain("rotateY(-8deg) scale(0.975);");
    expect(globalStyles).toContain("translate3d(0, 0, 30px) rotateY(0deg) scale(0.992);");
    expect(globalStyles).toContain(`  .export-document-card.is-active {
    z-index: 5;
    border-color: #007AFF;
    box-shadow: 0 0 0 3px #007AFF;
    filter: none;
    transform: translate3d(0, 0, 30px) rotateY(0deg) scale(0.992);
  }`);
    expect(globalStyles).toContain("filter: none;");
    expect(exportSectionSource).toContain("const mobileCarousel = window.matchMedia(mobileCarouselBreakpoint);");
    expect(exportSectionSource).toContain("if (window.matchMedia(mobileCarouselBreakpoint).matches) {");
    expect(globalStyles).toContain("@media (max-width: 768px)");
    expect(globalStyles).toContain(
      "padding: 1.15rem max(var(--record-edge-peek), calc((100% - var(--record-card-width)) / 2)) 2.1rem;",
    );
    expect(globalStyles).toContain(
      "scroll-padding-inline: max(var(--record-edge-peek), calc((100% - var(--record-card-width)) / 2));",
    );
    expect(globalStyles).toContain("flex: 0 0 var(--record-card-width);");
    expect(globalStyles).toContain("margin-left: -2.1rem;");
    expect(exportSectionSource).toContain("const syncMobileActivePage = () =>");
    expect(exportSectionSource).toContain("if (mobileProgrammaticScroll) return;");
    expect(exportSectionSource).toContain("rolodex.scrollLeft + rolodex.clientWidth / 2");
    expect(exportSectionSource).toContain("page.offsetLeft + page.offsetWidth / 2");
    expect(exportSectionSource).toContain("const centerMobilePage = (index) =>");
    expect(exportSectionSource).toContain("rolodex.scrollTo({ left: targetScrollLeft, behavior: \"smooth\" });");
    expect(exportSectionSource).toContain("let mobileProgrammaticScroll = false;");
    expect(exportSectionSource).toContain("const finishMobileProgrammaticScroll = () =>");
    expect(exportSectionSource).toContain('rolodex.addEventListener("pointerdown", stopMobileProgrammaticScroll, { passive: true });');
    expect(exportSectionSource).toContain('rolodex.addEventListener("scrollend", finishMobileProgrammaticScroll);');
    expect(exportSectionSource).toContain("const focusPage = (index) =>");
    expect(exportSectionSource).not.toContain("scrollIntoView({ behavior: \"smooth\", inline: \"center\", block: \"nearest\" })");
    expect(exportSectionSource).toContain("let mobileScrollFrame = 0;");
    expect(exportSectionSource).toContain("const queueMobileActivePageSync = () =>");
    expect(exportSectionSource).toContain('rolodex.addEventListener("scroll", queueMobileActivePageSync, { passive: true });');
    expect(globalStyles).toContain("transition:");
    expect(globalStyles).toContain("transform:");
    expect(globalStyles).toContain("grid-template-columns: 1fr;");
    expect(globalStyles).toContain("justify-items: center;");
    expect(globalStyles).toContain("text-align: center;");
    expect(globalStyles).toContain("max-width: none;");
    expect(globalStyles).toContain("width: 100%;");
    expect(globalStyles).toContain("text-wrap: pretty;");
    expect(globalStyles).toContain("overflow: visible;");
  });
});
