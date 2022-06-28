const express = require('express')
const colors = require('colors')
const { url } = require('inspector')
const connectMongoDB = require('./config/db')
const dotenv = require('dotenv').config()
const app = express()



// MongoDB Initrialization

connectMongoDB();



// Init port from env
const port = process.env.PORT || 5000


//request body initialization
app.use(express.json())
app.use(express.urlencoded({
    extended : false
}))

// create server
app.use('/api/students', require('./routes/student'))


// router listen
app.listen(port, () => {
    console.log(`Server is running in port ${port}`.bgBlue);
})