
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface PostCardProps {
    title: string;
    content: string;
    author: any;
    createdAt: any;
}

export const PostsCard = async ({
    title,
    content,
    author,
    createdAt
}: PostCardProps) => {
    return (
        <div className="text-center pt-12 flex items-center justify-center">
            <Card className="text-[#191919]/90 bg-slate-200 w-[300px] sm:w-[400px] md:w-[400px] lg:w-[600px]">
                <CardHeader>
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl">{title}</h1>
                        <p className="font-semibold text-lg">{author}</p>
                    </div>
                </CardHeader>
                <CardContent className="flex ">
                    <h1>{content}</h1>
                </CardContent>
                <CardFooter className="text-gray-400">
                    <p>{createdAt}</p>
                </CardFooter>
                
            </Card>
        </div>
    )
}