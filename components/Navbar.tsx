'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Avatar } from "@mui/material";
import "aos/dist/aos.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LoginButton } from "./auth/Login-Button";
import { LoginForm } from "./auth/Login-Form";
import { RegisterForm } from "./auth/Register-Form";
import { BackButton } from "./auth/Back-Button";
import UserButton from "./UserButton";





export default function Navbar() {
    // states
    const[isLoading, setIsLoading] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    // Toggle form of auth
    const toggleForm = () => {
        setShowRegister(!showRegister);
    };
  return (
    <div>

            <div className="text-center pt-4 pb-4  border-b border-gray-300/20 font-bold text-lg">
                <Link href='https://youtube.com/@NizzyABI?si=dffeDkbsPfFQ24Ez' className="hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                    <p className="hover:opacity:70">subscribe for daily videos! </p>
                    <ArrowRightAltIcon className="ml-2"/>
                </Link>
                
            </div>
    
    <div className="w-full pt-4 flex justify-between items-center px-2 cursor-pointer">
        <Link href='/' className="flex items-center ml-2 hide-on-small-screens h-20 w-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <Image 
                src={isHovered ? '/chad.svg' : '/gilbert.svg'}
                width={420}  // Base width
                height={420}
                alt='logos2'
                className=""
                
            />
        </Link>
        <div className="flex items-center gap-x-6 text-xl md:text-2xl font-extrabold mr-2 navbar">
            <Link href="/roadmap">
                <p 
                    className="text-white font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400 hover:scale-110 transition-transform duration-500  "
                >
                        roadmap
                </p>
            </Link>
            <Link href="/guides">
                <p 
                    className="text-white font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 hover:scale-110 transition-transform duration-500  "
                >
                        guides
                </p>
            </Link>
            <Link href="/coaching">
                <p 
                    className="text-white font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-110 transition-transform duration-500"
                >
                        coaching
                </p>
            </Link>

            {/* In the Auth Button, put user imgage if they are logged in and have an image from thieir inital login, else put the default image*/}
            <UserButton />

            {/*<Dialog>
                <DialogTrigger asChild>
                    <Avatar alt='logo' src="nizar.png" className="shadow-xl shadow-black  hover:scale-110 transition-transform duration-500 " sx={{ width: 52, height: 52 }}/>
                </DialogTrigger>
                
                <DialogContent className="shadow-xl shadow-black flex flex-col items-center justify-between  bg-[#191919] rounded-xl">
                {showRegister ? <RegisterForm /> : <LoginForm />}
                
                <button onClick={toggleForm} className="mt-auto  w-full text-center hover:underline">
                    {showRegister ? "Already have an account?" : "Don't have an account?"}
                </button>  
                
                </DialogContent> 
                         
            </Dialog>*/}
            
                
            
            
        </div>
        
    </div>
    </div>
  )
}
