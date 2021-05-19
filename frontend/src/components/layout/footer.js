import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-5">
            <Container>
                <Row xs={12}>
                    <Col className="text-center">
                    <ul className="d-flex justify-content-around align-items-center ul-custom-margin" >
                        <Link to='/'>youtube</Link>
                        <Link to='/'>instagram</Link>
                        <Link to='/'>twitter</Link>
                        <Link to='/'>facebook</Link>
                    </ul>
                        Copyright &copy; HomeDecor
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;