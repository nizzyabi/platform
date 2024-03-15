"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
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
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/format";

interface PriceFormProps {
  initialData: Course;
  courseId: string;
};

const formSchema = z.object({
  price: z.coerce.number(),
});

export const PriceForm = ({
  initialData,
  courseId
}: PriceFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: initialData?.price || undefined,
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
    <div className="mt-6 border border-slate-100/20 shadow-md bg-[#131212] bg-opacity-95 rounded-xl p-4">
      <div className="font-semibold flex items-center justify-between text-xl">
        Price
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
          !initialData.price && "text-slate-200 italic"
        )}>
          {initialData.price
            ? formatPrice(initialData.price)
            : "No price"
          }
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
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="rounded bg-slate-100 text-[#2c2c2c] placeholder:text-black/50">
                    <Input
                      type="number"
                      step="0.00"
                      disabled={isSubmitting}
                      placeholder="Set a price for your course"
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