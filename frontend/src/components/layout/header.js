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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav> 
                </Container> 
            </Navbar>
        </header>
    )
}

export default Header;