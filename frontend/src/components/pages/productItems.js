import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ProductItem = (props) => {

    const {name, image, _id, price, rating } = props.singleProduct;

    return (
        <Card className='my-3 p-3'>
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant='top' className="rounded-0"/>
      </Link>

      <Card.Body>
        <Link to={`/product/${_id}`} className="text-center text-dark">
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        <Card.Text>
            {rating} stars rating
        </Card.Text>

        <Card.Text as='h3'>${price}</Card.Text>
      </Card.Body>
    </Card> 
    )
}

export default ProductItem;