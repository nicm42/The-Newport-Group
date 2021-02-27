import React from 'react';

export default class Header extends React.Component {
  toggleMenu = () => {
    console.log('Toggling');
  };

  render() {
    return (
      <>
        <nav>
          <div className="menu-toggle" onClick={this.toggleMenu}>
            <span className="menu"></span>
          </div>
          <ul className="menu-links">
            <li className="menu-link">
              <a href="#">Home</a>
            </li>
            <li className="menu-link">
              <a href="#">Buy or sell a house</a>
            </li>
            <li className="menu-link">
              <a href="#">Build a house</a>
            </li>
            <li className="menu-link">
              <a href="#">Rent an office</a>
            </li>
          </ul>
          <div className="header__lightdark">
            <i className="las la-sun" title="Light mode"></i>
            <i className="las la-moon" title="Dark mode"></i>
          </div>
        </nav>
        <div className="header__title">
          <h1>The Newport Group</h1>
        </div>
      </>
    );
  }
}
