import { Course } from "@prisma/client";
import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";

type CourseWithProgress = Course & {
   
    chapters: { id: string}[];
    progress: number | null;
};

type GetCourses = {
    userId?: any;
    title?: string;
};

export const getCourses = async ({
    userId,
    title,
    
}: GetCourses): Promise<CourseWithProgress[]> => {
    try {
        const courses = await db.course.findMany({
            where: {
                isPublished: true,
                title: {
                    contains: title
                }
            },
            include: {
                chapters: {
                    where: {
                        isPublished: true
                    },
                    select: {
                        id: true
                    }
                },
                purchases: {
                    where: {
                        userId
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        const coursesWithProgress: CourseWithProgress[] = await Promise.all(
            courses.map(async course => {
                if (course.purchases.length === 0) {
                    return {
                        ...course,
                        progress: null,
                    }
                }

                const progressPercentage = await getProgress(userId, course.id);

                return {
                    ...course,
                    progress: progressPercentage
                };
            })
        );

        return coursesWithProgress;
    } catch (error) {
        console.log("GET_COURSES", error);
        return []
    }
}