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
const GuidesIdPage = async ({
  params
}: {
  params: { guideId: string }
}) => {
  // get user ID
  const session = await auth()

  // check if user is logged in
  if (!session) {
    return redirect('/')
  }

  // get guide
  const guide = await db.guide.findUnique({
    where: {
      id: params.guideId,
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
  if (!guide) {
    return redirect('/')
  }

  // array of required fields
  const requiredFields = [
    guide.title,
    guide.description,
    guide.imageUrl,
    guide.price,
    guide.categoryId,
    guide.chapters.some(chapter => chapter.isPublished)
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
    <div className="p-6">
      {/* Title */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-5xl font-extrabold">
            Guide Setup
          </h1>
          {/* Amount Complete */}
          <span className="text-sm text-slate-300 text-center">
            {completionText} Complete
          </span>
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
              initialData={guide}
              guideId={guide.id}
            />

            {/* Description Form */}
            <DescriptionForm
              initialData={guide}
              guideId={guide.id}
            />

            {/*Image Form*/}
            <ImageForm
              initialData={guide}
              guideId={guide.id}
            />

            {/* Categories */}
            <CategoryForm
              initialData={guide}
              guideId={guide.id}
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
                Course chapters
              </h2>
              
            </div>
              
            <ChaptersForm
              initialData={guide}
              guideId={guide.id}
            />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <h2 className="text-2xl font-bold">
                  Sell your course
                </h2>
              </div>
              {/* Price */}  
              <PriceForm initialData={guide} guideId={guide.id}/>
            </div>
            <div>
              <div className="flex items-center gap-x-2"> 
                <h2 className="text-2xl font-bold">
                  Resources & Attachments
                </h2>
              </div>
              {/* Attachments */}
              <AttachmentForm
                initialData={guide}
                guideId={guide.id}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
export default GuidesIdPage;