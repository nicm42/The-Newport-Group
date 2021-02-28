import React from 'react';
import caleb from '/imgs/caleb.jpg';
import map from '/imgs/map.png';

export default function Footer() {
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
            <i className="las la-phone"></i> contact@thenewportgroup.com
          </p>

          <p>
            <i className="las la-envelope"></i> 555-123-4567
          </p>
        </div>

        <img
          src={map}
          alt="Map of Newport Beach"
          className="footer__map"
          loading="lazy"
        />
      </div>
    </footer>
  );
}
