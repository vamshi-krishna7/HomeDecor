import React, { useState } from 'react';
import {Container, Form, Col, Row, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {saveShippingAddress} from '../../actions/cartAction';
const Shipping  = () => {

    const [address, setAddress] =useState("")
    const [city, setCity] =useState("")
    const [pincode, setPincode] =useState("")

   
    const cart = useSelector((state) => state.cart)
    const {saveAddress} = cart;
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress(address, city, pincode))
    }
  

    return (
        <Container>
            <Row className="d-flex justify-content-center">
            <Col xs={12} md={8}>
                    <h1>Shipping</h1> 
                    <Form onSubmit={submitHandler} >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" value={address} onChange={e => setAddress(e.target.value)}/>
                    </Form>
                    <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" value={city} onChange={e => setCity(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control type="text" placeholder="Enter pincode" value={pincode} onChange={e => setPincode(e.target.value)}/>
                    </Form.Group>
                    <h1>Payment</h1>
                    <ListGroup variant="flush">
                    <h6>payment method: </h6>
                        <ListGroupItem>
                        <Form.Check
                        type="radio"
                        checked
                        label=" Paypal"
                      /> 
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className="btn btn-success">Pay Now</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}
export default Shipping;



