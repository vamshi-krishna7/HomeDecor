import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col, ListGroup, ListGroupItem, Image, Form, Button, FormControl, Card } from 'react-bootstrap';
import {addToCart, removeFromCart} from '../../actions/cartAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const checkProductId = props.match.params.id
    const qty = Number(props.location.search.split('=')[1])

    const dispatch = useDispatch()
    const cartDetails = useSelector(state => state.cart);
    const {cartItems} = cartDetails;
    useEffect(() => {
        if(checkProductId){
            dispatch(addToCart(checkProductId, qty))
        }
    }, [dispatch, checkProductId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return(
        
        <ListGroup>
            <Row>
                <Col md={8} >
                    <h1 className="text-center" >Shopping Cart</h1>
                    {
                        cartItems.length === 0 ? 
                        <h5 className="text-center" >Your Shopping Cart is Empty <Link to="/">Start Shoppping</Link></h5> : 
                        (
                            <ListGroup variant="flush">
                                {
                                    cartItems.map((item) => (
                                        <ListGroupItem key={item._id}>
                                            <Row>
                                                <Col md={2}>
                                                    <Image src={item.image} fluid  />
                                                </Col>
                                                <Col md={3}>
                                                    <h6>{item.name}</h6>
                                                    <strong>$ {item.price}</strong>
                                                </Col>
                                                <Col md={3}>
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
                                                <Col md={2}>
                                                    <Button onClick={() => removeFromCartHandler(item._id)} type="button" variant="outline-dark"> 
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        )
                    }
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <h2>
                                    Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                                </h2>
                                <h4 className="text-center">$ {cartItems.reduce((acc, item) => acc + ((item.price) * (item.qty)), 0)}</h4>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </ListGroup>
    )
}

export default Cart