import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { UserRole } from "@prisma/client"
import { getUserById } from "@/data/user"
import { db } from "@/lib/db"
import authConfig from "@/auth.config"

// auth
export const{
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth ({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date()}
      })
    }
  },
  callbacks: {
   
    async signIn({ user, account}) {
      
      if(account?.provider !== "credentials") return true;

      const exisitingUser = await getUserById(user.id ?? '');
      
      if(!exisitingUser?.emailVerified) return false;

      return true;

    },









    
    async session({ session, token }) {
      if (token.sub && session.user) {
      session.user.id = token.sub;
      }
      if(token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session
    },
    async jwt ({ token }) {
      if(!token.sub) return token;

      const exisitingUser = await getUserById(token.sub);

      if(!exisitingUser) return token;

      token.role = exisitingUser.role;
      return token;
    },
  },
adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})

