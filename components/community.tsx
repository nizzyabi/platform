'use client'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCurrentUser } from "@/hooks/user-current-user"
import { Avatar } from "@mui/material"


export const Community = () => {
  const session = useCurrentUser()
  return (
    <div className='landing pt-40'>
      <div className="flex items-center justify-center">
        <Dialog>
          <DialogTrigger>
            <div className="flex items-center justify-center bg-slate-200 h-12 rounded-[5px] text-[#121212] pr-[100px] sm:pr-[200px] md:pr-80 pl-3 py-7">
              <Avatar src={`${session?.image}`} className="mr-2"/>
              <p className="font-medium no-wrap">Write something...</p>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-slate-200 text-[#191919] rounded-[5px] w-[300px] sm:w-[300px] md:w-[400px] lg:w-[600px]" >
            <DialogHeader>
              <DialogTitle>
                <Input placeholder="Title" className="py-0 placeholder:text-3xl text-3xl bg-slate-200"/>
              </DialogTitle>
              <DialogDescription className="text-gray-400">
              <Textarea placeholder="Write something..." className="border-none text-[#191919] placeholder:text-gray-400 text-md placeholder:text-md"/>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end">
            <Button className="bg-transparent hover:text-[#191919] text-[#191919]/50 w-20">Cancel</Button>
              <Button className="bg-[#191919] text-slate-100 hover:opacity-90 w-20">Post</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
