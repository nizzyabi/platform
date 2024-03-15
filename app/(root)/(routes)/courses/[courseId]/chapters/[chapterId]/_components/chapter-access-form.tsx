"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Chapter } from "@prisma/client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Editor } from "@/components/editor";
import { Preview } from "@/components/preview";
import { Checkbox } from "@/components/ui/checkbox";

interface ChapterAccessFormProps {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
};

const formSchema = z.object({
  isFree: z.boolean().default(false),
});

export const ChapterAccessForm = ({
  initialData,
  courseId,
  chapterId
}: ChapterAccessFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isFree: !!initialData.isFree
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
      toast.success("Chapter updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="mt-6 border border-slate-100/20 shadow-md bg-[#131212] bg-opacity-95 rounded-xl p-4">
      <div className="font-semibold flex items-center justify-between text-xl">
        Chapter Access
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
          "text-sm mt-2",
          !initialData.isFree && "text-slate-200 italic"
        )}>
          {initialData.isFree ? (
            <>This chapter is free for preview.</>
          ) : (
            <>This chapter is not free.</>
          )}
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
              name="isFree"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded border border-slate-100/30 p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="text-slate-200/90 rounded "
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none ">
                    <FormDescription>
                      Check if you want to make this chapter free
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
                className=" flex"
                variant="basic"
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