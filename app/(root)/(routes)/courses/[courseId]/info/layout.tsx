
import { CoursePurchaseButton } from "@/app/(course)/course/[courseId]/chapter/[chapterId]/_components/course-purchase-button";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { Check } from "lucide-react";
import Link from "next/link";
import PrimaryButton from "@/components/ui/get-started-button";
import Image from "next/image";


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
    const includedItems = course?.included?.split('\n') || [];
    const learningOutcomeItems = course?.learningOutcome?.split('\n') || [];

    return (
        <div className="py-20 space-y-20 mx-5 md:mx-20  landing">
          <div className="text-center pb-8">
            <h1 className="text-5xl font-extrabold mb-3">{course?.title}</h1>
            <p className="opacity-50 font-medium">{course?.description}</p>

            <div className="flex items-center justify-center mt-3">
              <iframe 
              src={`${course?.introVideo}`} 
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

          <div className="space-y-[200px] text-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

              <div className="flex flex-col justify-center text-center lg:text-left">

                <div className="flex flex-col text-4xl font-bold text-baseContent">
                <h1 className="text-4xl font-bold ">What will we build?</h1>
                <p className="font-medium text-baseContentSecondary pt-4 text-lg max-w-2xl">{course?.description2}</p> 
              </div>
            </div>
            <div className="mockup-window bg-[#0F0F0F] flex items-center justify-center md:h-full">
              <Image 
                height={400} 
                width={400} 
                src='/app.png' 
                alt='app'
                className="object-cover h-full w-full"
              />
            </div>          
            </div>

          
            <div className="max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col justify-center items-center text-center">
                <div className="text-baseContent">
                  <h1 className="text-4xl font-bold">What will I learn?</h1>
                  <div className="max-w-2xl mx-auto mt-8 rounded-lg   p-10 bg-primary/20">
                    <p className="text-lg font-semibold text-left">In this course, you will learn to:</p>
                    <div className="font-medium text-baseContentSecondary pt-4 text-lg text-center">
                    {learningOutcomeItems.map((item, index) => (
                        <div key={index} className="font-medium text-baseContent text-md flex items-center ">
                          <Check className="text-baseContentSecondary h-8 w-8 pr-2 "/> 
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <PrimaryButton className="w-full mt-4" href={`/course/${course?.id}`}>Go To Course</PrimaryButton>
                  </div>
                </div>
              </div>
            </div>



            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="mockup-window bg-[#0F0F0F] flex items-center justify-center md:h-full">
                <Image 
                  height={400} 
                  width={400} 
                  src='/app.png' 
                  alt='app'
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex flex-col justify-center text-center lg:text-left">
                <div className="flex flex-col text-4xl font-bold text-baseContent">
                  <h1 className="text-4xl font-bold ">Difficulty Level</h1>
                  <p className="font-medium text-baseContentSecondary pt-4 text-lg max-w-2xl">{course?.difficulty}</p> 
                </div>
              </div>
            </div>
  
          <div className="mx-auto max-w-7xl text-center pt-10">
            <h1 className="text-5xl font-bold">Purchase course</h1>
            
            <div className="pt-12 flex items-center justify-center">
              {!course?.price ? 
                <div className="card w-[500px] bg-base100 shadow-xl border-2 border-primary">
                  <div className="card-body">
                    <h2 className="card-title text-center text-2xl">{course?.title}</h2>
                    <h3 className="text-3xl font-semibold card-title">
                      <span className="line-through text-[17px] font-medium pt-1">$79</span>
                      <span className="text-baseContent">FREE</span>
                    </h3>
                    <div className="pt-4  space-y-3">
                      {includedItems.map((item, index) => (
                        <div key={index} className="font-medium text-baseContent text-md flex items-center ">
                          <Check className="text-baseContentSecondary h-8 w-8 pr-2 "/> 
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  <div className="card-actions justify-center mt-4">
                    <PrimaryButton className="w-full" href={`/course/${course?.id}`}>This Course Is Free!</PrimaryButton>
                  </div>
                  <p className="text-center mt-2">Free now. Free forever.</p>
                </div>
                </div>
              : 
              <div className="card w-[500px] bg-base100 shadow-xl border-2 border-primary">
                  <div className="card-body">
                    <h2 className="card-title text-center text-2xl">{course?.title}</h2>
                    <h3 className="text-3xl font-semibold card-title">
                      <span className="line-through text-[17px] font-medium pt-1">$79</span>
                      <span className="text-baseContent">${course?.price} <span className="text-sm opacity-60">USD</span></span>
                    </h3>
                    <div className="pt-4  space-y-3">
                      {includedItems.map((item, index) => (
                        <div key={index} className="font-medium text-baseContent text-md flex items-center ">
                          <Check className="text-baseContentSecondary h-8 w-8 pr-2 "/> 
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  <div className="card-actions justify-center mt-4">
                    <CoursePurchaseButton
                      courseId={params.courseId}
                      price={course?.price!}
                      
                    />
                  </div>
                  <p className="text-center mt-2">Pay once. Access Forever</p>
                </div>
                </div>
            }
            
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-center text-5xl font-bold mb-8 mt-8">Chapters</h1>
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