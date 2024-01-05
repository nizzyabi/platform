'use client'
import { auth } from "@/auth"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { RegisterForm } from "./auth/Register-Form"
import { LoginForm } from "./auth/Login-Form"
import { useState } from "react"
import { Avatar, CircularProgress } from "@mui/material"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { IoMdPerson } from "react-icons/io";

const UserButton = () => {
    // get user
    // if user is logged in, return logout button
    // if user is not logged in, return login button
    const { data: session, status } = useSession();    
    const [showRegister, setShowRegister] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const isLoading = status === "loading";
    // Toggle form of auth
    const toggleForm = () => {
        setShowRegister(!showRegister);
    };
    if (isLoading) {
        return <CircularProgress size={24} />;
      }
  return (
    <div>
        {!session ? (
            <Dialog>
            <DialogTrigger asChild>
                <Button variant="gold" className="mr-2 mt-5">login</Button>
            </DialogTrigger>
            
            <DialogContent className="shadow-xl shadow-black flex flex-col items-center justify-between  bg-[#191919] rounded-xl">
            {showRegister ? <RegisterForm /> : <LoginForm />}
            
            <button onClick={toggleForm} className="mt-auto 
             w-full text-center hover:underline">
                {showRegister ? "Already have an account?" : "Don't have an account?"}
            </button>  
            
            </DialogContent> 
                     
        </Dialog>

        ): (
            <Link href='/settings'>
                <Avatar alt='logo' className="shadow-xl shadow-black  hover:scale-110 transition-transform duration-500 bg-red-500 text-6xl " sx={{ width: 52, height: 52}}><IoMdPerson className="text-3xl"/></Avatar>
            </Link>
        )}

    </div>
  )
}

export default UserButton