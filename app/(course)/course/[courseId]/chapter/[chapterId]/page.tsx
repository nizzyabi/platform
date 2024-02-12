import { getChapter } from "@/actions/get-chapter";
import { auth } from "@/auth";
import { Banner } from "@/components/banner";
import { redirect } from "next/navigation";
import { VideoPlayer } from "./_components/video-player";

const ChapterIdPage = async ({
    params
}: {
    params: { courseId: string; chapterId: string; }
}) => {
    const session = await auth();

    if (!session) {
        return redirect("/");
    }

    const {
        chapter,
        course,
        muxData,
        attachments,
        nextChapter,
        userProgress,
        purchase,
    } = await getChapter({
        userId: session.user.id,
        courseId: params.courseId,
        chapterId: params.chapterId
    })

    if(!chapter || !course) {
        return redirect("/");
    }

    const isLocked = !chapter.isFree && !purchase;
    const completeOnEnd = !!purchase && !userProgress?.isCompleted;
    

  return (
    <div>
        {userProgress?.isCompleted && (
            <Banner
                label="Chapter Completed"
                variant="success"
            />
        )}
        
        <div className="flex flex-col">
            <div className="py-10">
                <VideoPlayer
                    chapterId={params.chapterId}
                    title={chapter.title}
                    courseId={params.courseId}
                    nextChapterId={nextChapter?.id}
                    isLocked={isLocked}
                    completeOnEnd={completeOnEnd}
                    playbackId={muxData?.playbackId!}
                />
            </div>
        </div>
    </div>
  )
}

export default ChapterIdPage