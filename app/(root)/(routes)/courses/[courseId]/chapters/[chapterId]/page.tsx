import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ChapterIdPage = async ({
    params
}: {
    params: { courseId: string; chapterId: string }
}) => {
    const session = await auth();

    if (!session) {
        return redirect("/");
    }

    const chapter = await db.chapter.findUnique({
        where: {
            id: params.chapterId,
            courseId: params.courseId
        },
        include: {
            muxData: true,
        }
    });

    if(!chapter) {
        return redirect('/')
    }

    const requiredFields = [
        chapter.title,
        chapter.description,
        chapter.videoUrl,
    ];

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;

    const completionText = `${completedFields} / ${totalFields}`;
  return (
    <div className="p-6">
        <div className="flex items-center justify-between">
            <div className="w-full">
                <Link 
                    href={`/courses/${params.courseId}`}
                    className="flex items-center text-lg hover:opacity-80 transition mb-6"
                >
                    <ArrowLeft className="mr-2" /> Back
                </Link>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-y-2">
                <h1 className="text-5xl font-extrabold">Chapter Creation</h1>
                <span className="text-sm text-slate-300 text-center">
                    {completionText} Complete
                </span>
            </div>
        </div>
            
    </div>
  )
}

export default ChapterIdPage