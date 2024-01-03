// Actions must be use server
"use server"
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
    // Validate fields
    const validatedFields = RegisterSchema.safeParse(values);

    // If fields are not valid
    if(!validatedFields.success) {
        return { error: "Invalid fields 😞"};
    }

    // extract validated fields
    const { email, password, name } = validatedFields.data;

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // confirm email is not taken
    const exisitingUser = await db.user.findUnique({
        where: {
            email,
        }
    })
    // display text if email is taken
    if (exisitingUser) {
        return { error: "Email already taken 😞"}
    }
    // succes code
    await db.user.create({
        data: {
            name,
            email, 
            password: hashedPassword,
        },
    })
    //TODO: send verification email

    // If fields are valid
    return { success: "User created! 🎉"}
};