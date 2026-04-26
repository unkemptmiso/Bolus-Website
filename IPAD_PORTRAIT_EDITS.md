# iPad Portrait Editing Guide

To edit the styling for **iPad Portrait** versions of the website (excluding iPad Mini), follow these instructions strictly.

## 1. Target File
All overrides must be placed in:
`site/src/styles/global.css`

## 2. Media Query Range
Use the dedicated override block at the very bottom of the file:
```css
@media (min-width: 769px) and (max-width: 1320px) {
  /* YOUR OVERRIDES HERE */
}
```
*   **Min-width 769px**: Excludes iPad Mini (744px) and smaller tablets.
*   **Max-width 1320px**: Captures high-resolution iPad Pro models (11" and 13") which report widths up to 1280px in portrait mode.

## 3. Rules for Agents
- **No Global Edits**: Do NOT modify base classes or other media queries. Only edit inside this specific block.
- **Priority**: Use `!important` for layout-critical properties (width, padding, display, position) to ensure they override the complex "Small Desktop" styles defined earlier in the file.
- **Section Structure**: The portrait layout currently uses a vertical stack (`flex-direction: column`) with centered content. Maintain this structure unless explicitly asked otherwise.
- **Image Clipping**: Avoid using `absolute` positioning or large negative `right`/`left` offsets for images in this range. Use `relative` positioning and `margin: 0 auto`.

## 4. Current Debug Badges
The following debug elements are currently active in `BaseLayout.astro` and `global.css`:
- `.site-build-badge`: Always visible (Top Right).
- `.viewport-debug`: Live Width/Orientation counter (Top Right).
- `.ipad-debug-badge`: "TABLET PORTRAIT ACTIVE" (Bottom Left, triggers in the range above).
