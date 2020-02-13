const Order = require('./models/order')
const OrderItem = require('./models/order-item')

module.exports.create = async function (req, res) {
  const { number, date, items } = req.body

  let totalPrice = 0
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (!item.name) {
      continue
    }
    item.netPrice = (item.qty * item.price)
    totalPrice += item.netPrice
  }

  const order = await Order.create({
    number,
    date,
    totalPrice
  })

  items.map(item => {
    item.order = order._id
  })
  const itemsFiltered = items.filter(item => item.name)

  await OrderItem.create(itemsFiltered)

  return res.send({
    status: 200,
    message: 'Order created successfully'
  })
}

module.exports.details = async function (req, res) {
  const _id = req.params._id
  const order = await Order.findById(_id).populate('items')

  return res.send({
    status: 200,
    message: 'Order details listed successfully',
    data: {
      order
    }
  })
}

module.exports.list = async function (req, res) {
  const orders = await Order.find({}).populate('items')

  return res.send({
    status: 200,
    message: 'Orders listed successfully',
    data: {
      orders
    }
  })
}
