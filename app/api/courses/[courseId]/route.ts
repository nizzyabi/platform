import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
export async function PATCH(
    req: Request,
    { params }: { params: { courseId: string } }
) {
    try {
        const session = await auth();
        // we got this from the patch that was updated
        const { courseId } = params;
        // extract values from the patch req
        const values = await req.json();
        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        // update guide
        const guide = await db.course.update({
            where: {
                id: courseId,
                userId: session.user.id
            },
            data: {
                ...values
            }
        });
        return NextResponse.json(guide)
    } catch (error) {
        console.log("[GUIDE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}