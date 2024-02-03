import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { PriceForm } from "./_components/price-form";
import { CategoryForm } from "./_components/category-form";
import { Separator } from "@/components/ui/separator";
import { AttachmentForm } from "./_components/attachment-form";
import { ChaptersForm } from "./_components/chapters-form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
const CoursesIdPage = async ({
  params
}: {
  params: { courseId: string }
}) => {
  // get user ID
  const session = await auth()

  // check if user is logged in
  if (!session) {
    return redirect('/')
  }

  // get guide
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId: session.user.id
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
    course.price,
    course.categoryId,
    course.chapters.some(chapter => chapter.isPublished)
  ];

  // categories
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    }
  })
  // Get Total Fields
  const totalFields = requiredFields.length;
  // total that dont equal false
  const completedFields = requiredFields.filter(Boolean).length
  // completion text
  const completionText = `(${completedFields}/${totalFields})`
  // check if all fields are complete
  const isComplete = requiredFields.every(Boolean);

  
  return (
    <div className="lg:px-96 md:px-40 sm:px-6 pt-40">
      {/* Title */}
      <div className="flex items-center justify-center">
        <div className="w-full">
        <Link
          href={`/courses`}
          className="flex items-center text-sm hover:opacity-75 transition mb-6"
        >
          <div className="flex text-lg">
            <ArrowLeft className="mr-2 pt-1" />
            <p className="font-semibold">Back</p>
          </div>
        </Link>
        <div className="flex items-center justify-center w-full">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-5xl font-bold">
            Course Setup
          </h1>
          {/* Amount Complete */}
          <span className="text-md text-slate-300 text-center">
            {completionText} Complete
          </span>
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
            
            {/* Guide TItle */}
            <TitleForm
              initialData={course}
              courseId={course.id}
            />

            {/* Description Form */}
            <DescriptionForm
              initialData={course}
              courseId={course.id}
            />

            {/*Image Form*/}
            <ImageForm
              initialData={course}
              courseId={course.id}
            />

            {/* Categories */}
            <CategoryForm
              initialData={course}
              courseId={course.id}
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-x-2">
              {/* Chapters */}
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
              <div className="flex items-center gap-x-2"> 
                <h2 className="text-3xl font-bold">
                  Resources & Attachments
                </h2>
              </div>
              {/* Attachments */}
              <AttachmentForm
                initialData={course}
                courseId={course.id}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoursesIdPage;