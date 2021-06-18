import React, {useEffect} from 'react';
import { Container, Row, Col, ListGroup, Image, Button, Message, Alert } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {getOrderById} from '../../actions/orderDetailAction';
import orderDetailReducer from '../../reducers/orderDetailReducer';
import Loading from '../utils/loading';

const PlaceOrder = ({match}) => {

    const id = match.params.id;
    const dispatch = useDispatch()
    const orderDetail = useSelector((state) => state.orderDetail)
    const {loading, error, order} = orderDetail

    useEffect(() => {
        dispatch(getOrderById(id))
    }, [match])


    const addDecimals = (num) => {
        return ((num/100)*100).toFixed(2)
    }

    const itemsPriceOnOrder = () => {
        return addDecimals(Number(order.orderItems.reduce((acc, item) => acc + (item.price * item.qty), 0)))
    }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <ListGroup className="mt-3">
              <ListGroup.Item className="text-center font-weight-bold">
                Shipping Details
              </ListGroup.Item>
              <ListGroup.Item>Name: {order.user.name}</ListGroup.Item>
              <ListGroup.Item>Email: {order.user.email}</ListGroup.Item>
              <ListGroup.Item>
                Address: {order.shippingAddress.address},{" "}
                {order.shippingAddress.city}, {order.shippingAddress.pincode}
              </ListGroup.Item>
              <ListGroup.Item>{order.isPaid ? <Alert variant="success">Order Delivered</Alert> : 
                <Alert variant="danger">Not Delivered</Alert>}
              </ListGroup.Item> 
            </ListGroup>
            <ListGroup className="mt-3">
              <ListGroup.Item className="text-center font-weight-bold">
                Payment Details
              </ListGroup.Item>
              <ListGroup.Item>Method: {order.paymentMethod}</ListGroup.Item>
              <ListGroup.Item>{order.isPaid ? <Alert variant="success">Order Paid</Alert> : 
                <Alert variant="danger">Not Paid</Alert>}
              </ListGroup.Item> 
            </ListGroup>
            <ListGroup className="mt-3" varaint="flush">
              <ListGroup.Item className="text-center font-weight-bold">
                Order Items
              </ListGroup.Item>
              {order.orderItems.map((item) => (
                <ListGroup.Item key={item.name}>
                  <Row>
                    <Col xs={6}>{item.name}</Col>
                    <Col xs={6}>
                      {item.qty} x Rs {item.price} = Rs{" "}
                      {addDecimals(item.qty * item.price)}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <ListGroup className="mt-3">
              <ListGroup.Item className="text-center font-weight-bold">
                Order Summary
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="d-flex justify-content-between">
                  <Col xs={6}>Items</Col>
                  <Col xs={4}>{itemsPriceOnOrder()}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="d-flex justify-content-between">
                  <Col xs={6}>Shipping Price</Col>
                  <Col xs={4}>{addDecimals(order.shippingPrice)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="d-flex justify-content-between">
                  <Col xs={6}>Tax (18% GST)</Col>
                  <Col xs={4}>{addDecimals(order.taxPrice)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="d-flex justify-content-between">
                  <Col xs={6} className="font-weight-bold">
                    Total
                  </Col>
                  <Col xs={4} className="font-weight-bold">
                    {addDecimals(order.totalPrice)}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );  
}

export default PlaceOrder;






// <Row className="justify-content-md-center">
//       <Col xs={12} md={8} >
//           <ListGroup className="mt-3" >
//           <ListGroup.Item className="text-center font-weight-bold">Order Summary</ListGroup.Item>
//               <ListGroup.Item>
//                   <Row className="d-flex justify-content-between">
//                       <Col xs={6}>Items</Col>
//                       <Col xs={4}>1</Col>
//                   </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                   <Row className="d-flex justify-content-between">
//                       <Col xs={6}>Shipping Charges</Col>
//                       <Col xs={4}>{order.shippingPrice}</Col>
//                   </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                   <Row className="d-flex justify-content-between">
//                       <Col xs={6}>Tax (18% GST)</Col>
//                       <Col xs={4}>{order.taxPrice}</Col>
//                   </Row>
//                </ListGroup.Item>
//               <ListGroup.Item>
//                   <Row className="d-flex justify-content-between">
//                       <Col xs={6} className="font-weight-bold">Total</Col>
//                       <Col xs={4} className="font-weight-bold">{order.totalPrice}</Col>
//                   </Row> 
//               </ListGroup.Item>
//           </ListGroup>
//           <ListGroup className="mt-3" >
//           <ListGroup.Item className="text-center font-weight-bold">Shipping Details</ListGroup.Item>

          
//           <ListGroup.Item>Email: {order.user.email}</ListGroup.Item>
//           <ListGroup.Item>Address: {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.pincode}</ListGroup.Item>
//           </ListGroup>
//           <ListGroup className="mt-3" >
//           <ListGroup.Item className="text-center font-weight-bold">Payment Details</ListGroup.Item>
//           <ListGroup.Item>Method: {order.paymentMethod}</ListGroup.Item>
//           </ListGroup>
//           <ListGroup className="mt-3" varaint="flush">
//               <ListGroup.Item className="text-center font-weight-bold">Order Items</ListGroup.Item>
//               {
//                   order.map((item) => (
//                       <ListGroup.Item key={item.name}>  
//                           <Row>
//                               <Col xs={6}>
//                                  {item.name}
//                               </Col> 
//                               <Col xs={6}>
//                                   {item.qty} x Rs {item.price} = Rs {(item.qty * item.price).toFixed(2)}
//                               </Col> 
//                           </Row>
//                       </ListGroup.Item>
//                   ))
//               }
//           </ListGroup>
//       </Col>
      
//   </Row>