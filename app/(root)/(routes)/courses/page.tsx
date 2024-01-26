'use client'
import Courses from '@/components/courses'
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/user-current-user';
import Link from 'next/link';
import React from 'react'

export default function page() {
  const session = useCurrentUser();
  return (
    <div>
      {session?.id === 'clrgbzdt20000yma9n65ry5wy' ? (
        <div>
          <Link href='/courses/add' className='flex items-center justify-center'>
            <Button variant="gold" className="mt-5">Create</Button>
          </Link>
        </div>
      ) : (
        <div>
          
        </div>
      )}
      <Courses />

    </div>
  )
}
