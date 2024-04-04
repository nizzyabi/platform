'use client'
import { Button } from "@/components/ui/button"
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
            <div className="flex items-center justify-center bg-slate-100 h-12 rounded-[5px] text-[#121212]  mx-40 pr-80 pl-3 py-7">
              <Avatar src={`${session?.image}`} className="mr-2"/>
              <p className="font-medium no-wrap">Write something...</p>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-slate-100 text-[#191919] rounded-[5px] sm:w-[400px] md:w-[500px] mx-auto" >
            <DialogHeader>
              <DialogTitle>
                <Input placeholder="Title" className="py-0 placeholder:text-3xl text-3xl"/>
              </DialogTitle>
              <DialogDescription className="text-gray-400">
              <Textarea placeholder="Write something..." className="border-none text-[#191919] placeholder:text-gray-400 text-md placeholder:text-md"/>
              </DialogDescription>
            </DialogHeader>
            <div className="flex-end">
              <Button className="bg-[#191919] text-slate-100 hover:opacity-90">Post</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
