import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import onScreen from '../utilities/onScreen';

import mansion from '/imgs/mansion.jpg';
import construction from '/imgs/construction.jpg';
import office from '/imgs/office.jpg';

export default function Cards() {
  const cardRef = useRef();
  const cardIsOnScreen = onScreen(cardRef);

  const cards = [
    { image: mansion, text: 'Buy or sell a house', link: '/houses' },
    { image: construction, text: 'Build a house', link: 'buildings' },
    { image: office, text: 'Rent offices', link: 'offices' },
  ];

  return (
    <section className="cards container">
      {cards.map((card, index) => (
        <div
          key={index}
          ref={cardRef}
          className={cardIsOnScreen ? 'cards__card slide' : 'cards__card'}
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
}
