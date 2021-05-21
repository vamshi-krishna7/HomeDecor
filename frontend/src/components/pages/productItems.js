import React from 'react';
import {Button, Card, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ProductItem = (props) => {

    const {name, image, _id, price, rating, type } = props.singleProduct;
    return (
      <Card className='p-2 custom-margin h-100'>
      <Link to={`/product/${_id}`} >
        <Card.Img src={image} variant='top' className="rounded-0"/>
      </Link>

      <Card.Body className="p-2 text-center">
        <Link to={`/product/${_id}`} className="text-center text-dark">
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h5'>
          {<Badge variant="secondary">{type}</Badge>}
        </Card.Text>
        
        <Card.Text>
            {rating} stars rating 
        </Card.Text>

        <Card.Text as='h3' className="custom-dash-line text-dark" >Rs {price}</Card.Text>
      <Link to={`/product/${_id}`} className="text-center" style={{textDecoration: 'none'}}><Button  block>Buy Now</Button></Link>
      </Card.Body>
    </Card> 
    )
}

export default ProductItem;