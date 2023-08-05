import fastify from 'fastify'
import { env } from './env'
import { transactionsRouter } from './routes/transactions'

const app = fastify()

app.register(transactionsRouter)

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log('Server running!'))
