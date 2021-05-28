import React, {useEffect} from 'react';
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {placeOrderAction} from '../../actions/orderActions';

const PlaceOrder = ({history}) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const {shippingAddress, cartItems, paymentMethod} = cart

    const placeOrder = useSelector((state) => state.placeOrder)
    const {loading, success, error} = placeOrder

    var itemPrice, shippingPrice, taxPrice, grandTotal

    const addDecimals = (num) => {
        return ((num/100)*100).toFixed(2)
    }

    const itemsPriceOnOrder = () => {
        itemPrice = addDecimals(Number(cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)))
        return addDecimals(Number(cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)))
    }

    const shippingPriceOnOrder = () => {
        shippingPrice = cartItems.reduce((acc, item) => item.price * item.qty, 0) < 1000  ? 100 : 0
       return cartItems.reduce((acc, item) => item.price * item.qty, 0) < 1000  ? 100 : 0
    }

    const taxPriceOnOrder = () => {
        taxPrice = (addDecimals(Number(cartItems.reduce((acc, item) => item.price * item.qty, 0)/100 *18)))
        return (addDecimals(Number(cartItems.reduce((acc, item) => item.price * item.qty, 0)/100 *18)))
    }

    const grandTotalPriceOnOrder = () => {
        grandTotal = addDecimals(Number(itemsPriceOnOrder()) + Number(shippingPriceOnOrder()) + Number(taxPriceOnOrder()))
        return addDecimals(Number(itemsPriceOnOrder()) + Number(shippingPriceOnOrder()) + Number(taxPriceOnOrder()))
    }

    useEffect(() => {
        if(success) {
            history.push('/welldone')
        }
    }, [history, success])

    const PlaceOrderhandler = () => {
        dispatch(placeOrderAction({
            orderItems: cartItems,
            shippingAddress,
            paymentMethod,
            taxPrice,
            shippingPrice,
            totalPrice: grandTotal 
        }))
    }

  return (
      <Container>
        <Row className="justify-content-md-center">
            <Col xs={12} md={8} >
                <ListGroup className="mt-3" >
                <ListGroup.Item className="text-center font-weight-bold">Order Summary</ListGroup.Item>
                    <ListGroup.Item>
                        <Row className="d-flex justify-content-between">
                            <Col xs={6}>Items</Col>
                            <Col xs={4}>{itemsPriceOnOrder()}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row className="d-flex justify-content-between">
                            <Col xs={6}>Shipping Charges</Col>
                            <Col xs={4}>{shippingPriceOnOrder()}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row className="d-flex justify-content-between">
                            <Col xs={6}>Tax (18% GST)</Col>
                            <Col xs={4}>{taxPriceOnOrder()}</Col>
                        </Row>
                     </ListGroup.Item>
                    <ListGroup.Item>
                        <Row className="d-flex justify-content-between">
                            <Col xs={6} className="font-weight-bold">Total</Col>
                            <Col xs={4} className="font-weight-bold">{grandTotalPriceOnOrder()}</Col>
                        </Row> 
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className="mt-3" >
                <ListGroup.Item className="text-center font-weight-bold">Shipping Details</ListGroup.Item>
                <ListGroup.Item>Address: {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.pincode}</ListGroup.Item>
                </ListGroup>
                <ListGroup className="mt-3" >
                <ListGroup.Item className="text-center font-weight-bold">Payment Details</ListGroup.Item>
                <ListGroup.Item>Method: {paymentMethod}</ListGroup.Item>
                </ListGroup>
                <ListGroup className="mt-3" varaint="flush">
                    <ListGroup.Item className="text-center font-weight-bold">Order Items</ListGroup.Item>
                    {
                        cartItems.map((item) => (
                            <ListGroup.Item key={item.name}>  
                                <Row>
                                    <Col xs={6}>
                                       {item.name}
                                    </Col> 
                                    <Col xs={6}>
                                        {item.qty} x Rs {item.price} = Rs {addDecimals(item.qty * item.price)}
                                    </Col> 
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
                <ListGroup className="mt-4">
                    <Button type="submit" className="btn btn-dark" onClick={PlaceOrderhandler}>Place Order</Button>
                </ListGroup>
            </Col>
            
        </Row>
      </Container>
  )  
}

export default PlaceOrder;