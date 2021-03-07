import React, { useRef, createRef } from 'react';
import onScreen from '../utilities/onScreen';

import coworking from '/imgs/coworking.jpg';
import office from '/imgs/office.jpg';
import officegrey from '/imgs/office-grey.jpg';

const OfficesReview = () => {
  const reviews = [
    {
      image: coworking,
      alt: 'An open-plan area sofas and a table and chairs to eat or meet at',
      text:
        '“I recently went freelance and needed somewhere to work that wasn’t also home. The Newport Group found me the perfect place that’s light and airy, with other freelancers who I can meet for a drink in the office’s kitchen It’s just like the friendliness of the office, but where I’m my own boss.”',
    },
    {
      image: office,
      alt: 'A meeting room with panoramic views',
      text:
        '“The Newport Group found us the perfect office for our small company, with beautiful views. Only trouble is the view can be a distraction in company meetings!”',
    },
    {
      image: officegrey,
      alt: 'An airy office with plenty of space',
      text:
        '“Our new office is just the right size for us to grow. Thank you, Newport Group.”',
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

export default OfficesReview;
