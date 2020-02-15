import axios from 'axios'

export function orderCreate (data) {
  return axios.post('/order', data)
}

export function orderList () {
  return axios.get('/orders')
}

export function orderDetails (_id) {
  return axios.get('/order/' + _id)
}
