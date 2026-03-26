import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: ({ image }) => z.object({
    title: z.string().max(60),
    description: z.string().max(160),
    canonicalURL: z.string().url(),
    ogImage: image(),
    isHomePage: z.boolean().default(false),
  }),
});

export const collections = {
  pages,
};
