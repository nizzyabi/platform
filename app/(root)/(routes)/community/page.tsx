'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCurrentUser } from "@/hooks/user-current-user"
import { Avatar } from "@mui/material"


export default function page() {
  const session = useCurrentUser()
  return (
    <div className='landing pt-40'>
      <div className="flex items-center justify-center">
        <Dialog>
          <DialogTrigger>
            <div className="flex items-center justify-center bg-slate-100 h-12 rounded-[5px] text-[#121212] pr-40 pl-3 py-7">
              <Avatar src={`${session?.image}`} className="mr-2 w-8 h-8"/>
              <p className="font-medium">Write something...</p>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-slate-100 text-[#191919] rounded-[5px] w-[400px]" >
            <DialogHeader>
              <DialogTitle>
                <Input placeholder="Title" className="py-0"/>
              </DialogTitle>
              <DialogDescription className="text-gray-400">
              <Textarea placeholder="Write something..." className="border-none text-[#191919] placeholder:text-gray-400"/>
              </DialogDescription>
            </DialogHeader>
            
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
