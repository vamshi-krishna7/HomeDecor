import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome//free-regular-svg-icons'   

const Rating = ({rating}) => {

  return (
    <Fragment>
      {rating >= 0.5 ? (
        rating >= 1 ? (
          <FontAwesomeIcon icon={fasFaStar} className="star-icon" />
        ) : (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon"/>
        )
      ) : (
        <FontAwesomeIcon icon={farFaStar} className="star-icon"/>
      )}
      {rating >= 2 ? (
        rating >= 2 ? (
          <FontAwesomeIcon icon={fasFaStar} className="star-icon"/>
        ) : (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon"/>
        )
      ) : (
        <FontAwesomeIcon icon={farFaStar} className="star-icon"/>
      )}
      {rating >= 3 ? (
        rating >= 3 ? (
          <FontAwesomeIcon icon={fasFaStar} className="star-icon"/>
        ) : (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon"/>
        )
      ) : (
        <FontAwesomeIcon icon={farFaStar} className="star-icon"/>
      )}
      {rating >= 4 ? (
        rating >= 4 ? (
          <FontAwesomeIcon icon={fasFaStar} className="star-icon"/>
        ) : (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon"/>
        )
      ) : (
        <FontAwesomeIcon icon={farFaStar} className="star-icon"/>
      )}
      {rating >= 4.5 ? (
        rating === 5 ? (
          <FontAwesomeIcon icon={fasFaStar} className="star-icon"/>
        ) : (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon"/>
        )
      ) : (
        <FontAwesomeIcon icon={farFaStar} className="star-icon"/>
      )}
    </Fragment>
  );
};

export default Rating;



