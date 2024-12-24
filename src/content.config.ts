// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/testimonials" }),
  schema: z.object({
    name: z.string(),
    jobTitle: z.string().optional(),
    avatar: z.string().optional(),
    social: z.enum(["twitter", "linkedin", "x", "threads", "bluesky"]).optional(),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/faqs" }),
  schema: z.object({
    question: z.string(),
    order: z.number().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { testimonials, faqs };
