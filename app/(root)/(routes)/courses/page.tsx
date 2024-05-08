
import { getCourses } from '@/actions/get-courses';
import { auth } from '@/auth';
import Courses from '@/components/courses'
import { CoursesList } from '@/components/courses-list';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/user-current-user';
import Link from 'next/link';
import React from 'react'

const CoursesPage = async () => {
  const session = await auth()
  const courses = await getCourses({
    userId: session?.user?.id
  })
  return (
    <div>
      <Courses />
      <CoursesList items={courses}/>
    </div>
  )
}

export default CoursesPage