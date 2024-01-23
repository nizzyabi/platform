import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Post Chapters Data
export async function POST(
    req: Request,
    { params }: { params: { guideId: string } }
) {
    try {
        const session = await auth();
        const { title } = await req.json();

        if(!session) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const courseOwner = await db.guide.findUnique({
            where: {
                id: params.guideId,
                userId: session.user.id
            }
        });

        if (!courseOwner) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const lastChapter = await db.chapter.findFirst({
            where: {
                guideId: params.guideId,
            },
            orderBy: {
                position: "desc"
            },
        });

        const newPosition = lastChapter ? lastChapter.position + 1 : 1;

        const chapter = await db.chapter.create({
            data: {
                title,
                guideId: params.guideId,
                position: newPosition,
            }
        });

        return NextResponse.json(chapter);
    } catch (error) {
        console.log("[CHAPTERS]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}