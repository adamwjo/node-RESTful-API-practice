const errors = require('restify-errors')

const Product = require('../models/products.js')

module.exports = server => {
    //get all products (GET /products)
    server.get('/products', async (req, res, next) => {
        try {
            const Products = await Product.find({})
            res.send(Products)
            next() 
        } catch (error) {
            return next(new errors.InvalidContentError(error))
        }
    })

    //get a specific customer (GET /products/:id)
    server.get('/products/:id', async (req, res, next) => {
        try {
            const myProduct = await Product.findById(req.params.id)
            res.send(myProduct)
            next()
        } catch (error) {
            return next(new errors.ResourceNotFoundError(`there is no product with id:${req.params.id}`))
        }
    })

    //Add a Product (POST /products)
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
    
    //update a particular product (PUT /products/:id)
    server.put('/products/:id', async (req, res, next) => {
        if (!req.is('application/json')) {
            return next(new errors.InvalidContentError('Expects header of type: application/json'))
        }
        try {
            const updatedProduct = await Product.findOneAndUpdate({_id: req.params.id}, req.body)
            res.send(200)
            
        } catch (error) {
            return next(new errors.ResourceNotFoundError(`there is no product with id:${req.params.id}`))
        }
    })

    //delete a particular product (DELETE /products/:id)
    server.del('/products/:id', async (req, res, next) => {
        try {
            const deletedProduct = await Product.findOneAndRemove({_id: req.params.id})
            res.send(204)
            next()

        } catch (error) {
            return next(new errors.ResourceNotFoundError(`there is no product with id:${req.params.id}`))
        }
    })
}


