import { auth } from "@/auth";
import { db } from "@/lib/db";
import Image from "next/image";
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
            <h1 className="text-7xl font-semibold text-center mb-6">{course?.title}</h1>
            <p className="text-2xl">{course?.description}</p>
            <div className="flex items-center justify-center">
                <Image 
                    src={`${course?.imageUrl}`} 
                    alt='Image' 
                    width={800} 
                    height={800} 
                />
            </div>
            <div>
                <h1>What's included:</h1>
                {course?.learningOutcome}
            </div>
        </div>
    )
}

export default CourseInfoLayout