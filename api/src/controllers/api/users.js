import express from 'express'

export const users = express.Router()
users.get('/', function(req, res, next) {
  res.send('users')
})
