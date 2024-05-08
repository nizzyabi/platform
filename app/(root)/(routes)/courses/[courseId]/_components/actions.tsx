"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/Confirm-Modal";
import { useConfettiStore } from "@/hooks/use-confetti-store";

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
};

export const Actions = ({
  disabled,
  courseId,
  isPublished
}: ActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success("Guides unpublished");
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        toast.success("Course published!");
        confetti.onOpen();

      }

      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }
  
  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/courses/${courseId}`);

      toast.success("Course deleted");
      router.refresh();
      router.push(`/admin`);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center gap-x-2 mb-2">
        <Button
            onClick={onClick}
            disabled={disabled || isLoading}
            className="rounded-[5px] py-2"
        >
            {isPublished ? 'Unpublish' : 'Publish'}
        </Button>
        <ConfirmModal onConfirm={onDelete}>
            <Button className="rounded-[5px] py-2 bg-zinc-900 text-slate-100" disabled={isLoading}>
                Delete Course
            </Button>
        </ConfirmModal>
    </div>
  )
}