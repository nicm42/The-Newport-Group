import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <div className="header__title">
        <h1>The Newport Group</h1>
      </div>
    </header>
  );
};

export default Header;
