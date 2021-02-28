import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Houses from './components/Houses';
import Buildings from './components/Buildings';
import Offices from './components/Offices';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/houses" component={Houses} />
        <Route path="/buildings" component={Buildings} />
        <Route path="/offices" component={Offices} />
      </Switch>
      <Footer />
    </Router>
  );
}

render(<App />, document.querySelector('.app'));
