const port = 4000

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes')
const cors = require('cors')


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(port, () => console.log('Server is running on ' + port))