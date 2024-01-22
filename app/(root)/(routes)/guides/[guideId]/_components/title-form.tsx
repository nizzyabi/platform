"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
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

//interface 
interface TitleFormProps {
  initialData: {
    title: string;
  };
  guideId: string;
};

//form schema
const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

export const TitleForm = ({
  initialData,
  guideId
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
      await axios.patch(`/api/guides/${guideId}`, values);
      toast.success("Guide updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="mt-6 mb-6 rounded-md text-center">
      <h1 className="text-2xl font-bold">Course title</h1>
      <div className="font-bold">
        <Button onClick={toggleEdit} variant="ghost" className=""mb-3>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-1" />
              <h1 className="text-lg">Edit Title</h1>
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className="text-lg">
          {initialData.title}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center justify-center"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="w-20 rounded-lg">
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
            <div className="flex items-center gap-x-2">
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  )
}