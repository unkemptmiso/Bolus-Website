# Bolus Website Design and Aesthetic Guide

This document outlines the core visual, typographic, and architectural principles for the Bolus marketing website. The overarching theme is **stark, highly structured minimalism**. We establish trust and modern clinical precision entirely through vast negative space, flawless typography, and the absence of clutter.

---

## 1. Typography (The Native Apple Feel)

The website will utilize Apple's native system fonts (SF Pro) to create an immediate feeling of a highly integrated, lightweight iOS application. Minimalism requires perfect typography since text is the primary design element.

### Primary Typography Stack
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
```

### Hero Headings (H1)
*   **Font-Family**: System UI (Renders as SF Pro Display on Apple)
*   **Font-Weight**: `700` (Bold)
*   **Font-Size**: `65px` (for Hero) / `56px` (for secondary section headers)
*   **Letter-Spacing**: Tight tracking (`-1px` for Hero, `-0.28px` for secondary)
*   **Line-Height**: `1:1` (Tight leading so multi-line headlines stack beautifully)
*   **Color**: High-contrast, solid neutral depending on light/dark mode.

### Subheadings (H2 / P)
*   **Font-Family**: System UI (Renders as SF Pro Text on Apple)
*   **Font-Weight**: `500` (Medium)
*   **Font-Size**: `17px` (for Hero) / `22px` (for secondary wide text blocks)
*   **Letter-Spacing**: `0px` 
*   **Line-Height**: `150%` (`1.5em` for highly breathable reading)
*   **Color / Opacity**: `rgba(0, 0, 0, 0.65)` in light mode or `rgba(255, 255, 255, 0.8)` in dark mode. The alpha transparency allows subheadings to blend softly against their background, avoiding muddy grays and creating a stark contrast against the bold, solid headings above them.

---

## 2. Color Palette: Structural Minimalism

The site relies on extreme restraint regarding color. The UI should consist almost entirely of negative space (pure whites or deep blacks), allowing data and typography to take center stage.

*   **The Canvas**: Start with a clean **Light Mode** (Pure White `#FFFFFF` or `#FAFAFA`) for the hero section to establish trust and clarity, then transition into a **Dark Mode** (Deep Midnight Blue/Black) for intricate feature details to create a focused, "pro" tool atmosphere.
*   **The Foreground (Text)**: Pure Black (`#000000`) or Pure White (`#FFFFFF`) for maximum legibility and contrast depending on the sectional theme.
*   **Subtle Linework**: Very faint borders (`rgba(0,0,0,0.05)`) should replace harsh drop shadows to divide content natively and cleanly. In dark sections, use `rgba(255,255,255,0.1)`.
*   **The Primary Brand Color**: A single, high-contrast accent color (e.g., `#0099FF` or a warm `#F7BE00` like Flighty) used strictly and sparingly for active states, primary CTA buttons, and hyperlinks, providing focus without noise.

---

## 3. Web Animations & Micro-Interactions

Minimalism extends to motion. The website should not feel "bouncy" or overly animated; it should feel deliberate and instantly responsive.

*   **Scroll-Triggered Entry:** Elements should fade and slide delicately upwards into place as they enter the viewport, making the page feel alive and reactive.
*   **Smooth Background Transitions:** Transitions from light to dark sections should be handled via smooth gradients or fixed transition effects that feel seamless rather than abrupt.
*   **JavaScript-Driven Springs:** Utilize physics-based spring animations (like Framer Motion) with high stiffness and low bounce for interactions. Elements should snap precisely into place.
*   **Hardware-Accelerated Traits:** Only animate `transform` (e.g., `translateY`) and `opacity` to guarantee a stutter-free 60-120fps scrolling experience.

---

## 4. Layout & UI Components

*   **Vast Negative Space**: Padding and margins should be generous (`96px+` between main sections, `48px` within component blocks). Let the layout breathe. A perfectly centered hero section is a classic iOS landing page pattern.
*   **The "Pill" Paradigm & Glassmorphism**: Floating navigation menus and primary buttons should be perfectly rounded pills (`50px` border-radius). Stickied navigation bars should use `backdrop-filter: blur(20px)` over semi-transparent backgrounds to mimic the native iOS Control Center interface.
*   **Borders over Shadows**: Modern minimalistic interfaces eschew heavy blur-shadows (`box-shadow`) in favor of incredibly thin, sub-pixel borders (`1px solid rgba(0,0,0,0.08)`) rounding off UI elements.
*   **High-Radius Feature Cards**: Apply soft, modern corner radii (`24pt` to `32pt`) on interactive cards, ensuring they look native to iOS 15+ and distinct from the flat document flow.
