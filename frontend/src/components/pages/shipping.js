import React, { useState } from 'react';
import {Container, Form, Col, Row, ListGroup, ListGroupItem, Button, FormGroup} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {saveShippingAddress} from '../../actions/cartAction';

const Shipping  = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const {shippingAddress} = cart;

    const [address, setAddress] =useState(shippingAddress.address)
    const [city, setCity] =useState(shippingAddress.city)
    const [pincode, setPincode] =useState(shippingAddress.pincode)
    
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
                        <FormGroup>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" value={address} onChange={e => setAddress(e.target.value)}/>
                        </FormGroup>
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
                        disabled
                        label=" Paypal"
                      /> 
                        </ListGroupItem>
                    </ListGroup>
                    <Button type="submit" className="btn btn-success">Pay Now</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Shipping;



