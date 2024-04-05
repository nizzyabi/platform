
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export const Posts = () => {
    return (
        <div className="text-center pt-12 flex items-center justify-center">
            <Card className="text-[#191919]/90 bg-slate-100 w-[300px] sm:w-[400px] md:w-[400px] lg:w-[600px]">
                <CardHeader>
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl">Post Title</h1>
                        <p className="font-semibold text-lg">Author</p>
                    </div>
                </CardHeader>
                <CardContent className="flex ">
                    <h1>Content</h1>
                </CardContent>
                <CardFooter className="text-gray-400">
                    <p>Posted an hour ago</p>
                </CardFooter>
                
            </Card>
        </div>
    )
}