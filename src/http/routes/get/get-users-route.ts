import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getUser } from "../../../functions/user/get-user";

export const getUserRoute: FastifyPluginAsyncZod = async (app, opts) => {
    app.get('/users', async (request, reply) =>{
    
        const { users } = await getUser()
        return users
    })
}