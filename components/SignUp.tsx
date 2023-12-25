'use client'
import React from "react";
import signUp from "../app/firebase/auth/signup";
import { useRouter } from 'next/navigation'
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import firebase_app from "@/app/firebase/config";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function SignUpPage() {
    const [email, setEmail] = React.useState('')
    const auth = getAuth(firebase_app);
    const {toast} = useToast();
    const handleForm = async (event:any) => {
      event.preventDefault();

      const actionCodeSettings = {
          // URL to redirect to after email is verified
          url: 'http://localhost:3000/', // Replace with your desired redirect URL
          handleCodeInApp: true
      };

      try {
          await sendSignInLinkToEmail(auth, email, actionCodeSettings);
          window.localStorage.setItem('emailForSignIn', email); // Save the email locally
          toast({
            title: "Sign-in link sent! Check your email."
          });
      } catch (error) {
          console.error("Error sending email link", error);
      }
  }
    return (
    <div className="">
        
            <div className="">
                <h1 className="font-extrabold text-center text-3xl">Sign up</h1>
                <form onSubmit={handleForm} className="form">
                    <label htmlFor="email" className="flex pt-2 ">
                        <p className="pr-2 font-bold text-lg pt-2">Email:</p>
                        <Input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" className='rounded m-none' placeholder="example@mail.com" />
                    </label>
                    <button className='font-extrabold rounded hover:bg-purple-500 hover:scale-105 transition-transform text-xl bg-purple-500 text-white mt-[20px] px-2' type="submit">Sign up</button>
                </form>
            </div>
       
    </div>);
}

export default SignUpPage