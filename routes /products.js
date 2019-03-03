const errors = require('restify-errors')
const Product = require('../api/models/products.js')

module.exports = server => {
    //get all products
    server.get('/products', async (req, res, next) => {
        try {
            const Products = await Product.find({})
            res.send(Products)
            next() 
        } catch (error) {
            return next(new errors.InvalidContentError(error))
        }
    })

    //Add a Product
    server.post('/products', async (req, res, next) => {
        //check if the content type is application/json
        if(!req.is('application/json')){
            return next(new errors.InvalidContentError('Expects content-type: application/json'))
        }
        const { name, price } = req.body
        const product = new Product({
            name: name,
            price: price
        })
        try {
            const newProduct = await product.save()
            res.send(201)
            next()
            
        } catch (error) {
            return next(new errors.InternalError(err.message))
        }
    })
}


