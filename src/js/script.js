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
