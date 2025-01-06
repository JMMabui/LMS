import z from 'zod'
import { updateLoan } from '../../../functions/loan/update-status'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const updateLoanRoute: FastifyPluginAsyncZod = async (app, opts) => {
  app.put('/update-loan', async (request, response) => {
    const updateLoanSchema = z.object({
      id: z.string(),
      status: z.string(),
    })

    try {
      const body = updateLoanSchema.parse(request.body)
      await updateLoan({
        id: body.id,
        status: body.status,
      })
      return response.status(200).send({ message: 'Loan updated successfully' })
    } catch (error) {
      return response
        .status(400)
        .send({ message: 'Error updating loan', error: error })
    }
  })
}
