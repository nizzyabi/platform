import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    { params }:  { params: { guideId: string, attachmentId: string } }
) {
    try {
        // check for auth
        const session = await auth();

        if(!session) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        // get current course owner
        const courseOwner = await db.guide.findUnique({
            where: {
                id: params.guideId,
                userId: session.user.id
            }
        })

        if(!courseOwner) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        // delete attachment
        const attachment = await db.attachment.delete({
            where: {
                guideId: params.guideId,
                id: params.attachmentId
            }
        })
        return NextResponse.json(attachment)
    } catch (error) {
        console.log("ATTACHMENT_ID", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}