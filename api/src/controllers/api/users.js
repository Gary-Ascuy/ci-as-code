import express from 'express'

import { data } from '../helpers'
import { logger } from '../../logger'

const db = {
  users: {
    '0': { id: '0', name: 'Gary Ascuy', role: 'Developer' }
  }
}

function getId() {
  const keys = Object.keys(db.users).map(key => +key)
  const last = keys.sort().reverse()[0] || 0
  return `${last + 1}`
}

export const users = express.Router()
users.get('/', function(req, res, next) {
  logger.info(`GET /api/users - User`)
  res.send(data(Object.values(db.users)))
})

users.post('/', function({ body: { id, name, role } }, res, next) {
  logger.info(`POST /api/users - User`)
  const user = { id, name, role }
  user.id = id ? id : getId()
  db.users[user.id] = user
  res.send(data(user))
})

users.delete('/:id', function({ params: { id } }, res, next) {
  logger.info(`DELETE /api/users - User`)
  const user = db.users[id] || {}
  delete db.users[id]
  res.send(data(user))
})
