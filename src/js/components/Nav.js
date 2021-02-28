import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <li className="menu-link active">Home</li>
        </Link>
        <Link to="/houses">
          <li className="menu-link">Buy or sell a house</li>
        </Link>
        <Link to="/buildings">
          <li className="menu-link">Build a house</li>
        </Link>
        <Link to="/offices">
          <li className="menu-link">Rent an office</li>
        </Link>
      </ul>
      <LightDark />
    </nav>
  );
}
