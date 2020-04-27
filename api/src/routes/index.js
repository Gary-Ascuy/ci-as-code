import express from 'express'

import { api } from './api'
import { home } from './home'

export const routes = express.Router()

routes.get('/', home)
routes.use('/api', api)
