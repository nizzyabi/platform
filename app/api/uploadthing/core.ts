import { auth } from "@/auth"
import { createUploadthing, type FileRouter } from "uploadthing/next";

 
const f = createUploadthing();
 
const handleAuth = () => {
  const session = auth();

  if (!session ) throw new Error("Unauthorized");
  return { session };
}

export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;