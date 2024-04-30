import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes"

const { auth } = NextAuth(authConfig)

export default auth((req):any => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // api routes
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  // non auth routes
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  //private routes
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // Allow every api route
  if(isApiAuthRoute) {
    return null;
  }
  // check if user is logged in, then reroute or display page based on status
  if(isAuthRoute) {
    if(isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }
  // if user is not logged in and route is not public, redirect to home page
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL('/auth/register', nextUrl));
}
  return null;
})


// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
