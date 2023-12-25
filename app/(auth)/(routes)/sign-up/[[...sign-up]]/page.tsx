'use client'
import React from "react";
import signUp from "../../../../firebase/auth/signup";
import { useRouter } from 'next/navigation'
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import firebase_app from "../../../../firebase/config"; // Adjust this path to your Firebase config file



function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()
    const auth = getAuth(firebase_app);

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
          alert("Sign-in link sent! Check your email.");
      } catch (error) {
          console.error("Error sending email link", error);
      }
  }
    return (<div className="wrapper">
        <div className="wrapper">
            <div className="form-wrapper">
                <h1 className="mt-60 mb-30">Sign up</h1>
                <form onSubmit={handleForm} className="form">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                    </label>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    </div>);
}

export default Page