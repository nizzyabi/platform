import authConfig from "@/auth.config"
import NextAuth from "next-auth"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  // req.auth
  // use pathname & isLoggedIn to decide what to so with unauthenticated & authenticated users
  const isLoggedIn = !!req.auth;
  console.log("Route: ", req.nextUrl.pathname);
  console.log("isLoggedIn: ", isLoggedIn);
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}