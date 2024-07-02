const express = require('express')
const router = require('./router.js')

const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use('/api', router)
app.listen(8000)