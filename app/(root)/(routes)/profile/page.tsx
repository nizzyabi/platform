'use client'
import { Separator } from '@/components/ui/separator'
import { useAuth, useUser  } from '@clerk/nextjs'
import VerifiedIcon from '@mui/icons-material/Verified';
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function page() {
  const { signOut } = useClerk();
  const router = useRouter()
  const {user} = useUser()
  const joinedDate = user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A';
  const primaryEmail = user?.primaryEmailAddress?.emailAddress || 'No primary email';

  
  const {userId} = useAuth()
  return (
    <div>
      <div className='h-full p-4 space-y-2 max-w-3xl mx-auto'>
        <div>
          <h3 className="text-4xl mb-2 font-extrabold pb-2">Settings</h3>
          <Separator className='bg-gray-500'/>
        </div>

        <div className='text-lg space-y-2'>
          <h3 className="text-3xl mb-2 font-bold pb-2 ">Account</h3>

          
          <h4 className='text-xl font-extrabold'>User Type: <span className='opacity-70 text-xl font-medium'>PRO</span></h4>
          <h4 className='text-xl font-extrabold'>Dev Email: <span className='font-medium'>{primaryEmail}<VerifiedIcon className='mb-1 text-sm ml-1'/></span></h4>
          <h4 className='text-xl font-extrabold'>Joined In: <span className='font-medium'>{joinedDate}</span></h4>
        </div>

        <Button className='rounded bg-violet-600 hover:bg-violet-600 hover:transition-transform hover:scale-105' onClick={() => signOut(() => router.push("/"))}>
          <p className='font-extrabold text-lg bg-violet-600 hover:bg-violet-600'>sign out</p>
        </Button>

      </div>
        
    </div>
  )
}
