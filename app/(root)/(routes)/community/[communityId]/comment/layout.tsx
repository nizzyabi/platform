const PostComments = async ({
    params,
    children
}: {
    params: { communityId: string}
    children: React.ReactNode
}) => {
    return (
        <div className="pt-40 text-center">
            {params.communityId}
            {children}
            
        </div>
    )
}

export default PostComments