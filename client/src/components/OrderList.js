import React from "react"
import { useHistory } from "react-router-dom"
import { Row, Col, Button } from "reactstrap"

export function OrderList(params) {
    const history = useHistory()
    return (<div>
        <Row>
            <Col>
                <div className="d-flex justify-content-end">
                    <Button color="primary" onClick={() => {
                        history.push('/create')
                    }}>Create Order</Button>
                </div>
            </Col>
        </Row>
        <Row className="bg-secondary text-light mt-3">
            <Col>Order No</Col>
            <Col>Date</Col>
            <Col>Items Count</Col>
            <Col>Total Price</Col>
        </Row>
        <Row className="mt-2">
            <Col>123456</Col>
            <Col>12/12/2019</Col>
            <Col>5</Col>
            <Col>50</Col>
        </Row>
        <Row className="mt-2">
            <Col>123456</Col>
            <Col>12/12/2019</Col>
            <Col>5</Col>
            <Col>50</Col>
        </Row>
    </div>)
}
