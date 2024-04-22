import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";
import { CourseSidebar } from "./_components/course-sidebar";
import { CourseNavbar } from "./_components/course-navbar";
import { Suspense } from "react";


const CourseLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { courseId: string };
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
            }
          }
        },
        orderBy: {
          position: "asc"
        }
      },
    },
  });

  if (!course) {
    return redirect("/");
  }

  const progressCount = getProgress(session?.user.id ?? '', course.id)

  return (
    <div className="sm:mt-20 md:mt-40 max-w-[1600px] mx-auto ">
      <CourseNavbar 
        course={course}
        progressCount={progressCount}
      />
     
      <div className="flex">
        <CourseSidebar
          course={course}
          progressCount={await progressCount}
        />
         
        {children}
      </div>
    </div>
  )
}

export default CourseLayout