import React from 'react';
import Nav from './Nav';
import Title from './Title';

const PagesHeader = () => {
  return (
    <header className="header short">
      <Nav />
      <Title />
    </header>
  );
};

export default PagesHeader;
