'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Separator } from "./ui/separator";





export default function Navbar() {

    const[isLoading, setIsLoading] = useState(true);
    
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div>

            <div className="text-center pt-4 pb-4  border-b border-gray-300/20 font-bold text-lg">
                <Link href='https://youtube.com/@NizzyABI?si=dffeDkbsPfFQ24Ez' className="hover:opacity-70 flex items-center justify-center">
                    <p className="hover:opacity:70">subscribe for daily videos! </p>
                    <ArrowRightAltIcon className="ml-2"/>
                </Link>
                
            </div>
    
    <div className="w-full pt-4 flex justify-between items-center px-2 cursor-pointer  bg-none">
        <Link href='/' className="flex items-center ml-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <Image 
                src={isHovered ? '/logo2.svg' : '/logo.svg'}
                width={30}  // Base width
                height={30}
                alt='logos2'
                className="responsive-image"
                
            />
        </Link>
        <div className="flex items-center gap-x-6 text-xl md:text-2xl font-extrabold mr-2 ">
            <Link href="/roadmap">
                <p 
                    className="text-white font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400 hover:scale-105 transition-transform  "
                >
                        roadmap
                </p>
            </Link>
            <Link href="/guides">
                <p 
                    className="text-white font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 hover:scale-105 transition-transform  "
                >
                        guides
                </p>
            </Link>
            <Link href="/courses">
                <p 
                    className="text-white font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 transition-transform"
                >
                        courses
                </p>
            </Link>

            {/* In the Auth Button, put user imgage if they are logged in and have an image from thieir inital login, else put the default image*/}
            <Link href='/profile' className="transition-transform">
                <Avatar alt='logo' src="nizar.png" className="hover:border hover:border-gray-400" sx={{ width: 52, height: 52 }}/>
            </Link>
            
        </div>
        
    </div>
    </div>
  )
}
