
import { auth } from "@/auth";
import { Preview } from "@/components/preview";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { ArrowRight } from "lucide-react";
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
    
    return (
        <div className="pt-40 px-12 pb-40 space-y-10">
          <div className="text-center pb-8">
            <h1 className="text-6xl font-extrabold mb-3">{course?.title}</h1>
            <p className="text-sm opacity-50 font-medium ">{course?.description}</p>
            <div className="flex items-center justify-center">
                <Separator className="mt-8 bg-slate-100/20 h-0.5 w-40 mb-8" />
            </div>
            
            <div className="lg:px-80 md:px-40 sm:px-5">
              <iframe 
              src={`${course?.introVideo}`} 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
              title="Video"
              className="aspect-video w-full"
              ></iframe>
            </div>
        
            <div className='flex-1 flex flex-col items-center justify-center mb-4 mt-8'>
              <Link
                className="w-50 justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mt-4 mb-4"
                href={`/course/${course?.id}`}
              >
                Go To Course{" "}
                <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
              </Link>
            </div>
          </div>

          <div>
            <Preview value={course?.issue!}/>
          </div>

          <div>
            <Preview value={course?.solution!}/>
          </div>

          <div className="text-center">
            <h1 className="text-3xl mb-8 font-bold">Stack</h1>

            <div className="flex items-center justify-center pb-4 space-x-3">
              <Image 
                src={`${course?.language}`} 
                alt='Image' 
                width={120}
                height={120}
              />
              <Image 
                src={`${course?.language2}`} 
                alt='Image' 
                width={120} 
                height={120} 
              />
              <Image 
                src={`${course?.language3}`} 
                alt='Image' 
                width={120} 
                height={120} 
              />
            </div>
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
                {course?.chapters.map((chapter, index) => (
                  <Link href={`/course/${course?.id}/chapter/${chapter.id}`} key={chapter.id}>
                    <div className="bg-[#131212] shadow-lg shadow-black/50 rounded-[5px] w-[300px] p-6 m-4 flex flex-col hover:bg-[#1a1a1a] transition duration-300 ease-in-out">
                      <h2 className="text-xl font-bold text-white mb-4"><span className="mr-2 font-extrabold">0{index + 1}  </span>{chapter.title}</h2>
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