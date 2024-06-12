"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Preview } from "@/components/preview";


interface IncludedFormProps {
  initialData: Course;
  courseId: string;
};

const formSchema = z.object({
  included: z.string().min(1),
});

export const IncludedForm = ({
  initialData,
  courseId
}: IncludedFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current)

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      included: initialData?.included || ""
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
        Includes
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
          !initialData.included
        )}>
          {initialData.included || "No included text"}
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
            name="included"
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