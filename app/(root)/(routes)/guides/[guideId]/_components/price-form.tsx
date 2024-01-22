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
  guideId: string;
};

const formSchema = z.object({
  price: z.coerce.number(),
});

export const PriceForm = ({
  initialData,
  guideId
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
      await axios.patch(`/api/guides/${guideId}`, values);
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="rounded-md p-4">
      <h1 className="text-2xl font-bold">Guide price</h1>
      <div className="font-bold flex items-center justify-center">
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              
              <Pencil className="h-4 w-4 mr-1" />
              <h1 className="text-lg">Edit Price</h1>
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className={cn(
          "text-lg text-center",
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
            className="flex items-center justify-center"
          >
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="rounded opacity-70">
                    <Input
                      
                      type="number"
                      disabled={isSubmitting}
                      placeholder="$$$"
                      className="w-20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center">
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