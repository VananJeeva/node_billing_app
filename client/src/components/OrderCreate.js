import React, { useState } from 'react'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Row, Col, CardFooter, FormGroup, Label, Input, Button } from 'reactstrap'
import { OrderItemForm } from './OrderItemForm'
import { orderCreate } from '../network/rest'

export function OrderCreate () {
  const history = useHistory()
  const [total, setTotal] = useState(0)
  const orderCreateForm = useForm()

  const { register, handleSubmit, errors } = orderCreateForm

  const onSubmit = (data) => {
    orderCreate(data).then(response => {
      const responseData = response.data
      if (responseData.status === 200) {
        history.push('/')
      }
    })
  }

  return (<div>
    <Row>
      <Col>
        <h2>
          Create Order
        </h2>
      </Col>
    </Row>
    <Row className='mt-3'>
      <Col>
        <FormGroup className='mb-0 d-flex align-items-center'>
          <Label className='mb-0'>Order No:</Label>
          <Input className='w-25 ml-2' type='number' name='number' innerRef={
            register({
              required: 'Please enter order no',
              min: 1
            })
          } />
        </FormGroup>
        <p className='text-danger mb-0'>{errors.number && errors.number.message}</p>
      </Col>
      <Col>
        <FormGroup className='mb-0 d-flex align-items-center justify-content-end'>
          <Label className='mb-0'>Date:</Label>
          <Input className='w-50 ml-2' type='date' name='date' innerRef={
            register({
              required: 'Please enter date'
            })
          } />
        </FormGroup>
        <p className='text-danger mb-0 text-right'>{errors.date && errors.date.message}</p>
      </Col>
    </Row>
    <Row className='mt-3'>
      <Col>
        {_.range(3).map(index => {
          return (<OrderItemForm key={index} index={index} orderCreateForm={orderCreateForm} setTotal={setTotal} />)
        })}
      </Col>
    </Row>
    <CardFooter>
      <Row>
        <Col>
          <div className='d-flex align-items-center justify-content-end'>
            <h5 className='mb-0 mr-2'>Total:</h5>
            <h4 className='mb-0 mr-2'>{total} INR</h4>
            <Button type='submit' onClick={handleSubmit(onSubmit)}>
              Create
            </Button>
          </div>
        </Col>
      </Row>
    </CardFooter>
  </div>)
}
