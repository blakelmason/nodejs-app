const express = require('express')

const server = express()

server.use('/add-product', (req, res, next) => {
  console.log('In another middleware!')
  res.send('<h1>Hello!!!!!!!!!!!!!!!!</h1>')
})

server.use('/', (req, res, next) => {
  console.log('In another middleware!')
  res.send('<h1>Hello!!!!!!!!!!!!!!!!</h1>')
})

server.listen(8080)
