import React, { useRef, createRef } from 'react';
import onScreen from '../utilities/onScreen';

import fireplace from '/imgs/fireplace.jpg';
import kitchen from '/imgs/kitchen.jpg';
import lounge from '/imgs/lounge.jpg';

const HousesReview = () => {
  const reviews = [
    {
      image: fireplace,
      alt: 'An open-plan living room and kitchen with a brick-fireplace',
      text:
        'The Newport Group helped me find the perfect house for our family. I’m in love with the living room, where we can relax in the evenings after the children have gone to bed.',
    },
    {
      image: kitchen,
      alt: 'View from the kitchen island, looking into the dining area',
      text:
        'We were looking to downgrade now the children are grown up. The Newport Group found us the perfect house, where we can feel at home.',
    },
    {
      image: lounge,
      alt: 'A living area with bijou kitchen',
      text:
        'Our house was on sale with another realtor for three months with no sale, even after reducing the asking price. Then we found The Newport Group and our house was sold within a week, and at $50,000 more than we’d hoped to sell it for.',
    },
  ];

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
            className={
              onScreen(imageRefs.current[index])
                ? 'pageReview__image slide'
                : 'pageReview__image'
            }
          />
          <p
            ref={quoteRefs.current[index]}
            className={
              onScreen(quoteRefs.current[index])
                ? 'pageReview__quote slide'
                : 'pageReview__quote'
            }
          >
            {review.text}
          </p>
        </div>
      ))}
    </section>
  );
};

export default HousesReview;