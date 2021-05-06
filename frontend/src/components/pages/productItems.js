import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ProductItem = (props) => {
    const {name, image, _id, price, numReviews, rating } = props.singleProduct;
    return (
        <Card className="my-3 p-2">
            <Link to={`/products/${_id}`}>
                <Card.Img variant="top" src={image} />
            </Link>
            <Card.Body>
                <Link to={`/products/${_id}`} >
                    <Card.Title as="div" className="text-dark">
                        <strong>
                            {name} 
                        </strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                <Card.Text>
                    {`${rating} from ${numReviews} reviews`}
                </Card.Text>
                </Card.Text>
                <Card.Text as='h3'>{price}</Card.Text>
            </Card.Body>
        </Card>  
    )
}

export default ProductItem;