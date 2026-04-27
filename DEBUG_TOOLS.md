# Developer Debug Tools

The developer debug tools (viewport width display, orientation badges, etc.) have been disabled for a cleaner production look.

## How to Reactivate

To re-enable these tools for debugging:

1.  **Layout**: Open `site/src/layouts/BaseLayout.astro` and uncomment the block between lines 63 and 79 (approx). This block contains the `ipad-debug-badge`, `site-build-badge`, and `viewport-debug` divs, along with the `updateDebug` script.
2.  **Styles**: Open `site/src/styles/global.css` and uncomment the block at the very top (lines 3 to 46 approx) that defines the `.ipad-debug-badge`, `.site-build-badge`, and `.viewport-debug` classes.

Once uncommented, the tools will reappear:
- **SITE BUILD ACTIVE**: Top right badge.
- **WIDTH/ORIENT**: Top right (below site build badge) showing real-time viewport width and orientation.
- **TABLET PORTRAIT ACTIVE**: Bottom left badge (appears only when specific iPad portrait conditions are met).
