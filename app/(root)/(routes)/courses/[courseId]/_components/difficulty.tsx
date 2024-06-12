"use client";

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
import { cn } from "@/lib/utils";
import { Preview } from "@/components/preview";
import { Textarea } from "@/components/ui/textarea";

interface DifficultyFormProps {
  initialData: Course;
  courseId: string;
};

const formSchema = z.object({
    difficulty: z.string().min(1),
});

export const DifficultyForm = ({
  initialData,
  courseId
}: DifficultyFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current)

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      difficulty: initialData?.difficulty || ""
    },
  });

  const { isSubmitting, isValid } = form.formState;

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
        Difficulty
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
        !initialData.difficulty
      )}>
        {initialData.difficulty || "No difficulty"}
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
            name="difficulty"
            render={({ field }) => (
              <FormItem>
                <FormControl className="rounded">
                  <Textarea
                    disabled={isSubmitting}
                    placeholder="e.g. 'This course is about...'"
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