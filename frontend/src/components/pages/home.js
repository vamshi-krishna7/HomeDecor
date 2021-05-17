import React, { Fragment, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductItem from './productItems';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts, setLoading} from '../../actions/productAction';
import Loading from '../utils/loading';

const Home = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, products } = productList;

    useEffect(() => {
        dispatch(setLoading())
        dispatch(getAllProducts())
        
      }, [dispatch])

    return (
        <Fragment>
            <h1 className="text-center">Latest products</h1>
            <Row>
            {   
                loading ? <Loading /> : products.map((singleProduct) => (
                <Col xs={6} md={4} lg={4} xl={3} key={singleProduct._id}>
                    <ProductItem singleProduct={singleProduct} />
                </Col>
            ))} 
            </Row>
        </Fragment>
    )
}

export default Home;