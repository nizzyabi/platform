'use client'
import Guides from '@/components/Guides'
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
          <Link href='/guides/add' className='flex items-center justify-center'>
            <Button variant="gold" className="mt-5">Create</Button>
          </Link>
        </div>
      ) : (
        <div>
          
        </div>
      )}
      <Guides />

    </div>
  )
}
