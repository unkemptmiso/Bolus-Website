export type FooterGroupId = "product" | "compare" | "company" | "legal" | "utility" | "support";

export interface ActionLink {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export type ContentSection =
  | {
    type: "feature-grid";
    eyebrow?: string;
    title: string;
    description?: string;
    columns?: 2 | 3;
    items: Array<{
      title: string;
      body: string;
    }>;
  }
  | {
    type: "checklist";
    eyebrow?: string;
    title: string;
    description?: string;
    items: string[];
  }
  | {
    type: "note";
    eyebrow?: string;
    title: string;
    body: string;
  }
  | {
    type: "cta";
    eyebrow?: string;
    id?: string;
    title: string;
    body: string;
    primaryCta: ActionLink;
    secondaryCta?: ActionLink;
  };

export interface SitePage {
  id: string;
  path: string;
  title: string;
  navLabel: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  category: FooterGroupId;
  hiddenPrimaryHeading?: string;
  hero: {
    eyebrow?: string;
    title: string;
    body: string;
    primaryCta?: ActionLink;
    secondaryCta?: ActionLink;
  };
  sections: ContentSection[];
}

export const siteMetadata = {
  name: "Bolus",
  tagline: "Modern anesthesia record app",
  defaultSiteUrl: "https://bolusanesthesia.com",
  description:
    "Bolus helps office-based anesthesia and sedation practices replace paper charting with cleaner, faster, and more defensible records.",
  accentColor: "#4d93ff",
  headerBrand: {
    markSrc: "/src/assets/logos/bolus-mark.png",
    textSrc: "/src/assets/logos/bolus-text.png",
    markSize: 34,
    wordmarkHeight: 22,
  },
  headerCta: {
    label: "Get the app",
    href: "/waitlist",
    variant: "primary" as const,
  },
};

export const homePage: SitePage = {
  id: "home",
  path: "/",
  title: "Bolus",
  navLabel: "Home",
  description:
    "Bolus is a modern, defensible replacement for paper charting in office-based anesthesia and sedation practice.",
  seoTitle: "Bolus | Modern Office-Based Anesthesia Record App",
  seoDescription:
    "Ditch paper charting. Bolus is a clean, mobile-first anesthesia record app designed to help office-based practices create highly defensible documentation.",
  category: "utility",
  hiddenPrimaryHeading: "The Modern Anesthesia Record App for Office-Based Practice",
  hero: {
    eyebrow: "Office-Based Anesthesia Documentation",
    title: "Ditch paper. Modernize your practice with clean and defensible records.",
    body: "A clean, mobile-first anesthesia record app built to replace messy paper workflows with a faster and more defensible standard.",
    primaryCta: {
      label: "Download on the App Store",
      href: "#download",
      variant: "primary",
    },
    secondaryCta: {
      label: "See how it works",
      href: "/simulator",
      variant: "secondary",
    },
  },
  sections: [
    {
      type: "feature-grid",
      eyebrow: "The Problem",
      title: "Your documentation should not feel like a liability.",
      description:
        "Bolus is positioned against paper burden and bloated practice software, not as another all-in-one admin suite.",
      columns: 3,
      items: [
        {
          title: "Messy handwriting is risky.",
          body: "Illegible timestamps and crossed-out vitals create ambiguity exactly when you need clarity.",
        },
        {
          title: "Paper is slow.",
          body: "Printing, scanning, storing, and retrieving charts adds friction before and after the case.",
        },
        {
          title: "Bulky systems get in the way.",
          body: "Bolus stays focused on clinical documentation instead of burying charting under billing and scheduling.",
        },
      ],
    },
    {
      type: "feature-grid",
      eyebrow: "The Shift",
      title: "Charting built for speed. Records built to last.",
      description:
        "The core promise is defensible, legible, mobile-first documentation that reflects the quality of care.",
      columns: 3,
      items: [
        {
          title: "Chart where you work.",
          body: "Use your phone or iPad instead of carrying clipboards through office-based cases.",
        },
        {
          title: "A defensible standard.",
          body: "Records stay clean, legible, and easier to stand behind later.",
        },
        {
          title: "Secure and offline-ready.",
          body: "The framework already anticipates encrypted, permissioned data flows for future app handoff work.",
        },
      ],
    },
    {
      type: "cta",
      eyebrow: "Download",
      id: "download",
      title: "Framework first. Product-ready next.",
      body: "This skeleton gives future agents a stable route map, API boundary, and content system so frontend work can accelerate without reinventing the site.",
      primaryCta: {
        label: "Explore Pricing",
        href: "/pricing",
        variant: "primary",
      },
      secondaryCta: {
        label: "View Support",
        href: "/support",
        variant: "secondary",
      },
    },
  ],
};

export const pageRegistry: SitePage[] = [
  homePage,
  {
    id: "pricing",
    path: "/pricing",
    title: "Pricing",
    navLabel: "Pricing",
    description: "Simple pricing for clinicians who want cleaner and more defensible documentation.",
    seoTitle: "Pricing | Bolus",
    seoDescription:
      "See straightforward Bolus pricing for office-based anesthesia documentation, from Starter through Professional and upcoming cloud backup.",
    category: "product",
    hero: {
      eyebrow: "Product",
      title: "The most robust record, for the cheapest price.",
      body: "Bolus is the most affordable mobile anesthesia record app on the market, by a long shot. We want Bolus to help you work safely while allowing your practice to thrive. We mean that, and the pricing shows it.",
      primaryCta: {
        label: "Request Pricing Details",
        href: "/support",
        variant: "primary",
      },
      secondaryCta: {
        label: "Compare Against Paper",
        href: "/compare/paper-charts",
        variant: "secondary",
      },
    },
    sections: [
      {
        type: "checklist",
        eyebrow: "Framework Status",
        title: "What this skeleton already supports",
        items: [
          "Cloudflare-ready checkout route placeholders",
          "Typed runtime config for Stripe and auth credentials",
          "Template-friendly pricing content blocks for future frontend agents",
        ],
      },
    ],
  },
  {
    id: "simulator",
    path: "/simulator",
    title: "Simulator",
    navLabel: "Simulator",
    description: "Future home for interactive workflow and case simulations.",
    seoTitle: "Simulator | Bolus",
    seoDescription:
      "Explore the planned workflow simulator for the Bolus anesthesia record app.",
    category: "product",
    hero: {
      eyebrow: "Product",
      title: "A dedicated surface for case-flow and charting simulations.",
      body: "React islands and Framer Motion are installed so this page can evolve into a rich simulator without bloating the rest of the site.",
      primaryCta: {
        label: "View API Health",
        href: "/api/health",
        variant: "primary",
      },
    },
    sections: [
      {
        type: "note",
        eyebrow: "Next Up",
        title: "Interactive work belongs here, not everywhere.",
        body: "The framework keeps simulation logic isolated so the rest of the marketing site can remain static, fast, and SEO-friendly.",
      },
    ],
  },
  {
    id: "about",
    path: "/about",
    title: "About Bolus",
    navLabel: "About",
    description: "Learn what Bolus is building for office-based anesthesia documentation.",
    seoTitle: "About | Bolus",
    seoDescription:
      "Learn about the Bolus mission, product focus, and approach to office-based anesthesia documentation.",
    category: "product",
    hero: {
      eyebrow: "About",
      title: "Built to modernize anesthesia documentation without adding more noise.",
      body: "Bolus exists to replace messy paper charting with a cleaner, faster, and more defensible workflow for office-based anesthesia teams.",
      primaryCta: {
        label: "Contact Bolus",
        href: "/contact",
        variant: "primary",
      },
      secondaryCta: {
        label: "Explore Pricing",
        href: "/pricing",
        variant: "secondary",
      },
    },
    sections: [
      {
        type: "feature-grid",
        eyebrow: "What matters",
        title: "A tighter product with a clearer purpose.",
        columns: 3,
        items: [
          {
            title: "Clinical clarity first",
            body: "Bolus is focused on documentation quality, legibility, and defensibility instead of becoming another bloated admin suite.",
          },
          {
            title: "Built for office-based workflow",
            body: "The experience is designed around the pace of mobile charting in real procedural settings, not retrofitted from hospital software.",
          },
          {
            title: "Serious by design",
            body: "Security, local-first handling, and deliberate product scope are part of the product philosophy, not afterthoughts.",
          },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Why practices care",
        title: "What Bolus is aiming to improve",
        items: [
          "Reduce ambiguity from handwritten records and scattered paperwork",
          "Make charting faster on the devices clinicians already carry",
          "Create records that are easier to review, retrieve, and stand behind later",
        ],
      },
      {
        type: "cta",
        eyebrow: "Next step",
        title: "Want to learn more or get in touch?",
        body: "We keep the public site straightforward on purpose. If you want pricing details, workflow context, or product updates, the contact page is the best next stop.",
        primaryCta: {
          label: "Email Bolus",
          href: "mailto:contact@bolusanesthesia.com",
          variant: "primary",
        },
        secondaryCta: {
          label: "Open Contact Page",
          href: "/contact",
          variant: "secondary",
        },
      },
    ],
  },
  {
    id: "contact",
    path: "/contact",
    title: "Contact",
    navLabel: "Contact",
    description: "Contact Bolus for product questions, pricing, or early access.",
    seoTitle: "Contact | Bolus",
    seoDescription:
      "Email Bolus for questions about pricing, product fit, and office-based anesthesia documentation.",
    category: "company",
    hero: {
      eyebrow: "Contact",
      title: "Questions, pricing, or early access? Email us directly.",
      body: "The best way to reach Bolus right now is by email. We keep it simple so conversations can stay direct and useful.",
      primaryCta: {
        label: "contact@bolusanesthesia.com",
        href: "mailto:contact@bolusanesthesia.com",
        variant: "primary",
      },
      secondaryCta: {
        label: "Join the Waitlist",
        href: "/waitlist",
        variant: "secondary",
      },
    },
    sections: [
      {
        type: "feature-grid",
        eyebrow: "Reach out about",
        title: "The kinds of conversations this page is for",
        columns: 3,
        items: [
          {
            title: "Product fit",
            body: "Ask whether Bolus is a good match for your office-based anesthesia or sedation workflow.",
          },
          {
            title: "Pricing questions",
            body: "Reach out if you want more context on current pricing or what is planned next.",
          },
          {
            title: "Early updates",
            body: "If you want launch updates or a closer look at the product direction, email is the fastest path.",
          },
        ],
      },
      {
        type: "note",
        eyebrow: "Email",
        title: "Primary contact",
        body: "contact@bolusanesthesia.com",
      },
      {
        type: "cta",
        eyebrow: "Prefer to raise your hand first?",
        title: "You can still join the waitlist and we will follow up there too.",
        body: "If email is not the right move yet, the waitlist is still the easiest way to stay in the loop.",
        primaryCta: {
          label: "Join the Waitlist",
          href: "/waitlist",
          variant: "primary",
        },
      },
    ],
  },
  {
    id: "compare-paper-charts",
    path: "/compare/paper-charts",
    title: "Bolus vs Paper Charts",
    navLabel: "vs. Paper Charts",
    description: "Comparison page for the clearest incumbent: paper charting.",
    seoTitle: "Bolus vs Paper Charts",
    seoDescription:
      "See how Bolus compares with paper charting for office-based anesthesia records.",
    category: "compare",
    hero: {
      eyebrow: "Compare",
      title: "Paper is familiar. It is also risky, slow, and hard to defend.",
      body: "This route is ready for SEO comparison content while keeping the top-level navigation minimal.",
      primaryCta: {
        label: "About Bolus",
        href: "/about",
        variant: "primary",
      },
    },
    sections: [
      {
        type: "checklist",
        title: "Comparison angles already mapped into the framework",
        items: [
          "Legibility and defensibility",
          "Speed of charting and retrieval",
          "Professional presentation of the record",
        ],
      },
    ],
  },
  {
    id: "compare-maps-anesthesia",
    path: "/compare/maps-anesthesia",
    title: "Bolus vs Maps Anesthesia",
    navLabel: "vs. Maps Anesthesia",
    description: "Comparison page template for alternative software positioning.",
    seoTitle: "Bolus vs Maps Anesthesia",
    seoDescription:
      "Compare Bolus with Maps Anesthesia for office-based anesthesia documentation.",
    category: "compare",
    hero: {
      eyebrow: "Compare",
      title: "A cleaner, tighter alternative for focused charting workflows.",
      body: "The framework supports competitor pages without forcing that complexity into the homepage.",
      primaryCta: {
        label: "Explore Pricing",
        href: "/pricing",
        variant: "primary",
      },
    },
    sections: [
      {
        type: "note",
        title: "Future comparison copy can remain modular.",
        body: "Competitor pages can expand SEO coverage while still reusing the same layout, metadata, and content primitives.",
      },
    ],
  },
  {
    id: "support",
    path: "/support",
    title: "Help & FAQs",
    navLabel: "Support",
    description: "Support hub and FAQ framework for clinicians and practice teams.",
    seoTitle: "Support | Bolus",
    seoDescription: "Get support and answers about the Bolus anesthesia record app.",
    category: "company",
    hero: {
      eyebrow: "Company",
      title: "A quiet place for operational questions, onboarding, and troubleshooting.",
      body: "Support content can grow here without adding clutter to the primary navigation.",
      primaryCta: {
        label: "Check API Health",
        href: "/api/health",
        variant: "primary",
      },
    },
    sections: [
      {
        type: "feature-grid",
        title: "Planned support modules",
        columns: 3,
        items: [
          {
            title: "FAQ blocks",
            body: "SEO-friendly support content can be added without compromising the homepage.",
          },
          {
            title: "Launch guides",
            body: "Practice onboarding guides can live beside troubleshooting content.",
          },
          {
            title: "Escalation paths",
            body: "Future contact or support forms can point at the existing API boundary.",
          },
        ],
      },
    ],
  },
  {
    id: "privacy",
    path: "/privacy",
    title: "Privacy Policy",
    navLabel: "Privacy",
    description: "Bolus privacy policy for account, device, and clinical documentation data handling.",
    seoTitle: "Privacy Policy | Bolus",
    seoDescription: "Read the Bolus privacy policy for local-first anesthesia documentation workflows.",
    category: "legal",
    hero: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      body: "How Bolus handles account data, technical diagnostics, and local-first clinical record workflows.",
    },
    sections: [],
  },
  {
    id: "terms",
    path: "/terms",
    title: "Terms of Use",
    navLabel: "Terms",
    description: "Bolus terms of use for clinical documentation, accounts, exports, and professional responsibility.",
    seoTitle: "Terms of Use | Bolus",
    seoDescription: "Read the Bolus terms of use for accessing and using the anesthesia record app.",
    category: "legal",
    hero: {
      eyebrow: "Legal",
      title: "Terms of Use",
      body: "The legal terms governing access to Bolus, local-first records, exports, and professional use of the service.",
    },
    sections: [],
  },
  {
    id: "medical-disclaimer",
    path: "/medical-disclaimer",
    title: "Medical Disclaimer",
    navLabel: "Medical Disclaimer",
    description: "Bolus medical disclaimer clarifying intended use, verification, and clinician responsibility.",
    seoTitle: "Medical Disclaimer | Bolus",
    seoDescription: "Read the Bolus medical disclaimer for documentation-only use and clinician responsibility.",
    category: "legal",
    hero: {
      eyebrow: "Legal",
      title: "Medical Disclaimer",
      body: "Important limitations, verification requirements, and clinician responsibilities when using Bolus in patient-care settings.",
    },
    sections: [],
  },
  {
    id: "login",
    path: "/login",
    title: "Sign In",
    navLabel: "Sign In",
    description: "Entry point for future authenticated app handoff.",
    seoTitle: "Sign In | Bolus",
    seoDescription: "Sign in route placeholder for the Bolus app experience.",
    category: "utility",
    hero: {
      eyebrow: "App",
      title: "The sign-in handoff route is wired, even before auth goes live.",
      body: "Future auth forms can be added here as a React island or a full runtime-rendered flow.",
      primaryCta: {
        label: "Inspect Session API",
        href: "/api/auth/session",
        variant: "primary",
      },
    },
    sections: [
      {
        type: "checklist",
        title: "Ready for future auth work",
        items: [
          "Typed auth runtime config",
          "Dedicated session route placeholder",
          "Stable page path for app handoff flows",
        ],
      },
    ],
  },
  {
    id: "app",
    path: "/app",
    title: "Dashboard",
    navLabel: "App",
    description: "Placeholder for the future web app shell.",
    seoTitle: "App | Bolus",
    seoDescription: "App shell placeholder for authenticated Bolus experiences.",
    category: "utility",
    hero: {
      eyebrow: "App",
      title: "A stable shell for future authenticated product work.",
      body: "This route gives future agents a predictable destination for dashboard or account tooling without changing the public site structure.",
      primaryCta: {
        label: "Open App Handoff API",
        href: "/api/app-handoff",
        variant: "primary",
      },
    },
    sections: [
      {
        type: "note",
        title: "Why this route exists now",
        body: "The technical framework anticipates auth, payments, and app handoff. Creating the route early prevents expensive restructuring later.",
      },
    ],
  },
];

export const headerNavigation = [
  { label: "About", pageId: "about" },
  { label: "Pricing", pageId: "pricing" },
  { label: "Support", pageId: "support" },
  { label: "Contact", pageId: "contact" },
] as const;

export const footerNavigation = [
  {
    id: "product",
    title: "Product",
    links: ["pricing", "simulator", "about"],
  },
  {
    id: "legal",
    title: "Legal",
    links: ["privacy", "terms", "medical-disclaimer"],
  },
] as const;

export const secondaryPages = pageRegistry.filter((page) => page.path !== "/");

export function getPageById(pageId: string): SitePage | undefined {
  return pageRegistry.find((page) => page.id === pageId);
}

export function getPageByPath(pathname: string): SitePage | undefined {
  return pageRegistry.find((page) => page.path === pathname);
}

export function getStaticSlug(pathname: string): string | undefined {
  if (pathname === "/") {
    return undefined;
  }

  return pathname.replace(/^\//, "");
}
