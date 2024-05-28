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

interface LearningOutcomeFormProps {
  initialData: Course;
  courseId: string;
};

const formSchema = z.object({
  learningOutcome: z.string().min(1),
});

export const LearningOutcomeForm = ({
  initialData,
  courseId
}: LearningOutcomeFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current)

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        learningOutcome: initialData?.learningOutcome || ""
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
    <div className="mt-6 border border-primary/20 shadow-md bg-secondary bg-opacity-95 rounded-[5px] p-4">
      <div className="font-semibold flex items-center justify-between text-xl">
        Learning Outcome
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
        <div className={cn(
          "text-primary/70 mt-2 text-sm",
          !initialData.learningOutcome && "text-primary/70 italic text-sm"
        )}>
          {initialData.learningOutcome || "No learning outcome"}
        </div>
      )}
      {isEditing && (
        <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 mt-4"
        >
          <FormField
            control={form.control}
            name="learningOutcome"
            render={({ field }) => (
              <FormItem>
                <FormControl className="rounded">
                  <Textarea
                    disabled={isSubmitting}
                    placeholder="e.g. 'This course is about...'"
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