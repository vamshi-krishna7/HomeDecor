import React, {useEffect} from 'react';
import { Navbar, Nav, Container, image, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../actions/userAction';


const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const {userInfo} = user;

    const logoutHandler = () => {
        dispatch(logoutUser())
    }
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>HomeDecor</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
              <LinkContainer to="/about">
                  <Nav.Link>
                    About Us
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                    Cart  
                  </Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary">
                      {userInfo.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <LinkContainer to="/profile">
                        <Dropdown.Item>
                          <FontAwesomeIcon icon={faUser} />
                          {" "}Profile
                        </Dropdown.Item>
                      </LinkContainer>
                      <Dropdown.Item onClick={logoutHandler}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        {" "}Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                      Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
}

export default Header;







