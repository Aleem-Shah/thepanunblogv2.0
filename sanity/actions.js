import { groq } from "next-sanity";
import { readClient } from "./lib/client";
export async function getBlogs() {
    try {
        const Blogs= readClient.fetch(`*[_type == "post"]{
            _id ,
            title,
            "image":mainImage.asset->url,
            "authorImage":authorImage.asset->url,
            alt,
            author,
            shorttext,
            categories,
            publishedAt,
            body
        }`)
        return Blogs
        
    } catch (error) {
        console.log("error",error)
        
    }
    
}