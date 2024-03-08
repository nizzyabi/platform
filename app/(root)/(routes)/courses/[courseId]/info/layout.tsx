
import { getChapter } from "@/actions/get-chapter";
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
    params: { courseId: string;  };
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
                  userId: session.user.id ?? '',
                },
              }
            },
            
            orderBy: {
              position: "asc"
            }
          },
        },
      });
    const purchase = await db.purchase.findUnique({
        where: {
            userId_courseId: {
                userId: session.user.id ?? '',
                courseId: params.courseId
            }
        }
    });
    
    const imageUrl = course?.imageUrl;
    return (
        <div className="pt-40 px-12 pb-40 space-y-10">

          <div className="text-center pb-8">
            <h1 className="text-7xl font-bold mb-3">{course?.title}</h1>
            <p className="text-xl opacity-50 font-medium pb-8">{course?.description}</p>
            
            <div className="flex items-center justify-center pb-4">
                <Image 
                    src={`${course?.imageUrl}`} 
                    alt='Image' 
                    width={800} 
                    height={800} 
                    className="rounded shadow-lg shadow-black"
                />
            </div>
            <Link href={`/course/${course?.id}`} className="flex items-center justify-center pb-12">
              <Button variant='brand' size='brand'>
                Go To Course
              </Button>
            </Link>
          </div>

          <div>
            <Preview value={course?.issue!}/>
          </div>

          <div>
            <Preview value={course?.solution!}/>
          </div>

            <div className="flex items-center justify-center pb-4 space-x-4">
                <Image 
                    src={`${course?.language}`} 
                    alt='Image' 
                    width={200} 
                    height={200} 
                   
                />
                <Image 
                    src={`${course?.language2}`} 
                    alt='Image' 
                    width={200} 
                    height={200} 
                    
                />
                <Image 
                    src={`${course?.language3}`} 
                    alt='Image' 
                    width={200} 
                    height={200}
                />
            </div>

            <div className="text-center  pt-5">
              <h1 className="text-5xl font-semibold ">About this course</h1>
              <h1 className="pr-20 text-2xl font-semibold">What you will learn:</h1>
            

              <div className="flex justify-center items-center mr-12">
                <Preview value={course?.learningOutcome!} />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <h1 className="text-center text-5xl font-semibold my-8">Chapters</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {course?.chapters.map((chapter) => (
                    <Link href={`/course/${course?.id}/chapter/${chapter.id}`} key={chapter.id}>
                      <div className="bg-[#131212] shadow-lg shadow-black/50 rounded-xl w-[300px] p-6 m-4 flex flex-col hover:bg-[#1a1a1a] transition duration-300 ease-in-out">
                        <h2 className="text-2xl font-bold text-white mb-4">{chapter.title}</h2>
                        <p className="opacity-50">{chapter.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-4xl">
            <Preview value={course?.bonus!}/>
          </div>
        </div>
    )
}

export default CourseInfoLayout