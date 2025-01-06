import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getBook } from "../../../functions/book/get-book";

export const getBooksRoute: FastifyPluginAsyncZod = async (app, opts) => {
    app.get('/books', async () =>{
    
        const { book } = await getBook()
        return book
    })
}