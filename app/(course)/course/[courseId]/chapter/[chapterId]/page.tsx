import { getChapter } from "@/actions/get-chapter";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { CoursePurchaseButton } from "./_components/course-purchase-button";
import { Preview } from "@/components/preview";
import { Lock } from "lucide-react";
import { CourseProgressButton } from "./_components/course-progress-button";
import { IconBrandNotion, IconBrandGithub, IconBrandDiscord } from "@tabler/icons-react";

import Link from "next/link";
import Notes from "@/components/notes";
import Image from "next/image";

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
        attachments,
        nextChapter,
        userProgress,
        purchase,
        notionLink,
        githubLink
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
    <div className="pt-8">
        {isLocked ? (
            <div className=" xs:mt-3 sm:mt-3 bg-[#131212] relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-y-2">
                    <Lock className="h-8 w-8" />
                    <p className="text-lg">
                        Purchase course to unlock
                    </p>
                </div>

            </div>
        ) : (
        // This is the video player which will be shown when the video is not locked
        <div className="responsive-iframe-container xs:mt-3 sm:mt-3">
          <iframe 
            src={`${chapter.vimeoVideo}`} 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
            title="Video"
          >
          </iframe>
        </div>
      )}
        <div>
            <div>
                <div className="mt-8 flex items-center justify-between pb-8 border-b border-b-slate-100/20">
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
                    <h1 className="font-semibold text-xl pt-2">Notes</h1>
                    <Notes />
                    
                </div>
                <div className="flex items-center justify-center space-x-8 pt-8">
                    <Link href={`${course.githubLink}`} className="bg-zinc-800 w-40 py-3 rounded-xl hover:opacity-75 duration-300 border border-slate-100/20">
                    <div className="flex item-center justify-center">
                        <IconBrandGithub height={60} width={60} strokeWidth={1}/>
                        </div>
                        <p className="text-center mt-2">Github</p>
                    </Link>

                    <Link href='https://discord.gg/nizar' className="bg-zinc-800 w-40 py-3 rounded-xl hover:opacity-75 duration-300 border border-slate-100/20">
                    <div className="flex item-center justify-center">
                        <IconBrandDiscord height={60} width={60} strokeWidth={1}/>
                        </div>
                        <p className="text-center mt-2">Discord</p>
                    </Link>

                    <Link href={`${course.notionLink}`} className="bg-zinc-800 w-40 py-3 rounded-xl hover:opacity-75 duration-300 border border-slate-100/20">
                    <div className="flex item-center justify-center">
                        <IconBrandNotion height={60} width={60} strokeWidth={1}/>
                        </div>
                        <p className="text-center mt-2">Notion</p>
                    </Link>
                </div>
            </div>
        </div>  
        
    </div>
  )
}

export default ChapterIdPage