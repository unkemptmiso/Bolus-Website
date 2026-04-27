# 🏥 Bolus SEO Checklist

This checklist is designed to help you systematically optimize the Bolus website for niche anesthesia-related search terms. Since you're a novice, I've broken this down into clear, actionable steps.

## 🎯 Phase 1: Niche Keyword Strategy
*Identify the "Anesthesia" terms we want to win.*

- [ ] **Define Primary Niche Keywords:** Focus on terms like:
    - `Anesthesia charting software`
    - `Office-based anesthesia documentation`
    - `Tactile anesthesia record app`
    - `Intra-operative charting for proceduralists`
    - `HIPAA compliant anesthesia record`
- [ ] **Define Comparison Keywords:** People often search for alternatives:
    - `Digital vs Paper Anesthesia Charting`
    - `Best anesthesia EMR for office-based practices`
- [ ] **Map Keywords to Pages:** 
    - **Home:** General brand + "Modern Anesthesia Record App"
    - **About:** "Why we built Bolus" + "Cognitive Offloading in Anesthesia"
    - **Pricing:** "Affordable anesthesia documentation software"

## 📑 Phase 2: Metadata Optimization (The "Business Card")
*Updating the hidden tags that search engines read.*

- [ ] **Audit `src/content/pages/` Files:** Ensure every `.md` file has:
    - `title`: Under 60 characters, includes a keyword.
    - `description`: 150-160 characters, compelling "hook" to get clicks.
    - `canonicalURL`: The "official" link to the page.
- [ ] **Open Graph (OG) Images:** Ensure `ogImage` points to a high-quality image of the app so it looks premium when shared on LinkedIn/X.
- [ ] **Header Hierarchy (H1-H3):** 
    - Only **one** `<h1>` per page (The main headline).
    - Use `<h2>` and `<h3>` for subheaders containing niche keywords.

## ⚙️ Phase 3: Technical Foundation
*Making sure the "engine" is running smoothly.*

- [ ] **Sitemap Validation:** Check that `sitemap.xml` is being generated correctly at build time (Astro does this automatically, but we should verify the live URL).
- [ ] **Robots.txt:** Create a `public/robots.txt` file to guide crawlers.
- [ ] **Mobile-First Check:** Since Bolus is "mobile-first," ensure all images have `alt` tags and the site loads fast on iPhone/iPad.
- [ ] **HTTPS/SSL:** Ensure the site is served over a secure connection (handled by Cloudflare in your case).

## 🤖 Phase 4: Structured Data (Schema.org)
*Helping Google "understand" Bolus as a product.*

- [ ] **SoftwareApplication Schema:** (Already partially implemented in `SeoHead.astro`) - We should ensure it explicitly lists "MedicalBusiness" as the category.
- [ ] **FAQ Schema:** If you add a FAQ section, we can use code to help those questions show up directly in Google search results.
- [ ] **Organization Schema:** Tell Google that "Bolus" is the brand behind the software.

## 🚀 Phase 5: AI Search Readiness (GEO)
*Getting cited by Perplexity, ChatGPT, and Claude.*

- [ ] **llms.txt:** Create a `public/llms.txt` file. This is a new standard that helps AI models quickly understand what Bolus is so they can cite you accurately.
- [ ] **Citation Readiness:** Ensure your "Mission" and "Security" info is easily findable by AI crawlers (no text trapped inside images).

---

### How to use this checklist:
1.  **Check off** the items as we complete them.
2.  **Start with Phase 2**, as it's the easiest way to see immediate ranking improvements.
3.  **Ask me** to help you "write the metadata" for a specific page whenever you're ready!
