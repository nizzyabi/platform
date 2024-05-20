import { getChapter } from "@/actions/get-chapter";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { CoursePurchaseButton } from "./_components/course-purchase-button";
import { CourseProgressButton } from "./_components/course-progress-button";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Link from "next/link";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyCodeButton } from "./_components/copy-code-button";
const ChapterIdPage = async ({
    params
}: {
    params: { courseId: string; chapterId: string; }
}) => {
    const session = await auth();
   
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
        userId: session?.user.id ?? '',
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
    ]

   
    
  return (
    <div className="w-full px-5 lg:pr-12 overflow-hidden mb-5">
        {isLocked ? (
            <div className="bg-zinc-900 relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-y-2">
                    
                    <CoursePurchaseButton
                        courseId={params.courseId}
                        price={course.price!}
                    />
                </div>
            </div>
        ) : (
        // This is the video player which will be shown when the video is not locked
        <div>
            <iframe
             src={`${chapter.vimeoVideo}`} 
             allow="autoplay; fullscreen; picture-in-picture; clipboard-write " 
             title="Video"
             className="w-full aspect-video rounded-[5px]"
             ></iframe>
        </div>
        )}
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
    
                <div className="bg-[#18181B] shadow shadow-[#191919] border-slate-100/30 rounded-[5px] rounded-t-[8px] mt-5">
                    <div className="border-b rounded-t-[5px] border-slate-200/10 px-2.5 py-2">
                    <CopyCodeButton code={chapter.code}/>
                    </div>
                    <SyntaxHighlighter  language={`${course.courseLanguage}`} style={atomOneDark} wrapLongLines customStyle={{
                        backgroundColor: '#18181B',
                        fontSize: '15px',
                        padding: '15px',
                        paddingTop: '5px',
                        paddingBottom: '20px',
                        colorRendering: 'optimizeQuality',
                    }}>
                        {`${chapter.code}`}
                    </SyntaxHighlighter>
                </div>
            </div>
        )}
        <div className="flex items-center justify-end space-x-5 pt-8">
            {links.map((link) => (
                <Link href={link.href} key={link.href} className="bg-slate-100 px-2 py-2 rounded-[5px] hover:opacity-80 transition duration-300 border border-slate-100/20">
                    <div className="flex item-center justify-center">
                        <p className="text-center text-5xl">{link.icon}</p>
                    </div>
                    
                </Link>
            ))}     
        </div>
    </div>
  )
}

export default ChapterIdPage
