import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer__owner">
          <p>Owner: Caleb Nichol</p>
          <img
            src="../imgs/caleb.jpg"
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
            src="./imgs/map.png"
            alt="Map of Newport Beach"
            className="footer__map"
            loading="lazy"
          />
        </div>
      </>
    );
  }
}
