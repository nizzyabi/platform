import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";
import { CourseSidebar } from "./_components/course-sidebar";
import { CourseNavbar } from "./_components/course-navbar";


const CourseLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
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

  if (!course) {
    return redirect("/");
  }

  const progressCount = getProgress(session.user.id, course.id)

  return (
    <div className="h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[80px] md:pl-40  inset-y-0 w-40 pt-20 ">
          <CourseNavbar 
            course={course}
            progressCount={progressCount}
          />
        </div>
        <main className="md:pl-80 pt-[10px] h-full">
          {children}
        </main>
        <div className="hidden md:flex h-full w-40 pt-20 flex-col fixed inset-y-0 ">
          <CourseSidebar 
            course={course}
            progressCount={progressCount}
          />
        </div>
      </div>
    </div>
  )
}

export default CourseLayout