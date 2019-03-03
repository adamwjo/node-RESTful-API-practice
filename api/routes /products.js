


const express = require('express');
const router = express.Router();
const Product = require('../models/products.js')
const mongoose = require('mongoose')

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'    
    })
})

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })
    product.save()
        .then(res => {console.log(res)})
        .catch(err => console.log(err))

    res.status(201).json({
        message: 'handling POST requests to /products',
        createdProduct: product
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    if (id === 'special') {
        res.status(200).json({
            message: 'handling request for /products/id',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'you passed an id that wasnt special'
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'updated product'
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted product'
    })
})






module.exports = router 