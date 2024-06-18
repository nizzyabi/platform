"use client"

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface IntroVideoFormProps {
    initialData: Course;
    courseId: string;
}

const formSchema = z.object({
    introVideo: z.string().min(1),
});

export const IntroVideoForm = ({
    initialData,
    courseId
}: IntroVideoFormProps) => {

    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => setIsEditing((current) => !current);
  
    const router = useRouter();
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
          introVideo: initialData?.introVideo || ""
      },
    });
  
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
        <div className="mt-6 rounded-lg p-5 shadow-xl bg-base100">
      <div className="font-semibold flex items-center justify-between text-xl">
        Intro Video Link
        <button onClick={toggleEdit} className="btn rounded-lg h-4 bg-primary hover:bg-primary/70 border-none text-slate-100">
          {isEditing ? (
            <>Cancel</>
          ) : (
          <>
            <p>Edit</p>
          </>
          )}
        </button>
      </div>
      {!isEditing && (
        <p className={cn(
          "text-baseContent/70 mt-2 text-sm",
          !initialData.introVideo
        )}>
          {initialData.introVideo || "No video link"}
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
              name="introVideo"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="relative rounded">
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Introduction to the course'"
                      {...field}
                      className="bg-base200 border-baseContent/20 text-baseContent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              disabled={!isValid || isSubmitting}
              type="submit"
              className="flex btn rounded-lg h-4 bg-primary hover:bg-primary/70 border-none text-slate-100"
            >
              Save
            </button>
          </form>
        </Form>
      )}
    </div>
    )
}