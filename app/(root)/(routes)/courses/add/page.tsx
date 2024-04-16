"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";
import { useCurrentUser } from "@/hooks/user-current-user";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    },
  });
  const session = useCurrentUser();

  const { isSubmitting, isValid } = form.formState;
  // onsubmit
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/courses/${response.data.id}`);
      console.log("Course created");
    } catch {
      toast.error("Something went wrong");
    }
  }

  return ( 
    <div className="max-w-5xl mx-auto flex items-center justify-center h-full pt-40">
      {/* if userId = a then display page*/}
      {session?.email === "nizabizaher@gmail.com" && (
        <div>
          <h1 className="text-5xl text-center font-bold">
            Name your course
          </h1>
          
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 mt-8"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Course title
                    </FormLabel>
                    <FormControl className="relative bg-slate-100 text-[#2e2e2e]">
                      
                      <Input
                        disabled={isSubmitting}
                        placeholder="e.g. 'Advanced web development'"
                        {...field}
                      />
                      
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-1">
                
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  variant='default'
                  className="mt-2 py-2"
                >
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </div>
   );
}
 
export default CreatePage;