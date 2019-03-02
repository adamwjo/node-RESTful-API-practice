

const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')


const productRoutes = require('./api/routes /products')
const orderRoutes = require('./api/routes /orders.js')

//middleware for logging requests, and body parsing
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//routes for each model
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


// middleware for handling errors
app.use((req, res, next) => {
    const error = new Error('resource not found');
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message
    })
})

module.exports = app 