const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin.routes')
const shopRoutes = require('./routes/shop.routes')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))

server.use(adminRoutes)
server.use(shopRoutes)

server.listen(8080)
