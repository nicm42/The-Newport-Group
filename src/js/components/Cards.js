import React from 'react';
import mansion from '/imgs/mansion.jpg';
import construction from '/imgs/construction.jpg';
import office from '/imgs/office.jpg';

export default function Cards() {
  return (
    <section className="cards container">
      <div className="cards__card">
        <img src={mansion} alt="" className="cards__image" loading="lazy" />
        <div className="cards__text">
          <button className="cards__button">Buy or sell a house</button>
        </div>
      </div>
      <div className="cards__card">
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
      <div className="cards__card">
        <img src={office} alt="" className="cards__image" loading="lazy" />
        <div className="cards__text">
          <button className="cards__button">Rent offices</button>
        </div>
      </div>
    </section>
  );
}
