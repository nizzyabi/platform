import { auth } from "@/auth";
import PrimaryButton from "@/components/ui/get-started-button";
import { db } from "@/lib/db";
import Image from "next/image";


export default async function Success ({
    params
}: {
    params: { courseId: string; }
}){
    const session  = await auth();
    

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
                  userId: session?.user.id ?? '',
                },
              }
            },
            
            orderBy: {
              position: "asc"
            }
          },
        },
      });
    return (
        <div className="pt-40 mx-12">
            <div>
                <h1 className="text-6xl font-extrabold mb-3 text-center">Purchase Success!</h1>
                <div className="flex items-center justify-center">
                    <Image
                    src={`${course?.imageUrl}`}
                    alt="Success"
                    width={700}
                    height={700}
                    className="rounded-[5px]"
                    />
                </div>
                <div className="flex items-center justify-center mt-5">
                <PrimaryButton
                    href={`/course/${params.courseId}`}
                    className="bg-white"
                >Go To Course</PrimaryButton>
                </div>
            </div>
        </div>
    )
}