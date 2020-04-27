import os from 'os'
import express from 'express'

import { data } from '../helpers'
import { logger } from '../../logger'

const removeField = field => item => {
  delete item[field]
  return item
}

const osInfo = {
  version: os.version(),
  hostname: os.hostname(),
  homedir: os.homedir(),
  cpus: os.cpus().map(removeField('times')),
}

export const system = express.Router()
system.get('/', function(req, res, next) {
  logger.info(`GET /api/system - OS/Runtime info`)
  const node = process.versions
  res.send(data({ node, os: osInfo }))
})
