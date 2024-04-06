import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import {  } from "@/data/user";

export async function POST (
    req: Request,   
) {
    try {
        const session = await auth()
        const {title, content} = await req.json();

        if(!session) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const post = await db.post.create({
            data: {
                title,
                content,
                userId: session.user.id ?? '',
            }
        });

        return NextResponse.json(post);
    } catch (error) {
        console.log("[POST], error");
        return new NextResponse("Internal Error", { status: 500 })
    }
}