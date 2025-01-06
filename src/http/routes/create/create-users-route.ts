import fastify from 'fastify'
import z from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createUser } from '../../../functions/user/create-users'

export const createUserRoute: FastifyPluginAsyncZod = async (app, opts) => {
  app.post('/create-user', async (request, response) => {
    const createUserSchema = z.object({
      name: z.string().min(3).max(50),
      email: z.string(),
      typeUser: z.string(),
    })

    try {
      const body = createUserSchema.parse(request.body)
      await createUser({
        name: body.name,
        email: body.email,
        typeUser: body.typeUser,
      })
      return response
        .status(201)
        .send({ message: 'User created successfully!' })
    } catch (e) {
      return response
        .status(400)
        .send({ message: 'Error creating user', error: e })
    }
  })
}
