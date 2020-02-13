import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Button } from 'reactstrap'

import { orderList } from '../network/rest'

export function OrderList (params) {
  const history = useHistory()

  const [orders, setOrders] = useState([])

  useEffect(() => {
    orderList().then(response => {
      const responseData = response.data
      if (responseData.status === 200) {
        setOrders(responseData.data.orders)
      }
    })
  }, [])

  return (<div>
    <Row>
      <Col>
        <div className='d-flex justify-content-end'>
          <Button color='primary' onClick={() => {
            history.push('/create')
          }}>Create Order</Button>
        </div>
      </Col>
    </Row>
    <Row className='bg-secondary text-light mt-3'>
      <Col>Order No</Col>
      <Col>Date</Col>
      <Col>Items Count</Col>
      <Col>Total Price</Col>
    </Row>
    {orders.map(order =>
      <Row className='mt-2' key={order._id}>
        <Col>{order.number}</Col>
        <Col>{order.dateFormated}</Col>
        <Col>{order.items.length}</Col>
        <Col>{order.totalPrice}</Col>
      </Row>
    )}
    {orders.length === 0 && (
      <Row className='mt-2'>
        <Col>Loading ...</Col>
      </Row>
    )}
  </div>)
}
