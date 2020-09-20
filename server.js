const express = require('express')
const colors = require('colors')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const connectDB = require('./utils/db.js')

require('dotenv').config()

const server = express()
connectDB()

server.use(cors())
server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

let currentTime = new Date().toLocaleString('en-US', {
  timeZone: 'America/Denver',
})

// @desc:   confirm server is live
// @router: GET /

server.get('/', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Server is live',
    dateTime: currentTime + ' MST',
    author: 'Github: @mrzacsmith',
  })
})

const PORT = process.env.PORT || 3225
server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT} **\n`.rainbow)
})
