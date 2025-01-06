import { prisma } from '../../../database/script'

interface createLoansRequest {
  userId: string
  bookId: string
}

export async function createLoans({ userId, bookId }: createLoansRequest) {
  const result = await prisma.loan.create({
    data: {
      userId,
      bookId,
    },
  })

  return { result }
}
