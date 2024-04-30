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
      }
    })

    if (!course) {
      return new NextResponse('Not Found', { status: 404 })
    }

    const unpublishedCourse = await db.course.update({
      where: {
        id: params.courseId,
        userId: session.user.id
      },
      data: {
        isPublished: false
      }
    })

    return NextResponse.json(unpublishedCourse)
  } catch (error) {
    console.log('[COURSE_ID_UNPUBLISH]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
