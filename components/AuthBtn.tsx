import { UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

export default function AuthBtn() {
const {userId} = useAuth();
  return (
    
    <div>
       {userId ? (
                    
                    <UserButton  />
                
            ) : (
                <Link href='/sign-up'>
                    <button className="border border-white py-0.5 px-2 rounded bg-purple-500 hover:bg-white hover:text-black">
                        sign up
                    </button>
                </Link>
            )}
    </div>
  )
}
