import express from 'express'

import { get } from './settings'
import { logger } from './logger'
import { controllers } from './controllers'

export async function main() {
  const app = express()
  app.use(controllers)

  const { host, port } = get('server')
  app.listen(+port, host, () => {
    logger.info(`API listening at ${host}:${port}`)
  })
}

main()
