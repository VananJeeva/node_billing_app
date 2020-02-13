const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const orders = require('./orders')

// Initiate configuration
dotenv.config()

const env = process.env

const app = express()

app.use(express.static('./static'))
app.use(bodyParser.json())

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../static/index.html'))
})

app.post('/order', orders.create)

app.listen(env.APP_PORT, () => console.log(`App Running in Port ${env.APP_PORT}`))
