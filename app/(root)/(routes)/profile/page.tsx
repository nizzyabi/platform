'use client'
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

import VerifiedIcon from '@mui/icons-material/Verified';
import { SignOutButton, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { SignIn } from '@clerk/clerk-react';

export default function Page() {
 const router = useRouter();

  return (
    <div className='h-full p-4 space-y-2 max-w-3xl mx-auto'>
      {/* ... rest of your component */}
      
      <div className='text-lg space-y-2'>
        {/* ... other settings */}
        
        <h4 className='text-xl font-extrabold'>Dev Email: <span className='font-medium'><VerifiedIcon className='mb-1 text-sm ml-1'/></span></h4>
        <h4 className='text-xl font-extrabold'>Joined In: <span className='font-medium'></span></h4>
      </div>

      <button  className='bg-purple-500'>
        <SignOutButton />
      </button>
    </div>
  );
}
