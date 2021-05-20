import React, { useState, useEffect, Fragment } from "react";
import {
  Container,
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
import {registerUser} from '../../actions/userAction';
import {alert} from '../../actions/alertAction';

const Register = (props) => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const redirect = props.location.search ? props.location.search.split('=')[1] : '/'

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const {error} = user;
  const alerts = useSelector(state => state.alert)
  const {alertMessage} = alerts;
  console.log(error)

  useEffect(() => {
    if(error === "user already exists"){
      dispatch(alert("You Are Registered User", "info"));
    }
  }, [error])

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      dispatch(alert("Please enter all input fields", "danger"));
    } else if (password !== confirmPassword) {
      dispatch(alert("Passwords Don't Match", "danger"));
    } else {
      dispatch(registerUser(name, email, password));
      props.history.push(redirect)
      SetName('');
      SetEmail('');
      SetPassword('')
      SetConfirmPassword('')
    }
  }

  return (
    <Fragment>
    <Container>
      {alertMessage &&
        alertMessage.map((msg) => (
          <Alert
            key={msg.id}
            variant={msg.variant}
            style={{
              position: "absolute",
              left: "50%",
              top: "10%",
              zIndex: "1",
              transform: "translate(-50%, -10%)",
            }}
          >
            {msg.message}
          </Alert>
        ))}
      <Form onSubmit={onFormSubmit}>
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
              <Button
                type="submit"
                className="btn btn-dark btn-block py-2 my-4"
              >
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
      </Container>
    </Fragment>
  );
};

export default Register;
