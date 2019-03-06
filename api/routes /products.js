const express = require('express');
const router = express.Router();

// Item Model
const Product = require('../models/products.js');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Product.find()
        .sort({
            date: -1
        })
        .then(products => res.json(products));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });

    newProduct.save().then(product => res.json(product));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => product.remove().then(() => res.json({
            success: true
        })))
        .catch(err => res.status(404).json({
            success: false
        }));
});

module.exports = router;