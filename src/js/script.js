import observer from './observer.js';
import menu from './menu.js';
import dark from './dark.js';

observer();
menu();
dark();

import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

let App = document.querySelector('.test');

ReactDOM.render(<HelloMessage />, App);
