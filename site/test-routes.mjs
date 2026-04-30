import { getStaticSlug, secondaryPages } from "./src/config/site-manifest.ts";
const excludedPaths = new Set(["/about", "/contact", "/pricing"]);
const paths = secondaryPages
  .filter((page) => !excludedPaths.has(page.path))
  .map((page) => ({
    params: { slug: getStaticSlug(page.path) },
  }));
console.log(paths);
