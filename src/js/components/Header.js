import React from 'react';
import Nav from './Nav';
import Title from './Title';

const Header = () => {
  return (
    <header className="header">
      <a className="skip" href="#main">
        Skip to main content
      </a>
      <Nav />
      <Title />
    </header>
  );
};

export default Header;
