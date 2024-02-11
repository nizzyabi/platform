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
        <div className="">
            
        </div>
    )
}