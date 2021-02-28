import React, { useState } from 'react';
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
        <li className="menu-link active">
          <a href="#">Home</a>
        </li>
        <li className="menu-link">
          <a href="#">Buy or sell a house</a>
        </li>
        <li className="menu-link">
          <a href="#">Build a house</a>
        </li>
        <li className="menu-link">
          <a href="#">Rent an office</a>
        </li>
      </ul>
      <LightDark />
    </nav>
  );
}
