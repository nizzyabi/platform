import { db } from "@/lib/db";

// Get Email
export const getUserByEmail = async (email:string) => {
    try {
        const user = await db.user.findUnique({ where: { email }});
        return user;
    } catch {
        return null;
    }
}

// Get Id
export const getUserById = async (id:string) => {
    try {
        const user = await db.user.findUnique({ where: { id }});
        return user;
    } catch {
        return null;
    }
}