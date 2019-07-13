const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin.routes')
const shopRoutes = require('./routes/shop.routes')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))

server.use('/admin', adminRoutes)
server.use(shopRoutes)

server.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

server.listen(8080)
