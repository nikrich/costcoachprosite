require('styles/app.scss');
require('styles/nav.scss');

import React from 'react';

let logoImage = require('../images/logo.svg');

class AppComponent extends React.Component {
  render() {
    return (
      <header className="header">
          <div className="container">
            <section className="logo-section">
                <img src={logoImage} alt="Cost Coach Pro Logo" className="logo" width="50" />
                <h4 className="title">cost coach pro</h4>
            </section>
            <nav className="top-nav">
                <ul className="nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
          </div>
      </header>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
