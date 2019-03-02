const express = require('express');
const router = express.Router();

//handles GET request to orders index
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET request to /orders'
    })
})

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'POST request to /orders',
        order: order
    })
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'GET request to /orders/:id',
        orderId: req.params.orderId
    })
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'DELETE request to /orders',
        orderId: req.params.orderId
    })
})






module.exports = router