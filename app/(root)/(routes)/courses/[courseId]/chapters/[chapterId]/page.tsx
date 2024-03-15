import { auth } from "@/auth"
import { redirect } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { db } from "@/lib/db";
import { ChapterTitleForm } from "./_components/chapter-title-form";
import { ChapterDescriptionForm } from "./_components/chapter-description-form";
import { ChapterAccessForm } from "./_components/chapter-access-form";
import ChapterActions from "./_components/chapter-actions";
import { VimeoVideoForm } from "./_components/vimeo-video";
import { ChapterCodeForm } from "./_components/chapter-code";

const ChapterIdPage = async ({
  params
}: {
  params: { courseId: string; chapterId: string }
}) => {
  const session =  await auth();

  if (!session) {
    return redirect("/");
  }

  const chapter = await db.chapter.findUnique({
    where: {
      id: params.chapterId,
      courseId: params.courseId
    },
  });

  if (!chapter) {
    return redirect("/")
  }

  const requiredFields = [
    chapter.title,
    chapter.description,
    chapter.vimeoVideo,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;
  // check if every item in the required fields is true
  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      
      <div className="lg:px-[250px] md:px-[50px] sm:px-6 pt-40">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <div className="flex justify-between">
            <Link
              href={`/courses/${params.courseId}`}
              className="flex items-center text-sm hover:opacity-75 transition "
            >
              <div className="flex text-lg">
              <ArrowLeft className="mr-2 pt-1" />
              <p className="font-semibold">Back</p>
              </div>
            </Link>
            <ChapterActions 
                disabled={!isComplete}
                courseId={params.courseId}
                chapterId={params.chapterId}
                isPublished={chapter.isPublished}
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-5xl font-bold">
                  Chapter Creation
                </h1>
                <span className="text-md text-slate-300 text-center">
                  Complete all fields {completionText}
                  
                </span>
                {!chapter.isPublished && (
                  <div className="flex space-x-2 text-red-500 items-center justify-center pt-8">
                    <AlertTriangle />
                    <p>This chapter is not published</p>
                  </div>
                )}
                
              </div>
              
              
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                
                <h2 className="text-3xl font-bold">
                  Customize chapter
                </h2>
              </div>
              <ChapterTitleForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
              <ChapterDescriptionForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2 pt-3">
                
                <h2 className="text-3xl font-bold">
                  Access Settings
                </h2>
              </div>
              <ChapterAccessForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              
              <h2 className="text-3xl font-bold">
                Add a video
              </h2>
            </div>
            <VimeoVideoForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <h2>Chapter Code</h2>
            </div>
            <ChapterCodeForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />
          </div>
        </div>
      </div>
    </>
   );
}
 
export default ChapterIdPage;