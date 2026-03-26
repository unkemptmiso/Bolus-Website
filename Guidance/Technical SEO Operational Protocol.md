# Technical SEO Operational Protocol (TSOP)

The agent must analyze the contents of this file when building any page of the website to optimize for SEO and page ranking.

## 1. Architecture & Rendering Constraints
The agent must default to Static Site Generation (SSG) to ensure 0ms render time for bots.

*   **Mode:** Set `output: 'hybrid'` in `astro.config.mjs`.
*   **Adapter:** Use `@astrojs/cloudflare` with `platformProxy: { enabled: true }`.
*   **The "Island" Constraint:** 
    *   Strictly minimize `client:*` directives.
    *   Content-heavy components must be server-rendered (Astro components) to ensure 100% of the HTML is in the initial response.
    *   Interactive elements (e.g., search, calculators) must use `client:visible` to defer JS execution until necessary.

## 2. Content Collection & Schema Enforcement
The agent must use Astro Content Collections to enforce metadata integrity at the type level.

*   **Schema Definition:** Implement a `src/content/config.ts` using `zod`.
*   **Required Fields:** Every entry must include `title` (string, max 60), `description` (string, max 160), `canonicalURL` (url), and `ogImage` (image).
*   **Automated Injection:** The agent must create a `BaseHead.astro` component that automatically maps these Zod-validated fields to:
    *   Standard `<meta>` tags.
    *   Open Graph (`og:`) and Twitter (`twitter:`) tags.
    *   JSON-LD Structured Data (Schema.org) injected as a `<script type="application/ld+json">`.

## 3. Semantic HTML Generation Rules
When generating page layouts, the agent must strictly follow this structural hierarchy:

*   **Root Structure:** Use `<main>` for the primary content area.
*   **Content Identification:** Wrap articles or primary content blocks in `<article itemscope itemtype="https://schema.org/Article">`.
*   **Heading Logic:** 
    *   Exactly one `<h1>` per page, containing the primary keyword.
    *   Sequential `<h2>` through `<h6>` usage; never skip levels.
*   **Media Assets:** 
    *   Use the `astro:assets` `<Image />` component for all images.
    *   Enforce the `alt` attribute; if missing in content, the agent must generate a descriptive `alt` tag based on the filename or context.

## 4. Cloudflare Edge Optimization
The agent must leverage Cloudflare's infrastructure to maximize performance metrics (LCP, FID, CLS):

*   **Image Service:** Set `imageService: 'cloudflare'` in the Astro config.
*   **Redirects:** Manage all 301/302 redirects via `_redirects` file in the `public/` folder to ensure they happen at the Edge, not the origin.
*   **Caching:** Configure `Cache-Control` headers in `astro.config.mjs` to prioritize "stale-while-revalidate" for ISR-like behavior on Cloudflare.

## 5. Automated SEO Validation Script
The agent should generate a post-build validation step (or middleware) to check:

*   **Status 200:** All internal links return 200.
*   **Meta Check:** All pages have a title and description.
*   **Payload Check:** No page ships more than 50kb of unused client-side JS.
*   **Alt Check:** Every `<img>` tag in the final build has an alt attribute.
