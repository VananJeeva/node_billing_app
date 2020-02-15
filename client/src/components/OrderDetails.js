import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Row, Col, Button } from 'reactstrap'

import { orderDetails } from '../network/rest'

export function OrderDetails (params) {
  const history = useHistory()
  let { _id } = useParams()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    orderDetails(_id).then(response => {
      const responseData = response.data
      if (responseData.status === 200) {
        setOrder(responseData.data.order)
      }
    })
  }, [])

  return (<div>
    <Row>
      <Col>
        <div className='d-flex justify-content-end'>
          <Button color='primary' onClick={() => {
            history.push('/')
          }}>Orders List</Button>
        </div>
      </Col>
    </Row>

    {order && (
      <React.Fragment>
        <Row className='bg-secondary text-light mt-3'>
          <Col>Order No</Col>
          <Col>Date</Col>
          <Col>Items Count</Col>
          <Col>Total Price</Col>
        </Row>
        <Row className='mt-2' key={order._id}>
          <Col>{order.number}</Col>
          <Col>{order.dateFormated}</Col>
          <Col>{order.items.length}</Col>
          <Col>{order.totalPrice}</Col>
        </Row>
        <h4 className='mt-3'>Items</h4>
        <Row className='bg-secondary text-light mt-3'>
          <Col>Item</Col>
          <Col>Qty</Col>
          <Col>Price</Col>
          <Col>Net Price</Col>
        </Row>
        {order.items.map(item => (
          <Row className='mt-2' key={order._id}>
            <Col>{item.name}</Col>
            <Col>{item.qty}</Col>
            <Col>{item.price}</Col>
            <Col>{item.netPrice}</Col>
          </Row>
        ))}
      </React.Fragment>
    )}
    {!order && (
      <Row className='mt-2'>
        <Col>Loading ...</Col>
      </Row>
    )}
  </div>)
}
