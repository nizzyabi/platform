import { getChapter } from "@/actions/get-chapter";
import { auth } from "@/auth";
import { Banner } from "@/components/banner";
import { redirect } from "next/navigation";
import { VideoPlayer } from "./_components/video-player";
import { CoursePurchaseButton } from "./_components/course-purchase-button";
import { Preview } from "@/components/preview";
import { File } from "lucide-react";
import { CourseProgressButton } from "./_components/course-progress-button";

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
        userId: session.user.id ?? '',
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
            <div>
                <div className="p-4 flex flex-col md:flex-row items-center justify-between">
                    <h2 className="font-bold text-2xl mb-2">{chapter.title}</h2>
                
                {purchase ? (
                    <CourseProgressButton 
                        chapterId={params.chapterId}
                        courseId={params.courseId}
                        nextChapterId={nextChapter?.id}
                        isCompleted={!!userProgress?.isCompleted}
                    />
                ) : (
                    <CoursePurchaseButton
                        courseId={params.courseId}
                        price={course.price!}
                    />
                )}
                </div>
                <div>
                    <Preview value={chapter.description!} />
                </div>
                {!!attachments.length && (
                    <>
                        <div className="p-4">
                            {attachments.map((attachment) => (
                            <a 
                                href={attachment.url}
                                key={attachment.id}
                                target="_blank"
                                className="flex items-center p-3 w-full bg-slate-200 border text-[#191919] rounded hover:underline"
                            >
                                <File />
                                {attachment.name}
                            </a>

                             ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default ChapterIdPage