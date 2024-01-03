import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const {
  handlers: { GET, POST },

  auth, // This auth thing helps us get user info such as for display certain content for them and specific data
} = NextAuth({
  providers: [GitHub],
})