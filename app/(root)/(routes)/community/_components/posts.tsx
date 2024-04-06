import { Post } from "@prisma/client"
import { PostsCard } from "./post-card"

interface PostsProps {
    items?: Post[]
}

export const Posts = async ({
 items
}: PostsProps) => {
    return (
        <div>
            {items?.map((item) => (
                <PostsCard 
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    author={item.userId}
                    createdAt={item.createdAt}
                />
            ))}
        </div>
    )
}