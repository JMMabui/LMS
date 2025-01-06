import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { createLoans } from '../../../functions/loan/create-loans'

export const createLoanRoute: FastifyPluginAsyncZod = async (app, opts) => {
  app.post('/make-loan', async (request, response) => {
    const createLoansSchema = z.object({
      userId: z.string(),
      bookId: z.string(),
    })

    try {
      const body = createLoansSchema.parse(request.body)
      await createLoans({
        userId: body.userId,
        bookId: body.bookId,
      })
      return response
        .status(201)
        .send({ message: 'loans created successfully' })
    } catch (error) {
      return response
        .status(400)
        .send({ message: 'Error creating book', error: error })
    }
  })
}
