import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Col, Row, ListGroup, ListGroupItem, Image, Card, Button} from 'react-bootstrap';
import '../../App.css';
import {useSelector, useDispatch} from 'react-redux';
import {getProductInfo, setLoading} from '../../actions/productAction';
import Loading from '../utils/loading';

const ProductInfo = (props) => {
    const dispatch = useDispatch()
    const productInformation = useSelector(state => state.productInfo)
    const {loading, productInfo} = productInformation;

    useEffect(() => {
        dispatch(setLoading())
        dispatch(getProductInfo(props.match.params.id))
      }, [props.match])

    const {image, name, description, rating, price, countInStock} = productInfo;
    return (
            loading ? <Loading /> : 
            (
                <Fragment>
                <Link to="/" className="btn btn-outline-dark my-3" ><span className="btn-go-back">&larr; Back</span></Link>
                <Row>
                <Col md={6} className="my-auto custom-border"> 
                    <Image src={image} alt="product" fluid  />
                </Col>
                <Col md={6}> 
                    <ListGroup variant="flush" className="text-center" >
                        <ListGroupItem><h3 >{name}</h3></ListGroupItem>
                        <ListGroupItem >{rating} rating</ListGroupItem>
                        <ListGroupItem >{description}</ListGroupItem>
                    </ListGroup>
                    <Card className="text-center">
                            <ListGroupItem>$ {price}</ListGroupItem>
                            <ListGroupItem className="mb-2 text-muted">Status: {countInStock > 0 ? 'In stock' : 'Out of stock'}</ListGroupItem>
                            <ListGroupItem><Button disabled={countInStock === 0} variant="dark" block>Buy Now</Button></ListGroupItem>
                    </Card>
                </Col>
            </Row>
            </Fragment>
            )
    )
}

export default ProductInfo;