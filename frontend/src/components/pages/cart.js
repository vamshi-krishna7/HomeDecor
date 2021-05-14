import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col, ListGroup, ListGroupItem, Image, Form, Button, FormControl, Card } from 'react-bootstrap';
import {addToCart, removeFromCart} from '../../actions/cartAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { parse } from 'dotenv';

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
                <Col xs={12}  > 
                    <h1 className="text-center" >Shopping Cart</h1>
                    {
                        cartItems.length === 0 ? 
                        <h5 className="text-center" >Your Shopping Cart is Empty <Link to="/">Start Shoppping</Link></h5> : 
                            (   <Fragment>
                                <Card>
                                    <ListGroup variant="flush">
                                        <ListGroupItem>
                                            <h2 className="text-center">
                                                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                                            </h2>
                                            <h4 className="text-center">$ {cartItems.reduce((acc, item) => acc + ((item.price) * (item.qty)), 0)}</h4>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>
                            <ListGroup variant="flush"  >
                                {
                                    cartItems.map((item) => (
                                        <ListGroupItem key={item._id} >
                                            <Row>
                                                <Col xs={4} sm={4} md={2} className="my-auto list-group-cart-item">
                                                    <Image src={item.image} fluid  />
                                                </Col>
                                                <Col xs={3} sm={4} md={5} className="my-auto my-auto list-group-cart-item" >
                                                    <h6>{item.name}</h6>
                                                    <h6>$ {item.price}</h6>
                                                </Col>
                                                <Col xs={3} sm={2} md={3} className="my-auto">
                                                    <FormControl as='select' className="form-control-cart-item"  value={item.qty} onChange={(e) => dispatch(addToCart(item.productId, Number(e.target.value)))} >
                                                    {
                                                        [...Array(item.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))
                                                    }   
                                                    </FormControl>
                                                </Col>
                                                <Col xs={2} sm={2} md={2} className="my-auto">
                                                    <Button onClick={() => removeFromCartHandler(item._id)} type="button" variant="outline-dark"> 
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                            </Fragment>
                        )
                    }
                </Col>
            </Row>
        </ListGroup>
    )
}

export default Cart


//style={{border: '1px solid red'}}