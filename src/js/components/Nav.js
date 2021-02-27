import React from 'react';
import LightDark from './LightDark';

export default function Nav() {
  const toggleMenu = () => {
    console.log('Toggling');
  };

  return (
    <nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="menu"></span>
      </div>
      <ul className="menu-links">
        <li className="menu-link">
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
