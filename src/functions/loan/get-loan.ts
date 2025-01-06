import { prisma } from "../../../database/script";

export async function getLoan() {
    const result = await prisma.loan.findMany()
    return { loan: result }
}