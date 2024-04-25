// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.string(),
      label: z.string().optional(),
      bandcamp: z.string().optional(),
      spotify: z.string().optional(),
      image: image().optional(),
      type: z.string().optional(),
      tags: z.array(z.string()),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
