"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Guide } from "@prisma/client";

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
  initialData: Guide;
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
    <div className="mt-6 border-2 shadow-md shadow-slate-100 bg-[#2c2c2c] bg-opacity-95 rounded p-4">
      <div className="font-extrabold flex items-center justify-between text-xl">
        Course price
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>cancel</>
          ) : (
            <>
              <Pencil className="text-slate-200" />
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className={cn(
          "text-lg mt-2",
          !initialData.price && "text-slate-500 italic"
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
                  <FormControl className="rounded bg-slate-100 text-[#2c2c2c]">
                    <Input
                      type="number"
                      step="0.01"
                      disabled={isSubmitting}
                      placeholder="Set a price for your course"
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
                save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  )
}