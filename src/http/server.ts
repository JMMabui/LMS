import fastify from 'fastify'
import { getUserRoute } from './routes/get/get-users-route'
import { createUserRoute } from './routes/create/create-users-route'
import { createBooksRoute } from './routes/create/create-books-route'
import { createLoanRoute } from './routes/create/create-loan-route'
import { getBooksRoute } from './routes/get/get-books-route'
import { getLoansRoute } from './routes/get/get-loans-route'
import { deleteLoanRoute } from './routes/delete/delete-loan'

const app = fastify()

app.register(createUserRoute)
app.register(createBooksRoute)
app.register(createLoanRoute)

app.register(getUserRoute)
app.register(getBooksRoute)
app.register(getLoansRoute)

app.register(deleteLoanRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running')
  })
