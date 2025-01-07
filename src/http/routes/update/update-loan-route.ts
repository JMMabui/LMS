import z from 'zod'
import { updateLoan } from '../../../functions/loan/update-status'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const updateLoanRoute: FastifyPluginAsyncZod = async (app, opts) => {
 
    const updateLoanSchema = z.object({
      status: z.enum(['PENDING', 'RETURNED', 'LATE']),
    })
  
  app.put('/update-loan/:id', async (request, response) => {  
    const { id } = request.params
    try {
      const body = updateLoanSchema.parse(request.body)
      await updateLoan({
        id: String(id),
        status: body.status,
      })
      return response.status(200).send({ message: 'Loan updated successfully' })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return response.status(400).send({
          message: 'Validation error',
          issues: error.issues,
        });
      }
      return response.status(500).send({ message: 'Internal server error', error });
    }
  })
}
