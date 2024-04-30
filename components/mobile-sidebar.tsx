// Imports
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { AlignLeft, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Sidebar } from '@/components/sidebar'

// Code for sidebar for smaller devices using sidebar form Shadcn. It is dymamic and will allow users to click on it and let the contents in the regular sidebar show.
export const MobileSidebar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 text-primary">
        <AlignLeft className="h-8 w-8 hover:text-slate-100/50 duration-300" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-6 bg-[#191919] border-none text-slate-200 w-80"
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
