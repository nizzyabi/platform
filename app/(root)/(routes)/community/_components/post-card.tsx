
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
    data: Post[]
}

export const PostsCard = async ({
    data
}: PostCardProps) => {
    return (
        <div>
        
            {data.map((post) => (
                <Link href={`/community/${post.id}/comments`} className="text-center pt-12 flex items-center justify-center">
                <Card className="text-[#191919]/90 bg-slate-200 w-[300px] sm:w-[400px] md:w-[400px] lg:w-[600px]" key={post.id}>
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