import { auth } from "@/auth"
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { PostsCard } from "../_components/post-card";

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
            
        </div>
    )
}

export default CommunityIdPage 