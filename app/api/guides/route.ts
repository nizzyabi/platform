import { NextResponse } from "next/server";
import { db } from "@/lib/db";

import { getSession, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useCurrentUser } from "@/hooks/user-current-user";

export async function POST(
  req: Request,
) {
  try {
    const session = useCurrentUser()
    const userId = session?.id
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      }
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}