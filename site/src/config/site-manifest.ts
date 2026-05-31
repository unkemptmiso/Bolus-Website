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
  noindex?: boolean;
  hero: {
    eyebrow?: string;
    title: string;
    body: string;
    primaryCta?: ActionLink;
    secondaryCta?: ActionLink;
  };
  sections: ContentSection[];
}

export const appStoreListingUrl = "https://apps.apple.com/us/app/bolus-anesthesia-record/id6761444886";

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
    href: appStoreListingUrl,
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
  seoTitle: "Bolus | Anesthesia Record App",
  seoDescription:
    "Mobile anesthesia charting for office-based procedures. Create clean, legible records from pre-op through recovery and export a professional PDF.",
  category: "utility",
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
      href: "/#workflow",
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
        label: "Contact Us",
        href: "/contact",
        variant: "secondary",
      },
    },
  ],
};

export const pageRegistry: SitePage[] = [
  homePage,
  {
    id: "paper-anesthesia-chart-alternative",
    path: "/paper-anesthesia-chart-alternative",
    noindex: true,
    title: "Paper Anesthesia Chart Alternative",
    navLabel: "Paper Chart Alternative",
    description:
      "Paper anesthesia records are familiar, but they are hard to read, easy to misplace, and harder to defend. See how Bolus gives clinicians a cleaner alternative.",
    seoTitle: "Paper Anesthesia Chart Alternative | Bolus",
    seoDescription:
      "Paper anesthesia records are familiar, but they are hard to read, easy to misplace, and harder to defend. See how Bolus gives clinicians a cleaner alternative.",
    category: "product",
    hero: {
      eyebrow: "Paper Chart Alternative",
      title: "Paper anesthesia charts are familiar. They are also vulnerable.",
      body: "Paper still works because it is fast, simple, and familiar. But the same things that make paper easy in the moment can create problems later.",
      primaryCta: {
        label: "View Pricing",
        href: "/pricing",
        variant: "primary",
      },
      secondaryCta: {
        label: "Contact Us",
        href: "/contact",
        variant: "secondary",
      },
    },
    sections: [
      {
        type: "checklist",
        title: "The problem with paper anesthesia records",
        description:
          "Handwritten anesthesia records can be hard to read. Times can be unclear. Medication entries can be crowded. Vitals can be crossed out, squeezed in, or difficult to follow. When a chart is reviewed days, months, or years later, those details matter.",
        items: [
          "Hard to read",
          "Easy to misplace",
          "Difficult to audit",
          "Inconsistent between providers",
          "Vulnerable to incomplete timelines",
          "Harder to review after the case is over",
        ],
      },
      {
        type: "note",
        title: "What a defensible anesthesia record needs",
        body: "A good anesthesia record should be clear, complete, and easy to follow. It should show the case timeline. It should make medications, vitals, airway events, fluids, and recovery details easy to review. It should be legible without explanation. It should look professional when exported, shared, or stored.",
      },
      {
        type: "feature-grid",
        title: "How Bolus helps",
        description:
          "Bolus is a mobile anesthesia record app built to replace paper charting with a cleaner workflow. It helps clinicians chart from pre-op through recovery, keep the record legible, and export a professional PDF when the case is done.",
        columns: 3,
        items: [
          {
            title: "One workflow",
            body: "Document pre-op, intra-op, and recovery in one continuous record.",
          },
          {
            title: "Legible by default",
            body: "Typed entries and structured fields make the chart easier to review later.",
          },
          {
            title: "Professional PDF export",
            body: "Create a clean record that can be shared, stored, or imported into the office workflow.",
          },
        ],
      },
      {
        type: "note",
        title: "Built for office-based anesthesia",
        body: "Bolus is designed for office-based and procedural sedation settings where hospital EMRs may be unavailable, too slow, or not built for the case flow. It is made for clinicians who need a practical way to document anesthesia care without adding unnecessary overhead.",
      },
      {
        type: "cta",
        title: "Leave paper behind",
        body: "Paper may be familiar, but it should not be the standard for modern anesthesia documentation. Bolus gives clinicians a cleaner, more defensible way to chart.",
        primaryCta: {
          label: "View Pricing",
          href: "/pricing",
          variant: "primary",
        },
        secondaryCta: {
          label: "Contact Us",
          href: "/contact",
          variant: "secondary",
        },
      },
    ],
  },
  {
    id: "mobile-anesthesia-charting",
    path: "/mobile-anesthesia-charting",
    noindex: true,
    title: "Mobile Anesthesia Charting",
    navLabel: "Mobile Anesthesia Charting",
    description: "Mobile anesthesia charting for office-based anesthesia, dental sedation, and procedural cases. Chart on iPhone and iPad, then export clean PDF records.",
    seoTitle: "Mobile Anesthesia Charting App for Office-Based Care | Bolus",
    seoDescription: "Mobile anesthesia charting for office-based anesthesia, dental sedation, and procedural cases. Chart on iPhone and iPad, then export clean PDF records.",
    category: "product",
    hero: {
      eyebrow: "Mobile Anesthesia Charting",
      title: "Mobile anesthesia charting for office-based cases.",
      body: "Bolus helps mobile and office-based anesthesia providers chart on iPhone and iPad, keep the case connected from pre-op through recovery, and export a clean PDF record when the procedure is done.",
      primaryCta: {
        label: "View Pricing",
        href: "/pricing",
        variant: "primary",
      },
      secondaryCta: {
        label: "Contact Us",
        href: "/contact",
        variant: "secondary",
      },
    },
    sections: [
      {
        type: "note",
        title: "Why mobile anesthesia charting is different",
        body: "Mobile anesthesia cases do not always have the support of a hospital EMR, an anesthesia cart, or a fixed documentation station. The record has to move with the clinician. It has to be fast enough to use during the case and clear enough to review after the case is over.",
      },
      {
        type: "checklist",
        title: "Paper works until the chart is questioned",
        description: "Paper records are familiar, but they create avoidable weak points. Handwriting can be difficult to read. Medication entries can get crowded. Timelines can become unclear. Records can be misplaced, scanned poorly, or hard to audit later.",
        items: [
          "Legible anesthesia documentation",
          "Clear case timeline",
          "Structured medications and events",
          "Pre-op, intra-op, and recovery in one record",
          "Professional PDF export",
          "Built for office-based anesthesia",
        ],
      },
      {
        type: "feature-grid",
        title: "One record from pre-op to recovery",
        description: "Bolus keeps the anesthesia record connected from the first pre-op note through recovery. Instead of piecing together separate forms, paper notes, and scanned pages, the case builds into one organized record.",
        columns: 3,
        items: [
          {
            title: "Pre-op",
            body: "Document evaluation notes, consent, attachments, and case details before the procedure starts.",
          },
          {
            title: "Intra-op",
            body: "Record medications, vitals, airway events, fluids, and key moments as the case moves.",
          },
          {
            title: "Recovery",
            body: "Complete the record with post-op details, discharge vitals, and final review.",
          },
        ],
      },
      {
        type: "note",
        title: "A professional PDF at the end of the case",
        body: "The final record should not look like a scanned worksheet. Bolus exports a clean PDF anesthesia record that can be shared, stored, or imported into the office workflow.",
      },
      {
        type: "note",
        title: "Focused charting, not bloated practice management",
        body: "Some mobile anesthesia platforms try to manage scheduling, billing, messaging, e-prescribing, patient portals, and EMR access. Bolus is focused on the anesthesia record. That focus keeps the product cleaner for clinicians who mainly need better charting.",
      },
      {
        type: "note",
        title: "Built for dental, oral surgery, and office-based anesthesia",
        body: "Bolus is designed for clinicians documenting anesthesia outside the hospital OR. That includes mobile anesthesiologists, dentist anesthesiologists, CRNAs, oral surgery offices, dental sedation cases, and office-based procedural sedation.",
      },
      {
        type: "feature-grid",
        title: "Frequently Asked Questions",
        columns: 2,
        items: [
          {
            title: "What is mobile anesthesia charting?",
            body: "Mobile anesthesia charting is anesthesia documentation performed on a mobile device, such as an iPhone or iPad, instead of a paper record or desktop-bound system.",
          },
          {
            title: "Is Bolus mobile anesthesia software?",
            body: "Bolus is mobile anesthesia charting software focused on documentation and PDF record export. It is not a full practice management platform.",
          },
          {
            title: "Can Bolus replace paper anesthesia charts?",
            body: "Yes. Bolus is designed to replace paper anesthesia charting with a cleaner mobile workflow and professional PDF export.",
          },
          {
            title: "Is Bolus for mobile anesthesiologists?",
            body: "Yes. Bolus is built for mobile and office-based anesthesia providers, including anesthesiologists, CRNAs, dentist anesthesiologists, and oral surgery sedation teams.",
          },
          {
            title: "Does Bolus include pre-op, intra-op, and recovery documentation?",
            body: "Yes. Bolus supports documentation from pre-op through intra-op charting and recovery, so the case stays connected in one record.",
          },
          {
            title: "Can Bolus export a PDF anesthesia record?",
            body: "Yes. Bolus exports a clean PDF anesthesia record when the case is complete.",
          },
        ],
      },
      {
        type: "cta",
        title: "Ready to leave paper charting behind?",
        body: "Bolus gives mobile and office-based anesthesia providers a cleaner way to document care.",
        primaryCta: {
          label: "View Pricing",
          href: "/pricing",
          variant: "primary",
        },
        secondaryCta: {
          label: "Contact Us",
          href: "/contact",
          variant: "secondary",
        },
      },
    ],
  },
  {
    id: "pricing",
    path: "/pricing",
    title: "Pricing",
    navLabel: "Pricing",
    description: "Simple pricing for clinicians who want cleaner and more defensible documentation.",
    seoTitle: "Pricing | Bolus Anesthesia Charting",
    seoDescription:
      "Simple pricing for anesthesia documentation software built for office-based clinicians. Start free and upgrade when your workflow grows.",
    category: "product",
    hero: {
      eyebrow: "Product",
      title: "The cleanest way to leave paper, at the lowest price.",
      body: "Bolus is built for clinicians who want clean, more defensible anesthesia records without paying hospital-software prices. It is intentionally affordable, because better documentation should not become another burden on your practice.",
      primaryCta: {
        label: "Contact Us",
        href: "/contact",
        variant: "primary",
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
    id: "about",
    path: "/about",
    title: "About Bolus",
    navLabel: "About",
    description: "Learn what Bolus is building for office-based anesthesia documentation.",
    seoTitle: "About Bolus | Built for Anesthesia Documentation",
    seoDescription:
      "Bolus was built by clinicians to make anesthesia documentation faster, cleaner, and easier to stand behind.",
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
    seoTitle: "Contact Bolus",
    seoDescription:
      "Contact Bolus for product questions, pricing, early access, or support.",
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
    noindex: true,
    title: "Bolus vs Paper Charts",
    navLabel: "vs. Paper Charts",
    description: "Comparison page for the clearest incumbent: paper charting.",
    seoTitle: "Bolus vs Paper Anesthesia Charts",
    seoDescription:
      "Compare paper anesthesia charts with Bolus, a mobile anesthesia record app built for cleaner documentation and PDF export.",
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
    noindex: true,
    title: "Bolus vs Maps Anesthesia",
    navLabel: "vs. Maps Anesthesia",
    description: "Comparison page template for alternative software positioning.",
    seoTitle: "Bolus vs Maps Anesthesia",
    seoDescription:
      "Compare Bolus with Maps Anesthesia for mobile anesthesia charting, office-based documentation, and PDF record export.",
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
    id: "legal",
    path: "/legal",
    title: "Legal",
    navLabel: "Legal",
    description: "Browse Bolus legal documents, privacy terms, medical disclaimers, and HIPAA compliance guidance in one place.",
    seoTitle: "Legal | Bolus",
    seoDescription: "View Bolus legal documents, including privacy, terms of service, medical disclaimer, and HIPAA compliance policy.",
    category: "legal",
    hero: {
      title: "Legal",
      body: "",
    },
    sections: [],
  },
  {
    id: "privacy-policy",
    path: "/legal/privacy-policy",
    title: "Privacy Policy",
    navLabel: "Privacy",
    description: "Bolus privacy policy for account, device, and clinical documentation data handling.",
    seoTitle: "Privacy Policy | Bolus",
    seoDescription: "Read how Bolus handles account data, device security, local-first clinical records, and privacy for anesthesia documentation.",
    category: "legal",
    hero: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      body: "How Bolus handles account data, technical diagnostics, and local-first clinical record workflows.",
    },
    sections: [],
  },
  {
    id: "terms-of-service",
    path: "/legal/terms-of-service",
    title: "Terms of Service",
    navLabel: "Terms of Service",
    description: "Bolus terms of service for clinical documentation, accounts, exports, and professional responsibility.",
    seoTitle: "Terms of Service | Bolus",
    seoDescription: "Review the terms that govern use of Bolus for anesthesia documentation, accounts, subscriptions, and record exports.",
    category: "legal",
    hero: {
      eyebrow: "Legal",
      title: "Terms of Service",
      body: "The legal terms governing access to Bolus, local-first records, exports, and professional use of the service.",
    },
    sections: [],
  },
  {
    id: "medical-disclaimer",
    path: "/legal/medical-disclaimer",
    title: "Medical Disclaimer",
    navLabel: "Medical Disclaimer",
    description: "Bolus medical disclaimer clarifying intended use, verification, and clinician responsibility.",
    seoTitle: "Medical Disclaimer | Bolus",
    seoDescription: "Bolus is a documentation tool only. Review its intended use, clinician responsibility, and medical disclaimer.",
    category: "legal",
    hero: {
      eyebrow: "Legal",
      title: "Medical Disclaimer",
      body: "Important limitations, verification requirements, and clinician responsibilities when using Bolus in patient-care settings.",
    },
    sections: [],
  },
  {
    id: "hipaa-compliance-policy",
    path: "/legal/hipaa-compliance-policy",
    title: "HIPAA Compliance Policy",
    navLabel: "HIPAA Policy",
    description: "Bolus HIPAA compliance policy covering local-first storage, exports, device safeguards, and professional responsibility.",
    seoTitle: "HIPAA Compliance Policy | Bolus",
    seoDescription: "Review Bolus policies for local-first storage, device security, record export, and clinician responsibility under HIPAA.",
    category: "legal",
    hero: {
      eyebrow: "Legal",
      title: "HIPAA Compliance Policy",
      body: "How Bolus approaches local-first data handling, device responsibility, exports, and HIPAA-conscious documentation workflows.",
    },
    sections: [],
  },
  {
    id: "login",
    path: "/login",
    noindex: true,
    title: "Sign In",
    navLabel: "Sign In",
    description: "Entry point for future authenticated app handoff.",
    seoTitle: "Sign In | Bolus",
    seoDescription: "Sign in to Bolus.",
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
    noindex: true,
    title: "Dashboard",
    navLabel: "App",
    description: "Placeholder for the future web app shell.",
    seoTitle: "Dashboard | Bolus",
    seoDescription: "Access the Bolus dashboard.",
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
  { label: "Contact", pageId: "contact" },
] as const;

export const footerNavigation = [
  {
    id: "product",
    title: "Product",
    links: ["pricing", "about"],
  },
  {
    id: "legal",
    title: "Legal",
    links: ["privacy-policy", "terms-of-service", "medical-disclaimer", "hipaa-compliance-policy"],
  },
] as const;

export const legalDocumentPageIds = [
  "privacy-policy",
  "terms-of-service",
  "medical-disclaimer",
  "hipaa-compliance-policy",
] as const;

export const secondaryPages = pageRegistry.filter((page) => page.path !== "/");

export function getPageById(pageId: string): SitePage | undefined {
  return pageRegistry.find((page) => page.id === pageId);
}

export function getPageByPath(pathname: string): SitePage | undefined {
  return pageRegistry.find((page) => page.path === pathname);
}

export function getLegalDocumentPages(): SitePage[] {
  return legalDocumentPageIds
    .map((pageId) => getPageById(pageId))
    .filter((page): page is SitePage => Boolean(page));
}

export function getStaticSlug(pathname: string): string | undefined {
  if (pathname === "/") {
    return undefined;
  }

  return pathname.replace(/^\//, "");
}
