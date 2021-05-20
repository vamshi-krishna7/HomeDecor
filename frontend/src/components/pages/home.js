import React, { Fragment, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProductItem from './productItems';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts, setLoading} from '../../actions/productAction';
import Loading from '../utils/loading';
import Banner from '../layout/banner';

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
            <Banner />
                <Container >
                    <h1 className="text-center">Our Latest products</h1>
                    <Row style={{position: 'relative'}}>
                    {   
                        loading ? <Loading /> : products.map((singleProduct) => (
                        <Col xs={6} md={4} lg={4} xl={3} key={singleProduct._id} className="custom-padding">
                            <ProductItem singleProduct={singleProduct} />
                        </Col>
                    ))} 
                    </Row>
                </Container>
        </Fragment>
    )
}

export default Home;