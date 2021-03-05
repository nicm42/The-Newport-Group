import React from 'react';
import Nav from './Nav';

const PagesHeader = () => {
  return (
    <header className="header short">
      <Nav />
      <div className="header__title">
        <h1>The Newport Group</h1>
      </div>
    </header>
  );
};

export default PagesHeader;
