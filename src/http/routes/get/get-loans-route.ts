import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getLoan } from "../../../functions/loan/get-loan";

export const getLoansRoute: FastifyPluginAsyncZod = async (app, opts) => {
    app.get('/loan', async () =>{
    
        const { loan } = await getLoan()
        return loan
    })
}