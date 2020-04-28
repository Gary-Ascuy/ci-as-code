import express from 'express'

import { data } from '../helpers'
import { logger } from '../../logger'
import { allUsers, addUser, deleteUser } from '../../services/users'

export const users = express.Router()
users.get('/', (req, res) => {
  logger.info(`GET /api/users - User`)
  res.send(data(allUsers()))
})

users.post('/', ({ body: { id, name, role } }, res) => {
  logger.info(`POST /api/users - User`)
  const user = { id, name, role }
  res.send(data(addUser(user)))
})

users.delete('/:id', ({ params: { id } }, res) => {
  logger.info(`DELETE /api/users - User`)
  res.send(data(deleteUser(id)))
})
