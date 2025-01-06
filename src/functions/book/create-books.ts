import { prisma } from '../../../database/script'

interface createBooksRequest {
  title: string
  author: string
  gender: string
  publicationDate: Date
  available: boolean
}

export async function createBooks({
  title,
  author,
  gender,
  publicationDate,
  available,
}: createBooksRequest) {
  const result = await prisma.book.create({
    data: {
      title,
      author,
      gender,
      publicationDate,
      available,
    },
  })

  return { result }
}
