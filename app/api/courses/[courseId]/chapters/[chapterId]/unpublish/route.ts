import { auth } from '@/auth'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const session = await auth()

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: session.user.id ?? ''
      }
    })

    if (!ownCourse) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const unpublishedChapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId
      },
      data: {
        isPublished: false
      }
    })

    const publishedChaptersInCourse = await db.chapter.findMany({
      where: {
        courseId: params.courseId,
        isPublished: true
      }
    })

    if (!publishedChaptersInCourse.length) {
      await db.course.update({
        where: {
          id: params.courseId
        },
        data: {
          isPublished: false
        }
      })
    }

    return NextResponse.json('Unpublished Chapter')
  } catch (error) {
    console.log('[CHAPTER_UNPUBLISH]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
