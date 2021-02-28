import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import observer from './observer.js';
//import activeNav from './activeNav.js';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

//observer();
//activeNav();

//render(<Header />, document.querySelector('header'));
//render(<Footer />, document.querySelector('footer'));

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

render(<App />, document.querySelector('.app'));
