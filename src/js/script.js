import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import observer from './observer.js';
//import activeNav from './activeNav.js';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Houses from './components/Houses';
import Buildings from './components/Buildings';
import Offices from './components/Offices';

//observer();
//activeNav();

//render(<Header />, document.querySelector('header'));
//render(<Footer />, document.querySelector('footer'));

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/houses" exact component={Houses} />
        <Route path="/buildings" exact component={Buildings} />
        <Route path="/offices" exact component={Offices} />
      </Switch>
      <Footer />
    </Router>
  );
}

render(<App />, document.querySelector('.app'));
