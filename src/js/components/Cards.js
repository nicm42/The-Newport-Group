import React, { useRef } from 'react';
import onScreen from '../onScreen';

import mansion from '/imgs/mansion.jpg';
import construction from '/imgs/construction.jpg';
import office from '/imgs/office.jpg';

export default function Cards() {
  const cardRef = useRef();
  const cardIsOnScreen = onScreen(cardRef);

  const cards = [
    { image: mansion, text: 'Buy or sell a house' },
    { image: construction, text: 'Build a house' },
    { image: office, text: 'Rent offices' },
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
            <button className="cards__button">{card.text}</button>
          </div>
        </div>
      ))}
    </section>
  );
}
