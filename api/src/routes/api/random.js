import express from 'express'

export const random = express.Router()
random.get('/', function(req, res, next) {
  res.send('random')
})
