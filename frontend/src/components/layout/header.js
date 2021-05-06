import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to='/' ><Navbar.Brand>HomeDecor</Navbar.Brand></LinkContainer>
                    <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <Nav.Link>Cart</Nav.Link>
                    </LinkContainer>
                    </Nav> 
                </Container> 
            </Navbar>
        </header>
    )
}

export default Header;