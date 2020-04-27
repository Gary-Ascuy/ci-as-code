import express from 'express'

import { get } from './settings'
import { logger } from './logger'

export async function main() {
  const app = express()

  app.get('/', (req, res) => {
    res.send('An alligator approaches!');
  })

  const { host, port } = get('server')
  app.listen(+port, host, () => {
    logger.info(`API listening at ${host}:${port}`)
  })
}

main()
