// Actions must be use server
"use server"
import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    // Validate fields
    const validatedFields = RegisterSchema.safeParse(values);

    // If fields are not valid
    if(!validatedFields.success) {
        return { error: "Invalid fields 😞"};
    }
    // If fields are valid
    return { success: "Email sent 📫"}
};