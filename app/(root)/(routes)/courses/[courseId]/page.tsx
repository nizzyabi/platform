import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { PriceForm } from "./_components/price-form";
import { ChaptersForm } from "./_components/chapters-form";
import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Actions } from "./_components/actions";
import { LearningOutcomeForm } from "./_components/learning-outcome";
import { LanguageImageForm } from "./_components/language-image";

import { DescriptionForm2 } from "./_components/description-form-2";
import { IncludedForm } from "./_components/included-form";
import { DifficultyForm } from "./_components/difficulty";
import { NotionForm } from "./_components/notion-link";
import { GithubForm } from "./_components/github-link";
import { CodeLanguageForm } from "./_components/code-language-form";
import { IntroVideoForm } from "./_components/intro-video";
import { getCourses } from "@/actions/get-courses";
import { getChapter } from "@/actions/get-chapter";

const CoursesIdPage = async ({
  params
}: {
  params: { courseId: string }
}) => {
  // get user ID
  const session = await auth()


  // get course
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId: session?.user.id ?? ''
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc"
        }
      },
      attachments: {
        orderBy: {
          createdAt: "desc"
        }
      }
    }
  })

  // if no guide, redirect to home
  if (!course) {
    return redirect('/')
  }

  // array of required fields
  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.learningOutcome,
    course.included,
    course.difficulty,
    course.description2,
    course.language,
    course.githubLink,
    course.notionLink,
    course.courseLanguage,
    course.introVideo,
    course.chapters.some(chapter => chapter.isPublished)
  ];

  // categories
 
  // Get Total Fields
  const totalFields = requiredFields.length;
  // total that dont equal false
  const completedFields = requiredFields.filter(Boolean).length
  // completion text
  const completionText = `(${completedFields}/${totalFields})`
  // check if all fields are complete
  const isComplete = requiredFields.every(Boolean);

  
  return (
    <>
      <div className="lg:px-[250px] md:px-[50px] sm:px-6 pt-40">
        {/* Title */}
        <div className="flex items-center justify-center">
          <div className="w-full">
            <div className="flex justify-between">
              <Link
                href={`/courses`}
                className="flex items-center text-sm hover:opacity-75 transition"
              >
                <div className="flex text-lg">
                  <ArrowLeft className="mr-2 pt-1" />
                  <p className="font-semibold">Back</p>
                </div>
              </Link>
                <Actions 
                  disabled={!isComplete}
                  courseId={course.id}
                  isPublished={course.isPublished}
                />
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-5xl font-bold">
                  Course Setup
                </h1>
                {/* Amount Complete */}
                <span className="text-md text-slate-300 text-center">
                  {completionText} Complete
                </span>
                {!course.isPublished && (
                  <div className="flex space-x-2 text-red-500 items-center justify-center pt-8">
                    <AlertTriangle />
                    <p>This course is not published</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="text-center">
            <div className="flex items-center gap-x-2">
              {/* Customize Guide */}
              <h2 className="text-3xl font-bold">
                Customize Course
              </h2>
            </div>
              <TitleForm
                initialData={course}
                courseId={course.id}
              />
              <DescriptionForm
                initialData={course}
                courseId={course.id}
              />
              <ImageForm
                initialData={course}
                courseId={course.id}
              />
              <LanguageImageForm
                initialData={course}
                courseId={course.id}
              />
              
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <h2 className="text-3xl font-bold">
                  Course Chapters
                </h2>
              </div>
              <ChaptersForm
                initialData={course}
                courseId={course.id}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-1">
                <h2 className="text-3xl font-bold">
                  Sell your course
                </h2>
              </div>
              {/* Price */}  
              <PriceForm 
                initialData={course}
                courseId={course.id}
              />
            </div>
            <div>
              <LearningOutcomeForm
                courseId={course.id}
                initialData={course}
                />
            </div>
            
            <div>
              <DescriptionForm2
                courseId={course.id}
                initialData={course}
              />
            </div>
            <div>
              <IncludedForm
                courseId={course.id}
                initialData={course}
              />
            </div>
            <div>
              <DifficultyForm
                courseId={course.id}
                initialData={course}
              />
            </div>
            <div>
              <IntroVideoForm
                courseId={course.id}
                initialData={course}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2"> 
                <h2 className="text-3xl font-bold">
                  Course Resources
                </h2>
              </div>
              <CodeLanguageForm
                initialData={course}
                courseId={course.id}
              />

              <div>
                <GithubForm
                  courseId={course.id}
                  initialData={course}
                />
              </div>

              <div>
                <NotionForm
                  initialData={course}
                  courseId={course.id}
                />
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default CoursesIdPage;