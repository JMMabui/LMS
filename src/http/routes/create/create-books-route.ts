import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createBooks } from '../../../functions/book/create-books'
import z from 'zod'
import dayjs from 'dayjs'

export const createBooksRoute: FastifyPluginAsyncZod = async (app, opts) => {
  app.post('/create-book', async (request, response) => {
    const createBookSchema = z.object({
      title: z.string(),
      author: z.string(),
      gender: z.string(),
      publicationDate: z
        .string()
        .refine(
          date => {
            // Verifica se a string é uma data válida usando dayjs
            return dayjs(date, 'YYYY-MM-DD', true).isValid()
          },
          { message: "Invalid date format. Use 'YYYY-MM-DD'" }
        )
        .transform(date => {
          // Transforma a string em um objeto Date
          return dayjs(date, 'YYYY-MM-DD').toDate()
        }),
      available: z.boolean().default(false),
    })
    try {
      const body = createBookSchema.parse(request.body)
      await createBooks({
        title: body.title,
        author: body.author,
        gender: body.gender,
        publicationDate: body.publicationDate,
        available: body.available,
      })
      return response
        .status(201)
        .send({ message: 'Book created successfully!' })
    } catch (e) {
      return response
        .status(400)
        .send({ message: 'Error creating book', error: e })
    }
  })
}
