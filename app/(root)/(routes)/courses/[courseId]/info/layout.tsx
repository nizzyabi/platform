
import { CoursePurchaseButton } from "@/app/(course)/course/[courseId]/chapter/[chapterId]/_components/course-purchase-button";
import { auth } from "@/auth";
import { FcAutomatic, FcComboChart, FcFlashOn, FcGraduationCap, FcTimeline, FcTreeStructure } from "react-icons/fc";

import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PrimaryButton from "@/components/ui/get-started-button";


const CourseInfoLayout = async ({
    params
} : {
    params: { courseId: string;  };
}) => {
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
        <div className="pt-40 mx-5 md:mx-20 pb-40  landing">
          <div className="text-center pb-8">
            <h1 className="text-6xl font-extrabold mb-3 ">{course?.title}</h1>
            <p className="opacity-50 font-medium ">{course?.description}</p>
            
            
            <div className="flex items-center justify-center mt-3">
              <iframe 
              src={`${course?.introVideo}&autoplay=1&&muted=1&loop=1`} 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
              title="Video"
              className="aspect-video w-[700px] rounded-[5px]"
              ></iframe>
            </div>
        
            <div className='flex-1 flex flex-col items-center justify-center mb-4 mt-8'>
              <PrimaryButton href={`/course/${course?.id}`}>
                Go To Course
              </PrimaryButton>
            </div>
          </div>
          <div className="space-y-12">
          <div className="mx-auto max-w-2xl">
            <div className="flex">
              <FcAutomatic className='h-10 w-10 mr-2'/>
              <h1 className="text-4xl font-bold ">What will we build?</h1>
            </div>
            <p className="font-medium text-baseContentSecondary  pt-4 text-sm ml-2">{course?.description2}</p>           
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="flex">
              <FcGraduationCap className='h-10 w-10 mr-2'/>
              <h1 className="text-4xl font-bold">What will I learn?</h1>
            </div>
            <p className="font-medium text-baseContentSecondary pt-4 whitespace-pre-wrap text-sm ml-3">{course?.learningOutcome}</p> 
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="flex">
              <FcFlashOn className='h-10 w-10'/>
              <h1 className="text-4xl font-bold">What's included?</h1>
            </div>
            <p className="font-medium text-baseContentSecondary  pt-4 whitespace-pre-wrap text-sm ml-4">{course?.included}</p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="flex">
              <FcTimeline className='h-10 w-10 mr-2'/>
              <h1 className="text-4xl font-bold">Difficulty level</h1>
            </div>
            <p className="font-medium text-baseContentSecondary 0 mt-4 p-2 border border-slate-100/20 rounded-lg bg-[#0F0F0F] whitespace-pre-wrap text-sm ml-1">{course?.difficulty}</p>
          </div>

          <div className="mx-auto max-w-2xl text-center pt-10">
            <h1 className="text-5xl font-bold">Purchase course</h1>
              <div className="flex items-center justify-center">
                <Separator className=" bg-primary/20 h-0.5 w-40 mt-10" />
              </div>
            <div className="pt-12">
              
            {
              !course?.price ? 
              <div className="flex items-center justify-center">
              <PrimaryButton href={`/course/${course?.id}`}>
                This Course Is Free!
              </PrimaryButton>
              </div>
              : 
              <CoursePurchaseButton
                courseId={params.courseId}
                price={course?.price!}
              />
            }
            
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-center text-5xl font-bold mb-8 mt-8">Chapters</h1>
              <div className="flex items-center justify-center">
                <Separator className=" bg-primary/20 h-0.5 w-40 mb-12" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {course?.chapters.map((chapter, index) => (
                  <Link href={`/course/${course?.id}/chapter/${chapter.id}`} key={chapter.id}>
                    <div className="bg-[#0F0F0F] border-2 border-slate-100/20 rounded-[5px] w-full p-6 flex flex-col hover:bg-opacity-80 transition duration-300 ease-in-out">
                      <div className="flex">
                        <h2 className="text-2xl font-bold text-baseContent mb-4"><span className="mr-2 font-extrabold text-2xl opacity-40">{index + 1 <= 9 ? `0${index +  1}` : index + 1}</span>{chapter.title}</h2>
                      </div>
                      <p className="opacity-50 flex">{chapter.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
    )
}

export default CourseInfoLayout