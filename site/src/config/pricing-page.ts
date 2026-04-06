export type BillingMode = "annual" | "monthly";

export interface PricingFeature {
  label: string;
  included?: boolean;
}

export interface PricingPlan {
  slug: "starter" | "professional" | "professional-cloud" | "enterprise";
  name: string;
  summary: string;
  prices: {
    annualMonthly: number;
    monthlyMonthly: number;
  };
  badges?: string[];
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref?: string;
  upcoming?: boolean;
  featured?: boolean;
  footerNote?: string;
}

export interface PricingPageContent {
  eyebrow: string;
  title: string;
  titleLines: string[];
  body: string;
  supportingNote: string;
  defaultBilling: BillingMode;
  billingOptions: {
    annual: {
      label: string;
      pill: string | null;
    };
    monthly: {
      label: string;
      pill: string | null;
    };
  };
  plans: PricingPlan[];
}

export const pricingPage: PricingPageContent = {
  eyebrow: "",
  title: "The most robust record, for the cheapest price.",
  titleLines: ["The most robust record,", "for the cheapest price."],
  body:
    "Bolus is the most affordable mobile anesthesia record app on the market, by a long shot. We want Bolus to help you work safely while allowing your practice to thrive. We mean that, and the pricing shows it.",
  supportingNote: "",
  defaultBilling: "annual" as BillingMode,
  billingOptions: {
    annual: {
      label: "Annual",
      pill: "15% off",
    },
    monthly: {
      label: "Monthly",
      pill: null,
    },
  },
  plans: [
    {
      slug: "starter",
      name: "Starter",
      summary: "For getting off paper.",
      prices: {
        annualMonthly: 0,
        monthlyMonthly: 0,
      },
      features: [
        { label: "Core mobile charting" },
        { label: "5 case exports per month" },
        { label: "1 consent form" },
        { label: "1 snippet per category" },
      ],
      ctaLabel: "",
    },
    {
      slug: "professional",
      name: "Professional",
      summary: "For full daily use.",
      prices: {
        annualMonthly: 49,
        monthlyMonthly: 58,
      },
      features: [
        { label: "Everything in Starter" },
        { label: "Unlimited case exports" },
        { label: "Unlimited snippets" },
        { label: "Unlimited consent forms" },
      ],
      ctaLabel: "",
      featured: true,
      footerNote: "",
    },
    {
      slug: "professional-cloud",
      name: "Professional Cloud",
      summary: "Professional plus backup and sync.",
      prices: {
        annualMonthly: 89,
        monthlyMonthly: 105,
      },
      features: [
        { label: "Everything in Professional" },
        { label: "Cloud backup" },
        { label: "Sync across multiple devices" },
      ],
      ctaLabel: "Coming Soon",
      upcoming: true,
      footerNote: "",
    },
    {
      slug: "enterprise",
      name: "Enterprise",
      summary: "For practice-wide rollout conversations.",
      prices: {
        annualMonthly: 0,
        monthlyMonthly: 0,
      },
      features: [
        { label: "Reserved for future rollout packaging" },
        { label: "Reserved for future onboarding support" },
        { label: "Reserved for future practice-level terms" },
      ],
      ctaLabel: "Talk To Us",
      ctaHref: "/support",
      footerNote: "We can shape enterprise packaging later without forcing it into the page before it is ready.",
    },
  ],
};
