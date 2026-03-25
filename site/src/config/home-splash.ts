export const homeSplash = {
  headline: "Ditch Paper.",
  lede: "Modernize Your Practice With Clean and Defensible Anesthesia Records.",
  subheadline:
    "A clean, mobile-first anesthesia record app built to replace messy paper workflows with a faster and more defensible standard",
  typography: {
    headlineLetterSpacing: "-1px",
    headlineLineHeight: "1",
    fontStack:
      '"SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
  },
  actions: [],
  layout: {
    desktop: "stacked" as const,
    mobile: "stacked" as const,
  },
  theme: {
    background: "#FFFFFF",
    headlineColor: "#000000",
    bodyColor: "#6B6B6B",
  },
  placeholders: [
    {
      key: "workspace",
      label: "Clinical workspace preview",
      description: "Procedure timeline, medication entries, and clean case structure.",
    },
    {
      key: "record",
      label: "Defensible record preview",
      description: "Legible entries, precise timestamps, and calm mobile-first charting.",
    },
  ],
} as const;
