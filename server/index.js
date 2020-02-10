const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

// Initiate configuration
dotenv.config()

const env = process.env

const app = express()

app.use(express.static('./static'))
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../static/index.html'))
})

app.listen(env.APP_PORT, () => console.log(`App Running in Port ${env.APP_PORT}`))
