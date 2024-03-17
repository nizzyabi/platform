'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import UserButton from './user-button';
import { MobileSidebar } from "@/components/mobile-sidebar"
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import Search from './search';

export default function Navbar() {

    const [isHovered, setIsHovered] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100;
            setHasScrolled(window.pageYOffset > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 800,
          easing: "ease-out-cubic",
        });
      }, []);

    const navbarChange = hasScrolled ? '${navbarChange} border-b border-slate-100/20 bg-[#2e2e2e]/90' : 'bg-transparent';
    
    return (
        <nav className={`fixed top-0 w-full z-50 ${navbarChange}`}>
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                <div className="flex justify-between items-center">
                <MobileSidebar />
               
                        <Link href='/'  className="flex items-center"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}>
                            
                                <Image
                                    src='/gilbert_cool.png'
                                    width={70}
                                    height={70}
                                    className='pb-2 hover:scale-110 duration-500'
                                    alt='logos2'
                                />
                                
                        </Link>
                   
                
                    <div className="hidden md:flex items-center text-lg md:text-lg font-medium mr-2 navbar space-x-7">
                        <Link href="/roadmap">
                            <p className="hover:opacity-70 transition duration-500 px-3 py-2 rounded-md text-lg font-medium">Roadmap</p>
                        </Link>
                        <Link href="/courses">
                            <p className="hover:opacity-50 duration-300 px-3 py-2 rounded-md text-lg font-medium">Courses</p>
                        </Link>
                        <Link href="/mentorship">
                            <p className="hover:opacity-50 duration-300 px-3 py-2 rounded-md text-lg font-medium">Mentorship</p>
                        </Link>
                        <Search />
                        
                        <UserButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}

