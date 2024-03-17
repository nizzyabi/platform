// Imports 
import { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"


// Code for sidebar for smaller devices using sidebar form Shadcn. It is dymamic and will allow users to click on it and let the contents in the regular sidebar show.
export const MobileSidebar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    
    return (
        // Wrap in sheet component for mobile sidebar & to tell code that this is a sheet
        <Sheet >
            {/* When user clicks on Menu, there is an action (via sheet trigger)*/}
            <SheetTrigger className="md:hidden pr-4 text-primary">
                <Menu className="h-8 w-8 hover:text-slate-100/50 duration-300"/>
            </SheetTrigger>
            {/* Content within sidebar (sidebar component) once sheet trigger (menu button) is clicked */}
            <SheetContent side="left" className="p-6 bg-zinc-900 border-none text-slate-200">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}