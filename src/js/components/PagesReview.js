import React, { useRef, createRef } from 'react';
import { houseReviews } from '../content/housesContent';
import { buildingReviews } from '../content/buildingsContent';
import { officeReviews } from '../content/officesContent';
import onScreen from '../utilities/onScreen';

const PagesReview = (props) => {
  const { type } = props;

  const pageContent = () => {
    switch (type) {
      case 'Houses':
        return houseReviews;
      case 'Buildings':
        return buildingReviews;
      case 'Offices':
        return officeReviews;
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
            src={review.imageSmall}
            srcSet={`${review.imageSmall} 450w,
                  ${review.imageMedium} 750w,
                  ${review.imageBig} 1500w,`}
            sizes="(min-width: 40em) 50vw, 100vw"
            alt={review.alt}
            loading="lazy"
            ref={imageRefs.current[index]}
            className={`pageReview__image ${
              onScreen(imageRefs.current[index]) ? 'slide' : ''
            }`}
          />
          <blockquote
            ref={quoteRefs.current[index]}
            className={`pageReview__quote ${
              onScreen(quoteRefs.current[index]) ? 'slide' : ''
            }`}
          >
            {review.text}
          </blockquote>
        </div>
      ))}
    </section>
  );
};

export default PagesReview;
