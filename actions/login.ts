// Actions must be use server
"use server"
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    // Validate fields
    const validatedFields = LoginSchema.safeParse(values);

    // If fields are not valid
    if(!validatedFields.success) {
        return { error: "Invalid fields 😞"};
    }
    // If fields are valid
    const { email, password } = validatedFields.data;
    const exisitingUser = await getUserByEmail(email)

    if(!exisitingUser || !exisitingUser.email || !exisitingUser.password) {
        return { error: "Email does not exisit 😞" };
    }

    if(!exisitingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(exisitingUser.email);

        return { success: "Confirmation email sent! 📧"}
    }


    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
        
    } catch (error) {
        if(error instanceof AuthError) {
            switch(error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials 😞" };
                default:
                    return { error: "Something went wrong 😞" };
            }
        } 
        throw error;     
    }
};