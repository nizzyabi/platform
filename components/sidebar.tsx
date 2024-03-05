"use client"
import { Users, BookOpen, Monitor, Settings, Home   } from "lucide-react"
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils"
import Link from "next/link";

const routes = [
    {
        icon: Home,
        href: "/",
        label: "Home",
    },
    {
        icon: BookOpen,
        href: "/roadmap",
        label: "Roadmap",
    },
    {
        icon: Monitor,
        href: "/courses",
        label: "Courses",
    },
    {
        icon: Users,
        href: "/coaching",
        label: "Coaching",
    },
    {
        icon: Settings,
        href: "/settings",
        label: "Settings",
    }
]

export const Sidebar = () => {
    const pathname = usePathname()
    const router = useRouter();
    return (
        <div className="space-y-4 flex flex-col h-full text-primary mt-8 ">
            
        <div className="">
            
        {/* Mapping through each object of the route variable data. */}
        <div className="space-y-2">
            {routes.map((route) => (
                <Link
                    href={route.href}
                    key={route.href} 
                                className={cn(
                                "text-slate-100 text-sm group flex py-3 w-full justify-start font-medium cursor-pointer hover:opacity-50 transition rounded"
                                ,
                                pathname === route.href && "bg-slate-100/30 opacity-7"
                    )}
                     >
                    {/* Design & display icon & label */}
                    <div className="flex gap-y-2  ">
                        <route.icon className="h-7 w-7 mr-3"/>
                        <p className="mt-1 text-lg font-medium">{route.label}</p>
                    </div>
                    </Link>
                    ))}
                    </div>
                </div>
    
</div>
    )
}