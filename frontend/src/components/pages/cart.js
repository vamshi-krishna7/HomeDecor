import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col, ListGroup, ListGroupItem, Image, Form, Button, FormControl } from 'react-bootstrap';
import {addToCart} from '../../actions/cartAction';

const Cart = (props) => {
    const checkProductId = props.match.params.id
    const qty = props.location.search.split('=')[1]

    const dispatch = useDispatch()
    const cartDetails = useSelector(state => state.cart);
    const {cartItems} = cartDetails;
    useEffect(() => {
        if(checkProductId){
            dispatch(addToCart(checkProductId, qty))
        }
    }, [])

    return(
        
        <ListGroup>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {
                        cartItems.length === 0 ? 
                        <h5>Your Shopping Cart is Empty</h5> : 
                        (
                            <ListGroup>
                                {
                                    cartItems.map((item) => (
                                        <ListGroupItem>
                                        <Row>
                                            <Col md={2}>
                                                <Image src={item.image} fluid  />
                                            </Col>
                                            <Col md={4}>
                                                <h6>{item.name}</h6>
                                                <strong>$ {item.price}</strong>
                                            </Col>
                                            <Col md={2}>
                                                <FormControl as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.productId, Number(e.target.value)))} >
                                                {
                                                    [...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }   
                                                </FormControl>
                                            </Col>
                                        </Row>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        )
                    }
                </Col>
            </Row>
        </ListGroup>
    )
}

export default Cart