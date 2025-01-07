import fastify from 'fastify'
import { getUserRoute } from './routes/get/get-users-route'
import { createUserRoute } from './routes/create/create-users-route'
import { createBooksRoute } from './routes/create/create-books-route'
import { createLoanRoute } from './routes/create/create-loan-route'
import { getBooksRoute } from './routes/get/get-books-route'
import { getLoansRoute } from './routes/get/get-loans-route'
import {  deleteUserRoute } from './routes/delete/delete-loan'
import { updateLoanRoute } from './routes/update/update-loan-route'
import fastifyFormbody from '@fastify/formbody';


const app = fastify()

app.register(fastifyFormbody);

app.register(createUserRoute)
app.register(createBooksRoute)
app.register(createLoanRoute)

app.register(getUserRoute)
app.register(getBooksRoute)
app.register(getLoansRoute)

app.register(updateLoanRoute)

app.register(deleteUserRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running')
  })
