const mongoose = require('mongoose')
const timeStamp = require('mongoose-timestamp')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    }
})

ProductSchema.plugin(timeStamp)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product