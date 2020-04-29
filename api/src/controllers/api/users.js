import express from 'express'

import { data } from '../helpers'
import { logger } from '../../logger'
import { allUsers, addUser, deleteUser } from '../../services/users'

export const users = express.Router()
users.get('/', (req, res) => {
  logger.info(`GET /api/users - User`)
  res.send(data(allUsers()))
})

users.post('/', ({ body }, res) => {
  console.log(body, 'BODY')
  logger.info(`POST /api/users - User`)
  res.send(data(addUser(body)))
})

users.delete('/:id', ({ params: { id } }, res) => {
  logger.info(`DELETE /api/users - User`)
  res.send(data(deleteUser(id)))
})
