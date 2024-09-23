import bcrypt from "bcryptjs"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "@/data/user"

export default {
  // Google & Github providers
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    
    }),
    Credentials({
      async authorize(credentials) {
        // Validate the credentials given by the user
        const validatedFields = await LoginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
        
          if(!user || !user.password) return null;

          // check if passwords match
          const passwordsMatch = await bcrypt.compare(
            password, 
            user.password
          );
          // if the passwords match, return the user
          if(passwordsMatch) return user;
        }
        return null;
      }
    })
  ],
} satisfies NextAuthConfig