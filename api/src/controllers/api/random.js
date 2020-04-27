import express from 'express'
import { data } from '../helpers'

const min = 16
const max = 160

export const random = express.Router()
random.get('/', function(req, res, next) {
  const value = min + Math.floor(Math.random() * (max - min))
  res.send(data({ min, max, value }))
})
