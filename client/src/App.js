import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Card, CardBody, CardHeader } from 'reactstrap'
import { OrderCreate } from './components/OrderCreate'
import { OrderList } from './components/OrderList'

export function App () {
  return (<Container>
    <Card>
      <CardHeader>
        <h1 className='text-center'>
          Billing App
        </h1>
      </CardHeader>
      <CardBody>
        <Router>
          <Suspense>
            <Switch>
              <Route exact path='/' component={OrderList} />
              <Route path='/create' component={OrderCreate} />
            </Switch>
          </Suspense>
        </Router>
      </CardBody>
    </Card>
  </Container>)
}
