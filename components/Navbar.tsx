'use client'
import Link from "next/link";
import { useState } from "react";
import "aos/dist/aos.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import UserButton from "./UserButton";
import { motion } from "framer-motion";




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
    
    <div className="w-full  flex justify-between items-center px-2 cursor-pointer hide-on-small-screens ">
        <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
        >
        <Link href='/' className="flex items-center ml-2 "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <motion.img 
                src={isHovered ? '/chad.svg' : '/chad.svg'}
                width={100}  // Base width
                height={100}
                alt='logos2'
                
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                
            />
        </Link>
        </motion.div>
        
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
        </div>
        
    </div>
    </div>
  )
}
