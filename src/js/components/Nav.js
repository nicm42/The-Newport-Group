import React, { useState, useRef, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LightDark from './LightDark';

const Nav = () => {
  //Set the nav to open or closed on mobile
  //(won't do anything on desktop as menu-toggle is hidden)
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //Find height of nav and set the margin-top on body to be that
  const targetRef = useRef();
  useLayoutEffect(() => {
    document.body.style.marginTop = targetRef.current.offsetHeight + 'px';
  });

  const navigation = [
    { link: '/', text: 'Home' },
    { link: '/houses', text: 'Buy or sell a house' },
    { link: '/buildings', text: 'Build a house' },
    { link: '/offices', text: 'Rent an office' },
  ];

  return (
    <nav ref={targetRef}>
      <button className="menu-toggle" onClick={toggle}>
        <span className={isOpen ? 'menu cross' : 'menu'}></span>
      </button>
      <ul className={isOpen ? 'menu-links show' : 'menu-links'}>
        {navigation.map((nav, index) => (
          <li key={index}>
            <NavLink
              exact
              to={nav.link}
              activeClassName="active"
              onClick={toggle}
            >
              {nav.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <LightDark />
    </nav>
  );
};

export default Nav;
