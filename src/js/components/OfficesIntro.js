import React from 'react';

import housekeys from '/imgs/housekeys.jpg';

const OfficesIntro = () => {
  return (
    <section className="pageIntro container">
      <h2 className="pageIntro__title">Buy or sell a house</h2>
      <div className="pageIntro__imagetext">
        <img src={housekeys} alt="" className="pageIntro__image" />
        <div className="pageIntro__intro">
          <h3>Looking for an office?</h3>
          <p>
            Newport Beach has plenty of office space. Are you looking for
            something with a view across the ocean or space with facilities?
            We’ve got you covered. From buildings to encompass your whole
            company to co-working space and everything in between.
          </p>
          <p>Call us to discuss your requirements.</p>
        </div>
      </div>
    </section>
  );
};

export default OfficesIntro;
