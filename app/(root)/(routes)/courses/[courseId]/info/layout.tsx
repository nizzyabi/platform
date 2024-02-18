import { auth } from "@/auth";
import { Preview } from "@/components/preview";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const CourseInfoLayout = async ({
    params
} : {
    params: { courseId: string };
}) => {
    const session  = await auth();

    if (!session) {
        return redirect("/")
    }
    const course = await db.course.findUnique({
        where: {
          id: params.courseId,
        },
        include: {
          chapters: {
            where: {
              isPublished: true,
            },
            include: {
              userProgress: {
                where: {
                  userId: session.user.id,
                }
              }
            },
            orderBy: {
              position: "asc"
            }
          },
        },
      });
    return (
        <div className="pt-40 px-12">
          <div className="text-center pb-8">
            <h1 className="text-7xl font-semibold mb-3">{course?.title}</h1>
            <p className="text-xl text-gray-400 font-semibold">{course?.description}</p>
          </div>
            <div className="flex items-center justify-center pb-4">
                <Image 
                    src={`${course?.imageUrl}`} 
                    alt='Image' 
                    width={800} 
                    height={800} 
                    className="rounded-xl shadow-lg shadow-black"
                />
            </div>
            <Link href={`/course/${course?.id}`} className="flex items-center justify-center pb-12">
              <Button variant='basic'>
                Go To Course
              </Button>
            </Link>
            <div className="text-center space-y-8">
              <h1 className="text-5xl font-semibold ">About this course</h1>
              <h1 className="pr-20 text-2xl font-semibold">What you will learn:</h1>
            </div>
            <div className="flex justify-center items-center mr-12">
              <Preview value={course?.learningOutcome!} />
            </div>
            <div className="flex items-center justify-center pb-4">
                <Image 
                    src={`${course?.language}`} 
                    alt='Image' 
                    width={200} 
                    height={200} 
                    className="rounded-xl shadow-lg shadow-black"
                />
            </div>
        </div>
    )
}

export default CourseInfoLayout