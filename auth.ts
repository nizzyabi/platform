import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { db } from "@/lib/db"
import authConfig from "@/auth.config"

export const {
  handlers: { GET, POST },

  auth, // This auth thing helps us get user info such as for display certain content for them and specific data
  signIn,
  signOut,
} = NextAuth({
  // Callbacks allow us to customuzie the uth process such as who has access to what, get ID, and block users.
  callbacks: {
    // token & session
    async session({ session, token }) {
      // if they have an id (sub) and user has been created, return it
      if (token.sub && session.user) {
      session.user.id = token.sub;
      }
      return session
    },

    // jwt
    async jwt ({ token }) {
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})