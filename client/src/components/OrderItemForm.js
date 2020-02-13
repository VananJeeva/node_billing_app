import React from 'react'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'

export function OrderItemForm (props) {
  const { register, getValues, setValue } = props.orderCreateForm

  const onChange = (index) => {
    const values = getValues()
    const itemQty = values[`items[${index}].qty`] - 0
    const itemPrice = values[`items[${index}].price`] - 0
    const itemNetPrice = itemQty * itemPrice
    setValue(`items[${index}].netPrice`, itemNetPrice)

    const newValues = getValues()

    const total = (newValues[`items[0].netPrice`] - 0) + (newValues[`items[1].netPrice`] - 0) + (newValues[`items[2].netPrice`] - 0)
    props.setTotal(total)
  }

  return (<div>
    <Row>
      <Col>
        <FormGroup>
          <Label>Name</Label>
          <Input name={`items[${props.index}].name`} innerRef={register} />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>Quantity</Label>
          <Input type='number' name={`items[${props.index}].qty`} innerRef={register} onChange={() => onChange(props.index)} />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>Price</Label>
          <Input type='number' name={`items[${props.index}].price`} innerRef={register} onChange={() => onChange(props.index)} />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>Net Price</Label>
          <Input readOnly disabled type='number' name={`items[${props.index}].netPrice`} innerRef={register} />
        </FormGroup>
      </Col>
    </Row>
  </div>)
}
