"use client";

import * as z from "zod";
import axios from "axios";
import { Pencil, VideoIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Chapter, MuxData } from "@prisma/client";
import MuxPlayer from "@mux/mux-player-react";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";
import AddCircleIcon from '@mui/icons-material/AddCircle';
interface ChapterVideoFormProps {
  initialData: Chapter & { muxData?: MuxData | null}
  courseId: string;
  chapterId: string;
};

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

export const ChapterVideoForm = ({
  initialData,
  courseId,
  chapterId
}: ChapterVideoFormProps) => {
  
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

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
    <div className="mt-6 border border-slate-100/20 shadow-md bg-[#1e1e1e] bg-opacity-95 rounded-xl p-4">
      <div className="font-semibold flex items-center justify-between text-xl">
        Chapter Video
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && !initialData.videoUrl && (
            <>
              <AddCircleIcon className="text-slate-200" />
            </>
          )}
          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className="text-slate-200" />
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        !initialData.videoUrl ? (
          <div className="flex items-center justify-center h-60 mt-4 bg-slate-200 rounded">
            <VideoIcon className="h-10 w-10 text-[#1e1e1e]" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2 ">
            <MuxPlayer 
              playbackId={initialData?.muxData?.playbackId || ""}
            />
          </div>
        )
      )}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="chapterVideo"
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Upload this chapter&apos;s video
          </div>
        </div>
      )}
      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-2">
            Videos can take a few minutes to process. Refresh if needed.
        </div>
      )}
    </div>
  )
}