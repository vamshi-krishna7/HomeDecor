import React, { useState, useEffect, Fragment } from "react";
import {
  Form,
  Col,
  Row,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  Button,
  Alert
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {registerUser} from '../../actions/user';

const Register = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      console.log("Alert passwords don't match")
      }else {
      dispatch(registerUser(name, email, password, confirmPassword))
    }
  }

  return (
    <Form onSubmit = {onFormSubmit}>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1 className="text-center">Sign Up</h1>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => SetName(e.target.value)}
            />
          </FormGroup>
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
            <FormLabel>Confirm-Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Enter password"
              value={confirmPassword}
              onChange={(e) => SetConfirmPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" className="btn btn-dark btn-block py-2 my-4">
              Register
            </Button>
          </FormGroup>
          <FormGroup>
            <p>
              Already have an Account? <Link to="/login">Login</Link>
            </p>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default Register;
