import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import firebase_app from '@/app/firebase/config';
import Link from 'next/link';
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import SignUpPage from './SignUp';
export default function AuthBtn() {
const [user, setUser] = useState(null);

const auth = getAuth(firebase_app);

useEffect(() => {
  // This listener is called whenever the user's sign-in state changes.
  const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user); // user is null if no user is signed in
  });

  // Unsubscribe to the listener when unmounting the component
  return () => unsubscribe();
}, []);

const handleSignOut = async () => {
  try {
      await signOut(auth);
      console.log('User signed out!');
      setUser(null); // Update the local user state to null
  } catch (error) {
      console.error('Sign out error', error);
  }
}
  return (
    
    <div>
      
       {user ? (
                    <Link href='/profile'>
                      <AccountCircleIcon className='hover:scale-105 transition-transform'/>
                    </Link>
                  
                    
                
            ) : (
                
                    
                    <Dialog>
                      <DialogTrigger asChild className=''>
                        <AccountCircleIcon className='hover:scale-105 transition-transform'/>
                      </DialogTrigger>
                      <DialogContent className='bg-[#191919]'>
                        <SignUpPage />
                      </DialogContent>
                    </Dialog>
                    
                
            )}
    </div>
  )
}
