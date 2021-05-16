import react from 'react';
import { Alert } from 'react-bootstrap';


export const alert = (props) => {
    const {variant, message} = props;
    return (
      <Alert variant={variant}>
        <p>{message}</p>
      </Alert>
    );
}