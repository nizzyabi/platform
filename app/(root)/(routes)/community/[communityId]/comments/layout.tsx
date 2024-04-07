const PostComments = async ({
    params
}: {
    params: { communityId: string}
}) => {
    return (
        <div>
            {params.communityId}
        </div>
    )
}

export default PostComments