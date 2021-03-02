import React from 'react';
import '/css/header-height.css';

import housekeys from '/imgs/housekeys.jpg';

const Houses = () => {
  return (
    <>
      <section className="pageHeader container">
        <h2 className="pageHeader__title">Buy or sell a house</h2>
        <div>
          <img src={housekeys} alt="" className="pageHeader__image" />
          <div className="pageHeader__intro">
            <p>We’re the top real estate agents in Newport Beach.</p>
            <h3>Buying a house?</h3>
            <p>
              We have the best properties on our books. From beach properties on
              Balboa Island, to a commuter-friendly property in Costa Mesa or a
              nature-side property in Santa Ana Heights. All properties start at
              4 bedrooms.
            </p>
            <p>
              Houses go quickly, so call us with your requirements and we’ll
              find something that fits your lifestyle.
            </p>
            <h3>Selling a house?</h3>
            <p>
              House not for you any more? With premium listings and a minimum of
              50 photos and one video, we guarantee to sell your house within 30
              days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Houses;
