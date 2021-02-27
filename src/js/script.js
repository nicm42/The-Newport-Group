import React from 'react';
import { render } from 'react-dom';
import observer from './observer.js';
import menu from './menu.js';
import dark from './dark.js';
import Footer from './components/Footer';

observer();
menu();
dark();

render(<Footer />, document.querySelector('footer'));

const navLinks = document.querySelectorAll(
  'nav a[href^="/' + location.pathname.split('/')[1] + '"]'
);
const navList = document.querySelectorAll('.menu-link');
navLinks.forEach(function (link, index) {
  navList[index].classList.add('active');
});
