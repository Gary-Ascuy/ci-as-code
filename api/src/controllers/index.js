import express from 'express'

import { api } from './api'
import { home } from './home'

export const controllers = express.Router()
controllers.get('/', home)
controllers.use('/api', api)
