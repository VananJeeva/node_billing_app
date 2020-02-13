const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

let OrderSchema = new Schema(
    {
        number: { type: String, required: true },
        date: { type: Date, required: true },
        totalPrice: { type: Number, required: true }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
)

OrderSchema.virtual('items', {
    ref: 'OrderItem',
    foreignField: 'order',
    localField: '_id'
})

OrderSchema.virtual('dateFormated').get(function () {
    return moment(this.date).format('DD-MM-YYYY')
})

module.exports = mongoose.model('Order', OrderSchema)