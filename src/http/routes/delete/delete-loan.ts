import { User } from './../../../../node_modules/.prisma/client/index.d';
import type {FastifyPluginAsyncZod} from "fastify-type-provider-zod"
import { prisma } from "../../../../database/script";
import z from "zod"

export const deleteUserRoute: FastifyPluginAsyncZod = async (app, opts) => {
    app.delete('/user/:id', async (request, reply) => {
          

        const { id } = request.params ;
      
        try {
          const user = await prisma.user.delete({
            where: {
              id, 
            },
          });
      
          return reply.json(user).status(200).send({ message: 'User deleted successfully' });
        } catch (error) {
        //   if ( error.code === 'P2025') {
        //     return reply.status(404).send({ message: 'User not found' });
        //   }
          return reply.status(500).send({ message: 'Internal Server Error', error: error });
        }
      });
      
}
