import React, {useEffect} from 'react';
import { Navbar, Nav, Container, image, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Home Decor</Navbar.Brand>
            </LinkContainer>
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <Dropdown>
                  <Dropdown.Toggle variant="secondary"  >
                    {userInfo.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <LinkContainer to="/profile">
                        <Dropdown.Item>Profile</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                        <Dropdown.Item >cart</Dropdown.Item>
                    </LinkContainer>
                    <Dropdown.Item onClick={logoutHandler}>
                      Logout
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
          </Container>
        </Navbar>
      </header>
    );
}

export default Header;







