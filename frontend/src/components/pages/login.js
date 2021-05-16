import React, {useState, useEffect} from 'react';
import { Form, Col, Row, FormGroup, FormLabel, FormControl, FormText} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Login = () => {
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
        return (
          <Form>
            <Row className="justify-content-center">
              <Col xs={12} md={6}>
                <h1 className="text-center">Sign In</h1>
                <FormGroup>
                  <FormLabel>Email address</FormLabel>
                  <FormControl
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                  />
                  <FormText className="text-muted">
                    We'll never share your email with anyone else.
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <buttton className="btn btn-dark btn-block py-2 my-4">
                    Log In
                  </buttton>
                </FormGroup>
                <FormGroup>
                  <p>
                    Don't have an Account? <Link to="/register">Sign Up</Link>
                  </p>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        );
}
export default Login;