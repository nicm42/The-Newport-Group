import React, { useRef, createRef } from 'react';
import { Link } from 'react-router-dom';
import onScreen from '../utilities/onScreen';
import cards from '../content/cardsContent';

const Cards = () => {
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
          data-testid="thisCard"
        >
          <img
            src={card.imageSmall}
            srcSet={card.srcset}
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
