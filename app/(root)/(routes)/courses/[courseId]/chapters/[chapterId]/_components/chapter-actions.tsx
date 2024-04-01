'use client';

import { ConfirmModal } from "@/components/modals/Confirm-Modal";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";


interface ChapterActionsProps {
    disabled: boolean;
    courseId: string;
    chapterId: string;
    isPublished: boolean;
}
const ChapterActions = ({
    disabled,
    courseId,
    chapterId,
    isPublished,

} : ChapterActionsProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const onClick= async () => {
        try {
            setIsLoading(true);

            if(isPublished) {
                await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/unpublish`);
                toast.success('Chapter unpublished');
            } else {
                await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/publish`);
                toast.success('Chapter published');
            }
            router.refresh();
        } catch (error) {
            toast.error('Something went wrong')
        } finally {
            setIsLoading(false);
        }
    }

    const onDelete = async () => {
        try {
            setIsLoading(true);
            // delete chapter
            await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`)

            toast.success('Chapter deleted');
            router.refresh();
            router.push(`/courses/${courseId}`);

        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        
        }
    }
  return (
    <div className="flex items-center gap-x-2">
        <Button
            onClick={onClick}
            disabled={disabled || isLoading}
            className="rounded-[5px] py-2"
            
        >
            {isPublished ? 'Unpublish' : 'Publish'}
        </Button>
        <ConfirmModal onConfirm={onDelete}>
            <Button className="rounded-[5px] py-2 bg-zinc-900 text-slate-100" disabled={isLoading}>
                Delete Chapter
            </Button>
        </ConfirmModal>
    </div>
  )
}

export default ChapterActions