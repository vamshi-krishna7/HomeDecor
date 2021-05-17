import React, {useState, useEffect} from 'react';
import { Form, Col, Row, FormGroup, FormLabel, FormControl, FormText, Button, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {loginUser, logoutUser} from '../../actions/userAction';
import {alert} from '../../actions/alertAction';

const Login = (props) => {
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.user)
    const alertMsg = useSelector(state => state.alert)
    const {userInfo} = userDetails;
    const {alertMessage} = alertMsg;

    useEffect(() => {
      if(userInfo){
        props.history.push('/')
      }
    }, [userInfo])

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'
    console.log(redirect)
    const onFormSubmit = (e) => {
      e.preventDefault();
      if(email === '' || password === ''){
        dispatch(alert('Please enter all the fields', 'danger'))
      }else {
        dispatch(loginUser(email, password))
        props.history.push(redirect)
        SetEmail('')
        SetPassword('')
      } // to be fixed: invalid credentials
    }

        return (
          <Form onSubmit={onFormSubmit}>
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
                  <Button className="btn btn-dark btn-block py-2 my-4" type="submit" >
                    Log In
                  </Button>
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