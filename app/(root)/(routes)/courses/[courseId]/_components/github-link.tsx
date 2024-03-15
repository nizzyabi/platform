"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Course } from "@prisma/client";

//interface 
interface GithubLinkFormProps {
  initialData: Course;
  courseId: string;
};

//form schema
const formSchema = z.object({
  githubLink: z.string().min(1, {
    message: "Github link is required",
  }),
});

export const GithubForm = ({
  initialData,
  courseId
}: GithubLinkFormProps) => {
  // state for editing
  const [isEditing, setIsEditing] = useState(false);
  // toggle
  const toggleEdit = () => setIsEditing((current) => !current);
  // router
  const router = useRouter();
  // form hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        githubLink: initialData?.githubLink || ""
    },
  });
  // destructure
  const { isSubmitting, isValid } = form.formState;
  // submit patch incase updated
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  }

  return (
  <div className="mt-6 border border-slate-100/20 shadow-md bg-[#131212] bg-opacity-95 rounded-xl p-4">
  <div className="font-semibold flex items-center justify-between text-xl">
    Github Link
    <Button onClick={toggleEdit}>
      {isEditing ? (
        <>Cancel</>
      ) : (
        <>
          <p>Edit</p>
        </>
      )}
    </Button>
  </div>
  {!isEditing && (
    <p className="text-lg mt-2">
      {initialData.githubLink}
    </p>
  )}
  {isEditing && (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 mt-4"
      >
        <FormField
          control={form.control}
          name="githubLink"
          render={({ field }) => (
            <FormItem>
              <FormControl className="relative rounded bg-slate-100 text-[#2e2e2e]">
                <Input
                  disabled={isSubmitting}
                  placeholder="e.g. 'Github repository link...'"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
          <Button
            disabled={!isValid || isSubmitting}
            type="submit"
            className=" flex"
            variant="basic"
          >
            Save
          </Button>
        
      </form>
    </Form>
  )}
</div>
)
}