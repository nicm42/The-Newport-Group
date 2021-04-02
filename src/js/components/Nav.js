import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LightDark from './LightDark';

const Nav = () => {
  //Set the nav to open or closed on mobile
  //(won't do anything on desktop as menu-toggle is hidden)
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //We want to hide when nothing on the menu has focus
  //But every time we tab to a new link, the previous one loses focus and will hide the menu
  //So we tell it to show the menu if a link has focus
  //Which means hide will only run if no link has focus
  //(Technically it briefly runs between tabs, but it's so quick we don't see it)
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

  //Close nav when escape key is pressed
  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', closeMenu);
    return () => {
      window.removeEventListener('keydown', closeMenu);
    };
  }, []);

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
      <button className="menu-toggle" onClick={toggle} title="menu">
        <span
          className={`menu ${isOpen ? 'cross' : ''}`}
          data-testid="menuToggle"
        ></span>
      </button>
      <ul className={`menu-links ${isOpen ? 'show' : ''}`}>
        {navigation.map((nav, index) => (
          <li key={index}>
            <NavLink
              exact
              to={nav.link}
              activeClassName="active"
              onClick={hide}
              onBlur={hide}
              onFocus={show}
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

Nav.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default Nav;
