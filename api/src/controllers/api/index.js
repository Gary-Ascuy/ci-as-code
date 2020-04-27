import express from 'express'

import { system } from './system'
import { users } from './users'
import { random } from './random'

export const api = express.Router()

api.use('/system', system)
api.use('/users', users)
api.use('/random', random)
