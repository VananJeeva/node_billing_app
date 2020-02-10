const express = require('express')
const dotenv = require('dotenv')

// Initiate configuration
dotenv.config()

const env = process.env

const app = express()

app.use(express.static('./static'))

app.listen(env.APP_PORT, () => console.log(`App Running in Port ${env.APP_PORT}`))
