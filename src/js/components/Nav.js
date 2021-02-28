import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LightDark from './LightDark';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="menu-toggle" onClick={toggle}>
        <span className={isOpen ? 'menu cross' : 'menu'}></span>
      </div>
      <ul className={isOpen ? 'menu-links show' : 'menu-links'}>
        <li>
          <NavLink exact to="/" activeClassName="active" onClick={toggle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/houses" activeClassName="active" onClick={toggle}>
            Buy or sell a house
          </NavLink>
        </li>
        <li>
          <NavLink to="/buildings" activeClassName="active" onClick={toggle}>
            Build a house
          </NavLink>
        </li>
        <li>
          <NavLink to="/offices" activeClassName="active" onClick={toggle}>
            Rent an office
          </NavLink>
        </li>
      </ul>
      <LightDark />
    </nav>
  );
}
