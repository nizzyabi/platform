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


//interface 
interface TitleFormProps {
  initialData: {
    title: string;
  };
  courseId: string;
};

//form schema
const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

export const TitleForm = ({
  initialData,
  courseId
}: TitleFormProps) => {
  // state for editing
  const [isEditing, setIsEditing] = useState(false);
  // toggle
  const toggleEdit = () => setIsEditing((current) => !current);
  // router
  const router = useRouter();
  // form hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
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
  <div className="mt-6 rounded-lg p-5 shadow-xl bg-base100">
  <div className="font-semibold flex items-center justify-between text-xl">
    Title
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
    <p className="text-baseContent/70 mt-2 text-sm text-left">
    {initialData.title}
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl className="relative rounded">
                <Input
                  disabled={isSubmitting}
                  placeholder="e.g. 'Advanced web development'"
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