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
        <div className="mt-6 border border-primary/20 shadow-md bg-secondary bg-opacity-95 rounded-[5px] p-4">
      <div className="font-semibold flex items-center justify-between text-xl">
        Intro Video Link
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
        <p className={cn(
          "flex text-primary/70 mt-2 text-sm",
          !initialData.introVideo && "text-primary/70 italic text-sm"
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
                      className="bg-secondary border-primary/20"
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