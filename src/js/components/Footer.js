import React from 'react';
import caleb from '/imgs/caleb.jpg';
import map from '/imgs/map.jpg';
import mapSmall from '/imgs/map-small.jpg';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__owner">
        <p>Owner: Caleb Nichol</p>
        <img
          src={caleb}
          alt="Owner: Caleb Nichol"
          className="footer__photo"
          loading="lazy"
        />
      </div>

      <div className="footer__contactmap">
        <div className="footer__contact">
          <p>
            The Newport Group
            <br />
            Newport Beach
            <br />
            The O.C.
            <br />
            C.A.
            <br />
            92660
          </p>

          <p>
            <i className="las la-envelope"></i>{' '}
            <a href="mailto:#">contact@thenewportgroup.com</a>
          </p>

          <p>
            <i className="las la-phone"></i> 555-123-4567
          </p>
        </div>

        <img
          src={mapSmall}
          srcSet={`${mapSmall} 450w,
                  ${map} 750w`}
          sizes="(min-width: 40em) 50vw, 100vw"
          alt="Map of Newport Beach"
          className="footer__map"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
