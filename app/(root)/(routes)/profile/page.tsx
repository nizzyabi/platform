'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import firebase_app from '@/app/firebase/config';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Page() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth(firebase_app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser); // Update the user state when the auth state changes
    });

    return () => unsubscribe(); // Unsubscribe from the listener when the component unmounts
  }, [auth]);

  const joinedDate = user?.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A';
  const userEmail = user?.email || 'No email';

  const signOutUser = () => {
    firebaseSignOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.error("Sign out error", error);
      });
  };

  return (
    <div className='h-full p-4 space-y-2 max-w-3xl mx-auto'>
      {/* ... rest of your component */}
      
      <div className='text-lg space-y-2'>
        {/* ... other settings */}
        
        <h4 className='text-xl font-extrabold'>Dev Email: <span className='font-medium'>{userEmail}<VerifiedIcon className='mb-1 text-sm ml-1'/></span></h4>
        <h4 className='text-xl font-extrabold'>Joined In: <span className='font-medium'>{joinedDate}</span></h4>
      </div>

      <Button className='rounded bg-violet-600 hover:bg-violet-600 hover:transition-transform hover:scale-105' onClick={signOutUser}>
        <p className='font-extrabold text-lg bg-violet-600 hover:bg-violet-600'>sign out</p>
      </Button>
    </div>
  );
}
