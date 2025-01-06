import { prisma } from "../../../database/script";

export async function getUser() {
    const result = await prisma.user.findMany()
    return { users: result }
}