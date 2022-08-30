import { z } from "zod";

export function makeList<T extends {}>(schema: z.ZodObject<T>) {
  return z.array(schema.extend({ key: z.string() }));
}

export const imageSchema = z.object({
  type: z.literal("Image"),
  src: z.string(),
  alt: z.string().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  aspectRatio: z.number().optional(),
  colors: z.array(z.string()).optional(),
});

export const gallerySchema = z.object({
  type: z.literal("Gallery"),
  title: z.string(),
  items: makeList(imageSchema),
});
