import axios from "axios"

export function orderCreate (data) {
    return axios.post("/order", data)
}

export function orderList () {
    return axios.get('orders')
}