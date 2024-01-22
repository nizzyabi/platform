import { auth } from "@/auth";
import { IconBadge } from "@/components/Icon-Badge";
import { db } from "@/lib/db";
import { LayoutDashboard, ListChecks } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { PriceForm } from "./_components/price-form";
import { Actions } from "./_components/actions";
const GuidesIdPage = async ({
  params
}: {
  params: { guideId: string }
}) => {
  // get user ID
  const session = auth()

  // check if user is logged in
  if (!session) {
    return redirect('/')
  }

  // get guide
  const guide = await db.guide.findUnique({
    where: {
      id: params.guideId
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
    guide.categoryId
  ];

  // categories
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    }
  })
  const totalFields = requiredFields.length;
  // total that dont equal false
  const completedFields = requiredFields.filter(Boolean).length

  const completionText = `(${completedFields}/${totalFields})`

  const isComplete = requiredFields.every(Boolean);
  return (
    <div className="p-6">
      {/* Title */}
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Guide Setup
          </h1>
          {/* Amount Complete */}
          <span className="text-sm text-slate-300">
            {completionText} Complete
          </span>
        </div>
        
      </div>
      <div className="mt-16">
        <div className="text-center">
            {/* Customize Guide */}
            <h2 className="text-3xl font-bold">
              Customize Guide
            </h2>

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


          
            {/* Chapters */}
            <div className="text-center">
              <h2 className="text-2xl font-bold">
                Guide chapters
              </h2>
            </div> 
          
          
          {/* Price */}
          
          <PriceForm initialData={guide} guideId={guide.id}/>

          
        </div>
      </div>
    </div>
  );
}
export default GuidesIdPage;