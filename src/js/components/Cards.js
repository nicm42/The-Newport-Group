import React, { useRef, createRef } from 'react';
import { Link } from 'react-router-dom';
import onScreen from '../utilities/onScreen';

import mansionBig from '/imgs/mansion-big.jpg';
import mansionMedium from '/imgs/mansion-medium.jpg';
import mansionSmall from '/imgs/mansion-small.jpg';
import constructionBig from '/imgs/construction-big.jpg';
import constructionMedium from '/imgs/construction-medium.jpg';
import constructionSmall from '/imgs/construction-small.jpg';
import officeBig from '/imgs/office-big.jpg';
import officeMedium from '/imgs/office-medium.jpg';
import officeSmall from '/imgs/office-small.jpg';

const Cards = () => {
  const cards = [
    {
      imageBig: mansionBig,
      imageMedium: mansionMedium,
      imageSmall: mansionSmall,
      text: 'Buy or sell a house',
      link: '/houses',
    },
    {
      imageBig: constructionBig,
      imageMedium: constructionMedium,
      imageSmall: constructionSmall,
      text: 'Build a house',
      link: 'buildings',
    },
    {
      imageBig: officeBig,
      imageMedium: officeMedium,
      imageSmall: officeSmall,
      text: 'Rent offices',
      link: 'offices',
    },
  ];

  const cardRefs = useRef([]);
  cardRefs.current = cards.map(
    (review, i) => cardRefs.current[i] ?? createRef()
  );

  return (
    <section className="cards container diagonal">
      {cards.map((card, index) => (
        <div
          key={index}
          ref={cardRefs.current[index]}
          className={`cards__card ${
            onScreen(cardRefs.current[index]) ? 'slide' : ''
          }`}
        >
          <img
            src={card.imageSmall}
            srcSet={`${card.imageSmall} 450w,
                  ${card.imageMedium} 750w,
                  ${card.imageBig} 1500w,`}
            sizes="(min-width: 40em) 33vw, 100vw"
            alt=""
            className="cards__image"
            loading="lazy"
          />
          <div className="cards__text">
            <Link to={card.link}>{card.text}</Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
