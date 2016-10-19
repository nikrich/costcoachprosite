require('styles/app.scss');
require('styles/focus.scss');

import React from 'react';
import Nav from './Nav';

class AppComponent extends React.Component {
  render() {
    return (
      <section className="focus-block">
        <Nav />
        <section className="main container">
            <h1>Cost Coach Pro</h1>
            <p>Cost Coach Pro (CCP) is a product costing and quoting software progamme which was developed with South African business conditions in mind.</p>
            <a href="#about" className="btn-default">read more</a>
        </section>
    </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
