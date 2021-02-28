import React, { useRef } from 'react';
import onScreen from '../onScreen';

import mansion from '/imgs/mansion.jpg';
import construction from '/imgs/construction.jpg';
import office from '/imgs/office.jpg';

export default function Cards() {
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const card1IsOnScreen = onScreen(card1Ref);
  const card2IsOnScreen = onScreen(card2Ref);
  const card3IsOnScreen = onScreen(card3Ref);

  return (
    <section className="cards container">
      <div
        ref={card1Ref}
        className={card1IsOnScreen ? 'cards__card slide' : 'cards__card'}
      >
        <img src={mansion} alt="" className="cards__image" loading="lazy" />
        <div className="cards__text">
          <button className="cards__button">Buy or sell a house</button>
        </div>
      </div>
      <div
        ref={card2Ref}
        className={card2IsOnScreen ? 'cards__card slide' : 'cards__card'}
      >
        <img
          src={construction}
          alt=""
          className="cards__image"
          loading="lazy"
        />
        <div className="cards__text">
          <button className="cards__button">Build a house</button>
        </div>
      </div>
      <div
        ref={card3Ref}
        className={card3IsOnScreen ? 'cards__card slide' : 'cards__card'}
      >
        <img src={office} alt="" className="cards__image" loading="lazy" />
        <div className="cards__text">
          <button className="cards__button">Rent offices</button>
        </div>
      </div>
    </section>
  );
}
