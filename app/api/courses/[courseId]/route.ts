import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import Mux from "@mux/mux-node";

const { Video } = new Mux(
    process.env.MUX_TOKEN_ID!,
    process.env.MUX_TOKEN_SECRET!
);

export async function DELETE (
    req: Request,
    { params }: { params: { courseId: string } }
) {
    try {
        const session = await auth();

        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const course = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId: session.user.id
            },
            include: {
                chapters: {
                    include: {
                        muxData: true,
                    }
                }
            }
        });

        if (!course) {
            return new NextResponse("Not Found", { status: 404 });
        }

        for (const chapter of course.chapters) {
            if (chapter.muxData?.assetId) {
                await Video.Assets.del(chapter.muxData.assetId);
            }
        };

        const deletedCourse = await db.course.delete({
            where: {
                id: params.courseId
            }
        });

        return NextResponse.json(deletedCourse)
    } catch (error) {
        console.log("[COURSE_ID DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

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
        console.log("[COURSE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}