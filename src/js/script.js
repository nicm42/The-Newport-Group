import React from 'react';
import { render } from 'react-dom';
import observer from './observer.js';
import activeNav from './activeNav.js';
import Header from './components/Header';
import Footer from './components/Footer';

observer();
activeNav();

render(<Header />, document.querySelector('header'));
render(<Footer />, document.querySelector('footer'));
