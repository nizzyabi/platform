import { auth } from '@/auth'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await auth()

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: session.user.id ?? ''
      },
      include: {
        chapters: true
      }
    })

    if (!course) {
      return new NextResponse('Not Found', { status: 404 })
    }

    const hasPublishedChapter = course.chapters.some(
      (chapter) => chapter.isPublished
    )

    if (
      !course.title ||
      !course.description ||
      !course.imageUrl ||
      !hasPublishedChapter
    ) {
      return new NextResponse('Missing required fields', { status: 401 })
    }

    const publishedCourse = await db.course.update({
      where: {
        id: params.courseId,
        userId: session.user.id ?? ''
      },
      data: {
        isPublished: true
      }
    })

    return NextResponse.json(publishedCourse)
  } catch (error) {
    console.log('[COURSE_ID_PUBLISH]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
