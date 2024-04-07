import { db } from "@/lib/db"
import { CreatePost } from "./_components/create-post"
import { auth } from "@/auth"
import { PostsCard } from "./_components/post-card";

export default async function PostsPage () {
  const session = await auth();
  const posts = await db.post.findMany({
    where: {
      userId: session?.user.id ?? ''
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return (
    <div>
      <CreatePost  />
      <PostsCard items={posts} />
    </div>
  )
}
