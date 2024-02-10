import { Chapter, Course, UserProgress } from "@prisma/client"

interface CourseNavbarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null
        })[];
    };
    progressCount: any;
}

export const CourseNavbar = ({
    course,
    progressCount,
}: CourseNavbarProps) => {
    return (
        <div className="p-4 h-full flex items-center  shadow-sm">
            navbar course
        </div>
    )
}