import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
publicRoutes: ["/", "/courses", "/guides", "/signup"]
  });
   
  export const config = {
        matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  };
   