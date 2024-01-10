'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { RegisterForm } from "./auth/Register-Form"
import { LoginForm } from "./auth/Login-Form"
import { useState, useEffect } from "react"
import { Avatar, CircularProgress } from "@mui/material"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { IoMdPerson } from "react-icons/io";
import { ResetForm } from "./auth/Reset-Form"



const UserButton = () => {
    
    // get user
    // if user is logged in, return logout button
    // if user is not logged in, return login button
    const { data: session, status } = useSession();    
    const [showRegister, setShowRegister] = useState(true);
    const isLoading = status === "loading";
    const [open, setOpen] = useState(false);
    const [showReset, setShowReset] = useState(false);

    
    // Toggle form of auth
    const toggleForm = () => {
        setShowRegister(!showRegister);
        setShowReset(false); // Hide reset form when showing register form
    };
    const handleShowReset = () => {
        setShowReset(!showReset);
        if (showReset) {
            setShowRegister(false); // Hide register form when showing reset form
        }
    };
    if (isLoading) {
        return <CircularProgress size={24} color="primary" />;
      }
  return (
    <div>
        {!session ? (
            <Dialog>
            <DialogTrigger asChild>
                <Button variant="gold" className="mr-2 mt-5">login</Button>
            </DialogTrigger>
            
            <DialogContent className="shadow-xl shadow-black flex flex-col items-center justify-between  bg-[#191919] rounded-xl">
            {showReset ? (
                    <ResetForm />
                ) : showRegister ? (
                    <RegisterForm />
                ) : (
                    <LoginForm />
                )}
                <div className="flex items-center justify-center space-x-20 mr-8">
                {!showReset && (
                    <button onClick={toggleForm} className="hover:underline">
                        {showRegister ? "Already have an account?" : "Don't have an account?"}
                    </button>
                )}
            
            <button onClick={handleShowReset} className=" text-center hover:underline">
                    {showReset ? <div className="flex items-center justify-center ml-4">Back to login</div> : "Forgot password?"}
            </button>
            </div>
            
            </DialogContent> 
                     
        </Dialog>

        ): (
            <Link href='/settings'>
                {!session.user.image ? (
                    <Avatar alt='logo' className="shadow-xl shadow-black  hover:scale-110 transition-transform duration-500  bg-gradient-to-r from-blue-500/90 to-blue-700/90" sx={{ width: 45, height: 45}}>
                    <IoMdPerson className="text-2xl"/>
            </Avatar>
                ): (
                    <Avatar alt='logo' src={session!.user.image} className="shadow-xl shadow-black  hover:scale-110 transition-transform duration-500"  sx={{ width: 45, height: 45 }}/>
                )}
                
            </Link>
        )}

    </div>
  )
}

export default UserButton