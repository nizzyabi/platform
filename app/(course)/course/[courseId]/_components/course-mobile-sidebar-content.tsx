import { auth } from '@/auth';
import { CourseProgress } from '@/components/course-progress';
import { db } from '@/lib/db';
import { Chapter, Course, UserProgress } from '@prisma/client'
import { redirect } from 'next/navigation';
import { CourseSidebarItem } from './course-sidebar-item';
import { ScrollArea, ScrollBar } from '@/components/ui/scrollbar';



interface CourseMobileSidebarContentProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null;
        })[]
    };
    progressCount: number;
}
export const CourseMobileSidebarContent = async ({
    course,
    progressCount,
}: CourseMobileSidebarContentProps) => {
    const session = await auth();
  
    if (!session) {
      return redirect("/");
    }

    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: session.user.id ?? '',
          courseId: course.id,
        }
      }
    });
  return (
    <div className="md:flex ">
    <div className="flex flex-col">
      
      {purchase && (
        <div className="mt-3">
          
          <CourseProgress
            variant="default"
            value={progressCount}
          />
        </div>
      )}
    </div>
    
   <div className='pt-12'>
   <ScrollArea className="flex flex-col h-full w-30 w-full overflow-x-auto pr-2">
    
        {course.chapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            courseId={course.id}
            isLocked={!chapter.isFree && !purchase}
          />
        ))}
        
      </ScrollArea>
    </div>
  </div>
  )
}

