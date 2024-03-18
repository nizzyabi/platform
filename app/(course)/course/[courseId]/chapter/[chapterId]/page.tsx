import { getChapter } from "@/actions/get-chapter";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { CoursePurchaseButton } from "./_components/course-purchase-button";
import { Lock } from "lucide-react";
import { CourseProgressButton } from "./_components/course-progress-button";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import Link from "next/link";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ChapterIdPage = async ({
    params
}: {
    params: { courseId: string; chapterId: string; }
}) => {
    // get user
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
        githubLink,
        courseLanguage,
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

    const links = [
        {
            href: `${course.githubLink}`,
            label: 'Github',
            icon: <FaGithub className="text-[#020817]"/>
        },
        {
            href: 'https://discord.gg/nizar',
            label: 'Discord',
            icon: <FaDiscord className='text-[#6466F1]'/>
        },
        {
            href: `${course.notionLink}`,
            label: 'Notion',
            icon: <RiNotionFill className="text-black"/>
        }
    ]
    

  return (
    <div className="px-6 w-full">
        <div>
            <iframe
             src={`${chapter.vimeoVideo}`} 
             allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
             title="Video"
             className="w-full aspect-video"
             >
            </iframe>
        </div>
        <div className="mt-3 flex items-center justify-between pb-8 border-b border-b-slate-100/20">
                    <h2 className="font-bold text-2xl mb-2">{chapter.title}</h2>
                
                    <CourseProgressButton 
                        chapterId={params.chapterId}
                        courseId={params.courseId}
                        nextChapterId={nextChapter?.id}
                        isCompleted={!!userProgress?.isCompleted}
                    />
                    
        </div>
        {chapter.code && chapter.code.trim().length > 0 && (
                    <div>
                    <h1 className="font-semibold text-xl pt-2 mb-4">Code</h1>
                    <SyntaxHighlighter className='border border-slate-100/20 rounded-[5px]' language={`${course.courseLanguage}`} style={atomOneDark}>
                        {`${chapter.code}`}
                    </SyntaxHighlighter>
                    
                    </div>
                )}
                <div className="flex items-center justify-center space-x-8 pt-8">
                    
                    {links.map((link, index) => (
                        <Link href={link.href} key={link.href} className="bg-slate-100 w-[120px] py-3 rounded-[5px] hover:opacity-75 duration-300 border border-slate-100/20">
                            <div className="flex item-center justify-center">
                                <p className="text-center text-6xl">{link.icon}</p>
                            </div>
                            <p className="text-center text-[#2e2e2e] font-semibold mt-2">{link.label}</p>
                        </Link>
                    ))}     
                </div>


    {/*<div className="pt-8 mb-20 ">
        {isLocked ? (
            <div className=" xs:mt-3 sm:mt-3 bg-[#131212] relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-y-2">
                    <Lock className="h-8 w-8" />
                    <CoursePurchaseButton
                        courseId={params.courseId}
                        price={course.price!}
                    />
                </div>

            </div>
            
        ) : (
        // This is the video player which will be shown when the video is not locked
        <div className=" xs:mt-3 sm:mt-3 responsive-iframe-container">
            <Suspense fallback={<Skeleton className="bg-white"/>}>
                <iframe 
                    src={`${chapter.vimeoVideo}`} 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                    title="Video"
                >
                </iframe>
          </Suspense>
        
        </div>
        

      )}
      
        <div>
            <div>
                <div className="mt-8 flex items-center justify-between pb-8 border-b border-b-slate-100/20">
                    <h2 className="font-bold text-2xl mb-2">{chapter.title}</h2>
                
                    <CourseProgressButton 
                        chapterId={params.chapterId}
                        courseId={params.courseId}
                        nextChapterId={nextChapter?.id}
                        isCompleted={!!userProgress?.isCompleted}
                    />
                </div>
                {chapter.code && chapter.code.trim().length > 0 && (
                    <div>
                    <h1 className="font-semibold text-xl pt-2 mb-4">Code</h1>
                    <SyntaxHighlighter className='border border-slate-100/20 rounded-[5px]' language={`${course.courseLanguage}`} style={atomOneDark}>
                        {`${chapter.code}`}
                    </SyntaxHighlighter>
                    
                    </div>
                )}
                <div className="flex items-center justify-center space-x-8 pt-8">
                    
                    {links.map((link, index) => (
                        <Link href={link.href} key={link.href} className="bg-slate-100 w-[120px] py-3 rounded-[5px] hover:opacity-75 duration-300 border border-slate-100/20">
                            <div className="flex item-center justify-center">
                                <p className="text-center text-6xl">{link.icon}</p>
                            </div>
                            <p className="text-center text-[#2e2e2e] font-semibold mt-2">{link.label}</p>
                        </Link>
                    ))}     
                </div>
            </div>
        </div>  
    </div>*/}
    </div>
  )
}

export default ChapterIdPage