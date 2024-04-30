import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { db } from '@/lib/db'

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    // authenticate
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

    const deletedCourse = await db.course.delete({
      where: {
        id: params.courseId
      }
    })

    return NextResponse.json(deletedCourse)
  } catch (error) {
    console.log('[COURSE_ID DELETE]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await auth()
    // we got this from the patch that was updated
    const { courseId } = params
    // extract values from the patch req
    const values = await req.json()
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 })
    }
    // update course
    const course = await db.course.update({
      where: {
        id: courseId,
        userId: session.user.id ?? ''
      },
      data: {
        ...values
      }
    })
    return NextResponse.json(course)
  } catch (error) {
    console.log('[COURSE]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
