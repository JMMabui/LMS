import type {FastifyPluginAsyncZod} from "fastify-type-provider-zod"
import { prisma } from "../../../../database/script";
import z from "zod"

export const deleteLoanRoute: FastifyPluginAsyncZod = async (app, opts) => {
    app.delete('/loan/:id', async (request, reply) => {
        
        const schema = z.object({
            id: z.string()
        })
        
        const loanId = schema.parse(request.params) ;
      
        try {
          await prisma.loan.delete({
            where: { id: String(loanId) },
          });
      
          return reply.status(200).send({ message: 'User deleted successfully' });
        } catch (error) {
        //   if ( error.code === 'P2025') {
        //     return reply.status(404).send({ message: 'User not found' });
        //   }
          return reply.status(500).send({ message: 'Internal Server Error', error: error });
        }
      });
      
}
