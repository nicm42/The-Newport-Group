import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './utilities/ScrollToTop';

import Home from './pages/Home';
import Houses from './pages/Houses';
import Buildings from './pages/Buildings';
import Offices from './pages/Offices';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/houses" component={Houses} />
        <Route path="/buildings" component={Buildings} />
        <Route path="/offices" component={Offices} />
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('.app'));
