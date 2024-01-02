import * as z from "zod"
export const BlogValidation=z.object({

    title:z.string().min(15).max(50),
    slug:z.string(),
    body:z.string().min(200).max(10000),
})