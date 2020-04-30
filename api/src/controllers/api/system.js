import os from 'os'
import express from 'express'
import _ from 'lodash'

import { data } from '../helpers'
import { logger } from '../../logger'

const osInfo = {
  version: os.version(),
  hostname: os.hostname(),
  homedir: os.homedir(),
  cpus: os.cpus().map((cpu) => _.omit(cpu, 'times')),
}

export const system = express.Router()
system.get('/', (req, res) => {
  logger.info('GET /api/system - OS/Runtime info')
  const node = process.versions
  res.send(data({ node, os: osInfo }))
})
