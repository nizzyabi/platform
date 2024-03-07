import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function DELETE(
    req:Request,
    { params } : { params: { courseId: string; chapterId: string } }
) {
    try {
      const session = await auth();

      if (!session) {
        return new NextResponse("Unauthorized", { status: 401 });
      }  

      const ownCourse = await db.course.findUnique({
        where: {
          id: params.courseId,
          userId: session.user.id ?? ''
        }
      });

      if (!ownCourse) {
        return new NextResponse("Unauthorized", { status: 401 });
      }  

      const chapter = await db.chapter.findUnique({
        where: {
            id: params.chapterId,
            courseId: params.courseId
        }
      });

      if (!chapter) {
        return new NextResponse("Not Found", { status: 404 });
      }

      

      const deletedChapter = await db.chapter.delete({
        where: {
            id: params.chapterId
        }
      });

      const publishedChaptersInCourse = await db.chapter.findMany({
        where: {
            courseId: params.courseId,
            isPublished: true,
        }
      });

      if(!publishedChaptersInCourse.length) {
        await db.course.update({
            where: {
                id: params.courseId,
            },
            data: {
                isPublished: false
            }
        });
      }

      return NextResponse.json(deletedChapter);
    } catch (error) {
        console.log("[CHAPTERID_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}
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
                userId: session.user.id ?? ''
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
        return NextResponse.json(chapter);
    } catch (error) {
        console.log("[COURSES_CHAPTER_ID]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}