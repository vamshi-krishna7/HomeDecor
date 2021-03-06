import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Container, Col, Row, ListGroup, ListGroupItem, Image, Card, Button, FormControl} from 'react-bootstrap';
import '../../App.css';
import {useSelector, useDispatch} from 'react-redux';
import {getProductInfo, setLoading} from '../../actions/productAction';
import Loading from '../utils/loading';
import Rating from '../utils/rating';

const ProductInfo = (props) => {
const [qty, setQty] = useState(1)

    const dispatch = useDispatch()
    const productInformation = useSelector(state => state.productInfo)
    const {loading, productInfo} = productInformation;

    useEffect(() => {
        dispatch(setLoading())
        dispatch(getProductInfo(props.match.params.id))
      }, [props.match])

    const {image, name, description, rating, price, countInStock} = productInfo;


    const  addToCartHandler = () => {
        props.history.push(`/cart/${props.match.params.id}?qty=${qty}`)
    }
    return (
            loading ? <Loading /> : 
            (
                <Fragment>
                <Container>
                <Link to="/" className="btn btn-outline-dark my-3" ><span className="btn-go-back">&larr; Back</span></Link>
                <Row>
                <Col md={6} className="my-auto"> 
                    <Image src={image} alt="product" fluid  />
                </Col>
                <Col md={6}> 
                    <ListGroup variant="flush" className="text-center" >
                        <ListGroupItem><h3 >{name}</h3></ListGroupItem>
                        <ListGroupItem ><Rating rating={rating} /></ListGroupItem>
                        <ListGroupItem >{description}</ListGroupItem>
                    </ListGroup>
                    <Card className="text-center">
                            <ListGroupItem>Rs {price}</ListGroupItem>
                            <ListGroupItem className="mb-2 text-muted">Status: {countInStock > 0 ? 'In stock' : 'Out of stock'}</ListGroupItem>
                            {
                                countInStock > 0 && (
                                    <ListGroupItem>
                                        <Row>
                                            <Col>
                                                Qty
                                            </Col>
                                            <Col>
                                                <FormControl as='select' value={qty} onChange={(e) => setQty(e.target.value)} >
                                                {
                                                    [...Array(countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }   
                                                </FormControl>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                )
                            }
                            <ListGroupItem><Button onClick={addToCartHandler} disabled={countInStock === 0} variant="dark" block>Add To Cart</Button></ListGroupItem>
                    </Card>
                </Col>
            </Row>
            </Container>
            </Fragment>
            )
    )
}

export default ProductInfo;