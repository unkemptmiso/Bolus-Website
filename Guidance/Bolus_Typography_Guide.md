# Bolus Typography & Layout Guide

**Goal:** Achieve a sleek, premium, tech-forward iOS/Apple aesthetic for all web landing pages, product pages, and digital advertising.
**Primary Font Family:** `Inter` (and `Inter Display`)

---

## 1. The Typography Scale (Tailwind)

The secret to this aesthetic is **high contrast in weight** (very bold, heavy headings combined with thin subheadings) and **tight letter spacing** (kerning) on large text.

### Hero / Main Page Title
Used for massive, eye-catching text when a user first opens the site or views an ad.
*   **Font:** `Inter Display` (Use this specific version of Inter for massive sizes)
*   **Weight:** Black (900) or ExtraBold (800)
*   **Letter Spacing:** Very Tight (`tracking-tighter` / `-0.05em`)
*   **Tailwind:** `text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white`

### Section Headings
Used for titles of features, cards, or major sections.
*   **Font:** `Inter`
*   **Weight:** Bold (700)
*   **Letter Spacing:** Tight (`tracking-tight` / `-0.025em`)
*   **Tailwind:** `text-2xl md:text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100`

### Subheadings & Descriptions
Used directly under a Hero or Section Head to explain the feature. Needs lower weight to create contrast with the heavy headings.
*   **Font:** `Inter`
*   **Weight:** Medium (500)
*   **Letter Spacing:** Normal (`tracking-normal` / `0em`)
*   **Tailwind:** `text-lg font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed`

### Body Copy / Paragraphs
Used for the standard text or detailed explanations.
*   **Font:** `Inter`
*   **Weight:** Regular (400)
*   **Letter Spacing:** Normal
*   **Tailwind:** `text-base font-normal text-zinc-600 dark:text-zinc-300`

### Micro-Labels & Badges
Used for status chips, small uppercase headers, or button labels. This gives the design an "engineered" or "utilitarian" feel.
*   **Font:** `Inter`
*   **Weight:** Bold (700)
*   **Letter Spacing:** Wide (`tracking-widest` / `0.1em`)
*   **Case:** Uppercase
*   **Tailwind:** `text-[10px] md:text-xs font-bold uppercase tracking-widest`

---

## 2. Color & Tone Principles

To get the authentic "Sleek iOS" feel, adhere to these color rules:

1.  **Avoid Pure Black and White Contrast:** Never use pure black (`#000000`) for text on a pure white background. Apple always softens it. Use `#18181b` (`zinc-900`) for light mode headings, and `#f4f4f5` (`zinc-100`) for dark mode headings.
2.  **Use Zinc, Not Gray:** Default CSS grays look cheap and flat. The Tailwind `zinc` palette has a slight blue/cool undertone that perfectly matches modern iOS and premium tech interfaces.
3.  **Accent Colors:** Use bright, highly saturated colors sparingly (like the Bolus neon blue or emerald green) exclusively for primary CTAs (Call to Action buttons) or micro-badges. The rest of the design should be strictly monochromatic (Zinc/Slate/White/Black).

---

## 3. Brand Application Guidelines

### Website / Landing Pages
*   **Hero Sections:** Center your text. Use absolute minimum text. Massive `Inter Display Black` text paired with a bright, high-resolution product mockup.
*   **Padding:** Use generous whitespace (`py-24` or `py-32`) between sections to let the UI breathe.

### Digital Ads (Instagram/LinkedIn/Display)
*   Treat ad graphics like mini-landing pages. 
*   Always use the `tracking-tighter` rule for the main hook/headline of the ad.
*   The Bolus logo should always be the minimalist geometric version (e.g., lowercase `bolus` matched with the pill mark) to reinforce the modern tech identity.
