import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
const GuidesIdPage = async ({
  params
}: {
  params: { guidesId: string }
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
      id: params.guidesId
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

  const totalFields = requiredFields.length;
  // total that dont equal false
  const completedFields = requiredFields.filter(Boolean).length

  const completionText = `(${completedFields} / ${totalFields})`
  return (
    <div className="p-6">
      <h1>Guide ID: {params.guidesId}</h1>
    </div>
  );
}
export default GuidesIdPage;