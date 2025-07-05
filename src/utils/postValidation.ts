import { z } from "zod";

export const postSchema = z.object({
    id: z.string(),
    title: z.string(),
});

export const postsResponseSchema= z.object({
    user: z.object({
        posts: z.object({
            data: z.array(postSchema)
        })
    })
});

export type PostType = z.infer<typeof postSchema>