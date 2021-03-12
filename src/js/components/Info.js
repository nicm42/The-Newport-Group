import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import onScreen from '../utilities/onScreen';

const Info = () => {
  const textRef = useRef();
  const listRef = useRef();
  const textIsOnScreen = onScreen(textRef);
  const listIsOnScreen = onScreen(listRef);

  const list = [
    { link: '/houses', text: 'Real Estate' },
    { link: '/buildings', text: 'Buildings' },
    { link: '/offices', text: 'Homes and Offices' },
  ];

  return (
    <section className="info container">
      <ul
        ref={listRef}
        className={`info__list ${listIsOnScreen ? 'slide' : ''}`}
      >
        {list.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div
        ref={textRef}
        className={`info__text ${textIsOnScreen ? 'slide' : ''}`}
      >
        <p>
          The Newport Group is the foremost Real Estate Agency in the O.C.
          Looking to <Link to="/houses">buy or sell a luxury home</Link> in
          Newport Beach? We’ve got you covered. Friendly neighborhood, gated
          community or beachfront property, we have you covered.
        </p>
        <p>
          Looking for an{' '}
          <Link to="/offices">office building or office space</Link>? We have
          several suitable buildings on our books, whether you’d prefer to be a
          business park or by the waterfront.
        </p>
        <p>
          No homes suitable for your needs? We are always{' '}
          <Link to="/buildings">building new houses</Link>, call us to see what
          we can do for you.
        </p>
      </div>
    </section>
  );
};

export default Info;
