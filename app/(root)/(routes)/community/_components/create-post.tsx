'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCurrentUser } from "@/hooks/user-current-user"
import { zodResolver } from "@hookform/resolvers/zod"
import { Avatar } from "@mui/material"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"; 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
// onSubmit to backend


interface PostProps {
    title?: string;
    content?: any;
}

const postSchema = z.object({
    title: z.string(),
    content: z.string(),
})

export const CreatePost = ({
    title,
    content
}: PostProps) => {
  const session = useCurrentUser()
  const router = useRouter();
  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
        title: "",
        content: "",
    }
  })

  const isLoading = form.formState.isSubmitting;
  
  const onSubmit = async (values: z.infer<typeof postSchema>) => {
    try {
        await axios.post("/api/post", values)
        router.refresh()
        toast.success("Post Created")
        form.reset({ // Reset form fields to initial values after successful submission
            title: "",
            content: "",
          });
    } catch (error) {
        toast.error("An Error Occured")
    }
  }

  return (
    <div className='landing pt-40 flex items-center justify-center'>
        
      <Card className="text-slate-200 bg-zinc-900 w-[500px] sm:w-[500px] md:w-[600px] lg:w-[800px]">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                <FormField 
                    name='title'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Title" className="py-0 placeholder:text-3xl text-3xl bg-zinc-900 text-slate-200"
                                    {...field}
                                />  
                            </FormControl>
                        </FormItem>
                    )}
                />
                </CardHeader>
                           
                <CardContent>          
                <FormField 
                    name='content'
                    control={form.control}
                    render = {({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea  
                                    placeholder="Text (required)"
                                    className="border-none placeholder:text-gray-400 text-md placeholder:text-md"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                </CardContent>  
                <CardFooter className="flex justify-end">       
                    <Button 
                        className="bg-gradient-to-r from-white/80 via-white to-white/80 text-zinc-900 hover:opacity-70 w-20 transition duration-300" 
                        type="submit"  disabled={isLoading}>
                            Post
                    </Button>
                </CardFooter>
            </form>
        </Form>
        </Card>
    </div>
  )
}
