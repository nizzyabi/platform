import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { UserRole } from "@prisma/client"
import { getUserById } from "@/data/user"
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

      // if they have a role and user has been created, return it
      if(token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      // you can add whatever you want. it is very powerful. if lost go to callbacks lesson at the 2:50:00 mark in the course

      return session
    },

    // jwt
    async jwt ({ token }) {
      // fetch user
      if(!token.sub) return token;

      const exisitingUser = await getUserById(token.sub);

      if(!exisitingUser) return token;

      token.role = exisitingUser.role;
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})