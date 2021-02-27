import React from 'react';
import { render } from 'react-dom';
import observer from './observer.js';
import menu from './menu.js';
import activeNav from './activeNav.js';
import dark from './dark.js';
import Header from './components/Header';
import Footer from './components/Footer';

observer();
//menu();
activeNav();
//dark();

render(<Header />, document.querySelector('header'));
render(<Footer />, document.querySelector('footer'));
