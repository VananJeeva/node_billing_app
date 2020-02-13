const mongoose = require('mongoose')
const Schema = mongoose.Schema

let OrderItemSchema = new Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"
    },
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    netPrice: { type: Number, required: true }
})

module.exports = mongoose.model('OrderItem', OrderItemSchema)