import express from 'express'

export const system = express.Router()
system.get('/', function(req, res, next) {
  res.send('system')
})
