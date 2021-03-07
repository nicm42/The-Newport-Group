import React from 'react';

import housekeys from '/imgs/housekeys.jpg';

const BuildingsIntro = () => {
  return (
    <section className="pageIntro container">
      <h2 className="pageIntro__title">House building</h2>
      <div className="pageIntro__imagetext">
        <img src={housekeys} alt="" className="pageIntro__image" />
        <div className="pageIntro__intro">
          <h3>None of our houses right for you? We can build you one.</h3>
          <p>
            We have our own team of architects and builders, so you can be sure
            your house will be built to the highest specifications. Meetings
            between you and the designers will ensure you end up with your
            perfect house.
          </p>
          <p>Call us to set up an appointment to discuss options.</p>
        </div>
      </div>
    </section>
  );
};

export default BuildingsIntro;
