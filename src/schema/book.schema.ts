import { z } from "zod";

export const createBookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  genre: z.string().min(1, "Genre is required"),
  isbn: z.string().min(1, "ISBN is required"),
  description: z.string().optional(),
  copies: z
    .number({ invalid_type_error: "Copies must be a number" })
    .min(1, "At least one copy is required"),
  available: z.boolean().optional(),
});

export type CreateBookInput = z.infer<typeof createBookSchema>;
