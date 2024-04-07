
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Post } from "@prisma/client"
import Link from "next/link"

interface PostCardProps {
    items: Post[]
}

export const PostsCard = async ({
    items
}: PostCardProps) => {
    return (
        <div>
            {items.map((post) => (
                <Link href={`/community/${post.id}/comment`} className="text-center pt-12 flex items-center justify-center ">
                    <Card className="text-[#191919]/90 bg-slate-200 w-[500px] sm:w-[500px] md:w-[600px] lg:w-[800px] p-2 hover:opacity-80 duration-300 transition" key={post.id}>
                        <CardHeader>
                            <div className="flex justify-between">
                                <h1 className="font-bold text-2xl">{post.title}</h1>
                                <p className="font-semibold text-lg">{post.userId}</p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex ">
                            <h1>{post.content}</h1>
                        </CardContent>
                        <CardFooter className="text-gray-400">
                    
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    )
}