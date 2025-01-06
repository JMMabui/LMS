import { prisma } from "../../../database/script";

export async function getBook() {
    const result = await prisma.book.findMany()
    return { book: result }
}