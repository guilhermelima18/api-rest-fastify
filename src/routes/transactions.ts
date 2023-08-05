import { FastifyInstance } from 'fastify'

export async function transactionsRouter(app: FastifyInstance) {
  app.get('/', async () => {
    return 'Hello World'
  })
}
