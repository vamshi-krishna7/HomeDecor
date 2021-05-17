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
import {useSelector, useDispatch} from 'react-redux';
import {getUserProfile} from '../../actions/userAction';
import {alert} from '../../actions/alertAction';
import Loading from '../utils/loading';

const Profile = (props) => {
    const userdetails = useSelector(state => state.user)
    const {userProfile, loading} = userdetails;
    console.log(userdetails)

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const redirect = props.location.search ? props.location.search.split('=')[1] : '/'

  const dispatch = useDispatch()

  const alerts = useSelector(state => state.alert)
  const {alertMessage} = alerts;

  

  useEffect(() => {
        if(!userProfile){
            dispatch(getUserProfile())
        }else {
            SetName(userProfile.name)
            SetEmail(userProfile.email)
        }
  }, [dispatch, userProfile])   

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" ||password === "" || confirmPassword === "") {
      dispatch(alert("Please enter all input fields", "danger"));
    } else if (password !== confirmPassword) {
      dispatch(alert("Passwords Don't Match", "danger"));
    } else {
    //   dispatch(registerUser(name, email, password));
      props.history.push(redirect)
    }
  }

  return (
    <Fragment>
    {
        loading ? <Loading /> : (
            <Fragment>
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
                        <h1 className="text-center">Profile</h1>
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
                            Make sure you don't change your email regularly
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
                            Update
                        </Button>
                        </FormGroup>
                    </Col>
                    </Row>
                </Form>
              </Fragment>
        )
    }
    </Fragment>
  );
};

export default Profile;
