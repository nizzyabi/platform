"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import {
    SheetClose,
  } from "@/components/ui/sheet"

const routes = [
    {
       
        href: "/",
        label: "Home",
    },
    {
        
        href: "/roadmap",
        label: "Roadmap",
    },
    {
        
        href: "/courses",
        label: "Courses",
    },
    {
        
        href: "/coaching",
        label: "Coaching",
    },
    {
        
        href: "/settings",
        label: "Settings",
    }
]

export const Sidebar = () => {
    

    return (
        <div className="space-y-4 flex flex-col h-full text-primary mt-12 ">
            
        {/* Mapping through each object of the route variable data. */}
        <div className="space-y-2">
            {routes.map((route) => (
                <SheetClose asChild>
                <Link
                    href={route.href}
                    key={route.href} 
                    
                    className={cn(
                                "text-slate-100/40 text-sm group flex py-2 w-full justify-start font-medium cursor-pointer  rounded "
                    )}
                     >
                    {/* Design & display icon & label */}
                    <div className="flex border-b w-full pb-3 ">
                        
                        <p className="mt-1 text-lg font-medium hover:text-slate-100/90 duration-300">{route.label}</p>
                        
                    </div>
                    </Link>
                    </SheetClose>
                    ))}
                    </div>
            </div>
    )
}