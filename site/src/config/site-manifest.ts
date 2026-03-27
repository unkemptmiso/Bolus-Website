export type FooterGroupId = "product" | "compare" | "company" | "legal" | "utility";

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
  defaultSiteUrl: "https://bolus-site.invalid",
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
    href: "#download",
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
    description: "Simple rollout options for solo clinicians and growing practices.",
    seoTitle: "Pricing | Bolus",
    seoDescription:
      "See Bolus pricing and rollout options for office-based anesthesia documentation.",
    category: "product",
    hero: {
      eyebrow: "Product",
      title: "Pricing that stays focused on documentation, not platform sprawl.",
      body: "The pricing page is scaffolded to support future App Store and direct-practice purchase flows.",
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
    id: "records",
    path: "/records",
    title: "Records & Export",
    navLabel: "Records",
    description: "Show how Bolus turns live charting into clean records and exports.",
    seoTitle: "Records & Export | Bolus",
    seoDescription:
      "Learn how Bolus supports cleaner, more legible anesthesia records and exports.",
    category: "product",
    hero: {
      eyebrow: "Product",
      title: "Cleaner records in, cleaner exports out.",
      body: "This section is ready for future screenshots, PDF export details, and defensibility messaging.",
      primaryCta: {
        label: "Read the Security Position",
        href: "/security",
        variant: "primary",
      },
    },
    sections: [
      {
        type: "feature-grid",
        title: "Built to hold the record story together",
        columns: 3,
        items: [
          {
            title: "Legible outputs",
            body: "A future PDF/export module can attach here without changing route structure.",
          },
          {
            title: "Clear timestamps",
            body: "The content model already centers defensibility and reduced ambiguity.",
          },
          {
            title: "Practice-ready retrieval",
            body: "Future storage and retrieval details can be documented here without redesigning the app shell.",
          },
        ],
      },
    ],
  },
  {
    id: "business",
    path: "/business",
    title: "Enterprise & Bulk",
    navLabel: "Enterprise",
    description: "Bulk onboarding and practice-level rollout information.",
    seoTitle: "Enterprise & Bulk | Bolus",
    seoDescription:
      "Practice rollout, bulk onboarding, and business support for Bolus deployments.",
    category: "product",
    hero: {
      eyebrow: "Product",
      title: "A place for practice-wide rollout without turning the product into bloatware.",
      body: "This route gives sales and rollout content a home without diluting the homepage positioning.",
      primaryCta: {
        label: "Talk to Support",
        href: "/support",
        variant: "primary",
      },
    },
    sections: [
      {
        type: "checklist",
        title: "Future business content can plug into this page",
        items: [
          "Bulk seat provisioning",
          "Practice onboarding workflows",
          "Clinic-specific documentation standards",
        ],
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
        label: "See the Product",
        href: "/records",
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
    id: "security",
    path: "/security",
    title: "Mission & Security",
    navLabel: "Security",
    description: "Bolus positioning on security, trust, and clinical seriousness.",
    seoTitle: "Mission & Security | Bolus",
    seoDescription:
      "Read the Bolus mission and security position for office-based anesthesia documentation.",
    category: "company",
    hero: {
      eyebrow: "Company",
      title: "Trust is built through clarity, restraint, and serious documentation standards.",
      body: "This route holds the brand's clinical seriousness and future technical security detail in one stable place.",
      primaryCta: {
        label: "Read Support",
        href: "/support",
        variant: "primary",
      },
    },
    sections: [
      {
        type: "checklist",
        title: "Security framework placeholders",
        items: [
          "Cloudflare runtime boundary for server-only secrets",
          "Typed env validation for auth and payments",
          "Dedicated app handoff routes for future authenticated flows",
        ],
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
    description: "Framework placeholder for the final privacy policy.",
    seoTitle: "Privacy Policy | Bolus",
    seoDescription: "Read the privacy policy framework for the Bolus website and app.",
    category: "legal",
    hero: {
      eyebrow: "Legal",
      title: "Privacy policy placeholder ready for legal copy.",
      body: "The route exists now so future legal content can be slotted in without changing navigation or deployment shape.",
    },
    sections: [
      {
        type: "note",
        title: "Draft status",
        body: "Replace this section with approved legal language before launch. The route, layout, metadata, and footer linkage are already in place.",
      },
    ],
  },
  {
    id: "terms",
    path: "/terms",
    title: "Terms of Service",
    navLabel: "Terms",
    description: "Framework placeholder for the final terms of service.",
    seoTitle: "Terms of Service | Bolus",
    seoDescription: "Read the terms of service framework for the Bolus website and app.",
    category: "legal",
    hero: {
      eyebrow: "Legal",
      title: "Terms route scaffolded for launch readiness.",
      body: "The structure is ready for final approved language and future versioning workflows.",
    },
    sections: [
      {
        type: "note",
        title: "Draft status",
        body: "Replace this content with reviewed terms before launch. This placeholder keeps the route map stable in the meantime.",
      },
    ],
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
  { label: "Pricing", pageId: "pricing" },
  { label: "Records", pageId: "records" },
  { label: "Security", pageId: "security" },
  { label: "Support", pageId: "support" },
] as const;

export const footerNavigation = [
  {
    title: "Product",
    links: ["pricing", "simulator", "records", "business"],
  },
  {
    title: "Compare",
    links: ["compare-paper-charts", "compare-maps-anesthesia"],
  },
  {
    title: "Company",
    links: ["security", "support"],
  },
  {
    title: "Legal",
    links: ["privacy", "terms"],
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
