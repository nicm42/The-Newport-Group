import React from 'react';

export default function Info() {
  return (
    <section className="info container">
      <ul className="info__list">
        <li>
          <a href="#">Real Estate</a>
        </li>
        <li>
          <a href="#">Buildings</a>
        </li>
        <li>
          <a href="#">Homes and Offices</a>
        </li>
      </ul>
      <div className="info__text">
        <p>
          The Newport Group is the foremost Real Estate Agency in the O.C.
          Looking to <a href="#">buy or sell a luxury home</a> in Newport Beach?
          We’ve got you covered. Friendly neighborhood, gated community or
          beachfront property, we have you covered.
        </p>
        <p>
          Looking for an <a href="#">office building or office space</a>? We
          have several suitable buildings on our books, whether you’d prefer to
          be a business park or by the waterfront.
        </p>
        <p>
          No homes suitable for your needs? We are always{' '}
          <a href="#">building new houses</a>, call us to see what we can do for
          you.
        </p>
      </div>
    </section>
  );
}
