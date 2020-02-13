import axios from "axios"

export function orderCreate (data) {
    const response = axios.post("/order", data)
    return response
}