import bcrypt from "bcryptjs"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { LoginSchema } from "./schemas"
import { getUserByEmail } from "@/data/user"

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = await LoginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          // by no password I mean that the user is using a social login (Google, Github, etc.)
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