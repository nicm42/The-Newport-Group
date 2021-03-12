import React, { useRef, createRef } from 'react';
import onScreen from '../utilities/onScreen';

import housepool from '/imgs/house-pool.jpg';
import pool from '/imgs/pool.jpg';
import poolhouse from '/imgs/poolhouse.jpg';

const BuildingsReview = () => {
  const reviews = [
    {
      image: housepool,
      alt: 'A beautiful single story house with a big pool',
      text:
        '“I love our new house. After viewing a house that was close to what we wanted, The Newport Group built us a house that was exactly what we needed.”',
    },
    {
      image: pool,
      alt: 'The poolside, with an integrated hot tub',
      text:
        '“I’ve always wanted to have a house built exactly to my specifications and The Newport Group have done that. Nothing I wanted was too big or too small for them. When I saw the house it matched my dreams exactly.”',
    },
    {
      image: poolhouse,
      alt:
        'A pool with pool house, set on the side of a hill with glorious views',
      text:
        '“All our house needed was a pool and a pool house. After speaking to The Newport Group, we now have just what we need for entertaining.”',
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

export default BuildingsReview;
