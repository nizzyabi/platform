import { auth } from "@/auth"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"

const Comments = async ({
  params
}: {
  params: { communityId: string }
}) => {
  const session = await auth()

  if (!session) {
    return redirect("/");
  }

  const post = await db.post.findUnique({
    where: {
      id: params.communityId,
      userId: session.user.id ?? ''
    }
  })
    return (
      <div className="pt-40">
          <h1>{post?.title}</h1>
      </div>
    )
  }
  
  export default Comments