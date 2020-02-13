const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const orders = require('./orders')

// Initiate configuration
dotenv.config()

const env = process.env

const app = express()

app.use(express.static('./static'))
app.use(bodyParser.json())

app.get('/orders', orders.list)
app.post('/order', orders.create)
app.get('/order/:_id', orders.details)

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../static/index.html'))
})

mongoose.connect(env.DB_URL, {
  useNewUrlParser: true,
  user: env.DB_USER,
  pass: env.DB_PASS,
  authSource: env.DB_AUTH
})

app.listen(env.APP_PORT, () => console.log(`App Running in Port ${env.APP_PORT}`))
