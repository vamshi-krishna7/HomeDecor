import React, { Fragment } from 'react';
import products from '../../products';
import { Row, Col, Container } from 'react-bootstrap';
import ProductItem from './productItems';

const Home = () => {
    return (
        <Fragment>
            <h1 className="text-center">Latest products</h1>
            <Row>
            {   
                products.map((singleProduct) => (
                <Col sm={12} md={6} lg={4} xl={3} key={singleProduct._id}>
                    <ProductItem singleProduct={singleProduct} />
                </Col>
            ))} 
            </Row>
        </Fragment>
    )
}

export default Home;