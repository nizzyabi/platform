import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
    req:Request,
    { params } : { params: { courseId: string; chapterId: string } }
) {
    try {
        const session = await auth();
        const { isPublished, ...values } = await req.json();

        if(!session) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const ownCourse = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId: session.user.id
            }
        });

        if(!ownCourse) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const chapter = await db.chapter.update({
            where: {
                id: params.chapterId,
                courseId: params.courseId
            },
            data: {
                ...values
            }
        })
        console.log("Success")
        // TODO: Handle Video Upload
        return NextResponse.json(chapter);
    } catch (error) {
        console.log("[COURSES_CHAPTER_ID]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}