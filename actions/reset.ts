'use server'
import * as z from 'zod';
import { getUserByEmail } from "@/data/user"
import { ResetSchema } from "@/schemas"

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    // validate fields
    const validatedFields = ResetSchema.safeParse(values);
    // check if fields are valid
    if(!validatedFields.success) {
        return { error: "Invalid email!" }
    }
    // extract email
    const { email } = validatedFields.data

    // check exisiting user
    const existingUser = await getUserByEmail(email)
    // if user does not exist
    if(!existingUser) {
        return { error: "Email does not exist!" }
    }
    //TODO: send reset email
    
    // success message
    return { success: "Reset email sent 📫"}
} 