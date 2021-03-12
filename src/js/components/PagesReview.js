import React, { useRef, createRef } from 'react';
import { houseReviews } from '../content/housesContent';
import onScreen from '../utilities/onScreen';

const PagesReview = (props) => {
  const { type } = props;

  const pageContent = () => {
    switch (type) {
      case 'Houses':
        return houseReviews;
      case 'Buildings':
        return 'House building';
      case 'Offices':
        return 'Office space';
      default:
        return '';
    }
  };

  const reviews = pageContent();

  const imageRefs = useRef([]);
  imageRefs.current = reviews.map(
    (review, i) => imageRefs.current[i] ?? createRef()
  );
  const quoteRefs = useRef([]);
  quoteRefs.current = reviews.map(
    (review, i) => quoteRefs.current[i] ?? createRef()
  );

  return (
    <section className="pageReview container">
      <p className="pageReview__intro">
        Don’t take our word for it, see what our customers have been saying...
      </p>
      {reviews.map((review, index) => (
        <div key={index} className="pageReview__imagequote">
          <img
            src={review.image}
            alt={review.alt}
            loading="lazy"
            ref={imageRefs.current[index]}
            className={`pageReview__image ${
              onScreen(imageRefs.current[index]) ? 'slide' : ''
            }`}
          />
          <p
            ref={quoteRefs.current[index]}
            className={`pageReview__quote ${
              onScreen(quoteRefs.current[index]) ? 'slide' : ''
            }`}
          >
            {review.text}
          </p>
        </div>
      ))}
    </section>
  );
};

export default PagesReview;
