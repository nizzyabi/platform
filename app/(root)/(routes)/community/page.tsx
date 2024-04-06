import { getPosts } from "@/actions/get-posts"
import { CreatePost } from "./_components/create-post"
import { Posts } from "./_components/posts"
import { auth } from "@/auth"
import { Post } from "@prisma/client";
import { db } from "@/lib/db";


export default async function PostsPage () {

  const session = await auth()
  const posts = await getPosts({
    userId: session?.user.id
  })
  return (
    <div>
      <CreatePost  />
      <Posts items={posts}/>
    </div>
  )
}
