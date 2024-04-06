import { db } from "@/lib/db";
import { Post } from "@prisma/client";
type GetPosts = {
    userId: any;
    title?: string;
    content?: string;
}

export const getPosts = async ({
    userId,
    title,
    content
}: GetPosts) => {
    try {
        const posts = await db.post.findMany({
            where: {
                title,
                content,
                userId,
                createdAt: {
                    gt: new Date()
                },
            },
            orderBy: {
                createdAt: "desc"
            }
        
        });
        return posts;
    } catch (error) {
        console.log("[GET POSTS]", error);
        return undefined;
    }
}