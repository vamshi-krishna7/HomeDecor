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
import {useSelector, useDispatch} from 'react-redux';
import {getUserProfile, updateUserProfile} from '../../actions/userProfileAction';
import {alert} from '../../actions/alertAction';
import Loading from '../utils/loading';

const Profile = (props) => {
    const userProfile = useSelector(state => state.userProfile)
    const {userProfileInfo, loading, success} = userProfile;

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const dispatch = useDispatch()

  const alerts = useSelector(state => state.alert)
  const {alertMessage} = alerts;

  

  useEffect(() => {
    if(!userProfile){
            props.history.push('/login')
        }
        else {
            if(!userProfileInfo){
                dispatch(getUserProfile())
            }else {
                SetName(userProfileInfo.name)
                SetEmail(userProfileInfo.email)
            }
        }
  }, [dispatch, userProfileInfo])   

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (name === "" || email === "") {
      dispatch(alert("Please enter all input fields", "danger"));
    } else if (password !== confirmPassword) {
      dispatch(alert("Passwords Don't Match", "danger"));
    } else {
      dispatch(updateUserProfile(name, email, password));
      dispatch(alert("Profile Updated Successfully", "success"))
    }
  }

  return (
    <Fragment>
    <Container>
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
                        <FormLabel>New Password</FormLabel>
                        <FormControl
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => SetPassword(e.target.value)}
                        />
                        </FormGroup>
                        <FormGroup>
                        <FormLabel>Confirm New Password</FormLabel>
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
    </Container>
    </Fragment>
  );
};

export default Profile;
