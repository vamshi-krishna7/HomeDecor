import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProductItem from './productItems';
import axios from 'axios';

const Home = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const getProducts = async() => {
          const res = await axios.get('/products')
          setProduct(res.data)
        }
        getProducts()
      }, [])

    return (
        <Fragment>
            <h1 className="text-center">Latest products</h1>
            <Row>
            {   
                product.map((singleProduct) => (
                <Col sm={12} md={6} lg={4} xl={3} key={singleProduct._id}>
                    <ProductItem singleProduct={singleProduct} />
                </Col>
            ))} 
            </Row>
        </Fragment>
    )
}

export default Home;