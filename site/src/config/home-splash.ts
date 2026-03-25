export const homeSplash = {
  headline: "Ditch Paper, Modernize Your Practice with Clean and Defensible Records",
  subheadline:
    "A clean, mobile-first anesthesia record app built to replace messy paper workflows with a faster and more defensible standard",
  actions: [
    {
      label: "Download on the App Store",
      href: "#download",
      variant: "primary" as const,
    },
    {
      label: "See How It Works",
      href: "/simulator",
      variant: "secondary" as const,
    },
  ],
  layout: {
    desktop: "split" as const,
    mobile: "stacked" as const,
  },
  devices: [
    {
      key: "ipad",
      alt: "Blank iPad device frame",
    },
    {
      key: "iphone",
      alt: "Blank iPhone device frame",
    },
  ],
} as const;
