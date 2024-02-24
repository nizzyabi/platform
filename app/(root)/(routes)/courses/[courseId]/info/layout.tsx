
import { getChapter } from "@/actions/get-chapter";
import { auth } from "@/auth";
import { ThreeD } from "@/components/3d";
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
                  userId: session.user.id,
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
                userId: session.user.id,
                courseId: params.courseId
            }
        }
    });
    
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
              <Button variant='basic'>
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

            <div>
              <h1 className="text-center text-5xl font-semibold">Chapters</h1>
              <div className="grid grid-cols-4 pt-12 justify-items-center ">
                {course?.chapters.map((chapter) => (
                  <div key={chapter.id} className="border border-slate-100/20 bg-[#191919] rounded w-[250px] p-3 m-2">
                    <h1 className="text-2xl font-semibold text-center">{chapter.title}</h1>
                    <div className="flex items-center justify-center">
                      <p>{chapter.description}</p>
                    </div>
                  </div>
                ))}
                </div>
            </div>
            <div className="text-4xl">
            <Preview value={course?.bonus!}/>
          </div>
        </div>
    )
}

export default CourseInfoLayout