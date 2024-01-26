import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Attachment videos & images api end point
export async function POST (
    req: Request,
    { params }: { params: { courseId: string } }
) {
    try {
        // get session & URL
        const session = await auth()
        const { url } = await req.json()
        // auth check
        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        // find course owner
        const courseOwner = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId: session.user.id
            }
        })

        if (!courseOwner) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        //create attachment
        const attachment = await db.attachment.create({
            data: {
                url,
                name: url.split("/").pop(),
                courseId: params.courseId,
            }
        })
        // return attachment
        return NextResponse.json(attachment)
    } catch (error) {
        console.log("[ATTACHEMENT_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}