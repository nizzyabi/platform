import { AlignLeft } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 text-primary">
                <AlignLeft className="h-8 w-8 hover:text-slate-100/50 duration-300"/>
            </SheetTrigger>
            <SheetContent side="left" className="p-6 bg-[#191919] border-none text-slate-200 w-80">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}