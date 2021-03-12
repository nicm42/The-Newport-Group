import React, { useRef, createRef } from 'react';
import { Link } from 'react-router-dom';
import onScreen from '../utilities/onScreen';

import mansion from '/imgs/mansion.jpg';
import construction from '/imgs/construction.jpg';
import office from '/imgs/office.jpg';

const Cards = () => {
  const cards = [
    { image: mansion, text: 'Buy or sell a house', link: '/houses' },
    { image: construction, text: 'Build a house', link: 'buildings' },
    { image: office, text: 'Rent offices', link: 'offices' },
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
            src={card.image}
            alt=""
            className="cards__image"
            loading="lazy"
          />
          <div className="cards__text">
            <Link to={card.link}>
              <button className="cards__button">{card.text}</button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
