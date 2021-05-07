import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Col, Row, ListGroup, ListGroupItem, Image, Card, Button} from 'react-bootstrap';
import products from '../../products';
import '../../App.css';

const ProductInfo = (props) => {
    const product = products.find((singleProduct) => singleProduct._id === props.match.params.id)
    const {image, name, description, rating, price, countInStock} = product;
    return (
        <Fragment>
            <Link to="/" className="btn btn-outline-dark my-3">Go Back</Link>
            <Row>
                <Col md={6} className="my-auto"> 
                    <Image src={image} alt="product" fluid  />
                </Col>
                <Col md={6} > 
                    <ListGroup variant="flush" className="text-center" >
                        <ListGroupItem><h3 >{name}</h3></ListGroupItem>
                        <ListGroupItem >{rating} rating</ListGroupItem>
                        <ListGroupItem >{description}</ListGroupItem>
                    </ListGroup>
                    <Card className="text-center">
                            <ListGroupItem>{price}</ListGroupItem>
                            <ListGroupItem className="mb-2 text-muted">Status: {countInStock > 0 ? 'In stock' : 'Out of stock'}</ListGroupItem>
                            <ListGroupItem><Button disabled={countInStock === 0} variant="dark" block>Buy Now</Button></ListGroupItem>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ProductInfo;