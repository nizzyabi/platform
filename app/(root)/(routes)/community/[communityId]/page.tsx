import { auth } from "@/auth"
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const CommunityIdPage = async ({
    params
}: {
    params: { communityId: string }
}) => {
    const session = await auth()

    if (!session) {
        return redirect('/')
    }

    const post = await db.post.findUnique({
        where: {
            id: params.communityId,
            userId: session.user.id ?? ''
        }
    })

    if(!post) {
        return redirect('/')
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}