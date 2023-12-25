'use client'
import LandingPage from '@/components/LandingPage'
import { useEffect } from 'react';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import firebase_app from './firebase/config';


export default function Home() {
  useEffect(() => {
    const auth = getAuth(firebase_app);
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem('emailForSignIn');
          // User is signed in, you can update the UI as needed
        })
        .catch((error) => {
          console.error('Error signing in with email link', error);
          // Handle errors here, such as displaying a notification
        });
    }
  }, []);
  return (
    <div>
      <LandingPage />
    </div>
  )
}
