import os from 'os'
import express from 'express'

import { data } from '../helpers'

const osInfo = {
  version: os.version(),
  hostname: os.hostname(),
  homedir: os.homedir(),
  cpus: os.cpus(),
}

export const system = express.Router()
system.get('/', function(req, res, next) {
  const node = process.versions
  res.send(data({ node, os: osInfo }))
})
